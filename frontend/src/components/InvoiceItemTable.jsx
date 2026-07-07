import { useState } from "react";

export default function InvoiceItemTable() {

    const [items, setItems] = useState([
        {
            id: 1,
            product: "",
            serial: "",
            qty: 1,
            price: 0
        }
    ]);

    const addItem = () => {
        setItems([
            ...items,
            {
                id: Date.now(),
                product: "",
                serial: "",
                qty: 1,
                price: 0
            }
        ]);
    };

    return (
        <>
            <table className="w-full">

                <thead className="bg-slate-100">
                    <tr>
                        <th className="p-3 text-left">Product</th>
                        <th className="p-3 text-left">Serial Number</th>
                        <th className="p-3 text-center">Qty</th>
                        <th className="p-3 text-right">Price</th>
                        <th className="p-3 text-right">Total</th>
                        <th className="p-3 text-center">Action</th>
                    </tr>
                </thead>

                <tbody>

                    {items.map((item) => (

                        <tr key={item.id} className="border-t">

                            <td className="p-3">
                                {item.product || "-"}
                            </td>

                            <td className="p-3">
                                {item.serial || "-"}
                            </td>

                            <td className="p-3 text-center">
                                {item.qty}
                            </td>

                            <td className="p-3 text-right">
                                {item.price.toFixed(2)}
                            </td>

                            <td className="p-3 text-right">
                                {(item.qty * item.price).toFixed(2)}
                            </td>

                            <td className="p-3 text-center">
                                ❌
                            </td>

                        </tr>

                    ))}

                </tbody>

            </table>

            <div className="mt-4">
                <button
                    onClick={addItem}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                >
                    + Add Item
                </button>
            </div>
        </>
    );
}