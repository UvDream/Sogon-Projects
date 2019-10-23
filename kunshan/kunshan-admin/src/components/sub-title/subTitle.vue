<template>
    <div class="dashboard-bottom-left-title">
        <a-icon
        type="file-text"
        style="margin:0 10px 0px 20px;font-size:18px;position:relative;top:3px;"
        />
        <span style="font-size:12px">{{title}}</span>
        <a-checkbox style="margin-left:10px" v-if="isCheck">勾选</a-checkbox>
    </div>
</template>

<script>
export default {
    props: {
        isCheck: {
            type: Boolean,
            default: false
        },
        title: {
            default: "副标题"
        }
    },
    data(){
        return {

        }
    }
}
</script>

<style lang="less" scoped>
@import url("../../views/police-quality/policeQuality.less");
</style>