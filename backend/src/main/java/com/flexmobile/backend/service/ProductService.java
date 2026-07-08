package com.flexmobile.backend.service;

import com.flexmobile.backend.entity.Product;
import com.flexmobile.backend.repository.ProductRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductService {

    private final ProductRepository productRepository;

    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public Product saveProduct(Product product) {

        Optional<Product> existingProduct =
                productRepository.findByProductCode(product.getProductCode());

        if (existingProduct.isPresent()) {

            // Allow update of the same product
            if (product.getProductId() == null ||
                    !existingProduct.get().getProductId().equals(product.getProductId())) {

                throw new RuntimeException("Product Code already exists.");

            }

        }

        return productRepository.save(product);

    }

    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    public Product getProductById(Long id) {
        return productRepository.findById(id).orElse(null);
    }

    public void deleteProduct(Long id) {
        productRepository.deleteById(id);
    }

}