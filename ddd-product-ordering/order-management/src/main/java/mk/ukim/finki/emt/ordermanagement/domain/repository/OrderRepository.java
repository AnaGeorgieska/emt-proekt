package mk.ukim.finki.emt.ordermanagement.domain.repository;

import mk.ukim.finki.emt.ordermanagement.domain.model.Order;
import mk.ukim.finki.emt.ordermanagement.domain.model.OrderId;
import mk.ukim.finki.emt.ordermanagement.domain.model.OrderState;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface OrderRepository extends JpaRepository<Order, OrderId> {
    Optional<Order> findByOrderState(OrderState orderState);
}
