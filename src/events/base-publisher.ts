import { Stan } from "node-nats-streaming";
import { Channels } from "./channels";

interface Event {
  channel: Channels;
  data: any;
}

export abstract class Publisher<T extends Event> {
  abstract channel: T["channel"];

  constructor(private readonly client: Stan) {}

  publish(data: T["data"]) {
    this.client.publish(this.channel, JSON.stringify(data), () => {
      console.log("Event published");
    });
  }
}
