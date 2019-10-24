<template>
  <div class="white-block">
    <TopTitle :title="'严重患者精神障碍排查登记'" v-model="closed" />
    <div class="form">
        
    </div>
  </div>
</template>

<script>
import TopTitle from "../../../../components/top-title/top-title";

export default {
  components: {
    TopTitle
  },
  data() {
    return {
      closed: false
    };
  }
};
</script>

<style scoped lang="less">
</style>