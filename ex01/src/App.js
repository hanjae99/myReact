// import logo from "./logo.svg";
import "./App.css";
import Comp01 from "./components/Comp01";
import Comp02 from "./components/Comp02";
import Comp03 from "./components/Comp03";
import Student from "./components/Student";

function Header(props) {
  console.log(props.title);
  return (
    <header>
      <h1>
        <a href="/">{props.title}</a>
      </h1>
    </header>
  );
}
function Nav(props) {
  const lis = [];
  for (let i = 0; i < props.topics.length; i++) {
    let t = props.topics[i];
    lis.push(
      <li key={t.id}>
        <a href={"read" + t.id}>{t.title}</a>
      </li>
    );
  }
  return (
    <nav>
      <ol>{lis}</ol>
    </nav>
  );
}
function Article(props) {
  return (
    <article>
      <h2>{props.title}</h2>
      {props.body}
    </article>
  );
}

function App() {
  const name = "React";
  const style = {
    backgroundColor: "black",
    color: "white",
    fontSize: 24,
    padding: "1rem", // 다른 단위 사용 시 문자열로 설정
  };
  const topics = [
    { id: 1, title: "HTML", body: "HTML is ..." },
    { id: 2, title: "CSS", body: "CSS is ..." },
    { id: 3, title: "JS", body: "JS is ..." },
  ];
  return (
    <div>
      {/* 주석은 이렇게 */}
      <Header title="REACT"></Header>
      <Nav topics={topics}></Nav>
      <Article title="Welcome" body="Hello, React"></Article>
      {/* <div style={style}>{name}</div>
      <div className="gray-box"></div>
      <Student></Student> */}
      <Comp01></Comp01>
      <Comp02></Comp02>
      <Comp03></Comp03>
    </div>
  );
}

export default App;
