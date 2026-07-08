import { useEffect, useState } from "react";
import { saveCustomer, updateCustomer } from "../services/customerService";
import { toast } from "react-toastify";

export default function CustomerForm({
    onCustomerSaved,
    selectedCustomer,
    isEditing,
    setIsEditing
}) {

    const emptyCustomer = {
        customerCode: "",
        fullName: "",
        mobile: "",
        email: "",
        address: "",
        status: true
    };

    const [customer, setCustomer] = useState(emptyCustomer);

    useEffect(() => {

        if (selectedCustomer) {

            setCustomer({
                customerId: selectedCustomer.customerId,
                customerCode: selectedCustomer.customerCode,
                fullName: selectedCustomer.fullName,
                mobile: selectedCustomer.mobile,
                email: selectedCustomer.email || "",
                address: selectedCustomer.address || "",
                status: selectedCustomer.status
            });

        }

    }, [selectedCustomer]);

    const handleChange = (e) => {

        const { name, value, type, checked } = e.target;

        setCustomer((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value
        }));

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            if (isEditing) {

                await updateCustomer(customer.customerId, customer);

                toast.success("Customer Updated Successfully");

            } else {

                await saveCustomer(customer);

                toast.success("Customer Saved Successfully");

            }

            await onCustomerSaved();

            setCustomer(emptyCustomer);

            setIsEditing(false);

        } catch (error) {

            console.error(error);

            toast.error(
                error?.response?.data?.message || "Failed to save customer."
            );

        }

    };

    return (

        <div className="bg-white rounded-xl shadow p-6">

            <h2 className="text-2xl font-bold mb-6">

                {isEditing ? "Edit Customer" : "Add Customer"}

            </h2>

            <form
                onSubmit={handleSubmit}
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >

                <input
                    type="text"
                    name="customerCode"
                    placeholder="Customer Code"
                    value={customer.customerCode}
                    onChange={handleChange}
                    className="border rounded-lg p-3"
                    required
                />

                <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    value={customer.fullName}
                    onChange={handleChange}
                    className="border rounded-lg p-3"
                    required
                />

                <input
                    type="text"
                    name="mobile"
                    placeholder="Mobile Number"
                    value={customer.mobile}
                    onChange={handleChange}
                    className="border rounded-lg p-3"
                    required
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={customer.email}
                    onChange={handleChange}
                    className="border rounded-lg p-3"
                />

                <textarea
                    name="address"
                    placeholder="Address"
                    value={customer.address}
                    onChange={handleChange}
                    className="border rounded-lg p-3 md:col-span-2"
                    rows="3"
                />

                <label className="flex items-center gap-3">

                    <input
                        type="checkbox"
                        name="status"
                        checked={customer.status}
                        onChange={handleChange}
                    />

                    Active Customer

                </label>

                <div className="md:col-span-2 flex gap-3">

                    <button
                        type="submit"
                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg"
                    >
                        {isEditing ? "Update Customer" : "Save Customer"}
                    </button>

                    {isEditing && (

                        <button
                            type="button"
                            onClick={() => {

                                setCustomer(emptyCustomer);

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