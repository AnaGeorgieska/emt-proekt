package mk.ukim.finki.emt.productcatalog.xport.rest;


import lombok.AllArgsConstructor;
import mk.ukim.finki.emt.productcatalog.domain.models.Product;
import mk.ukim.finki.emt.productcatalog.domain.models.ProductId;
import mk.ukim.finki.emt.productcatalog.services.ProductService;
import mk.ukim.finki.emt.productcatalog.services.form.ProductForm;
import mk.ukim.finki.emt.sharedkernel.domain.financial.Currency;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/product")
@AllArgsConstructor
public class ProductResource {
    private final ProductService productService;

    @GetMapping
    public List<Product> getAll() {
        return productService.getAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Product> findById(@PathVariable String id)
    {
        return this.productService
                .findById(ProductId.of(id))
                .map(book -> ResponseEntity.ok().body(book))
                .orElseGet(()-> ResponseEntity.notFound().build());
    }
    @GetMapping("/dto/{id}")
    public ResponseEntity<ProductForm> findByIdDto(@PathVariable String id)
    {
        return this.productService.findById(ProductId.of(id))
                .map(p -> ResponseEntity.ok().body(new ProductForm(p.getProductName(), p.getPrice().getCurrency(),
                        p.getPrice().getAmount(), p.getSales(), p.getImage())))
                .orElseGet(()-> ResponseEntity.notFound().build());
    }
    @PostMapping("/add")
    public  ResponseEntity<Product> save(@RequestBody ProductForm productForm)
    {
        return this.productService.createProduct(productForm)
                .map(book -> ResponseEntity.ok().body(book))
                .orElseGet(()->ResponseEntity.badRequest().build());
    }

    @PutMapping("/edit/{id}")
    public  ResponseEntity<Product> edit(@PathVariable String id, @RequestBody ProductForm productForm)
    {
        return this.productService.editProduct(ProductId.of(id),productForm)
                .map(book -> ResponseEntity.ok().body(book))
                .orElseGet(()->ResponseEntity.badRequest().build());
    }

    //    return axios.get(`/books/mark/${id}`);
    @GetMapping("/currency")
    public List<Currency> findAll()
    {
        return Arrays.asList(Currency.values());
    }
}
