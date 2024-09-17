"use client";
import React from "react";
import { LampDemo } from "./components/hero";
import { SecondPart } from "./components/secondPart";
import { ThirdPart } from "./components/thirdPart";
export default function Home() {
  return (
    <div className="bg-slate-950 w-full">
    <LampDemo/>
    <SecondPart/>
    <ThirdPart/>
    </div>
  );
}
