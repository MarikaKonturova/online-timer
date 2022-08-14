export const canvasStyles = {
  position: "fixed",
  pointerEvents: "none",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
};

export function randomInRange(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }

  export function getAnimationSettings() {
    return {
      particleCount: 1,
      startVelocity: 0,
      ticks: 200,
      gravity: 0.3,
      origin: {
        x: Math.random(),
        y: Math.random() * 0.999 - 0.2
      },
      colors: ["#ffffff"],
      shapes: ["circle"],
      scalar: randomInRange(0.4, 1)
    };
  }