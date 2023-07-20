import { createPromiseClient } from "@bufbuild/connect";
import { ElizaService } from "./gen/eliza_connect";
import { createConnectTransport } from "@bufbuild/connect-node";

const transport = createConnectTransport({
  baseUrl: "http://localhost:8090",
  httpVersion: "1.1",
  useBinaryFormat: false

});

export default async () => {

  const client = createPromiseClient(ElizaService, transport);
  const res = await client.say({ sentence: "I feel happy." });
  return res;
}

