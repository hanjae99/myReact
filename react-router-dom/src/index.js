import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import {
  BrowserRouter,
  Link,
  NavLink,
  Route,
  Routes,
  useParams,
} from "react-router-dom";

function Home() {
  return (
    <div>
      <h2>Home</h2>
      Home...
    </div>
  );
}
const contents = [
  { id: 1, title: "HTML", description: "HTML is ..." },
  { id: 2, title: "JS", description: "JS is ..." },
  { id: 3, title: "React", description: "React is ..." },
];

function Topic() {
  let params = useParams();
  const topic_id = params.topic_id;
  // console.log(typeof(topic_id));
  console.log(params);
  let selected_topic = { title: "Sorry", description: "Not Found" };

  for (let i = 0; i < contents.length; i++) {
    if (contents[i].id === parseInt(topic_id)) {
      selected_topic = contents[i];
      break;
    }
  }
  // console.log(selected_topic);
  return (
    <div>
      <h3>{selected_topic.title}</h3>
      {selected_topic.description}
    </div>
  );
}

function Topics() {
  let lis = [];
  for (let i = 0; i < contents.length; i++) {
    lis.push(
      <li key={contents[i].id}>
        <NavLink to={"/topics/" + contents[i].id}>{contents[i].title}</NavLink>
      </li>
    );
  }
  return (
    <div>
      <h2>Topics</h2>
      <ul>
        {/* <li>
          <NavLink to="/topics/1">HTML</NavLink>
        </li>
        <li>
          <NavLink to="/topics/2">JS</NavLink>
        </li>
        <li>
          <NavLink to="/topics/3">React</NavLink>
        </li> */}
        {lis}
      </ul>
      <Routes>
        {/* <Route path="/1" element={"HTML is ..."}></Route>
        <Route path="/2" element={"JS is ..."}></Route>
        <Route path="/3" element={"React is ..."}></Route> */}
        <Route path="/:topic_id" element={<Topic />}></Route>
      </Routes>
    </div>
  );
}

function Contact() {
  return (
    <div>
      <h2>Contact</h2>
      Contact...
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>Hello React Router DOM</h1>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <Link to="/topics">Topics</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <Routes>
        {/* url 과 path 뒤의 값이 일치하는 element(컴포넌트) 를 불러옴  */}
        <Route path="/" element={<Home />}></Route>
        <Route path="/topics/*" element={<Topics />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/*" element={"Not Found"}></Route>
      </Routes>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
