<!--
 * @Author: wangzhongjie
 * @Date: 2019-10-22 13:52:01
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2019-10-22 16:24:50
 * @Description: 菜单
 * @Email: UvDream@163.com
 -->
<template>
  <Menu active-name="1-1" theme="dark" width="auto" :class="menuitemClasses">
    <Submenu v-for="(item,index) in menusList" :key="index" :name="item.id">
      <template slot="title">
        <Icon type="ios-analytics" />
        {{item.name}}
      </template>
      <MenuItem v-for="(items,index) in item.children" :key="index" :name="items.id">{{items.name}}</MenuItem>
    </Submenu>
  </Menu>
</template>

<script>
export default {
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
    },
    rotateIcon() {
      return ["menu-icon", this.isCollapsed ? "rotate-icon" : ""];
    },
    menuitemClasses() {
      return ["menu-item", this.isCollapsed ? "collapsed-menu" : ""];
    }
  }
};
</script>

<style>
</style>