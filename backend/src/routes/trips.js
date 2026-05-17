import { Router } from 'express';
const router = Router();
let trips = [];
router.get('/',(_,res)=>res.json(trips));
router.post('/',(req,res)=>{const trip={id:Date.now(),...req.body};trips.push(trip);res.status(201).json(trip);});
router.put('/:id',(req,res)=>{trips=trips.map(t=>t.id==req.params.id?{...t,...req.body}:t);res.json({message:'updated'});});
router.delete('/:id',(req,res)=>{trips=trips.filter(t=>t.id!=req.params.id);res.json({message:'deleted'});});
export default router;
