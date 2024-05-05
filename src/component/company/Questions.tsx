"use client";
import React, { useState } from "react";
import styled from "styled-components";
import { questions } from "@/data";

const ProgressWrap = styled.div`
  display: flex;
`;
const ProgressBar = styled.div`
  width: 300px;
  height: 20px;
  border: 1px solid #ccc;
`;

const Question = () => {
  const [questionList, setQuestionList] = useState(questions);
  const [count, setCount] = useState(0);
  //enfp, istj
  console.log(questionList);
  const [ei, setEi] = useState(0);
  console.log(ei);
  const calScore = (
    index: number,
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.currentTarget.value === "EI" && index === 0 ? setEi(ei + 1) : setEi(ei);
  };

  const questionHandler = (
    index: number,
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    // console.log(index);
    setCount(count + 1);
    calScore(index, e);
  };
  //진행도 바
  return (
    <div>
      <div>
        <div>Q.{questionList[0].question}</div>
        <ProgressWrap>
          <div>이전 질문 다시선택 버튼</div>
          <ProgressBar>진행도</ProgressBar>
        </ProgressWrap>
        <div>
          <button
            onClick={(e) => questionHandler(0, e)}
            key="0"
            value={questionList[0].type}
          >
            {questionList[0].answer[0]}
          </button>
          <button
            onClick={(e) => questionHandler(1, e)}
            key="1"
            value={questionList[0].type}
          >
            {questionList[0].answer[1]}
          </button>
        </div>
      </div>
    </div>
  );
};
export default Question;
