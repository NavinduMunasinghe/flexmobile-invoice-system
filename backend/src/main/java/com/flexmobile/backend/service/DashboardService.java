package com.flexmobile.backend.service;

import com.flexmobile.backend.dto.DashboardSummaryDTO;
import com.flexmobile.backend.repository.CustomerRepository;
import com.flexmobile.backend.repository.InvoiceRepository;
import com.flexmobile.backend.repository.ProductRepository;
import org.springframework.stereotype.Service;

@Service
public class DashboardService {

    private final ProductRepository productRepository;
    private final CustomerRepository customerRepository;
    private final InvoiceRepository invoiceRepository;

    public DashboardService(
            ProductRepository productRepository,
            CustomerRepository customerRepository,
            InvoiceRepository invoiceRepository) {

        this.productRepository = productRepository;
        this.customerRepository = customerRepository;
        this.invoiceRepository = invoiceRepository;
    }

    public DashboardSummaryDTO getDashboardSummary() {

        long totalProducts = productRepository.count();
        long totalCustomers = customerRepository.count();
        long totalInvoices = invoiceRepository.count();

        // Revenue API එක හදනකම් temporary value
        double totalRevenue = 0.0;

        return new DashboardSummaryDTO(
                totalProducts,
                totalCustomers,
                totalInvoices,
                totalRevenue
        );
    }
}