package com.flexmobile.backend.controller;

import com.flexmobile.backend.entity.InvoiceItem;
import com.flexmobile.backend.service.InvoiceItemService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/invoice-items")
@CrossOrigin
public class InvoiceItemController {

    private final InvoiceItemService invoiceItemService;

    public InvoiceItemController(InvoiceItemService invoiceItemService) {
        this.invoiceItemService = invoiceItemService;
    }

    @PostMapping
    public InvoiceItem saveInvoiceItem(@RequestBody InvoiceItem invoiceItem) {
        return invoiceItemService.saveInvoiceItem(invoiceItem);
    }

    @GetMapping
    public List<InvoiceItem> getAllInvoiceItems() {
        return invoiceItemService.getAllInvoiceItems();
    }

    @GetMapping("/{id}")
    public InvoiceItem getInvoiceItemById(@PathVariable Long id) {
        return invoiceItemService.getInvoiceItemById(id);
    }

    @DeleteMapping("/{id}")
    public String deleteInvoiceItem(@PathVariable Long id) {
        invoiceItemService.deleteInvoiceItem(id);
        return "Invoice Item deleted successfully";
    }
}