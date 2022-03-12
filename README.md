# Basic NATS streaming with typescript

The contents in this repository is a basic implementation of nats streaming.

## How to use this repository

1. Pull the latest docker image for nats streaming <e.g. nats-streaming:0.24.3>
2. Run the container following the instructions on docker hub.
3. Make sure the port `4222` and `8222` are accessible from your localhost.
4. On your terminal run the command to `publish` and `listen` to a message. `see package.json`

This basic functionality can be extend to suite your needs.

Finally, see the documentation [nats straming](https://www.npmjs.com/package/node-nats-streaming) for more advanced usage
