import { Client } from "typesense";

const typesenseClient = new Client({
  apiKey: " zUZD71KOk0xKVgolUfW5BDRsq9QRSwQ2",
  nodes: [
    {
      host: process.env.TYPESENSE_HOST!,
      port: 443,
      protocol: "https",
    },
  ],
  connectionTimeoutSeconds: 10,
});

export default typesenseClient;
