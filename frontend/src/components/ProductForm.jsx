import { useState } from "react";
import { saveProduct } from "../services/productService";

export default function ProductForm({ onProductSaved }) {

    const [product, setProduct] = useState({
        productCode: "",
        productName: "",
        brand: "",
        model: "",
        sellingPrice: "",
        warrantyMonths: "",
        barcode: "",
        status: true
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        setProduct({
            ...product,
            [name]: type === "checkbox" ? checked : value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {

            await saveProduct(product);

            if (onProductSaved) {
                await onProductSaved();
            }

            alert("Product Saved Successfully");

            setProduct({
                productCode: "",
                productName: "",
                brand: "",
                model: "",
                sellingPrice: "",
                warrantyMonths: "",
                barcode: "",
                status: true
            });

        } catch (error) {
            console.error(error);
            alert("Error Saving Product");
        }
    };

    return (
        <div className="bg-white rounded-xl shadow p-6">

            <h2 className="text-2xl font-bold mb-6">
                Add Product
            </h2>

            <form
                onSubmit={handleSubmit}
                className="grid grid-cols-2 gap-4"
            >

                <input
                    type="text"
                    name="productCode"
                    placeholder="Product Code"
                    value={product.productCode}
                    onChange={handleChange}
                    className="border rounded-lg p-3"
                    required
                />

                <input
                    type="text"
                    name="productName"
                    placeholder="Product Name"
                    value={product.productName}
                    onChange={handleChange}
                    className="border rounded-lg p-3"
                    required
                />

                <input
                    type="text"
                    name="brand"
                    placeholder="Brand"
                    value={product.brand}
                    onChange={handleChange}
                    className="border rounded-lg p-3"
                    required
                />

                <input
                    type="text"
                    name="model"
                    placeholder="Model"
                    value={product.model}
                    onChange={handleChange}
                    className="border rounded-lg p-3"
                    required
                />

                <input
                    type="number"
                    step="0.01"
                    name="sellingPrice"
                    placeholder="Selling Price"
                    value={product.sellingPrice}
                    onChange={handleChange}
                    className="border rounded-lg p-3"
                    required
                />

                <input
                    type="number"
                    name="warrantyMonths"
                    placeholder="Warranty (Months)"
                    value={product.warrantyMonths}
                    onChange={handleChange}
                    className="border rounded-lg p-3"
                    required
                />

                <input
                    type="text"
                    name="barcode"
                    placeholder="Barcode"
                    value={product.barcode}
                    onChange={handleChange}
                    className="border rounded-lg p-3"
                />

                <label className="flex items-center gap-3">

                    <input
                        type="checkbox"
                        name="status"
                        checked={product.status}
                        onChange={handleChange}
                    />

                    Active Product

                </label>

                <div className="col-span-2">

                    <button
                        type="submit"
                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg"
                    >
                        Save Product
                    </button>

                </div>

            </form>

        </div>
    );
}