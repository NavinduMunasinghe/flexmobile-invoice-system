package com.flexmobile.backend.service;

import com.flexmobile.backend.entity.InvoiceItem;
import com.flexmobile.backend.repository.InvoiceItemRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class InvoiceItemService {

    private final InvoiceItemRepository invoiceItemRepository;

    public InvoiceItemService(InvoiceItemRepository invoiceItemRepository) {
        this.invoiceItemRepository = invoiceItemRepository;
    }

    public InvoiceItem saveInvoiceItem(InvoiceItem invoiceItem) {
        return invoiceItemRepository.save(invoiceItem);
    }

    public List<InvoiceItem> getAllInvoiceItems() {
        return invoiceItemRepository.findAll();
    }

    public InvoiceItem getInvoiceItemById(Long id) {
        return invoiceItemRepository.findById(id).orElse(null);
    }

    public void deleteInvoiceItem(Long id) {
        invoiceItemRepository.deleteById(id);
    }
}