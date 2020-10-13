<template>
  <div>
    <!-- 新增与查询条件 -->
    <a-form-model layout="inline" :model="form">
      <a-button @click="visible = true" type="primary" icon="plus"
        >新增房源</a-button
      >
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
        <a-select
          show-search
          placeholder="标签属性"
          option-filter-prop="children"
          style="width: 200px"
        >
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
    <a-table
      class="tables"
      :columns="columns"
      :data-source="data"
      rowKey="id"
      :pagination="true"
    >
      <span slot="action" slot-scope="record">
        <a>编辑</a>
        <a-divider type="vertical" />
        <a @click="del(record.id)">收藏</a>
      </span>
    </a-table>
    <!-- 新增 -->
    <a-modal
      title="新增房源"
      :visible="visible"
      :confirm-loading="confirmLoading"
      :maskClosable="false"
      @ok="handleOk"
      @cancel="handleCancel"
    >
      <a-form
        class="ant-advanced-search-form"
        :form="form"
      >
        <a-row :gutter="24">
          <a-col v-for="i in 10" :key="i" :span="8"> </a-col>
        </a-row>
      </a-form>
    </a-modal>
  </div>
</template>
<script>
import { house } from "../request";

const columns = [
  {
    dataIndex: "id",
    title: "编号",
  },
  {
    dataIndex: "housesName",
    title: "小区",
  },
  {
    dataIndex: "houseType",
    title: "户型",
  },
  {
    dataIndex: "secordDeptName",
    title: "部门",
  },
  {
    dataIndex: "secordUserName",
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
export default {
  data() {
    return {
      data: [],
      columns,
      form: {
        layout: "inline",
        fieldA: "",
        fieldB: "",
      },
      visible: false,
      confirmLoading: false,
    };
  },
  created() {
    this.getHouseList();
  },
  methods: {
    async getHouseList() {
      const list = await house.houseList({ page: 1, pagesize: 50 });
      this.data = list.data.dataList;
    },
    del(rentHouseId) {
      this.$confirm({
        title: "是否执行此操作?",
        onOk: async () => {
          const { data } = await house.houseCollect({ rentHouseId });
          if (data.success) {
            this.$message.success(data.msg);
            this.getHouseList();
          }
        },
      });
    },
    handleCancel() {
      this.visible = false;
    },
    handleOk() {},
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