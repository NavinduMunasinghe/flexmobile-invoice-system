import { useState, useEffect } from "react";
import { saveProduct, updateProduct } from "../services/productService";
import { toast } from "react-toastify";

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

            // ===========================
            // Validation
            // ===========================

            if (product.productCode.trim() === "") {
                toast.error("Product Code is required.");
                return;
            }

            if (product.productName.trim() === "") {
                toast.error("Product Name is required.");
                return;
            }

            if (product.brand.trim() === "") {
                toast.error("Brand is required.");
                return;
            }

            if (product.model.trim() === "") {
                toast.error("Model is required.");
                return;
            }

            if (Number(product.sellingPrice) <= 0) {
                toast.error("Selling Price must be greater than 0.");
                return;
            }

            if (Number(product.warrantyMonths) < 0) {
                toast.error("Warranty cannot be negative.");
                return;
            }

            if (isEditing) {
                await updateProduct(product.productId, product);
                toast.success("Product saved successfully!");
            } else {
                await saveProduct(product);
                toast.success("Product updated successfully!");
            }

            if (onProductSaved) {
                await onProductSaved();
            }

            setProduct(emptyProduct);
            setIsEditing(false);

        } catch (error) {
            console.error(error);
            toast.error(
                error.response?.data?.message ||
                error.message ||
                "Failed to save product."
            );
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
                    className={`px-6 py-3 rounded-lg text-white font-medium ${
                        isEditing
                            ? "bg-yellow-500 hover:bg-yellow-600"
                            : "bg-blue-600 hover:bg-blue-700"
                    }`}
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