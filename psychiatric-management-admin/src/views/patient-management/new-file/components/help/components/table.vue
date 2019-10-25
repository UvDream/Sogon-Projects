<!--
 * @Author: wangzhongjie
 * @Date: 2019-10-25 10:24:24
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2019-10-25 10:27:01
 * @Description: 表格
 * @Email: UvDream@163.com
 -->
 <template>
  <div>
    <div class="all-check">
      <div>
        <section @click="handleSelectAll(true)">全选</section>
        <section @click="handleSelectAll(false)">取消全选</section>
      </div>
      <section>删除</section>
      <span style="line-height:40px;margin-left:10px">
        <Icon type="ios-sync" />刷新
      </span>
    </div>
    <!-- 表格 -->
    <div class="table">
      <Table border ref="selection" :columns="columns" :data="data"></Table>
    </div>
    <div class="add">
      <div>
        <Icon type="ios-add-circle-outline" style="margin-right:5px" />添加信息
      </div>
    </div>
    <div class="table-foot">
      <Button type="primary" ghost>确认病患康复</Button>
      <Page :total="40" size="small" show-elevator show-sizer show-total />
    </div>
  </div>
</template>
 
 <script>
export default {
  data() {
    return {
      // 表格
      columns: [
        {
          type: "selection",
          width: 60,
          align: "center"
        },
        {
          title: "Name",
          key: "name"
        },
        {
          title: "Age",
          key: "age"
        },
        {
          title: "Address",
          key: "address"
        }
      ],
      data: [
        {
          name: "John Brown",
          age: 18,
          address: "New York No. 1 Lake Park",
          date: "2016-10-03"
        },
        {
          name: "Jim Green",
          age: 24,
          address: "London No. 1 Lake Park",
          date: "2016-10-01"
        },
        {
          name: "Joe Black",
          age: 30,
          address: "Sydney No. 1 Lake Park",
          date: "2016-10-02"
        },
        {
          name: "Jon Snow",
          age: 26,
          address: "Ottawa No. 2 Lake Park",
          date: "2016-10-04"
        }
      ]
    };
  },
  methdos: {
    handleSelectAll(status) {
      this.$refs.selection.selectAll(status);
    }
  }
};
</script>
 

<style scoped lang="less">
.add {
  color: #53a7a9;
  font-size: 16px;
  padding-left: 25px;
}
.table {
  margin: 10px 25px;
  &-foot {
    display: flex;
    height: 60px;
    align-items: center;
    justify-content: space-between;
    padding: 0 25px;
  }
}

.all-check {
  display: flex;
  padding-left: 25px;
  color: #5e6166;
  & > div {
    display: flex;
    border-radius: 4px;
    & > section {
      border: 1px solid #dde2e2;
      height: 40px;
      padding: 0 20px;
      line-height: 40px;
      cursor: default;
    }
    & > section:nth-child(1) {
      border-right: none;
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
    }
    & > section:nth-child(2) {
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
      border-left: none;
      position: relative;
      &::before {
        content: "";
        position: absolute;
        left: 0;
        top: 5px;
        width: 1px;
        height: 30px;
        background-color: #dde2e2;
      }
    }
  }
  & > span {
    cursor: default;
  }
  & > section {
    margin-left: 10px;
    height: 40px;
    padding: 0 20px;
    line-height: 40px;
    text-align: center;
    border: 1px solid #dde2e2;
    border-radius: 4px;
  }
}
</style>