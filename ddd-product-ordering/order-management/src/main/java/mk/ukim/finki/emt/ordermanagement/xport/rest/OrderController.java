package mk.ukim.finki.emt.ordermanagement.xport.rest;

import lombok.AllArgsConstructor;
import mk.ukim.finki.emt.ordermanagement.domain.model.Order;
import mk.ukim.finki.emt.ordermanagement.domain.valueobjects.Product;
import mk.ukim.finki.emt.ordermanagement.service.OrderService;
import mk.ukim.finki.emt.ordermanagement.service.forms.OrderForm;
import mk.ukim.finki.emt.ordermanagement.service.forms.OrderItemForm;
import mk.ukim.finki.emt.ordermanagement.service.forms.OrderItemFormProps;
import mk.ukim.finki.emt.sharedkernel.domain.financial.Money;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/order")
@AllArgsConstructor
public class OrderController {

    private final OrderService orderService;

    @GetMapping("/")
    public ResponseEntity<Order> getOrder()
    {
        System.out.println("order");
       return orderService.findProcessingOrder()
               .map(order -> ResponseEntity.ok().body(order))
               .orElseGet(()-> ResponseEntity.notFound().build());

    }

    @GetMapping("/total")
    public ResponseEntity<Integer> getTotal()
    {
        System.out.println("order");
        return orderService.findProcessingOrder()
                .map(order -> ResponseEntity.ok().body((int)order.total().getAmount()))
                .orElseGet(()-> ResponseEntity.notFound().build());
    }

    @PostMapping("/addToOrder")
    public void addToOrder(@RequestBody OrderItemFormProps orderItemForm)
    {
        System.out.println(orderItemForm.toString());
        OrderItemForm oi1 = new OrderItemForm();
        oi1.setProduct(new Product(orderItemForm.getId(), orderItemForm.getName(),
                Money.valueOf(orderItemForm.getCurrency(), (int) orderItemForm.getAmount()),
                orderItemForm.getSales(), orderItemForm.getImage()));
        oi1.setQuantity(orderItemForm.getQuantity());
        orderService.addItem(oi1);
        return ;
    }

    @PostMapping("/placeOrder")
    public void placeOrder()
    {
        System.out.println("place order");
        Order order=orderService.findProcessingOrder().get();
        orderService.placeOrder(order);
    }
}
