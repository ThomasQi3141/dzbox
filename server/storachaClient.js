import { create } from "@web3-storage/w3up-client";

let clientInstance = null;

async function initializeClient() {
  if (clientInstance) {
    return clientInstance;
  }

  clientInstance = await create();
  // Login only once; if in a persistent environment, the client state will be preserved
  await clientInstance.login(process.env.PASTEBIN_EMAIL);
  await clientInstance.setCurrentSpace(`did:key:${process.env.PASTEBIN_DID}`);

  return clientInstance;
}

export default initializeClient;
