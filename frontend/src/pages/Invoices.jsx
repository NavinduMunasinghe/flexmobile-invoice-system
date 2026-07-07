export default function NewInvoice() {
    return (
        <div className="space-y-6">

            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold">New Invoice</h1>
                    <p className="text-gray-500">
                        Create a new customer invoice
                    </p>
                </div>

                <button className="bg-blue-600 text-white px-5 py-3 rounded-lg">
                    Save Invoice
                </button>
            </div>

            <div className="bg-white rounded-xl shadow p-6">

                <h2 className="text-xl font-semibold mb-4">
                    Customer
                </h2>

                <input
                    type="text"
                    placeholder="Search customer..."
                    className="w-full border rounded-lg p-3"
                />

            </div>

            <div className="bg-white rounded-xl shadow p-6">

                <h2 className="text-xl font-semibold mb-4">
                    Invoice Items
                </h2>

                <table className="w-full border">

                    <thead className="bg-gray-100">

                        <tr>

                            <th className="p-3 border">Product</th>

                            <th className="p-3 border">Serial Number</th>

                            <th className="p-3 border">Qty</th>

                            <th className="p-3 border">Price</th>

                            <th className="p-3 border">Total</th>

                        </tr>

                    </thead>

                    <tbody>

                        <tr>

                            <td className="p-3 border">-</td>

                            <td className="p-3 border">-</td>

                            <td className="p-3 border">1</td>

                            <td className="p-3 border">0.00</td>

                            <td className="p-3 border">0.00</td>

                        </tr>

                    </tbody>

                </table>

            </div>

            <div className="bg-white rounded-xl shadow p-6">

                <div className="flex justify-between text-lg">
                    <span>Grand Total</span>
                    <span className="font-bold">Rs. 0.00</span>
                </div>

            </div>

        </div>
    );
}