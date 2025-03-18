import { create } from "@web3-storage/w3up-client";
import dotenv from "dotenv";
dotenv.config();

async function setupClient() {
  // Create a client instance; this will persist state between sessions
  const client = await create();

  // Login with your email address to claim delegations for your Space.
  await client.login(process.env.PASTEBIN_EMAIL);

  // Once logged in, select the Space you want to use.
  // Replace the following string with your Space's DID.
  await client.setCurrentSpace(`did:key:${process.env.PASTEBIN_DID}`);

  console.log("Client is set up and ready!");

  // Step 2: Convert your plain text to a File object
  const text = "Test text 123!!! Trying it out";
  const blob = new Blob([text], { type: "text/plain" });
  const file = new File([blob], "plain-text.txt");

  // Step 3: Upload the file to Storacha
  const cid = await client.uploadFile(file);
  console.log(`File uploaded! CID: ${cid}`);
  console.log(`Access it via: https://ipfs.io/ipfs/${cid}`);
  return client;
}

async function fetchText(cid) {
  // Use the new link format provided by Storacha
  const url = `https://${cid}.ipfs.w3s.link`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch file: ${response.statusText}`);
  }
  const text = await response.text();
  console.log("Fetched text:", text);
  return text;
}

// await setupClient().catch(console.error);

await fetchText("bafkreih7b5a7psv4z2rafvms3nvptdoqp2jmb4x7mhj5m4etqukq6ecepi");
