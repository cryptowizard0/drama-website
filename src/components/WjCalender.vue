<template>
  <div class="wj-calender">
    <div>
      <img src="../assets/img/ls/meter.png" alt="" />
    </div>
    <div class="wj-calender_box">
      <el-calendar v-model="value">
        <!-- 这里使用的是 2.5 slot 语法，对于新项目请使用 2.6 slot 语法-->
        <template slot="dateCell" slot-scope="{ date, data }">
          <div :class="getCalendarDay(data.day).class">
            {{ getCalendarDay(data.day).text }}
          </div>
        </template>
      </el-calendar>
      <div>
        <div id="myChart"></div>
      </div>
      <div>
        <el-card class="box-card">
          <div slot="header">
            <div class="wj_calender_title">
              {{ info.title }}
            </div>
          </div>
          <div class="wj-card_box">
            <div>{{ info.describtion }}</div>
            <div>{{ info.time }}</div>
          </div>
        </el-card>
      </div>
    </div>
    <div class="wj-border">
      <div class="wj_animation">
        <img :src="getImgSrc(i)" v-for="i in borderList" :key="i" />
      </div>
    </div>
  </div>
</template>
<script>
import { queryList } from "../urls/request";
import * as echarts from "echarts";
import WjWindow from "./WjWindow.vue";
import { getWeekdaysList, formatDay } from "../libs/day";
import tou from "../assets/img/nav/tou.png";
export default {
  name: "WjCalender",
  components: {
    WjWindow,
  },
  data() {
    return {
      value: new Date(),
      dataList: [],
      info: {
        describtion: "",
        score: 0,
        time: "",
        title: "",
      },
      borderList: Array.from({ length: 65 * 2 }, (v, k) => k).map((v) => v + 1),
    };
  },
  methods: {
    async getData() {
      // console.log(queryList);
      const { data, status } = await queryList();
      if (status !== 200) {
        this.$message.error("数据异常");
        return;
      }
      this.dataList = data;
    },
    initChart(day) {
      const { dataList } = this;
      const _time = getWeekdaysList(day, 7, "YYYY-MM-DD");
      const _data = getWeekdaysList(day, 7, "YYYY-MM-DD").map((item) => {
        return dataList.find((oi) => oi.time == item)?.score || 0;
      });
      // console.log(_data);
      // console.log(day);
      const myChart = echarts.init(document.getElementById("myChart"));
      const option = {
        xAxis: {
          type: "category",
          data: getWeekdaysList(day),
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: _data,
            selectedMode: "single",
            type: "bar",
            emphasis: {
              focus: "none",
            },
            select: {
              itemStyle: { color: "#fff" },
              label: {
                show: true,
                position: "inside",
                formatter: ["{b|\b}"].join("\n"),

                rich: {
                  b: {
                    backgroundColor: {
                      image: tou,
                    },
                    height: 40,
                    width: 40,
                  },
                },
              },
            },
          },
        ],
      };
      myChart.setOption(option);
      if (_data.at(3) != 0) {
        myChart.dispatchAction({
          type: "select",
          seriesIndex: 0,
          dataIndex: 3,
        });
      } else {
        myChart.dispatchAction({
          type: "select",
          seriesIndex: 0,
          dataIndex: null,
        });
      }
      this.getCardInfo(day);
      myChart.off("click");
      const that = this;
      myChart.on("click", function (params) {
        const { dataIndex } = params;
        myChart.dispatchAction({
          type: "select",
          seriesIndex: 0,
          dataIndex,
        });
        that.getCardInfo(_time[dataIndex]);
      });
      window.addEventListener("resize", () => {
        myChart.resize()
      })
    },
    getCardInfo(day) {
      const _day = formatDay(day, "YYYY-MM-DD");
      const { dataList } = this;
      const info = dataList.find((item) => item.time == _day) || {
        describtion: "--",
        score: 0,
        time: _day,
        title: "--",
      };
      this.info = info;
    },
  },
  watch: {
    value: {
      handler(val) {
        this.$nextTick(() => {
          this.initChart(val);
        });
      },
      immediate: true,
    },
  },
  computed: {
    getCalendarDay() {
      return (day) => {
        const { dataList } = this;
        if (!dataList) return {};
        const score =
          dataList.find((item) => {
            return item.time == day;
          })?.score || 0;
        const codeImg = (score) => {
          if (score > 80) return "wj-hfq";
          if (score >= 60) return "wj-bfq";
          if (score > 0) return "wj-lfq";
          return "";
        };
        return { text: day.split("-")[2], class: codeImg(score) };
      };
    },
    getImgSrc() {
      return (index) => {
        let _index;
        if (index > 65) {
          _index = index - 65;
          return require(`../assets/img/picgroup/${_index}.png`);
        }
        _index = index;
        return require(`../assets/img/picgroup/${_index}.png`);
      };
    },
  },
  mounted() {
    this.getData();
  },
};
</script>
<style lang="scss" scoped>
.wj-calender {
  margin: 20px 25px 0 25px;
  text-align: center;

  > :nth-child(1) {
    padding-top: 20px;
    background: #f6fca9;

    img {
      width: 1200px;
    }
  }

  .wj-calender_box {
    display: flex;
    background: #f6fca9;

    >div {
      flex: 1;
      width: 100%;
      background: transparent;
    }

    img {
      width: 100%;
    }

    > :nth-child(2) {
      display: flex;
      flex-direction: column;

      #myChart {
        width: 100%;
        flex: 1;
      }
    }

    > :last-child {
      padding: 0.375rem 0.625rem 1.09375rem;
    }
  }

  .wj_calender_title {
    padding-left: 20px;
    font-size: 40px;
    font-weight: bold;
  }

  @keyframes run {
    to {
      transform: translateX(0%);
    }
  }

  .wj_animation {
    transform: translateX(-578%);
    animation: run 180s linear infinite;
  }
}
</style>
<style lang="scss">
.wj-calender .el-calendar-table th {
  text-align: center;
}

.el-message-box.wj-chart-win {
  width: 80%;
}

.el-calendar-day div {
  background-position: cover !important;
}

.wj-hfq {
  background-image: url(../assets/img/ls/IMG_3061.png);
  background-size: 80% 80%;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.wj-bfq {
  background-image: url(../assets/img/ls/IMG_3060.png);
  background-size: 80% 80%;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.wj-lfq {
  background-image: url(../assets/img/ls/IMG_3062.png);
  background-size: 80% 80%;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.el-calendar-day {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 !important;
}

.box-card {
  height: calc(100%);
  box-shadow: none !important;
  text-align: left !important;
  display: flex;
  flex-direction: column;

  .el-card__body {
    flex: 1;
    background: transparent;
  }

}

.el-calendar {
  background: transparent;

  .el-calendar-table .el-calendar-day:hover {
    background-color: #d06776 !important;
    color: #fff !important;
  }

  .is-selected,
  .is-today {
    background-color: #d06776 !important;
    color: #fff !important;
  }
}

.wj-card_box {
  display: flex;
  flex-direction: column;
  height: 100%;

  padding: 20px;
  box-sizing: border-box;

  .el-card__body {
    height: 100%;
  }

  > :nth-child(1) {
    flex: 1;
  }

  > :nth-child(2) {
    text-align: right;
    color: #666;
    font-size: 14px;
  }
}

.wj-border {
  overflow: hidden;
  height: 280px;

  div {
    height: 280px;
    white-space: nowrap;

    img {
      width: 280px;
      height: 280px;
    }
  }
}

.el-card {
  background-color: transparent !important;
}


.el-button {
  background-color: #d06776 !important;
  color: #fff !important;
}
</style>
