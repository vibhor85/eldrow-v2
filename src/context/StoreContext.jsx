import { createContext, useEffect, useRef, useState } from "react";

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
        if (rowIndex.current < 4) {
          columnIndex.current = 0;
          rowIndex.current += 1;
        }
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
        } else {
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
