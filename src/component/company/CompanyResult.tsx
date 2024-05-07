interface ResultType {
  type: string;
  title: string;
  job: string;
  good: string;
  bad: string;
}
interface Props {
  data: ResultType;
}
const CompanyResult = ({ data }: Props) => {
  return (
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
  );
};
export default CompanyResult;
