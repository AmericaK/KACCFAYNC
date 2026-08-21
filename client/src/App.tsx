/**
 * Design reminder — 지역을 잇는 공식 문장:
 * all routes share a public-facing civic editorial shell and four concise primary destinations.
 */
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import About from "./pages/About";
import News from "./pages/News";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

function Router() {
  return <Switch><Route path="/" component={About} /><Route path="/about" component={About} /><Route path="/news" component={News} /><Route path="/gallery" component={Gallery} /><Route path="/contact" component={Contact} /><Route component={NotFound} /></Switch>;
}

export default function App() {
  return <ErrorBoundary><ThemeProvider defaultTheme="light"><TooltipProvider><Toaster /><Router /></TooltipProvider></ThemeProvider></ErrorBoundary>;
}

