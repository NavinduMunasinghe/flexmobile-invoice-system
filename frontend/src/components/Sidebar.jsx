import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="w-64 bg-slate-900 text-white min-h-screen">
      <div className="text-2xl font-bold p-6 border-b border-slate-700">
        FLEX ERP
      </div>

      <nav className="p-4 space-y-2">

        <Link
          to="/"
          className="block px-4 py-3 rounded-lg hover:bg-slate-700"
        >
          Dashboard
        </Link>

        <Link
          to="/products"
          className="block px-4 py-3 rounded-lg hover:bg-slate-700"
        >
          Products
        </Link>

        <Link
          to="/customers"
          className="block px-4 py-3 rounded-lg hover:bg-slate-700"
        >
          Customers
        </Link>

        <Link
          to="/serials"
          className="block px-4 py-3 rounded-lg hover:bg-slate-700"
        >
          Serials
        </Link>

        <Link
          to="/invoice/new"
          className="block px-4 py-3 rounded-lg hover:bg-slate-700"
        >
          New Invoice
        </Link>

        <Link
          to="/invoices"
          className="block px-4 py-3 rounded-lg hover:bg-slate-700"
        >
          Invoice History
        </Link>

      </nav>
    </div>
  );
}