import { useEffect, useState } from "react";
import ProductForm from "../components/ProductForm";
import {
    getProducts,
    deleteProduct
} from "../services/productService";

export default function Products() {

    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isEditing, setIsEditing] = useState(false);

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

    const handleDelete = async (id) => {

        const confirmDelete = window.confirm(
            "Are you sure you want to delete this product?"
        );

        if (!confirmDelete) return;

        try {

            await deleteProduct(id);

            alert("Product Deleted Successfully");

            loadProducts();

        } catch (error) {
            console.error(error);
            alert("Error deleting product");
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

            <ProductForm
                onProductSaved={loadProducts}
                selectedProduct={selectedProduct}
                isEditing={isEditing}
                setIsEditing={setIsEditing}
            />

            <div className="bg-white rounded-xl shadow overflow-hidden">

                <table className="w-full">

                    <thead className="bg-slate-200">

                        <tr>

                            <th className="p-3 text-left">Code</th>
                            <th className="p-3 text-left">Name</th>
                            <th className="p-3 text-left">Brand</th>
                            <th className="p-3 text-left">Model</th>
                            <th className="p-3 text-right">Price</th>
                            <th className="p-3 text-center">Actions</th>

                        </tr>

                    </thead>

                    <tbody>

                        {products.length === 0 ? (

                            <tr>

                                <td
                                    colSpan="6"
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
                                        Rs. {product.sellingPrice}
                                    </td>

                                    <td className="p-3 text-center">

                                        <button
                                            onClick={() => {
                                                setSelectedProduct(product);
                                                setIsEditing(true);
                                            }}
                                            className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded mr-2"
                                        >
                                            Edit
                                        </button>

                                        <button
                                            onClick={() => handleDelete(product.productId)}
                                            className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded"
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