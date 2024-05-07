"use client";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { QuestionsType } from "@/data/Company";
import { useRouter, usePathname } from "next/navigation";

interface BarProps {
  progress: string;
}
interface Props {
  questionList: QuestionsType[];
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

const Question = ({ questionList }: Props) => {
  const router = useRouter();
  const pathname = usePathname();
  const [count, setCount] = useState(0);
  const [ei, setEi] = useState(0);
  const [ns, setNs] = useState(0);
  const [ft, setFt] = useState(0);
  const [pj, setPj] = useState(0);

  const query = pathname.split("/")[1];

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
    return mbti;
  };

  //버튼 클릭시 이벤트
  const questionHandler = (
    index: number,
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setCount(count + 1);
    mbtiScore(index, e);
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
        router.push(`/${query}/result/${mbtiResult()}`)
      )}
    </>
  );
};
export default Question;
