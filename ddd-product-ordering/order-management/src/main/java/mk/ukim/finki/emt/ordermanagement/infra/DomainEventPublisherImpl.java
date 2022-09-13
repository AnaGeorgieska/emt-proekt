package mk.ukim.finki.emt.ordermanagement.infra;

import com.fasterxml.jackson.core.JsonProcessingException;
import lombok.AllArgsConstructor;
import mk.ukim.finki.emt.sharedkernel.domain.events.DomainEvent;
import mk.ukim.finki.emt.sharedkernel.domain.events.orders.OrderItemCreated;
import mk.ukim.finki.emt.sharedkernel.infra.DomainEventPublisher;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class DomainEventPublisherImpl implements DomainEventPublisher {
    private final KafkaTemplate<String, String> kafkaTemplate;

    @Override
    public void publish(DomainEvent event)  {
        this.kafkaTemplate.send(event.topic(), event.toJson());
        System.out.println(event.topic());
        System.out.println(event.toJson());
        System.out.println("publish");
    }
    @Override
    public void publishOrderItemCreated(OrderItemCreated event)  {
        this.kafkaTemplate.send(event.topic(), event.toJson());
        System.out.println(event.topic());
        System.out.println(event.toJson());
        System.out.println("publish");
    }
}
