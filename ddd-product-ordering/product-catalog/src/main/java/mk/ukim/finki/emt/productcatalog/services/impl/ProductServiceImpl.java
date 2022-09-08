package mk.ukim.finki.emt.productcatalog.services.impl;

import lombok.AllArgsConstructor;
import mk.ukim.finki.emt.productcatalog.domain.exceptions.ProductNotFoundException;
import mk.ukim.finki.emt.productcatalog.domain.models.Product;
import mk.ukim.finki.emt.productcatalog.domain.models.ProductId;
import mk.ukim.finki.emt.productcatalog.domain.repository.ProductRepository;
import mk.ukim.finki.emt.productcatalog.services.ProductService;
import mk.ukim.finki.emt.productcatalog.services.form.ProductForm;
import mk.ukim.finki.emt.sharedkernel.domain.financial.Money;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
@AllArgsConstructor
public class ProductServiceImpl implements ProductService {

    private final ProductRepository productRepository;

    @Override
    public List<Product> getAll() {
        return productRepository.findAll();
    }

    @Override
    public Optional<Product> findById(ProductId id) {
        return productRepository.findById(id);
    }

    @Override
    public Optional<Product> createProduct(ProductForm form) {
        Product p=Product.build(form.getProductName(), Money.valueOf(form.getCurrency(), (int) form.getAmount()), form.getSales(), form.getImage());
        productRepository.save(p);
        return Optional.of(p);
    }

    @Override
    public Optional<Product> editProduct(ProductId id, ProductForm productForm) {

        Product product=productRepository.findById(id)
                .orElseThrow(ProductNotFoundException::new);

        product.edit(product, productForm.getProductName(), Money.valueOf(productForm.getCurrency(), (int) productForm.getAmount()), productForm.getSales(), productForm.getImage());

        return Optional.of(this.productRepository.save(product));
    }

    @Override
    public Product orderItemCreated(ProductId productId, int quantity) {
        Product p=productRepository.findById(productId).orElseThrow(ProductNotFoundException::new);
        p.addSales(quantity);
        productRepository.saveAndFlush(p);
        return p;
    }
    @Override
    public Product orderItemRemoved(ProductId productId, int quantity) {
        Product p=productRepository.findById(productId).orElseThrow(ProductNotFoundException::new);
        p.removeSales(quantity);
        productRepository.saveAndFlush(p);
        return p;
    }
}
