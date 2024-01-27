import { useEffect, useState } from "react";
import IssueCard from "./IssueCard";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { addIssues } from "../store/issuesSlice";

const IssuesPage = () => {
  const [issue, setIssue] = useState("");
  const issueList = useSelector((state: RootState) => state.issues.issues);
  const dispatch = useDispatch();
  const AddIssue = () => {
    if (issue) {
      console.log("issue =>", issue);
      dispatch(addIssues(issue));
      setIssue("");
    }
  };

  const fetchData = async () => {
    const res = await fetch("https://api.github.com/repos/github/hub/issues");
    const data = await res.json();
    console.log(data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <div>
        <input
          type="text"
          name="issue-name"
          id="issue-name"
          onChange={(e) => setIssue(e.target.value)}
          value={issue}
        />
        <button onClick={AddIssue}>ADD ISSUE</button>
      </div>
      {issueList?.map((issue) => (
        <IssueCard issueTitle={issue} />
      ))}
    </div>
  );
};

export default IssuesPage;
