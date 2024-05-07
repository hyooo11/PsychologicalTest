interface ResultType {
  type: string;
  title: string;
  desc: string;
  character: string;
  favorite: string;
  hateful: string;
  goodmatch: string[];
  badmatch: string[];
}
interface Props {
  data: ResultType;
}
const PersonalColorResult = ({ data }: Props) => {
  return (
    <div>
      <figure></figure>
      <div>
        <h3>{data.title}</h3>
        <span>{data.desc}</span>
      </div>
      <div>
        <div>나의 성격은?</div>
        <div>{data.character}</div>
      </div>
      <div>
        <div>이런 사람 좋아요!</div>
        <div>{data.favorite}</div>
      </div>
      <div>
        <div>이런 사람 싫어요!</div>
        <div>{data.hateful}</div>
      </div>
    </div>
  );
};
export default PersonalColorResult;
