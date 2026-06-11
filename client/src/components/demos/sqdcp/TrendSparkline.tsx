/*
 * TrendSparkline — self-contained port of the real SQDCP sparkline
 * (oplytics-subdomains/sqdcp/client/src/components/TrendSparkline.tsx).
 * The only change is the latest-point dot stroke uses a literal card colour
 * instead of the `var(--card)` token.
 */
interface TrendSparklineProps {
  data: number[];
  color?: string;
  width?: number;
  height?: number;
}

export default function TrendSparkline({
  data,
  color = '#3b82f6',
  width = 56,
  height = 18,
}: TrendSparklineProps) {
  if (data.length < 2) {
    return (
      <div style={{ width, height }} className="flex items-center justify-center">
        <span className="text-[10px]" style={{ color: '#596475' }}>No trend</span>
      </div>
    );
  }

  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min || 1;
  const padding = 2;

  const points = data.map((val, i) => {
    const x = padding + (i / (data.length - 1)) * (width - padding * 2);
    const y = height - padding - ((val - min) / range) * (height - padding * 2);
    return `${x},${y}`;
  });

  const lastX = padding + (width - padding * 2);
  const areaPath = `M ${padding},${height} L ${points.map(p => p).join(' L ')} L ${lastX},${height} Z`;
  const gradId = `sparkGrad-${color.replace('#', '')}`;

  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} className="overflow-visible">
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity={0.2} />
          <stop offset="100%" stopColor={color} stopOpacity={0} />
        </linearGradient>
      </defs>
      <path d={areaPath} fill={`url(#${gradId})`} />
      <polyline
        points={points.join(' ')}
        fill="none"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx={lastX}
        cy={height - padding - ((data[data.length - 1] - min) / range) * (height - padding * 2)}
        r={2.5}
        fill={color}
        stroke="#1E2738"
        strokeWidth={1.5}
      />
    </svg>
  );
}
