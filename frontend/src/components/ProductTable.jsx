export default function ProductTable({
    products,
    onEdit,
    onDelete
}) {

    return (

        <div className="bg-white rounded-xl shadow overflow-hidden">

            <table className="w-full">

                <thead className="bg-slate-200">

                    <tr>

                        <th className="p-3 text-left">Code</th>
                        <th className="p-3 text-left">Name</th>
                        <th className="p-3 text-left">Brand</th>
                        <th className="p-3 text-left">Model</th>
                        <th className="p-3 text-right">Price</th>
                        <th className="p-3 text-center">Status</th>
                        <th className="p-3 text-center">Actions</th>

                    </tr>

                </thead>

                <tbody>

                    {products.length === 0 ? (

                        <tr>

                            <td
                                colSpan="7"
                                className="text-center p-6 text-gray-500"
                            >
                                No Products Found
                            </td>

                        </tr>

                    ) : (

                        products.map((product) => (

                            <tr
                                key={product.productId}
                                className="border-t hover:bg-gray-50"
                            >

                                <td className="p-3">
                                    {product.productCode}
                                </td>

                                <td className="p-3">
                                    {product.productName}
                                </td>

                                <td className="p-3">
                                    {product.brand}
                                </td>

                                <td className="p-3">
                                    {product.model}
                                </td>

                                <td className="p-3 text-right">
                                    Rs. {Number(product.sellingPrice).toLocaleString()}
                                </td>

                                <td className="p-3 text-center">

                                    {product.status ? (

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
                                        onClick={() => onEdit(product)}
                                        className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded-lg mr-2 transition"
                                    >
                                        Edit
                                    </button>

                                    <button
                                        onClick={() => onDelete(product.productId)}
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

    );

}