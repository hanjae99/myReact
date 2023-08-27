import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

const cheerio = require("cheerio");

function App() {
  const [list, setList] = useState([]);

  const getHTML = async () => {
    let ulList = [];

    for (let j = 1; j <= 10; j++) {
      console.log(`${j}번째 페이지 불러오는중..`);
      try {
        const html = await axios.get(
          "https://quasarzone.com/bbs/qb_food?page=" + j
        );

        const $ = cheerio.load(html.data);
        const bodyList = $("div.dabate-type-list tbody tr");

        for (let i = 0; i < bodyList.length; i++) {
          const num = $(bodyList[i])
            .find("p.tit a.subject-link")[0]
            .attribs.href.substring(13);

          try {
            const innerHtml = await axios.get(
              "https://quasarzone.com/bbs/qb_food/" + num
            );
            const $2 = cheerio.load(innerHtml.data);
            const bodyList2 = $2("div.common-view-wrap");

            bodyList2.each((i2, elem2) => {
              const item = {
                title: $2(elem2)
                  .find("dl dt h1.title")
                  .text()
                  .replace(/\s/g, ""),
                writer: $2(elem2)
                  .find("dl dt div.user-nick-wrap")
                  .attr("data-nick"),
                date: $2(elem2).find("dl dt p.right span.date").text(),
                clicked: $2(elem2).find("dl dt span.count em.view").text(),
                content: $2(elem2)
                  .find("dl dd textarea")
                  .text()
                  .replaceAll("<p>", "")
                  .replaceAll("</p>", ""),
              };
              ulList.push(item);
            });
          } catch (error) {
            console.log(error);
          }
        }
      } catch (error) {
        console.log(error);
      }
    }

    setList(ulList);
  };

  useEffect(() => {
    getHTML();
  }, []);

  return (
    <div>
      {list.map((e, index) => (
        <div key={index}>
          <p>{"{"}</p>
          <p>"title": "{e.title}",</p>
          <p>"writer": "{e.writer}",</p>
          <p>"date": "{e.date}",</p>
          <p>"clicked": "{e.clicked}",</p>
          <p>"content": "{e.content.replaceAll('"', "'")}"</p>
          <p>{"},"}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
