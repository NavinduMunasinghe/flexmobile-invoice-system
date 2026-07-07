package com.flexmobile.backend.service;

import com.flexmobile.backend.entity.Serial;
import com.flexmobile.backend.repository.SerialRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SerialService {

    private final SerialRepository serialRepository;

    public SerialService(SerialRepository serialRepository) {
        this.serialRepository = serialRepository;
    }

    public Serial saveSerial(Serial serial) {
        return serialRepository.save(serial);
    }

    public List<Serial> getAllSerials() {
        return serialRepository.findAll();
    }

    public Serial getSerialById(Long id) {
        return serialRepository.findById(id).orElse(null);
    }

    public void deleteSerial(Long id) {
        serialRepository.deleteById(id);
    }
}