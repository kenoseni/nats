import nats from "node-nats-streaming";
import { randomBytes } from "crypto";

console.clear();

const client = nats.connect("ticketing", randomBytes(4).toString("hex"), {
  url: "http://localhost:4222",
});

client.on("connect", () => {
  console.log("Publisher connected to NATS");

  //   we can only share stings as data in nats so this will not work
  const data = {
    id: "123",
    title: "concert",
    price: 20,
  };

  const stringData = JSON.stringify(data);

  client.publish("ticket:created", stringData, () => {
    console.log("Create ticket event published");
  });
});
