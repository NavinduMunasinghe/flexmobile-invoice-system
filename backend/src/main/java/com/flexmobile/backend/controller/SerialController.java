package com.flexmobile.backend.controller;

import com.flexmobile.backend.entity.Serial;
import com.flexmobile.backend.service.SerialService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/serials")
@CrossOrigin
public class SerialController {

    private final SerialService serialService;

    public SerialController(SerialService serialService) {
        this.serialService = serialService;
    }

    @PostMapping
    public Serial saveSerial(@RequestBody Serial serial) {
        return serialService.saveSerial(serial);
    }

    @GetMapping
    public List<Serial> getAllSerials() {
        return serialService.getAllSerials();
    }

    @GetMapping("/{id}")
    public Serial getSerialById(@PathVariable Long id) {
        return serialService.getSerialById(id);
    }

    @DeleteMapping("/{id}")
    public String deleteSerial(@PathVariable Long id) {
        serialService.deleteSerial(id);
        return "Serial deleted successfully";
    }
}