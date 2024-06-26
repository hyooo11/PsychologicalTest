import Result from "@/component/Result";

import { results } from "@/data/Company";
import CompanyResult from "@/component/company/CompanyResult";

const RusultPage = ({ params }: { params: { slug: string } }) => {
  const mbti = params.slug;
  const dataFilter = results.filter((data) => data.type === mbti);
  const data = dataFilter[0];

  return (
    <div>
      <Result>
        <CompanyResult data={data} />
      </Result>
    </div>
  );
};
export default RusultPage;
