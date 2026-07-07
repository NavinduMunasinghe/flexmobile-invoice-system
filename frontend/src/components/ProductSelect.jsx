import { useEffect, useState } from "react";
import { getProducts } from "../services/productService";

export default function ProductSelect() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        loadProducts();
    }, []);

    const loadProducts = async () => {
        try {
            const response = await getProducts();
            setProducts(response.data);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <select className="w-full border rounded-lg p-2">

            <option value="">
                Select Product
            </option>

            {products.map(product => (

                <option
                    key={product.productId}
                    value={product.productId}
                >
                    {product.productName}
                </option>

            ))}

        </select>
    );
}