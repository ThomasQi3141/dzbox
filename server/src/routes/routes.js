import express from "express";
import { uploadFile } from "../controllers/uploadControllers.js";
import { downloadFile } from "../controllers/downloadControllers.js";

const router = express.Router();

/**
 * @openapi
 * /api/upload:
 *   post:
 *     summary: Upload a text file to Storacha (IPFS)
 *     description: Uploads text to Web3.Storage and returns the Content Identifier (CID).
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               text:
 *                 type: string
 *                 example: "This is my decentralized paste."
 *     responses:
 *       200:
 *         description: File uploaded successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 cid:
 *                   type: string
 *                   example: "bafkreih7b5a7psv4z2rafvms3nvptdoqp2jmb4x7mhj5m4etqukq6ecepi"
 *       400:
 *         description: Bad request, missing text
 */
router.post("/upload", uploadFile);

/**
 * @openapi
 * /api/download/{cid}:
 *   get:
 *     summary: Download a file from Storacha (IPFS)
 *     description: Retrieves a text file stored on Web3.Storage using its CID.
 *     parameters:
 *       - in: path
 *         name: cid
 *         required: true
 *         schema:
 *           type: string
 *         description: The IPFS CID of the text file to download
 *     responses:
 *       200:
 *         description: File retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 text:
 *                   type: string
 *                   example: "This is my decentralized paste."
 *       400:
 *         description: Missing CID parameter
 *       404:
 *         description: File not found
 */
router.get("/download/:cid", downloadFile);

export default router;
