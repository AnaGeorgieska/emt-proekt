package mk.ukim.finki.emt.sharedkernel.domain.events.orders;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import lombok.Getter;
import mk.ukim.finki.emt.sharedkernel.domain.config.TopicHolder;
import mk.ukim.finki.emt.sharedkernel.domain.events.DomainEvent;

import java.io.IOException;
import java.time.Instant;

@Getter
public class OrderItemCreated {
    private String productId;
    private int quantity;
    private String topic;
    private Instant occurredOn;

    public OrderItemCreated() {
    }

    public OrderItemCreated(String topic) {
        this.occurredOn = Instant.now();
        this.topic = topic;
    }

//    public OrderItemCreated(String topic){
//        super(TopicHolder.TOPIC_ORDER_ITEM_CREATED);
//    }

    public OrderItemCreated(String productId, int quantity) {
        this.topic = TopicHolder.TOPIC_ORDER_ITEM_CREATED;
        this.occurredOn = Instant.now();
        this.productId = productId;
        this.quantity = quantity;
    }
    public String toJson() {
//        ObjectMapper objectMapper = new ObjectMapper();
        ObjectMapper objectMapper = new ObjectMapper().registerModule(new JavaTimeModule());
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

//    public static <E extends OrderItemCreated> E fromJson(String json, Class<E> eventClass) throws IOException {
////        ObjectMapper objectMapper = new ObjectMapper();
//        ObjectMapper objectMapper = new ObjectMapper().registerModule(new JavaTimeModule());
//        return objectMapper.readValue(json,eventClass);
//    }

    public static OrderItemCreated  fromJson(String json) throws IOException {
//        ObjectMapper objectMapper = new ObjectMapper();
        ObjectMapper objectMapper = new ObjectMapper().registerModule(new JavaTimeModule());
        return objectMapper.readValue(json,OrderItemCreated.class);
    }

}
