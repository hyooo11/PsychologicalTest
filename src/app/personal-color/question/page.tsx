import Question from "@/component/Questions";
import { questions } from "@/data/PersonalColor";

const PersonalColorQuestionPage = () => {
  const questionList = questions;
  return (
    <div>
      <Question questionList={questionList} />
    </div>
  );
};
export default PersonalColorQuestionPage;
