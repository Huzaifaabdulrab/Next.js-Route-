"use client";
import { useState } from "react";
export default function Home() {
  const [showEvent, clickEvent] = useState(false);
  return (
    <>
      <button onClick={() => clickEvent(true)} className="text-slate-300 text-5xl font-serif text-center  ml-80 mr-80 mt-40 inline hover:text-white ">Click Me</button>
      {showEvent &&
        <p className="ml-80 mr-80 text-slate-300 inline-block">
        <h1 className="inline-block text-slate-50 mt-52 items-center font-serif text-5xl hover:text-slate-400">Huzaifa Abdulrab</h1>
        I am  Huzaifa Abdulrab, a versatile web developer with expertise in HTML, CSS, JavaScript, and
                    TypeScript. I am also skilled in photo editing and creating engaging designs using Canva. With a
                    strong creative mindset, I excel at generating innovative ideas and designing impactful web content.
                    Currently, I am exploring the field of Artificial Intelligence, aiming to integrate AI solutions
                    into web development. I am eager to apply my skills and knowledge to real-world projects and
                    contribute effectively to any team.
                
        </p>}
    </>
  );
}
