import { Message } from "node-nats-streaming";
import { Listener } from "./base-listner";
import { TicketCreatedEvent } from "./ticket-created-events";
import { Channels } from "./channels";

export class TicketCreatedListener extends Listener<TicketCreatedEvent> {
  readonly channel = Channels.TicketCreated;
  queueGroupName = "payment-service";

  onMessage(data: TicketCreatedEvent["data"], msg: Message): void {
    console.log(`Received event #${msg.getSequence()} with data:`, data);

    msg.ack();
  }
}
