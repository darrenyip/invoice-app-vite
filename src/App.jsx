import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import NavBar from "./components/NavBar";
import InvoiceDetail from "./pages/InvoiceDetail";
import InvoiceHome from "./pages/InvoiceHome";
import Edit from "./components/edit";
import "./App.css";
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route index path="/" element={<InvoiceHome />} />
        <Route path="/:id" element={<InvoiceDetail />}>
          <Route path="edit" element={<Edit />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
