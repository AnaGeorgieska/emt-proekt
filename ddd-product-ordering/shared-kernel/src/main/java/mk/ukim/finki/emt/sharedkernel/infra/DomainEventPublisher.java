package mk.ukim.finki.emt.sharedkernel.infra;

import com.fasterxml.jackson.core.JsonProcessingException;
import mk.ukim.finki.emt.sharedkernel.domain.events.DomainEvent;
import mk.ukim.finki.emt.sharedkernel.domain.events.orders.OrderItemCreated;

public interface DomainEventPublisher {
    void publish(DomainEvent event);
    void publishOrderItemCreated(OrderItemCreated event);
}
