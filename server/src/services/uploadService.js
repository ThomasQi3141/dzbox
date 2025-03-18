import { create } from "@web3-storage/w3up-client";
import dotenv from "dotenv";
dotenv.config();

let clientInstance = null;

const initializeClient = async () => {
  if (clientInstance) {
    return clientInstance;
  }

  clientInstance = await create();
  // Login only once; if in a persistent environment, the client state will be preserved
  await clientInstance.login(process.env.PASTEBIN_EMAIL);
  await clientInstance.setCurrentSpace(`did:key:${process.env.PASTEBIN_DID}`);

  return clientInstance;
};

// Uploads text to Storacha, returns CID
const upload = async (text) => {
  const client = await initializeClient();
  // Convert plain text to a File object
  const blob = new Blob([text], { type: "text/plain" });
  const file = new File([blob], "plain-text.txt");

  const cid = await client.uploadFile(file);
  return cid;
};

export default { upload };
