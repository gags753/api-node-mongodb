import { Router } from "express";
import { testAuthentication, connectionDB } from '../core/db/connection';
import { productRouter } from "./product.routes";

const router = Router();

connectionDB().then(() => console.log('banco pronto'))

router.get("/", async (req, res) => {
    const connection = await testAuthentication()
    return res.json({
        mongoDB_connection: connection
    })
});



router.use('/product', productRouter)

export { router };
