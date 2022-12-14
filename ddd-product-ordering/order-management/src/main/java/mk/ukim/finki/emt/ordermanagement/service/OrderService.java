package mk.ukim.finki.emt.ordermanagement.service;

import mk.ukim.finki.emt.ordermanagement.domain.exceptions.OrderIdNotExistException;
import mk.ukim.finki.emt.ordermanagement.domain.exceptions.OrderItemIdNotExistException;
import mk.ukim.finki.emt.ordermanagement.domain.model.Order;
import mk.ukim.finki.emt.ordermanagement.domain.model.OrderId;
import mk.ukim.finki.emt.ordermanagement.domain.model.OrderItemId;
import mk.ukim.finki.emt.ordermanagement.service.forms.OrderForm;
import mk.ukim.finki.emt.ordermanagement.service.forms.OrderItemForm;

import java.util.List;
import java.util.Optional;

public interface OrderService {
    OrderId placeOrder(OrderForm orderForm);

    OrderId placeOrder(Order order);

    List<Order> findAll();
    Optional<Order> findById(OrderId orderId);

    Optional<Order> findProcessingOrder();

    void addItem(OrderItemForm orderItemForm) throws OrderIdNotExistException;

    void deleteItem(OrderId orderId, OrderItemId orderItemId) throws OrderIdNotExistException, OrderItemIdNotExistException;
}
