import Link from "next/link";

const PersonalColorPage = () => {
  return (
    <div>
      <div>나는 무슨 색일까?</div>
      <Link href="/personal-color/question">시작하기</Link>
    </div>
  );
};

export default PersonalColorPage;
