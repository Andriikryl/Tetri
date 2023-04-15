import Borad from "./Borad";
import { useBoard } from "../hooks/useBoard";

const Tetris = ({ rows, columns, setGameOver }) => {
  const [board, setBoard] = useBoard({ rows, columns });

  return <Borad board={board} />;
};

export default Tetris;
