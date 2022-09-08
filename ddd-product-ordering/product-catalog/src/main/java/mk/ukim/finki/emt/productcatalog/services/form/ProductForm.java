package mk.ukim.finki.emt.productcatalog.services.form;

import lombok.Data;
import mk.ukim.finki.emt.sharedkernel.domain.financial.Currency;
import mk.ukim.finki.emt.sharedkernel.domain.financial.Money;

@Data
public class ProductForm {
    private String productName;
    private Currency currency;
    private double amount;
    private int sales;
    private String image;

    public ProductForm(String productName, Currency currency, double amount, int sales, String image) {
        this.productName = productName;
        this.currency = currency;
        this.amount = amount;
        this.sales = sales;
        this.image = image;
    }
}
