import express from 'express';
import cors from 'cors';
const app=express(); app.use(cors()); app.use(express.json({limit:'10mb'}));
app.get('/api/health',(_,res)=>res.json({ok:true,app:'Convertify API'}));
// Uses a public exchange-rate endpoint; rates may be delayed and require internet.
app.get('/api/rates/:base',async(req,res)=>{
  const base=String(req.params.base||'USD').toUpperCase();
  if(!/^[A-Z]{3}$/.test(base)) return res.status(400).json({error:'Use a three-letter currency code.'});
  try {
    const r=await fetch(`https://open.er-api.com/v6/latest/${encodeURIComponent(base)}`);
    if(!r.ok) throw new Error('Rate provider unavailable');
    const data=await r.json();
    if(data.result!=='success') throw new Error('Rate provider returned no rates');
    res.set('Cache-Control','public, max-age=1800').json({base:data.base_code,date:data.time_last_update_utc,rates:data.rates});
  } catch(e){res.status(502).json({error:'Could not load live exchange rates. Check your internet connection and try again.'});}
});
const port=process.env.PORT||8787;
app.listen(port,()=>console.log(`Convertify API listening on http://localhost:${port}`));