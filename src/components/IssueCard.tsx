import React from "react";

interface IProps {
  issueTitle: string;
}

const IssueCard: React.FC<IProps> = ({ issueTitle }) => {
  return (
    <div className="issue-card">
      <h2>{issueTitle}</h2>
      <div className="info">
        <h2>Opened: Yesterday</h2>
        <h2>Priority: Medium</h2>
      </div>
    </div>
  );
};

export default IssueCard;
