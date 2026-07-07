import { useEffect, useState } from "react";
import { getCustomers } from "../services/customerService";

export default function CustomerSelect() {

    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        loadCustomers();
    }, []);

    const loadCustomers = async () => {
        try {
            const response = await getCustomers();
            setCustomers(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <select className="w-full border rounded-lg p-3">
            <option>Select Customer</option>

            {customers.map(customer => (
                <option
                    key={customer.customerId}
                    value={customer.customerId}
                >
                    {customer.fullName}
                </option>
            ))}
        </select>
    );
}