import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import NavBar from "./components/NavBar";
import InvoiceDetail from "./pages/InvoiceDetail";
import "./App.css";
import InvoiceHome from "./pages/InvoiceHome";
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<InvoiceHome />} />
        <Route path="/:id" element={<InvoiceDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
