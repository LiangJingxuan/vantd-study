<template>
  <div>
    <!-- 新增与查询条件 -->
    <a-form-model layout="inline" :model="form">
      <a-button type="primary" icon="plus">新增房源</a-button>
      <a-form-model-item label="编号" class="form-search">
        <a-input v-model="form.fieldA" placeholder="房源编号" />
      </a-form-model-item>
      <a-form-model-item label="单元">
        <a-input v-model="form.fieldB" placeholder="单元楼号" />
      </a-form-model-item>
      <a-form-model-item label="日期">
        <a-date-picker placeholder="添加日期" />
      </a-form-model-item>
      <a-form-model-item label="标签">
        <a-select show-search placeholder="标签属性" option-filter-prop="children" style="width: 200px">
          <a-select-option value="押一付一">押一付一</a-select-option>
          <a-select-option value="随时可看">随时可看</a-select-option>
          <a-select-option value="精装修">精装修</a-select-option>
          <a-select-option value="家电齐全">家电齐全</a-select-option>
          <a-select-option value="单身公寓">单身公寓</a-select-option>
          <a-select-option value="临近地铁">临近地铁</a-select-option>
        </a-select>
      </a-form-model-item>
      <a-form-model-item>
        <a-button>搜索</a-button>
        <a-button>重置</a-button>
      </a-form-model-item>
    </a-form-model>
    <!-- 数据展示 -->
    <a-table class="tables" :columns="columns" :data-source="data" rowKey="id" :pagination="true">
      <span slot="action">
        <a>编辑</a>
        <a-divider type="vertical" />
        <a>删除</a>
      </span>
    </a-table>
  </div>
</template>
<script>
const columns = [
  {
    dataIndex: "id",
    title: "编号",
  },
  {
    dataIndex: "houseName",
    title: "小区",
  },
  {
    dataIndex: "ridgepole",
    title: "单元楼号",
  },
  {
    dataIndex: "department",
    title: "部门",
  },
  {
    dataIndex: "user",
    title: "人员",
  },
  {
    dataIndex: "addTime",
    title: "添加时间",
  },
  {
    title: "操作",
    scopedSlots: { customRender: "action" },
  },
];
const data = [
  {
    id: "895232",
    houseName: "育新花园",
    ridgepole: "2号楼4单元",
    department: "中心店A组",
    user: "许宏高娃",
    addTime: "2020-09-11",
  },
  {
    id: "895567",
    houseName: "育新花园",
    ridgepole: "2号楼4单元",
    department: "中心店A组",
    user: "许宏高娃",
    addTime: "2020-09-11",
  },
  {
    id: "125486",
    houseName: "育新花园",
    ridgepole: "2号楼4单元",
    department: "中心店A组",
    user: "许宏高娃",
    addTime: "2020-09-11",
  },
  {
    id: "365289",
    houseName: "育新花园",
    ridgepole: "2号楼4单元",
    department: "中心店A组",
    user: "许宏高娃",
    addTime: "2020-09-11",
  },
];

export default {
  data() {
    return {
      data,
      columns,
      form: {
        layout: "inline",
        fieldA: "",
        fieldB: "",
      },
    };
  },
};
</script>

<style lang="less" scoped>
.form-search {
  margin-left: 20px;
  vertical-align: middle;
}
.tables {
  margin-top: 20px;
}
</style>