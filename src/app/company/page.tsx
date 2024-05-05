import Link from "next/link";

const CompanyPage = () => {
  return (
    <div>
      <div>회사에서의 나의 성격은?</div>
      <Link href="/company/question">시작하기</Link>
    </div>
  );
};
export default CompanyPage;
