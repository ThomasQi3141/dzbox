// Downloads from Storacha given CID
const download = async (cid) => {
  const url = `https://${cid}.ipfs.w3s.link`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch file: ${response.statusText}`);
  }
  const text = await response.text();
  return text;
};

export default { download };
