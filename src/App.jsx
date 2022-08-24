import React, { useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  const onClickButton = () => {
    setNum(num + 1);
  };

  // App.jsxが持つ状態変数とその値を動的に変更する関数
  const [num, setNum] = useState(0);

  return (
    <React.Fragment>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">元気です。</ColorfulMessage>
      <button onClick={onClickButton}>カウントアップ</button>
      <p>{num}</p>
    </React.Fragment>
  );
};

export default App;
