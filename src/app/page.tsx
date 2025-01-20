"use client";
import dynamic from "next/dynamic";

const PhaserLayer = dynamic(() => import("@/phaser/phaserLayer"), {
  ssr: false,
  loading: () => <div className="min-h-[850px]">Loading...</div>,
});

export default function App() {
  return (
    <div className="">
      <PhaserLayer />
    </div>
  );
}
