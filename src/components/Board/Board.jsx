import { useContext } from "react";
import Word from "../Word/Word";
import { StoreContext } from "../../context/StoreContext";

const Board = () => {
  const { store } = useContext(StoreContext);

  return (
    <div className='board'>
      {store.map((word, i) => (
        <Word word={word} key={i} />
      ))}
    </div>
  );
};

export default Board;
