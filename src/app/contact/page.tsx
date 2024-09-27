"use client";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [showNumber, setNumber] = useState(false);

  return (
    <><div className="flex flex-col items-center justify-center h-screen">
    <button onClick={() => setNumber(true)} className="border-white w-60 h-10 bg-white text-black text-2xl font-serif rounded-md mb-4">Click me</button>
    {showNumber && <h1 className="text-4xl font-bold text-slate-700 mt-4"><Link href={'#huzaifaabdulrab2@gmail.com'}>huzaifaabdulrab2@gmail.com</Link></h1>}
  </div>
  
    </>
  );
}
