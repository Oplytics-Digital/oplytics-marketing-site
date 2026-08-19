import { useEffect } from "react";
import { Toaster } from "sonner";
import NotFound from "@/pages/NotFound";
import { Route, Switch, useLocation } from "wouter";
import { ErrorBoundary } from "@pablo2410/shared-ui/components";
import { AlertTriangle, RotateCcw } from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import SolutionPage from "./pages/SolutionPage";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import WhyUs from "./pages/WhyUs";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Status from "./pages/Status";
import Login from "./pages/Login";
import About from "./pages/About";
import Resources from "./pages/Resources";
import ResourceArticle from "./pages/ResourceArticle";
import OpsCI from "./pages/for/OpsCI";

/** Scroll to top on every route change */
function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [location]);
  return null;
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/solutions" component={Home} />
      <Route path="/solutions/:slug" component={SolutionPage} />
      <Route path="/for/ops-ci" component={OpsCI} />
      <Route path="/pricing" component={Pricing} />
      <Route path="/contact" component={Contact} />
      <Route path="/why-us" component={WhyUs} />
      <Route path="/about" component={About} />
      <Route path="/resources" component={Resources} />
      <Route path="/resources/:slug" component={ResourceArticle} />
      <Route path="/privacy" component={Privacy} />
      <Route path="/terms" component={Terms} />
      <Route path="/status" component={Status} />
      <Route path="/login" component={Login} />
      <Route path="/404" component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

const errorFallback = (
  <div className="flex items-center justify-center min-h-screen p-8 bg-background">
    <div className="flex flex-col items-center w-full max-w-2xl p-8">
      <AlertTriangle size={48} className="text-destructive mb-6 flex-shrink-0" />
      <h2 className="text-xl mb-4">An unexpected error occurred.</h2>
      <button
        onClick={() => window.location.reload()}
        className={cn(
          "flex items-center gap-2 px-4 py-2 rounded-lg",
          "bg-primary text-primary-foreground",
          "hover:opacity-90 cursor-pointer"
        )}
      >
        <RotateCcw size={16} />
        Reload Page
      </button>
    </div>
  </div>
);

function App() {
  return (
    <ErrorBoundary fallback={errorFallback}>
      <ThemeProvider defaultTheme="dark">
        <Toaster />
        <ScrollToTop />
        <Router />
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
