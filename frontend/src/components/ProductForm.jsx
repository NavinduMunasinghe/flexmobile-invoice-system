import { useState, useEffect } from "react";
import { saveProduct, updateProduct } from "../services/productService";

export default function ProductForm({
    onProductSaved,
    selectedProduct,
    isEditing,
    setIsEditing
}) {

    const emptyProduct = {
        productCode: "",
        productName: "",
        brand: "",
        model: "",
        sellingPrice: "",
        warrantyMonths: "",
        barcode: "",
        status: true
    };

    const [product, setProduct] = useState(emptyProduct);

    useEffect(() => {
        if (selectedProduct) {
            setProduct({
                productId: selectedProduct.productId,
                productCode: selectedProduct.productCode,
                productName: selectedProduct.productName,
                brand: selectedProduct.brand,
                model: selectedProduct.model,
                sellingPrice: selectedProduct.sellingPrice,
                warrantyMonths: selectedProduct.warrantyMonths,
                barcode: selectedProduct.barcode || "",
                status: selectedProduct.status
            });
        }
    }, [selectedProduct]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        setProduct((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {

            if (isEditing) {
                await updateProduct(product.productId, product);
                alert("Product Updated Successfully");
            } else {
                await saveProduct(product);
                alert("Product Saved Successfully");
            }

            if (onProductSaved) {
                await onProductSaved();
            }

            setProduct(emptyProduct);
            setIsEditing(false);

        } catch (error) {
            console.error(error);
            alert("Error Saving Product");
        }
    };

    return (
        <div className="bg-white rounded-xl shadow p-6">

            <h2 className="text-2xl font-bold mb-6">
                {isEditing ? "Edit Product" : "Add Product"}
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

                <div className="col-span-2 flex gap-3">

                    <button
                        type="submit"
                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg"
                    >
                        {isEditing ? "Update Product" : "Save Product"}
                    </button>

                    {isEditing && (
                        <button
                            type="button"
                            onClick={() => {
                                setProduct(emptyProduct);
                                setIsEditing(false);
                            }}
                            className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-3 rounded-lg"
                        >
                            Cancel
                        </button>
                    )}

                </div>

            </form>

        </div>
    );
}