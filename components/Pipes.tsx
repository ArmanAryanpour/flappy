import { motion } from "framer-motion";
import useGame from "../hooks/useGame";
import useInterval from "../hooks/useInterval";

export default function Pipes() {
  const {
    isStarted,
    pipe: { delay },
    pipes: pipesArray,
    movePipes,
  } = useGame();
  useInterval(() => movePipes(), isStarted ? delay : null);
  return (
    <>
      {pipesArray.map((pipes, index) => (
        <>
          <motion.div
            key={pipes.top.key}
            initial={pipes.top.initial}
            animate={pipes.top.position}
            style={{
              ...pipes.top.size,
              rotate: 180,
            }}
            className="absolute"
            children={<Pipe />}
            transition={{
              ease: "linear",
            }}
          />
          <motion.div
            key={pipes.bottom.key}
            initial={pipes.bottom.initial}
            animate={pipes.bottom.position}
            style={pipes.bottom.size}
            className="absolute"
            children={<Pipe />}
            transition={{
              ease: "linear",
            }}
          />
        </>
      ))}
    </>
  );
}
export function Pipe() {
  return (
    <img src="pipe.png" className="h-full w-full pointer-events-none" alt="" />
  );
}
