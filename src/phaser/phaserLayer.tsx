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
          width: 1405,
          height: "100%",
          parent: "minapolis-hex",
          type: Phaser.AUTO,
          scene: [LoadScene, MenuScene, MainScene],
          transparent: true,
          // Add scale configuration
          scale: {
            mode: Phaser.Scale.RESIZE,
            autoCenter: Phaser.Scale.CENTER_BOTH,
          },
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
    <>
      <div id="minapolis-hex" className="min-h-[850px]" />
    </>
  );
};

export default PhaserLayer;
