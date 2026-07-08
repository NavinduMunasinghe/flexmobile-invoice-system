import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import CustomerForm from "../components/CustomerForm";
import CustomerSearch from "../components/CustomerSearch";
import CustomerTable from "../components/CustomerTable";

import {
    getCustomers,
    deleteCustomer
} from "../services/customerService";

export default function Customers() {

    const [customers, setCustomers] = useState([]);
    const [filteredCustomers, setFilteredCustomers] = useState([]);
    const [search, setSearch] = useState("");

    const [selectedCustomer, setSelectedCustomer] = useState(null);
    const [isEditing, setIsEditing] = useState(false);

    // ===========================
    // Load Customers
    // ===========================

    async function loadCustomers() {

        try {

            const response = await getCustomers();

            setCustomers(response.data);
            setFilteredCustomers(response.data);

        } catch (error) {

            console.error(error);

            toast.error("Failed to load customers.");

        }

    }

    // ===========================
    // Initial Load
    // ===========================

    useEffect(() => {

        loadCustomers();

    }, []);

    // ===========================
    // Search
    // ===========================

    useEffect(() => {

        const keyword = search.toLowerCase();

        const filtered = customers.filter((customer) => {

            return (

                (customer.customerCode || "")
                    .toLowerCase()
                    .includes(keyword)

                ||

                (customer.fullName || "")
                    .toLowerCase()
                    .includes(keyword)

                ||

                (customer.mobile || "")
                    .toLowerCase()
                    .includes(keyword)

                ||

                (customer.email || "")
                    .toLowerCase()
                    .includes(keyword)

            );

        });

        setFilteredCustomers(filtered);

    }, [search, customers]);

    // ===========================
    // Delete
    // ===========================

    const handleDelete = async (id) => {

        const confirmDelete = window.confirm(
            "Are you sure you want to delete this customer?"
        );

        if (!confirmDelete) return;

        try {

            await deleteCustomer(id);

            toast.success("Customer deleted successfully.");

            loadCustomers();

        } catch (error) {

            console.error(error);

            toast.error("Failed to delete customer.");

        }

    };

    // ===========================
    // Edit
    // ===========================

    const handleEdit = (customer) => {

        setSelectedCustomer(customer);

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

                    Customers

                </h1>

            </div>

            <CustomerSearch
                search={search}
                setSearch={setSearch}
            />

            <CustomerForm
                onCustomerSaved={loadCustomers}
                selectedCustomer={selectedCustomer}
                isEditing={isEditing}
                setIsEditing={setIsEditing}
            />

            <CustomerTable
                customers={filteredCustomers}
                onEdit={handleEdit}
                onDelete={handleDelete}
            />

        </div>

    );

}