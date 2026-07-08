import { useState, useEffect } from "react";
import { toast } from "react-toastify";

import ProductForm from "../components/ProductForm";
import ProductSearch from "../components/ProductSearch";
import ProductTable from "../components/ProductTable";

import {
    getProducts,
    deleteProduct
} from "../services/productService";

export default function Products() {

    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [search, setSearch] = useState("");

    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isEditing, setIsEditing] = useState(false);

    // Pagination
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 5;

    // ===========================
    // Load Products
    // ===========================

    async function loadProducts() {

        try {

            const response = await getProducts();

            setProducts(response.data);
            setFilteredProducts(response.data);

        } catch (error) {

            console.error(error);

        }

    }

    // ===========================
    // Initial Load
    // ===========================

    useEffect(() => {

        loadProducts();

    }, []);

    // ===========================
    // Search
    // ===========================

    useEffect(() => {

        const keyword = search.toLowerCase();

        const filtered = products.filter((product) => {

            return (

                (product.productCode || "")
                    .toLowerCase()
                    .includes(keyword)

                ||

                (product.productName || "")
                    .toLowerCase()
                    .includes(keyword)

                ||

                (product.brand || "")
                    .toLowerCase()
                    .includes(keyword)

                ||

                (product.model || "")
                    .toLowerCase()
                    .includes(keyword)

            );

        });

        setFilteredProducts(filtered);

        // Search කරනකොට page 1 ට යනවා
        setCurrentPage(1);

    }, [search, products]);

    // ===========================
    // Pagination
    // ===========================

    const indexOfLastProduct = currentPage * productsPerPage;

    const indexOfFirstProduct =
        indexOfLastProduct - productsPerPage;

    const currentProducts =
        filteredProducts.slice(
            indexOfFirstProduct,
            indexOfLastProduct
        );

    const totalPages = Math.ceil(
        filteredProducts.length / productsPerPage
    );

    // ===========================
    // Delete Product
    // ===========================

    const handleDelete = async (id) => {

        const confirmDelete = window.confirm(
            "Are you sure you want to delete this product?"
        );

        if (!confirmDelete) return;

        try {

            await deleteProduct(id);

            toast.success("Product deleted successfully!");

            loadProducts();

        } catch (error) {

            console.error(error);

            toast.error("Failed to delete product.");

        }

    };

    // ===========================
    // Edit Product
    // ===========================

    const handleEdit = (product) => {

        setSelectedProduct(product);

        setIsEditing(true);

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    };

    return (

        <div className="space-y-6">

            <div className="flex justify-between items-center">

                <h1 className="text-3xl font-bold">
                    Products
                </h1>

            </div>

            {/* Search */}

            <ProductSearch
                search={search}
                setSearch={setSearch}
            />

            {/* Product Form */}

            <ProductForm
                onProductSaved={loadProducts}
                selectedProduct={selectedProduct}
                isEditing={isEditing}
                setIsEditing={setIsEditing}
            />

            {/* Product Table */}

            <ProductTable
                products={currentProducts}
                onEdit={handleEdit}
                onDelete={handleDelete}
            />

            {/* Pagination */}

            <div className="flex justify-between items-center">

                <button
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage(currentPage - 1)}
                    className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded disabled:opacity-50"
                >
                    Previous
                </button>

                <span className="font-medium">
                    Page {currentPage} of {totalPages || 1}
                </span>

                <button
                    disabled={
                        currentPage === totalPages ||
                        totalPages === 0
                    }
                    onClick={() => setCurrentPage(currentPage + 1)}
                    className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded disabled:opacity-50"
                >
                    Next
                </button>

            </div>

        </div>

    );

}