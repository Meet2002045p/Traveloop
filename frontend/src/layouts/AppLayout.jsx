import { Link, Outlet } from 'react-router-dom';
import { pages } from '../data/pages';
import { Moon, Sun } from 'lucide-react';
import { useState } from 'react';

export default function AppLayout(){
  const [dark,setDark]=useState(true);
  return <div className={dark?'dark':''}><div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-indigo-950 text-white flex">
    <aside className="hidden md:block w-72 p-4 border-r border-white/10 overflow-y-auto"><h2 className="text-2xl font-bold mb-4">Traveloop</h2>{pages.filter(([p])=>!p.includes(':')).map(([path,label])=><Link key={path} to={path} className="block glass p-3 mb-2 hover:bg-white/20">{label}</Link>)}</aside>
    <main className="flex-1"><nav className="p-4 flex justify-between"><div className="text-xl font-semibold">AI Travel Planner</div><button className="glass p-2" onClick={()=>setDark(!dark)}>{dark?<Sun/>:<Moon/>}</button></nav><Outlet /></main>
  </div></div>
}
