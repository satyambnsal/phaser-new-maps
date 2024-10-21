"use client";
import { useEffect } from "react";
import { LoadScene, MainScene, MenuScene } from "./scenes";

export const PhaserLayer = () => {
  useEffect(() => {
    const config: Phaser.Types.Core.GameConfig = {
      width: 1405,
      height: "100%",
      parent: "minapolis-hex",
      type: Phaser.AUTO,
      scene: [LoadScene, MenuScene, MainScene],
      transparent: true,
    };

    const game = new Phaser.Game(config);
    game.registry.set("isSpeedVersion", false);
    game.registry.set("speedDuration", 200);

    return () => {
      game.destroy(true);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div id="minapolis-hex" className="min-h-[850px]" />
    </>
  );
};

export default PhaserLayer;
