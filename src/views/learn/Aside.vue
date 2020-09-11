<template>
  <div id="Aside">
    <ul class="menu">
      <li v-for="item in provinces" :key="item.id">
        {{item.name}}
        <div v-if="item.cities && item.cities.length" class="layer1">
          <div class="menu2" v-for="c in item.cities" :key="c.id">
            {{c.name}}
            <template v-if="c.district && c.district.length">
              <div class="arrow"></div>
              <div class="layer2">
                <div class="menu3" v-for="d in c.district" :key="d.id">{{d.name}}</div>
              </div>
            </template>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      provinces: [
        {
          id: 1,
          name: "江苏",
          cities: [
            {
              id: 11,
              name: "南京",
              district: [
                {
                  id: 111,
                  name: "鼓楼",
                },
                {
                  id: 112,
                  name: "宣武",
                },
              ],
            },
            {
              id: 12,
              name: "淮安",
            },
            {
              id: 13,
              name: "盐城",
              district: [
                {
                  id: 131,
                  name: "东台",
                },
                {
                  id: 132,
                  name: "大丰",
                },
              ],
            },
          ],
        },
        {
          id: 2,
          name: "浙江",
          cities: [
            {
              id: 21,
              name: "杭州",
              district: [
                {
                  id: 211,
                  name: "西湖",
                },
                {
                  id: 212,
                  name: "上城",
                },
                {
                  id: 213,
                  name: "下城",
                },
              ],
            },
            {
              id: 22,
              name: "温州",
            },
            {
              id: 23,
              name: "舟山",
            },
          ],
        },
        {
          id: 3,
          name: "广东",
        },
      ],
    };
  },
};
</script>
<style lang="less" scoped>
#Aside {
  .menu {
    width: 500px;
    display: flex;
    li {
      flex: 1;
      width: 120px;
      text-align: center;
      padding: 10px;
      list-style: none;
      position: relative;
      &:hover {
        background: red;
        color: #fff;
        cursor: pointer;
        .layer1 {
          display: block;
        }
      }
      .layer1 {
        position: absolute;
        width: 100%;
        left: 0;
        top: 100%;
        display: none;
        background: orange;
      }
    }
  }
  .menu2, .menu3 {
    padding: 10px;
    position: relative;
    display: flex;
    align-items: center;
    &:hover {
      background: yellow;
      color: orange;
      .layer2 {
        display: block;
      }
    }
    .layer2 {
      width: 120px;
      background: red;
      position: absolute;
      left: 100%;
      top: 0;
      display: none;
    }
  }
  .arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 5px;
    width: 0;
    height: 0px;
    border-width: 100px;
    border: 5px solid #ccc;
    border-color: transparent transparent transparent orange;
  }
}
</style>