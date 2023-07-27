import {Router, Request, Response} from "express";
import { PrismaClient } from '@prisma/client';
import createToken from "../utils/auth.utils";
const bcrypt = require('bcrypt');

const prisma = new PrismaClient();

const router = Router();

router.post('/register', async (req: Request, res: Response) => {;
    

    const {email, name, password} = req.body;

     try {

        const salt = bcrypt.genSaltSync(7);
        const hashedPassword = bcrypt.hashSync(password, salt);

        const status = await prisma.user.create({
            data: {id: 4, name, email, password: hashedPassword }
            })


        const token = createToken(status.id);

        res.status(201).json({token});
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: err});

    } finally {
        await prisma.$disconnect()
    }

})

export default router