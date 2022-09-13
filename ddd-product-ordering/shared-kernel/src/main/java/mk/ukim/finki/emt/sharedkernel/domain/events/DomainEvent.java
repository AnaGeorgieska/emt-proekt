package mk.ukim.finki.emt.sharedkernel.domain.events;


import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.Getter;
import mk.ukim.finki.emt.sharedkernel.domain.events.orders.OrderItemCreated;
import mk.ukim.finki.emt.sharedkernel.domain.financial.Currency;
import mk.ukim.finki.emt.sharedkernel.domain.financial.Money;

import java.io.IOException;
import java.time.Instant;

@Getter
public class DomainEvent {

    private String topic;
    private Instant occurredOn;

    public DomainEvent(String topic) {
        this.occurredOn = Instant.now();
        this.topic = topic;
    }

    public String toJson() {
        ObjectMapper objectMapper = new ObjectMapper();
        String jsonInString = null;
        try {
            jsonInString = objectMapper.writeValueAsString(this);
        } catch (JsonProcessingException e) {

        }
        System.out.println(jsonInString);
        return jsonInString;

    }

    public String topic() {
        return topic;
    }

    public static <E extends DomainEvent> E fromJson(String json, Class<E> eventClass) throws IOException {
        ObjectMapper objectMapper = new ObjectMapper();
        return objectMapper.readValue(json,eventClass);
    }
}

