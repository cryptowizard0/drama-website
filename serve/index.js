const express = require("express");
const app = express();
const axios = require("axios");
const dotenv = require('dotenv').config()

// serve port
const port = 10010;

// notion api - drama index database
const api_addr = `https://api.notion.com/v1/databases/${process.env.NOTION_DATABASE_ID_DRAMA}/query`;

// notion api - auth token
const auth = `Bearer ${process.env.NOTION_TOKEN_DRAMA}`;

app.all("*", function (req, res, next) {
  // //设置允许跨域的域名，*代表允许任意域名跨域
  res.header("Access-Control-Allow-Origin", req.header.origin || "*");
  //允许的header类型
  res.header("Access-Control-Allow-Headers", "*");
  // 跨域允许的请求方式
  res.header("Access-Control-Allow-Methods", "PUT,GET,POST,DELETE,OPTIONS");
  res.header(`Cccess-Control-Allow-Credentials`, true);

  if (req.method == "OPTIONS") {
    res.sendStatus(200);
  } else {
    next();
  }
});

app.get("/api/getData", async function (req, res) {
  console.time();
  try {
    const resData = await axios.post(
      api_addr,
      {
        sorts: [
          {
            property: "Date",
            direction: "descending",
          },
        ],
      },
      {
        timeout: 0,
        headers: {
          "Content-Type": "application/json",
          "Notion-Version": "2022-02-22",
          Authorization: auth,
        },
      }
    );
    console.timeEnd();
    const list = resData.data.results.reduce((cur, item) => {
      return [
        ...cur,
        {
          time: item.properties.Date.date.start,
          describtion: item.properties.Describtion.rich_text[0].text.content,
          score: item.properties.Score.number,
          title: item.properties.Title.title[0].text.content,
        },
      ];
    }, []);
    res.json({ status: 200, data: list });
  } catch (err) {
    console.timeEnd();
    res.json({ status: 202, msg: err });
  }
});

app.listen(port, () => {
  console.log(`serve at： http://localhost:${port}`);
});
