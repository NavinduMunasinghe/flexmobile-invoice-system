export default function RecentInvoices() {

    const invoices = [
        {
            invoiceNo: "INV-0001",
            customer: "Kasun Perera",
            amount: 4800,
            status: "Paid"
        },
        {
            invoiceNo: "INV-0002",
            customer: "Nimal Silva",
            amount: 12500,
            status: "Paid"
        },
        {
            invoiceNo: "INV-0003",
            customer: "Amal Fernando",
            amount: 7500,
            status: "Pending"
        }
    ];

    return (

        <div className="bg-white rounded-2xl shadow-md p-6">

            <div className="flex justify-between items-center mb-5">

                <h2 className="text-xl font-bold">
                    Recent Invoices
                </h2>

                <button className="text-blue-600 hover:text-blue-700 text-sm font-semibold">
                    View All
                </button>

            </div>

            <table className="w-full">

                <thead>

                    <tr className="border-b">

                        <th className="text-left py-3">Invoice</th>
                        <th className="text-left py-3">Customer</th>
                        <th className="text-right py-3">Amount</th>
                        <th className="text-center py-3">Status</th>

                    </tr>

                </thead>

                <tbody>

                    {invoices.map((invoice) => (

                        <tr
                            key={invoice.invoiceNo}
                            className="border-b hover:bg-gray-50"
                        >

                            <td className="py-4 font-medium">
                                {invoice.invoiceNo}
                            </td>

                            <td>
                                {invoice.customer}
                            </td>

                            <td className="text-right">
                                Rs. {invoice.amount.toLocaleString()}
                            </td>

                            <td className="text-center">

                                <span
                                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                                        invoice.status === "Paid"
                                            ? "bg-green-100 text-green-700"
                                            : "bg-yellow-100 text-yellow-700"
                                    }`}
                                >
                                    {invoice.status}
                                </span>

                            </td>

                        </tr>

                    ))}

                </tbody>

            </table>

        </div>

    );

}