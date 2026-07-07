import ProductSelect from "./ProductSelect";
export default function InvoiceRow({ item }) {
    return (
        <tr className="border-t">

            <td className="p-3">
            <ProductSelect />
            </td>

            <td className="p-3">
                {item.serial || "-"}
            </td>

            <td className="p-3 text-center">
            <input
                type="number"
                value={item.qty}
                className="w-20 border rounded p-2 text-center"
            />
            </td>

            <td className="p-3 text-right">
                {item.price.toFixed(2)}
            </td>

            <td className="p-3 text-right">
                {(item.qty * item.price).toFixed(2)}
            </td>

            <td className="p-3 text-center">
            <button className="text-red-600 font-bold">
                Delete
            </button>
            </td>

        </tr>
    );
}
