"use client";
import React, { useState } from "react";
import styled from "styled-components";
import { questions } from "@/data";

interface BarProps {
  progress: string;
}

const ProgressWrap = styled.div`
  display: flex;
`;
const ProgressBar = styled.div`
  width: 300px;
  height: 20px;
  border: 1px solid #ccc;
`;
const Bar = styled.div<BarProps>`
  width: ${(props) => props.progress};
  height: 100%;
  background-color: red;
`;

const Question = () => {
  const [questionList, setQuestionList] = useState(questions);
  const [count, setCount] = useState(0);

  const [ei, setEi] = useState(0);
  const [ns, setNs] = useState(0);
  const [ft, setFt] = useState(0);
  const [pj, setPj] = useState(0);

  //점수계산
  const mbtiScore = (
    index: number,
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if (e.currentTarget.value === "EI") {
      index === 0 ? setEi(ei + 1) : setEi(ei - 1);
    }
    if (e.currentTarget.value === "NS") {
      index === 0 ? setNs(ns + 1) : setNs(ns - 1);
    }
    if (e.currentTarget.value === "FT") {
      index === 0 ? setFt(ft + 1) : setFt(ft - 1);
    }
    if (e.currentTarget.value === "PJ") {
      index === 0 ? setPj(pj + 1) : setPj(pj - 1);
    }
  };

  //점수결과
  const mbtiResult = () => {
    let mbti = "";
    ei > 0 ? (mbti += "e") : (mbti += "i");
    ns > 0 ? (mbti += "n") : (mbti += "s");
    ft > 0 ? (mbti += "f") : (mbti += "t");
    pj > 0 ? (mbti += "p") : (mbti += "j");
    console.log(mbti);
  };

  //버튼 클릭시 이벤트
  const questionHandler = (
    index: number,
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setCount(count + 1);
    mbtiScore(index, e);
    mbtiResult();
  };
  //진행도 바
  const progress = `${(100 / questionList.length) * count}%`;

  //이전 질문 다시 선택

  return (
    <>
      {count < questionList.length ? (
        <div>
          <div>
            <div>{count + 1}</div>
            <div>Q.{questionList[count].question}</div>
            <ProgressWrap>
              <div>이전 질문</div>
              <ProgressBar>
                <Bar progress={progress}></Bar>
              </ProgressBar>
            </ProgressWrap>
            <div>
              {questionList[count].answer.map((data, index) => {
                return (
                  <button
                    onClick={(e) => questionHandler(0, e)}
                    key={index}
                    value={questionList[count].type}
                  >
                    {data}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};
export default Question;
