package com.flexmobile.backend.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "serials")
public class Serial {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long serialId;

    @Column(unique = true, nullable = false)
    private String serialNumber;

    @Column(nullable = false)
    private Long productId;

    private Boolean sold;

    private Boolean status;

    public Long getSerialId() {
        return serialId;
    }

    public void setSerialId(Long serialId) {
        this.serialId = serialId;
    }

    public String getSerialNumber() {
        return serialNumber;
    }

    public void setSerialNumber(String serialNumber) {
        this.serialNumber = serialNumber;
    }

    public Long getProductId() {
        return productId;
    }

    public void setProductId(Long productId) {
        this.productId = productId;
    }

    public Boolean getSold() {
        return sold;
    }

    public void setSold(Boolean sold) {
        this.sold = sold;
    }

    public Boolean getStatus() {
        return status;
    }

    public void setStatus(Boolean status) {
        this.status = status;
    }
}