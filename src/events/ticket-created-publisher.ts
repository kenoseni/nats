import { Publisher } from "./base-publisher";
import { TicketCreatedEvent } from "./ticket-created-events";
import { Channels } from "./channels";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly channel = Channels.TicketCreated;
}
