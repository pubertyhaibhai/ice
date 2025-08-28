'use client';
import { useRef, useState } from 'react';
export default function Composer({ onSend, onFiles }:{ onSend:(t:string)=>void; onFiles:(files:FileList)=>void }){
  const [v,setV]=useState('');
  const ref=useRef<HTMLInputElement>(null);
  const send=()=>{ const t=v.trim(); if(!t) return; setV(''); onSend(t); };
  return (
    <div className="flex gap-1.5 md:gap-2 items-center">
      <input ref={ref} type="file" multiple className="hidden" onChange={e=> e.target.files && onFiles(e.target.files)} />
      <button onClick={()=>ref.current?.click()} className="px-2 md:px-3 py-2 md:py-3 rounded-lg border border-white/10 hover:border-white/20 text-xs md:text-sm">📎</button>
      <button className="px-2 md:px-3 py-2 md:py-3 rounded-lg border border-white/10 hover:border-white/20 text-xs md:text-sm flex items-center justify-center" title="Agent">
        <img src="/robot-agent-icon.svg" alt="AI Agent" className="w-6 h-6 md:w-10 md:h-10" />
      </button>
      <input value={v} onChange={e=>setV(e.target.value)} onKeyDown={e=> e.key==='Enter' && send()} placeholder="Type a message…"
        className="flex-1 rounded-lg bg-neutral-900 border border-white/10 px-3 md:px-4 py-2 md:py-3 outline-none focus:border-[#D78AC5]/60 text-xs md:text-sm" />
      <button onClick={send} className="px-3 md:px-4 py-2 md:py-3 rounded-lg bg-gradient-to-r from-[#6B1B5C] to-[#D78AC5] text-white text-xs md:text-sm">Send</button>
    </div>
  );
}
