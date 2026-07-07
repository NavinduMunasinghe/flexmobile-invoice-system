package com.flexmobile.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class DashboardSummaryDTO {

    private long totalProducts;

    private long totalCustomers;

    private long totalInvoices;

    private double totalRevenue;

}