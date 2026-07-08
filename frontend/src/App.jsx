import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import Customers from "./pages/Customers";
import Serials from "./pages/Serials";
import NewInvoice from "./pages/NewInvoice";
import Invoices from "./pages/Invoices";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/products" element={<Products />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/serials" element={<Serials />} />
          <Route path="/invoice/new" element={<NewInvoice />} />0
          <Route path="/invoices" element={<Invoices />} />
        </Route>
      </Routes>
      <ToastContainer
    position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        theme="colored"
    />
    </BrowserRouter>
  );
}

export default App;