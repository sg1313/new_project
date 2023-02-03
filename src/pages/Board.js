import React, { useState } from "react";

const Board = () => {
  const [text, setText] = useState();

  const onReset = () => {
    setText("");
  };

  const [names, setNames] = useState([
    { id: 1, text: "사과" },
    { id: 2, text: "포도" },
    { id: 3, text: "없어" },
  ]);
  const [inputText, setInputText] = useState();
  const [nextId, setNextId] = useState(4);
  const onChange = (e) => {
    setText(e.target.value);
  };
  const onClickButton = (e) => {
    const nextNames = names.concat({
      id: nextId,
      text: inputText,
    });
    setNextId(nextId + 1);
    setNames(nextNames);
    setInputText("");

    setText(e.target.value);
  };

  const nameList = names.map((name) => <li>{name}</li>);

  return (
    <div>
      bts에게 응원 한마디씩 부탁합니다~~
      <br />
      <input type="text" value={text} onChange={onChange} />
      <button onClick={onReset}>초기화</button>
      <button onClick={onClickButton}>등록하기 </button>
      <br />
      <ul>{nameList}</ul>
    </div>
  );
};

export default Board;
