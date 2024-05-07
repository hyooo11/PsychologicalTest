import Question from "@/component/Questions";
import { questions } from "@/data/Company";

const CompanyQuestionPage = () => {
  const questionList = questions;
  return (
    <div>
      {/* <Question /> */}
      <Question questionList={questionList} />
    </div>
  );
};
export default CompanyQuestionPage;
