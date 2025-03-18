import uploadService from "../services/uploadService.js";

export const uploadFile = async (req, res) => {
  try {
    const text = req.body.text;
    const cid = await uploadService.upload(text);
    res.status(200).json({ cid: cid });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
