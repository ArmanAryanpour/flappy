import React from "react";
import { motion } from "framer-motion";
import useGame from "../hooks/useGame";
import _ from "lodash";

export default function Footer() {
  const {
    isStarted,
    rounds,
    pipe: { distance },
  } = useGame();
  const animation = isStarted
    ? {
        animate: {
          backgroundPosition: ["0", "-50px"],
        },
        transition: {
          repeat: Infinity,
          duration: 0.5,
          repeatType: "loop" as "loop",
          ease: "linear",
        },
      }
    : {};
  const score = _.last(rounds)?.score || 0;
  const best = _.maxBy(rounds, "score")?.score || 0;
  return (
    <footer className="w-full h-28  bg-[#ded895] relative rounded-b-lg">
      <div className="bg-green-500 border-y-4 relative border-green-600 h-10">
        <motion.div
          style={{
            backgroundImage: `linear-gradient(
              -45deg,
              rgba(255, 255, 255, 0.2) 25%,
              transparent 25%,
              transparent 50%,
              rgba(255, 255, 255, 0.2) 50%,
              rgba(255, 255, 255, 0.2) 75%,
              transparent 75%,
              transparent
            )`,
            backgroundSize: "50px 50px",
          }}
          className="absolute w-full h-full"
          {...animation}
        ></motion.div>
      </div>
      <div className="flex p-2 uppercase font-mono font-semibold items-center justify-around h-[calc(100%-2.5rem)] text-xl text-green-900 flex-wrap">
        <div>Best: {best}</div>
        <div>Score: {score}</div>
        <div className="w-full text-center text-lg">
          Speed: {(distance / 10).toFixed(1)}
        </div>
      </div>
    </footer>
  );
}
