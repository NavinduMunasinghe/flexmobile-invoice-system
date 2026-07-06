package com.flexmobile.backend.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "customers")
public class Customer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long customerId;

    @Column(unique = true)
    private String customerCode;

    private String fullName;

    private String phone;

    private String email;

    private String address;

    private Boolean status;

    // Getters and Setters
}