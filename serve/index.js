const express = require("express");
const app = express();
const axios = require("axios");

const port = 10010; //服务器启动端口
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
      "https://api.notion.com/v1/databases/9c3c747d981540799c2c17aaf3af15b7/query",
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
          Authorization:
            "Bearer secret_lVlC1fCK8kVPwlJqaTZJM3QUSNAygUTtYddPpcRsxac",
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
