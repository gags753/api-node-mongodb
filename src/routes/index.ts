import { Router } from "express";

const router = Router();


router.get("/", async (req, res) => {
    return res.json({
        message: "server API up",
    });
});


export { router }