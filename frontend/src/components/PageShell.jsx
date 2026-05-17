import { motion } from 'framer-motion';

export default function PageShell({ title, items=[] }) {
  return <div className="p-4 md:p-8 space-y-6">
    <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} className="glass p-6 bg-gradient-to-r from-indigo-500/20 to-cyan-500/20">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="text-slate-300">Premium AI-powered travel workflow</p>
    </motion.div>
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">{items.map((item)=><motion.div key={item} whileHover={{y:-6}} className="glass p-4">{item}</motion.div>)}</div>
  </div>
}
