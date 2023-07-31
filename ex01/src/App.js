// import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import Comp01 from "./components/Comp01";
import Comp02 from "./components/Comp02";
import Comp03 from "./components/Comp03";
import Hello from "./components/Hello";
import Student from "./components/Student";
import Wrapper from "./components/Wrapper";
import Counter from "./components/Counter";
import Counter2 from "./components/Counter2";

function Header(props) {
  // console.log(props.title);
  return (
    <header>
      <h1>
        <a
          href="/"
          onClick={function (event) {
            event.preventDefault();
            props.onChangeMode();
            alert("타이틀을 클릭했습니다");
          }}
        >
          {props.title}
        </a>
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
        <a
          id={t.id}
          href={"read" + t.id}
          onClick={(event) => {
            event.preventDefault();
            props.onChangeMode(Number(event.target.id));
          }}
        >
          {t.title}
        </a>
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

function Create(props) {
  return (
    <article>
      <h2>Create</h2>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          const title = event.target.title.value;
          const body = event.target.body.value;
          // console.log(title, body);
          props.onCreate(title, body);
        }}
      >
        <p>
          <input type="text" name="title" placeholder="title" />
        </p>
        <p>
          <textarea name="body" placeholder="body"></textarea>
        </p>
        <div>
          <input type="submit" value="Create" />
        </div>
      </form>
    </article>
  );
}
function App() {
  // state : 동적인 상태 끼얹기
  const [mode, setMode] = useState("WELCOME");
  const [id, setId] = useState(null);
  const [nextId, setNextId] = useState(4);
  console.log(mode);
  const name = "React";
  const style = {
    backgroundColor: "black",
    color: "white",
    fontSize: 24,
    padding: "1rem", // 다른 단위 사용 시 문자열로 설정
  };
  const [topics, setTopics] = useState([
    { id: 1, title: "HTML", body: "HTML is ..." },
    { id: 2, title: "CSS", body: "CSS is ..." },
    { id: 3, title: "JS", body: "JS is ..." },
  ]);
  // const topics = [
  //   { id: 1, title: "HTML", body: "HTML is ..." },
  //   { id: 2, title: "CSS", body: "CSS is ..." },
  //   { id: 3, title: "JS", body: "JS is ..." },
  // ];

  let content = null;
  if (mode === "WELCOME") {
    content = <Article title="Welcome" body="Welcome, Web!!!"></Article>;
  } else if (mode === "READ") {
    let title,
      body = null;
    for (let i = 0; i < topics.length; i++) {
      console.log(topics[i].id, id);
      if (topics[i].id === id) {
        title = topics[i].title;
        body = topics[i].body;
      }
    }
    content = <Article title={title} body={body}></Article>;
  } else if (mode === "CREATE") {
    content = (
      <Create
        onCreate={(_title, _body) => {
          const newTopic = { id: nextId, title: _title, body: _body };
          // topic의 내용을 전개, 새로이 newTopics 에 복사
          // topics 와 setTopics 가 처음엔 같은 주소값을 가지고 있지만
          // setTopics 로 변경된 값을 넣을 경우 서로 차이점을 인식해
          // 새로이 렌더링하는 리액트의 방식때문에 topics 에 바로 넣으면 안된다(바뀐점을 인식못하기 때문)
          const newTopics = [...topics];
          newTopics.push(newTopic);
          setTopics(newTopics);
          console.log(newTopics);
          setMode("READ");
          setId(nextId);
          setNextId(nextId + 1);
        }}
      ></Create>
    );
  }
  return (
    <div>
      {/* 주석은 이렇게 */}
      <Header
        title="REACT"
        onChangeMode={function () {
          setMode("WELCOME");
        }}
      ></Header>
      <Nav
        topics={topics}
        onChangeMode={(id) => {
          setMode("READ");
          setId(id);
        }}
      ></Nav>
      {/* <div style={style}>{name}</div>
      <div className="gray-box"></div>
    <Student></Student> */}
      {/* <Comp01></Comp01>
      <Comp02></Comp02>
      <Comp03></Comp03>
      <Wrapper>
      <Hello color="green" name="React" favoriteNum={123}></Hello>
      <Hello color="red" name={123}></Hello>
    </Wrapper> */}
      {/* <Counter></Counter> */}
      {/* <Counter2></Counter2> */}
      <a
        href="/create"
        onClick={(event) => {
          event.preventDefault();
          setMode("CREATE");
        }}
      >
        Create
      </a>
      {content}
    </div>
  );
}

export default App;
