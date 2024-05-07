"use client";

import { results, mbtis } from "@/data";
import { useEffect, useState } from "react";

type Props = {
  mbti: string;
};
interface ResultType {
  index: number;
  type: string;
  title: string;
  job: string;
  good: string;
  bad: string;
}
const Result = ({ mbti }: Props) => {
  const dataFilter = results.filter((data) => data.type === mbti);
  const data: ResultType = dataFilter[0];
  console.log(data);

  return (
    <div>
      <div>
        <figure></figure>
        <div>
          <h3>{data.title}</h3>
          <span>{data.job}</span>
        </div>
        <div>
          <div>업무강점</div>
          <div>{data.good}</div>
        </div>
        <div>
          <div>업무약점</div>
          <div>{data.bad}</div>
        </div>
      </div>
    </div>
  );
};

export default Result;
