package com.flexmobile.backend.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(ResourceNotFoundException.class)
    public ResponseEntity<?> handleNotFound(ResourceNotFoundException ex) {

        Map<String, Object> response = new HashMap<>();

        response.put("timestamp", LocalDateTime.now());
        response.put("status", 404);
        response.put("message", ex.getMessage());

        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);

    }

    @ExceptionHandler(DuplicateResourceException.class)
    public ResponseEntity<?> handleDuplicate(DuplicateResourceException ex) {

        Map<String, Object> response = new HashMap<>();

        response.put("timestamp", LocalDateTime.now());
        response.put("status", 409);
        response.put("message", ex.getMessage());

        return ResponseEntity.status(HttpStatus.CONFLICT).body(response);

    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<?> handleException(Exception ex) {

        Map<String, Object> response = new HashMap<>();

        response.put("timestamp", LocalDateTime.now());
        response.put("status", 500);
        response.put("message", ex.getMessage());

        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);

    }

}