import { Router } from 'express';
import jwt from 'jsonwebtoken';
const router = Router();
router.post('/signup',(req,res)=>res.json({message:'Signup success',user:req.body}));
router.post('/login',(req,res)=>res.json({token:jwt.sign({email:req.body.email},'demo-secret',{expiresIn:'1d'})}));
router.post('/forgot-password',(req,res)=>res.json({message:`Reset sent to ${req.body.email}`}));
export default router;
