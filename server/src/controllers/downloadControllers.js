import downloadService from "../services/downloadService.js";

export const downloadFile = async (req, res) => {
  try {
    const cid = req.params.cid;

    const text = await downloadService.download(cid);
    res.status(200).json({ text });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
