import "./App.css";
import RandomUser from "./components/RandomUser";
import Counter from "./components/Counter";
import IssuesPage from "./components/IssuesPage";
import GithubIssue from "./components/GithubIssue";

// USE TYPE KEYWORD TO DECLARE TYPES
// type AppProps = {
//   title:string
// }

// USE INTERFACE KEYWORD TO DECLARE TYPES
// interface AppProps {
//   title: string;
// }

// USING INLINE DECLARATION

const App = ({ title }: { title: string }) => {
  return (
    <>
      <div>appp</div>
      <h2>{title}</h2>
      <div style={{ display: "flex" }}>
        <RandomUser />
        <Counter />
        <IssuesPage />
        <GithubIssue />
      </div>
    </>
  );
};

export default App;
