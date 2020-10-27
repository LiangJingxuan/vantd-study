<template>
  <div>
    <a-row :gutter="20">
      <a-col :span="12">
        <a-card title="经纪人线下推广" :bordered="false">
          <a-row>
            <a-col :span="12">
              <a-statistic
                title="Active Users"
                :value="112893"
                style="margin-right: 50px"
              />
            </a-col>
            <a-col :span="12">
              <a-statistic
                title="Active Users"
                :value="112893"
                style="margin-right: 50px"
              />
            </a-col>
          </a-row>
          <div ref="c1" class="chart"></div>
        </a-card>
      </a-col>
      <a-col :span="12">
        <a-card title="老客户转介绍" :bordered="false">
          <a-row>
            <a-col :span="12">
              <a-statistic
                title="Active Users"
                :value="112893"
                style="margin-right: 50px"
              />
            </a-col>
            <a-col :span="12">
              <a-statistic
                title="Active Users"
                :value="112893"
                style="margin-right: 50px"
              />
            </a-col>
          </a-row>
          <div ref="c2" class="chart"></div>
        </a-card>
      </a-col>
      <a-col> </a-col>
    </a-row>
  </div>
</template>

<script>
import echarts from "echarts";

export default {
  mounted() {
    this.initChart1();
    this.initChart2();
  },
  methods: {
    initChart1() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(this.$refs.c1);
      // 指定图表的配置项和数据
      var option = {
        title: {
          text: "",
        },
        grid: {
          left: 50,
          right: 50,
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "line",
            axis: "x",
          },
          // formatter: '2020-10-26<br />{b0}: {c0}<br />{b1}: {c1}'
        },
        legend: {
          data: ["经纪人线下推广", "老客户转介绍"],
        },
        xAxis: {
          axisLine: {
            lineStyle: {
              color: "#ccc",
            },
          },
          axisLabel: {
            color: "#000",
          },
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
        },
        yAxis: [
          {
            type: "value",
            name: "经纪人线下推广",
            axisLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            axisLabel: {
              formatter: "{value}",
            },
          },
          {
            type: "value",
            name: "老客户转介绍",
            min: 0,
            max: 40,
            axisLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            axisLabel: {
              formatter: "{value}",
            },
          },
        ],
        color: ["skyblue", "#ada"],
        series: [
          {
            name: "经纪人线下推广",
            type: "line",
            data: [5, 20, 36, 10, 10, 20],
          },
          {
            name: "老客户转介绍",
            type: "line",
            data: [25, 10, 17, 30, 21, 18],
          },
        ],
      };
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    },
    initChart2() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(this.$refs.c2);
      // 指定图表的配置项和数据
      var option = {
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)",
        },
        legend: {
          orient: "vertical",
          right: 10,
          data: ["直接访问", "邮件营销", "联盟广告", "视频广告", "搜索引擎"],
          // formatter() {},
        },
        color: ["skyblue", "#ada"],
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: ["50%", "70%"],
            avoidLabelOverlap: false,
            left: 10,
            right: "10%",
            label: {
              show: false,
              position: "center",
            },
            emphasis: {
              label: {
                show: true,
                fontSize: "30",
                fontWeight: "bold",
              },
            },
            labelLine: {
              show: false,
            },
            data: [
              { value: 335, name: "直接访问" },
              { value: 310, name: "邮件营销" },
              { value: 234, name: "联盟广告" },
              { value: 135, name: "视频广告" },
              { value: 1548, name: "搜索引擎" },
            ],
          },
        ],
      };
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    },
  },
};
</script>

<style>
.chart {
  height: 300px;
  margin-top: 30px;
}
</style>