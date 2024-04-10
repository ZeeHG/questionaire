import React, { FC, useRef } from "react";

const Demo: FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  function selectInput() {
    const inputElem = inputRef.current;
    if (inputElem) inputElem.select();
  }
  return (
    <div>
      <input ref={inputRef} />
      <button onClick={selectInput}></button>;
    </div>
  );
};
export default Demo;
