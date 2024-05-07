import Result from "@/component/Result";
import { results } from "@/data/PersonalColor";
import PersonalColorResult from "@/component/personal-color/PersonalColorResult";

const RusultPage = ({ params }: { params: { slug: string } }) => {
  const mbti = params.slug;
  const dataFilter = results.filter((data) => data.type === mbti);
  const data = dataFilter[0];

  return (
    <div>
      <Result>
        <PersonalColorResult data={data} />
      </Result>
    </div>
  );
};
export default RusultPage;
