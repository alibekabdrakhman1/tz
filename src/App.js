import React, { useState, useEffect } from "react";
import { BinarySearchTree, useAVLTree, useTrie } from "react-tree-vis";

function App() {
  const { ref, insert, clear } = useAVLTree();
  function insertToTree(v) {
    console.log(1213);
    insert(v);
  }
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  const handleKeyDown = (event) => {
    if (event.code === "Space") {
      insertToTree(Math.floor(Math.random() * 201) - 100);
    }
  };

  return (
    <div onKeyUp={handleKeyDown}>
      <button onClick={clear}>Clear</button>
      <BinarySearchTree data={[10, 20]} ref={ref} />
    </div>
  );
}

export default App;
