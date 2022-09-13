package mk.ukim.finki.emt.ordermanagement.service.forms;

import lombok.Data;
import mk.ukim.finki.emt.ordermanagement.domain.valueobjects.Product;
import mk.ukim.finki.emt.ordermanagement.domain.valueobjects.ProductId;
import mk.ukim.finki.emt.sharedkernel.domain.financial.Currency;

import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;

@Data
public class OrderItemFormProps {

    private ProductId id;
    private  String name;
    private Currency currency;
    private  double amount;
    private  int sales;
    private  String image;

    @Min(1)
    private int quantity = 1;
}
