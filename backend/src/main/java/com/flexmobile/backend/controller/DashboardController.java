package com.flexmobile.backend.controller;

import com.flexmobile.backend.dto.DashboardSummaryDTO;
import com.flexmobile.backend.service.DashboardService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/dashboard")
@CrossOrigin(origins = "http://localhost:5173")
public class DashboardController {

    private final DashboardService dashboardService;

    public DashboardController(DashboardService dashboardService) {
        this.dashboardService = dashboardService;
    }

    @GetMapping("/summary")
    public DashboardSummaryDTO getDashboardSummary() {
        return dashboardService.getDashboardSummary();
    }
}