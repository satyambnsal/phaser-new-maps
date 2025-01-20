"use client";
import dynamic from "next/dynamic";

const PhaserLayer = dynamic(() => import("@/phaser/phaserLayer"), {
  ssr: false,
});

export default function App() {
  return (
    <div className="">
      <PhaserLayer />
    </div>
  );
}
