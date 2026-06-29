import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Legal } from "./pages/Legal";
import { Terms } from "./pages/Terms";
import { ScrollManager } from "./components/ScrollManager";
import { ContactProvider } from "./components/contact/ContactContext";

export default function App() {
  return (
    <ContactProvider>
      <ScrollManager />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/legal" element={<Legal />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </ContactProvider>
  );
}
