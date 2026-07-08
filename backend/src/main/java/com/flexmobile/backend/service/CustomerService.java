package com.flexmobile.backend.service;

import com.flexmobile.backend.entity.Customer;
import com.flexmobile.backend.exception.DuplicateResourceException;
import com.flexmobile.backend.exception.ResourceNotFoundException;
import com.flexmobile.backend.repository.CustomerRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CustomerService {

    private final CustomerRepository customerRepository;

    public CustomerService(CustomerRepository customerRepository) {
        this.customerRepository = customerRepository;
    }

    // Get All Customers
    public List<Customer> getAllCustomers() {
        return customerRepository.findAll();
    }

    // Get Customer By ID
    public Customer getCustomerById(Long id) {

        return customerRepository.findById(id)
                .orElseThrow(() ->
                        new ResourceNotFoundException("Customer not found"));

    }

    // Save / Update Customer
    public Customer saveCustomer(Customer customer) {

        // Customer Code Duplicate Check
        Optional<Customer> codeExists =
                customerRepository.findByCustomerCode(customer.getCustomerCode());

        if (codeExists.isPresent()
                && !codeExists.get().getCustomerId().equals(customer.getCustomerId())) {

            throw new DuplicateResourceException(
                    "Customer Code already exists."
            );

        }

        // Mobile Duplicate Check
        Optional<Customer> mobileExists =
                customerRepository.findByMobile(customer.getMobile());

        if (mobileExists.isPresent()
                && !mobileExists.get().getCustomerId().equals(customer.getCustomerId())) {

            throw new DuplicateResourceException(
                    "Mobile Number already exists."
            );

        }

        // Email Duplicate Check
        if (customer.getEmail() != null &&
                !customer.getEmail().isBlank()) {

            Optional<Customer> emailExists =
                    customerRepository.findByEmail(customer.getEmail());

            if (emailExists.isPresent()
                    && !emailExists.get().getCustomerId().equals(customer.getCustomerId())) {

                throw new DuplicateResourceException(
                        "Email already exists."
                );

            }

        }

        return customerRepository.save(customer);

    }

    // Delete Customer
    public void deleteCustomer(Long id) {

        Customer customer = getCustomerById(id);

        customerRepository.delete(customer);

    }

}