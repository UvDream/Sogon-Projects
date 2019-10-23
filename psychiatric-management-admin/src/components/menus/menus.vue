<!--
 * @Author: wangzhongjie
 * @Date: 2019-10-22 13:52:01
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2019-10-23 17:03:31
 * @Description: 菜单
 * @Email: UvDream@163.com
 -->
<template>
  <Menu theme="light" :open-names="openKey" :active-name="activeName" width="auto">
    <MenuItem
      v-for="(item) in menusList"
      :key="item.id+'sh'"
      :name="item.id"
      :to="item.url"
      v-show="!item.children"
    >
      <Icon type="md-document" />
      {{item.name}}
    </MenuItem>
    <Submenu v-for="(item,index) in menusList" :key="index" :name="item.id" v-show="item.children">
      <template slot="title">
        <Icon :type="item.icon" />
        {{item.name}}
      </template>
      <MenuItem
        v-for="(items,index) in item.children"
        :key="index"
        :name="items.id"
        :to="items.url"
      >{{items.name}}</MenuItem>
    </Submenu>
  </Menu>
</template>

<script>
export default {
  data() {
    return {
      openKey: ["1"],
      activeName: "3"
    };
  },
  props: {
    menusList: {
      type: Array,
      default: function() {
        return [];
      }
    }
  },
  computed: {
    isCollapsed: function() {
      return this.$store.state.isCollapsed;
    }
  },
  watch: {},
  mounted() {
    this.activeName = this.activeFunc(this.$route.path);
  },
  methods: {
    activeFunc(path) {
      let num;
      this.menusList.forEach(element => {
        element.url == path ? (num = element.id) : "";
        element.children
          ? element.children.forEach(item => {
              item.url === path ? (num = item.id) : "";
            })
          : "";
      });
      return num;
    }
  }
};
</script>

<style scoped lang="less">
</style>