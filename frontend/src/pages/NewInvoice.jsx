import InvoiceItemTable from "../components/InvoiceItemTable";
import CustomerSelect from "../components/CustomerSelect";
export default function NewInvoice() {
    return (
      <div className="space-y-6">
  
        <div>
          <h1 className="text-3xl font-bold">New Invoice</h1>
          <p className="text-gray-500">
            Create a new customer invoice
          </p>
        </div>
  
        <div className="grid grid-cols-2 gap-6">
  
          <div className="bg-white rounded-xl shadow p-5">
            <h2 className="text-xl font-semibold mb-4">
              Customer
            </h2>
  
            <CustomerSelect />
          </div>
  
          <div className="bg-white rounded-xl shadow p-5">
            <h2 className="text-xl font-semibold mb-4">
              Invoice Details
            </h2>
  
            <div className="space-y-3">
  
              <input
                className="w-full border rounded-lg p-3"
                placeholder="Invoice Number"
              />
  
              <input
                className="w-full border rounded-lg p-3"
                placeholder="Invoice Date"
              />
  
            </div>
  
          </div>
  
        </div>
  
        <h2 className="text-xl font-semibold mb-4">
            Invoice Items
        </h2>

        <InvoiceItemTable />

        <div className="bg-white rounded-xl shadow p-6">

            <div className="space-y-2">

                <div className="flex justify-between">
                  <span>Sub Total</span>
                  <span>Rs. 0.00</span>
                </div>

                <div className="flex justify-between">
                  <span>Discount</span>
                  <span>Rs. 0.00</span>
                </div>

                 <hr />

                <div className="flex justify-between text-2xl font-bold">
                  <span>Grand Total</span>
                  <span>Rs. 0.00</span>
                </div>

            </div>

        </div>
  
      </div>
    );
  }