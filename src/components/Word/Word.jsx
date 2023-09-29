import Character from "../Character/Character";
import "./Word.scss"
const Word = ({ word }) => {
  return (
    <div className="Word">
      {word.map((char, i) => (
        <Character char={char} key={i} />
      ))}
    </div>
  );
};

export default Word;
