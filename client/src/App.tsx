import { useEffect } from "react";
import { Toaster } from "sonner";
import NotFound from "@/pages/NotFound";
import { Route, Switch, useLocation } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
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
import ConnectChecklist from "./pages/ConnectChecklist";
import ConnectRoleProposal from "./pages/ConnectRoleProposal";

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
      <Route path="/solutions/connect/checklist" component={ConnectChecklist} />
      <Route path="/solutions/connect/:role" component={ConnectRoleProposal} />
      <Route path="/solutions/:slug" component={SolutionPage} />
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

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <Toaster />
        <ScrollToTop />
        <Router />
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
