import React, { useEffect } from "react";
import { motion } from "framer-motion";
import FlappyBird from "./FlappyBird";
import Footer from "./Footer";
import Background from "./Background";
import useGame from "../hooks/useGame";
import Pipes from "./Pipes";
import useElementSize from "../hooks/useElementSize";
import _ from "lodash";
export default function Game() {
  const { handleWindowClick, startGame, isReady, rounds } = useGame();
  const [ref, window] = useElementSize();
  useEffect(() => {
    if (window.width > 0 && window.height > 0) {
      startGame(window);
    }
  }, [window, ref]);

  return (
    <motion.main
      layout
      className="m-auto overflow-hidden flex flex-col max-w-[480px] border-8 border-zinc-200 rounded-xl bg-[#ded895]   relative max-h-[800px] w-full h-full"
    >
      <Background />
      <motion.div
        ref={ref} 
        key={_.last(rounds)?.key || "initial"}
        onTap={handleWindowClick}
        className="h-[calc(100%-7rem)] z-10 flex relative overflow-hidden cursor-pointer"
      >
        {isReady && (
          <>
            <Pipes />
            <FlappyBird />
          </>
        )}
      </motion.div>
      <Footer />
    </motion.main>
  );
}
