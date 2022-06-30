import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import NavBar from "./components/NavBar";
import InvoiceDetail from "./pages/InvoiceDetail";
import "./App.css";
import InvoiceHome from "./pages/InvoiceHome";
import Edit from "./components/edit";
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
