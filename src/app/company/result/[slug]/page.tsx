import Result from "@/component/company/Result";

const RusultPage = ({ params }: { params: { slug: string } }) => {
  const mbti = params.slug;

  return (
    <div>
      <Result mbti={mbti} />
    </div>
  );
};
export default RusultPage;
