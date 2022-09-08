package mk.ukim.finki.emt.productcatalog.services;

import mk.ukim.finki.emt.productcatalog.domain.models.Product;
import mk.ukim.finki.emt.productcatalog.domain.models.ProductId;
import mk.ukim.finki.emt.productcatalog.services.form.ProductForm;

import java.util.List;
import java.util.Optional;

public interface ProductService {

    Optional<Product> findById(ProductId id);
    Optional<Product> createProduct(ProductForm form);
    Product orderItemCreated(ProductId productId, int quantity);
    Product orderItemRemoved(ProductId productId, int quantity);
    List<Product> getAll();
    public Optional<Product> editProduct(ProductId id, ProductForm productForm);

}
