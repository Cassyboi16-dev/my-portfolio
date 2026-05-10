"use client";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex justify-center items-center flex-col p-9 gap-4">
      <h1 className="text-4xl italic font-black max-md:text-2xl text-center">YOU FINALLY MADE IT!!</h1>
      <h1 className="text-3xl py-4 font-bold text-center text-amber-950 max-md:text-xl">WELCOME</h1>
      <video src="/road.mp4" controls={false} autoPlay loop muted playsInline className="rounded-lg shadow-lg"></video>
    </main>
  )
}