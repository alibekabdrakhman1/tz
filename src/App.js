import React, { useState, useEffect, useRef } from "react";
import { BinarySearchTree, useAVLTree, useTrie } from "react-tree-vis";

function App() {
  const { ref, insert, clear } = useAVLTree();
  const [insertValue, setInsertValue] = useState(0);
  const ref1 = useRef(null);

  useEffect(() => {
    ref1.current.focus();
  }, []);
  return (
    <div
      ref={ref1}
      onKeyDown={(event) => {
        setInsertValue(Math.floor(Math.random() * 201) - 100);
        if (event.code === "Space") {
          insert(insertValue);
        }
      }}
      tabIndex={0}
    >
      <button onClick={clear}>Clear</button>
      <div>
        <BinarySearchTree data={[10, 20]} ref={ref} />
      </div>
    </div>
  );
}

export default App;
