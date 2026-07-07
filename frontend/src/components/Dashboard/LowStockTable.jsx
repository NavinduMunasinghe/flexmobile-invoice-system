export default function LowStockTable() {

    const products = [
        {
            code: "P001",
            name: "Soundcore R50i",
            stock: 3
        },
        {
            code: "P002",
            name: "Soundcore R60i",
            stock: 5
        },
        {
            code: "P003",
            name: "Anker Charger 20W",
            stock: 2
        },
        {
            code: "P004",
            name: "USB-C Cable",
            stock: 4
        }
    ];

    return (

        <div className="bg-white rounded-2xl shadow-md p-6">

            <div className="flex justify-between items-center mb-5">

                <h2 className="text-xl font-bold">
                    Low Stock Products
                </h2>

                <button className="text-blue-600 hover:text-blue-700 text-sm font-semibold">
                    View All
                </button>

            </div>

            <table className="w-full">

                <thead>

                    <tr className="border-b">

                        <th className="text-left py-3">Code</th>
                        <th className="text-left py-3">Product</th>
                        <th className="text-center py-3">Stock</th>
                        <th className="text-center py-3">Status</th>

                    </tr>

                </thead>

                <tbody>

                    {products.map((product) => (

                        <tr
                            key={product.code}
                            className="border-b hover:bg-gray-50"
                        >

                            <td className="py-4">
                                {product.code}
                            </td>

                            <td>
                                {product.name}
                            </td>

                            <td className="text-center font-semibold">
                                {product.stock}
                            </td>

                            <td className="text-center">

                                <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-medium">
                                    Low Stock
                                </span>

                            </td>

                        </tr>

                    ))}

                </tbody>

            </table>

        </div>

    );

}