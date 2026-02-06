import { Router } from "express";
import express from "express";
import { jsonget } from "../services/jsonget.js";
import { insertComments } from "../db/commentRepo.js"

const app = express();
app.use(express.json());

const router = Router()

// '/api/jsonget'のurlを処理する
router.get('/jsonget', async (req, res) => {
    try {
        const data = await jsonget();
        res.json(data);
    } catch (e) {
        console.log("jsonget Routes error:" + e)
    }
})

router.get('/comment', async (req, res) => {
    const { comment } = req.body;

    if (typeof comment !== 'string' || comment.trim() === '') {
        return res.status(400).json({ error: 'comment is required' });
    }

    insertComments(comment);

    return res.json({ ok: true });
})

export default router