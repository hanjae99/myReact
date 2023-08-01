import { useState } from "react";
import "./App.css";

function Header(props) {
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
function Update(props) {
  const [title, setTitle] = useState(props.title);
  const [body, setBody] = useState(props.body);
  return (
    <article>
      <h2>Update</h2>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          const title = event.target.title.value;
          const body = event.target.body.value;
          props.onUpdate(title, body);
        }}
      >
        <p>
          <input
            type="text"
            name="title"
            placeholder="title"
            value={title}
            onChange={(evt) => {
              // console.log(evt.target.value);
              setTitle(evt.target.value);
            }}
          />
        </p>
        <p>
          <textarea
            name="body"
            placeholder="body"
            value={body}
            onChange={(evt) => {
              setBody(evt.target.value);
            }}
          ></textarea>
        </p>
        <div>
          <input type="submit" value="Update" />
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
  console.log("***");
  const [topics, setTopics] = useState([
    { id: 1, title: "HTML", body: "HTML is ..." },
    { id: 2, title: "CSS", body: "CSS is ..." },
    { id: 3, title: "JS", body: "JS is ..." },
  ]);

  let content = null;
  let contextControl = null;
  if (mode === "WELCOME") {
    content = <Article title="Welcome" body="Welcome, Web!!!"></Article>;
  } else if (mode === "READ") {
    let title,
      body = null;
    for (let i = 0; i < topics.length; i++) {
      if (topics[i].id === id) {
        title = topics[i].title;
        body = topics[i].body;
      }
    }
    content = <Article title={title} body={body}></Article>;
    contextControl = (
      <>
        <li>
          <a
            href={"/update/" + id}
            onClick={(evt) => {
              evt.preventDefault();
              setMode("UPDATE");
            }}
          >
            Update
          </a>
        </li>
        {/* Delete 구현 */}
        <li>
          <input
            type="button"
            value="Delete"
            onClick={() => {
              const newTopics = [];
              for (let i = 0; i < topics.length; i++) {
                if (topics[i].id !== id) {
                  newTopics.push(topics[i]);
                }
              }
              setTopics(newTopics);
              setMode("WELCOME");
            }}
          />
        </li>
      </>
    );
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
  } else if (mode === "UPDATE") {
    let title,
      body = null;
    for (let i = 0; i < topics.length; i++) {
      if (topics[i].id === id) {
        title = topics[i].title;
        body = topics[i].body;
      }
    }

    content = (
      <Update
        title={title}
        body={body}
        onUpdate={(_title, _body) => {
          console.log(_title, _body);
          const updateTopic = { id: id, title: _title, body: _body };
          const newTopics = [...topics];
          for (let i = 0; i < newTopics.length; i++) {
            if (newTopics[i].id === id) {
              newTopics[i] = updateTopic;
              break;
            }
          }
          setTopics(newTopics);
          setMode("READ");
        }}
      ></Update>
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
      {content}
      <ul style={{ marginTop: "20px" }}>
        <li>
          <a
            href="/create"
            onClick={(event) => {
              event.preventDefault();
              setMode("CREATE");
            }}
          >
            Create
          </a>
        </li>
        {contextControl}
      </ul>
    </div>
  );
}

export default App;
