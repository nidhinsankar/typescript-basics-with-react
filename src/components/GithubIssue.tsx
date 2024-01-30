import { useEffect } from "react";
import { RootState, useAppDispatch } from "../store/store";
import { fetchIssues } from "../store/GithubIssueSlice";
import { useSelector } from "react-redux";
import IssueCard from "./IssueCard";

const GithubIssue = () => {
  const dispatch = useAppDispatch();
  const githubIssue = useSelector(
    (state: RootState) => state.githubIssues.issues
  );
  const loading = useSelector((state: RootState) => state.githubIssues.loading);
  const error = useSelector((state: RootState) => state.githubIssues.error);

  useEffect(() => {
    dispatch(fetchIssues());
  }, []);

  console.log(githubIssue);
  console.log(loading);
  console.log(error);

  return (
    <div>
      <h2>Github Issue</h2>
      <h2>{loading && "Loading ......"}</h2>
      <h2>{error && error}</h2>
      {githubIssue.map((issue) => (
        <IssueCard issueTitle={issue} key={issue} />
      ))}
    </div>
  );
};

export default GithubIssue;
