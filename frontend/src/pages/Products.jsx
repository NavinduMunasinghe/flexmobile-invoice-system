import { useEffect, useState } from "react";
import ProductForm from "../components/ProductForm";
import { getProducts } from "../services/productService";

export default function Products() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        loadProducts();
    }, []);

    const loadProducts = async () => {
        try {
            const response = await getProducts();
            setProducts(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="space-y-6">

            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold">
                    Products
                </h1>

                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                    + Add Product
                </button>
            </div>

            <input
                type="text"
                placeholder="Search products..."
                className="w-full border rounded-lg p-3"
            />

            {/* Updated */}
            <ProductForm onProductSaved={loadProducts} />

            <div className="bg-white rounded-xl shadow overflow-hidden">

                <table className="w-full">

                    <thead className="bg-slate-200">
                        <tr>
                            <th className="p-3 text-left">Code</th>
                            <th className="p-3 text-left">Name</th>
                            <th className="p-3 text-left">Brand</th>
                            <th className="p-3 text-left">Model</th>
                            <th className="p-3 text-right">Price</th>
                        </tr>
                    </thead>

                    <tbody>

                        {products.map(product => (

                            <tr
                                key={product.productId}
                                className="border-t"
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
                                    Rs. {product.sellingPrice}
                                </td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            </div>

        </div>
    );
}