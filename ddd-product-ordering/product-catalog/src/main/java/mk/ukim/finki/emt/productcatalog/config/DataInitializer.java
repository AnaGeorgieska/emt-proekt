package mk.ukim.finki.emt.productcatalog.config;

import lombok.AllArgsConstructor;
import mk.ukim.finki.emt.productcatalog.domain.models.Product;
import mk.ukim.finki.emt.productcatalog.domain.repository.ProductRepository;
import mk.ukim.finki.emt.sharedkernel.domain.financial.Currency;
import mk.ukim.finki.emt.sharedkernel.domain.financial.Money;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import java.util.Arrays;

@Component
@AllArgsConstructor
public class DataInitializer {
    private final ProductRepository productRepository;

    @PostConstruct
    public void initData() {
        Product p1 = Product.build("Diamond Ring", Money.valueOf(Currency.EUR, 500), 100,"https://image.brilliantearth.com/media/diamond_ring_vto/4S/BE1D6013_yellow_Oval_top_75_carat.png");
        Product p2 = Product.build("Silver Ring", Money.valueOf(Currency.EUR, 100), 5,"https://media.tiffany.com/is/image/Tiffany/EcomItemL2/the-tiffany-setting-engagement-ring-in-platinum-22086588_995766_ED_M.jpg");
        if(productRepository.findAll().isEmpty())
        {
            productRepository.saveAll(Arrays.asList(p1, p2));
        }
    }
}
