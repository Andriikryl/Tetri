import Borad from "./Borad";
import { useBoard } from "../hooks/useBoard";
import GameStats from "./GameStats";
import { useGameStats } from "../hooks/useGameStats";

const Tetris = ({ rows, columns, setGameOver }) => {
  const [gameStats, addLinesCleared] = useGameStats();
  const [board, setBoard] = useBoard({ rows, columns });

  const player = { tetrominoes: [] };

  return (
    <div className="Tetris">
      <Borad board={board} />;
      <GameStats gameStats={gameStats} />
      <Previews tetrominoes={player.tetrominoes} />
    </div>
  );
};

export default Tetris;
