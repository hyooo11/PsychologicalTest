import Link from "next/link";
import { results } from "@/data/PersonalColor";

export default function Home() {
  console.log(results);
  return (
    <div className="flex">
      {/* <div style={{ whiteSpace: "pre-line" }}>{results[0].character}</div> */}
      <Link href="/company">회사 심리테스트 하러가기</Link>
      <Link href="/personal-color">퍼스널컬러 심리테스트 하러가기</Link>
    </div>
  );
}
