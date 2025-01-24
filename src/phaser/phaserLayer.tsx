"use client";
import { useEffect, useState } from "react";

export const PhaserLayer = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const initPhaser = async () => {
      try {
        // Only import Phaser when we're in the browser
        const Phaser = (await import("phaser")).default;
        const { LoadScene, MenuScene, MainScene } = await import("./scenes");

        const config = {
          width: 1280,
          height: "100%",
          parent: "tileville-hex",
          type: Phaser.AUTO,
          scene: [LoadScene, MenuScene, MainScene],
          scale: {
            autoCenter: Phaser.Scale.CENTER_BOTH,
            mode: Phaser.Scale.FIT,
          },
          transparent: true,
        };

        const game = new Phaser.Game(config);
        game.registry.set("isSpeedVersion", false);
        game.registry.set("speedDuration", 200);

        return () => {
          game.destroy(true);
        };
      } catch (error) {
        console.error("Error initializing Phaser:", error);
      }
    };

    initPhaser();
  }, [isMounted]);

  if (!isMounted) return null;

  return (
    <div
      id="tileville-hex"
      className="min-h-[100vh] max-w-[99svh]"
      style={{ minHeight: "100svh" }}
    />
  );
};

export default PhaserLayer;
