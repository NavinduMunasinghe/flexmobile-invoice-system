export default function CustomerTable({
    customers,
    onEdit,
    onDelete
}) {

    return (

        <div className="bg-white rounded-xl shadow overflow-hidden">

            <div className="overflow-x-auto">

                <table className="min-w-full">

                    <thead className="bg-slate-200">

                        <tr>

                            <th className="p-3 text-left">Code</th>
                            <th className="p-3 text-left">Full Name</th>
                            <th className="p-3 text-left">Mobile</th>
                            <th className="p-3 text-left">Email</th>
                            <th className="p-3 text-center">Status</th>
                            <th className="p-3 text-center">Actions</th>

                        </tr>

                    </thead>

                    <tbody>

                        {customers.length === 0 ? (

                            <tr>

                                <td
                                    colSpan="6"
                                    className="text-center p-6 text-gray-500"
                                >
                                    No Customers Found
                                </td>

                            </tr>

                        ) : (

                            customers.map((customer) => (

                                <tr
                                    key={customer.customerId}
                                    className="border-t hover:bg-gray-50"
                                >

                                    <td className="p-3">
                                        {customer.customerCode}
                                    </td>

                                    <td className="p-3">
                                        {customer.fullName}
                                    </td>

                                    <td className="p-3">
                                        {customer.mobile}
                                    </td>

                                    <td className="p-3">
                                        {customer.email || "-"}
                                    </td>

                                    <td className="p-3 text-center">

                                        {customer.status ? (

                                            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                                                Active
                                            </span>

                                        ) : (

                                            <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-medium">
                                                Inactive
                                            </span>

                                        )}

                                    </td>

                                    <td className="p-3 text-center">

                                        <button
                                            onClick={() => onEdit(customer)}
                                            className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded-lg mr-2 transition"
                                        >
                                            Edit
                                        </button>

                                        <button
                                            onClick={() => onDelete(customer.customerId)}
                                            className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-lg transition"
                                        >
                                            Delete
                                        </button>

                                    </td>

                                </tr>

                            ))

                        )}

                    </tbody>

                </table>

            </div>

        </div>

    );

}