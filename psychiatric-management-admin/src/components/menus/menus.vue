<!--
 * @Author: wangzhongjie
 * @Date: 2019-10-22 13:52:01
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2019-10-23 16:31:48
 * @Description: 菜单
 * @Email: UvDream@163.com
 -->
<template>
  <Menu theme="light" :open-names="['1']" width="auto" :class="menuitemClasses">
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

<style scoped lang="less">
</style>