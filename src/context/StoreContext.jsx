import { createContext, useEffect, useRef, useState } from "react";
import { findWord } from "../WORDS";
export const StoreContext = createContext();

const StoreProvider = ({ children }) => {
  const [store, setStore] = useState([
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
  ]);
  const rowIndex = useRef(0);
  const columnIndex = useRef(0);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Enter") {
        const word = store[rowIndex.current].join("");
        const isValid = findWord(word);
        console.log(isValid ? "Valid" : "Invalid");
        if (rowIndex.current < 4) {
          columnIndex.current = 0;
          rowIndex.current += 1;
        }
        return;
      } else if (e.key === "Backspace") {
        setStore((prev) => {
          const newArray = [...prev];
          if (newArray[rowIndex.current][columnIndex.current])
            newArray[rowIndex.current][columnIndex.current] = "";
          if (columnIndex.current > 0) {
            columnIndex.current -= 1;
          }
          console.log(rowIndex.current, columnIndex.current);
          return newArray;
        });
        return;
      }

      const key = e.key.toUpperCase();
      console.log(e.key.toUpperCase());
      setStore((prev) => {
        const newArray = [...prev];
        if (!newArray[rowIndex.current][columnIndex.current])
          newArray[rowIndex.current][columnIndex.current] = key;
        if (columnIndex.current < 4) {
          columnIndex.current += 1;
        }
        console.log(rowIndex.current, columnIndex.current);
        return newArray;
      });
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  });

  console.log(store);

  return (
    <StoreContext.Provider value={{ store }}>{children}</StoreContext.Provider>
  );
};

export default StoreProvider;
