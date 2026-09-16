import { lazy, Suspense } from "react";
import { DarkModeProvider } from "./contexts/DarkModeContext";
import Navigation from "./components/section/Navigation";
import About from "./components/section/About";
import "./App.css";
import "./MagicShopFinalPolish.css";
import "./portfolioFreelance.css";

const Contact = lazy(() => import("./pages/Contact"));
const Projects = lazy(() => import("./components/section/Projects"));
const Skills = lazy(() => import("./components/section/Skills"));
const Services = lazy(() => import("./components/section/Services"));
const Experience = lazy(() => import("./components/section/Experience"));
const Certifications = lazy(() => import("./components/section/Certifications"));
const Footer = lazy(() => import("./components/Footer"));

const SectionLoader = ({ height = "h-64" }: { height?: string }) => <div className={`${height} flex items-center justify-center`} style={{background:"transparent",color:"var(--site-text, #5b426e)"}}>Loading...</div>;

function HomePage() { return <><About/><Suspense fallback={<SectionLoader height="h-screen"/>}><Projects/></Suspense><Suspense fallback={<SectionLoader height="h-screen"/>}><Skills/></Suspense><Suspense fallback={<SectionLoader height="h-64"/>}><Services/></Suspense><Suspense fallback={<SectionLoader height="h-screen"/>}><Experience/></Suspense><Suspense fallback={<SectionLoader height="h-64"/>}><Certifications/></Suspense><Suspense fallback={<SectionLoader height="h-64"/>}><Contact/></Suspense></>; }
function AppContent(){return <><Navigation/><div className="app transition-colors duration-300" style={{background:"transparent",backgroundColor:"transparent"}}><a href="#main-content" className="skip-link">Skip to main content</a><main id="main-content" className="main-content" style={{background:"transparent",backgroundColor:"transparent"}}><HomePage/></main><Suspense fallback={<SectionLoader height="h-32"/>}><Footer/></Suspense></div></>}
function App(){return <DarkModeProvider><AppContent/></DarkModeProvider>}
export default App;
