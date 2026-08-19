import { NextRequest, NextResponse } from "next/server";
import { runDailyPipeline } from "@/lib/services/dailyPipeline";

function yesterdayInPacific(){
  const now=new Date();
  const parts=new Intl.DateTimeFormat("en-CA",{timeZone:"America/Los_Angeles",year:"numeric",month:"2-digit",day:"2-digit"}).formatToParts(new Date(now.getTime()-86_400_000));
  const get=(t:string)=>parts.find(p=>p.type===t)?.value;
  return `${get("year")}-${get("month")}-${get("day")}`;
}

export async function GET(req:NextRequest){
  if(process.env.CRON_SECRET && req.headers.get("authorization")!==`Bearer ${process.env.CRON_SECRET}`){ return NextResponse.json({error:"Unauthorized"},{status:401}); }
  const date=yesterdayInPacific();
  const result=await runDailyPipeline({date,providers:[],externalPlayerIds:[]});
  return NextResponse.json({...result,status:result.performances.length?"ok":"Statistics currently unavailable.",note:"Connect approved provider adapters before production."});
}
