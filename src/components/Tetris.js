import Borad from "./Borad";
import { useBoard } from "../hooks/useBoard";
import GameStats from "./GameStats";

const Tetris = ({ rows, columns, setGameOver }) => {
  const [board, setBoard] = useBoard({ rows, columns });

  return (
    <div className="Tetris">
      <Borad board={board} />;
      <GameStats gameStats={gameStats} />
    </div>
  );
};

export default Tetris;
