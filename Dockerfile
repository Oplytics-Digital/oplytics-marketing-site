# syntax=docker/dockerfile:1
FROM node:20-slim AS base
RUN corepack enable
WORKDIR /app

# ---- install all deps, including dev deps needed to build ----
FROM base AS deps
COPY package.json pnpm-lock.yaml ./
COPY patches ./patches
RUN pnpm install --frozen-lockfile

# ---- build client (vite) + server bundle (esbuild) ----
FROM deps AS build
COPY . .
RUN pnpm run build

# ---- production-only deps ----
FROM base AS prod-deps
COPY package.json pnpm-lock.yaml ./
COPY patches ./patches
RUN pnpm install --frozen-lockfile --prod

# ---- final runtime image ----
FROM base AS runner
ENV NODE_ENV=production
ENV PORT=3000
COPY --from=prod-deps /app/node_modules ./node_modules
COPY --from=build /app/dist ./dist
COPY --from=build /app/package.json ./package.json

EXPOSE 3000
HEALTHCHECK --interval=30s --timeout=5s --start-period=15s --retries=3 \
  CMD node -e "fetch('http://127.0.0.1:'+(process.env.PORT||3000)+'/').then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))"

CMD ["node", "dist/index.js"]
