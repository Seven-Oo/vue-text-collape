<template>
  <div class="hw_content" ref="hwC" :style="{lineHeight: `${lineH}px`, height: `${boxH}px`}">
    <div class="mask" @click="showIntro($event)" ref="mask" :style="{height: `${lineH}px`, background: bgColor, color: showColor}">
      <span class="maskSpan">{{showTxt}}</span>
      <i class="triangle-down" :style="{borderTopColor: `${showColor}`}"></i>
      <!-- <i class="iconfont icon-down" :style="{color: `${showColor}`}"></i> -->
    </div>
    <div class="intro">
      {{content}}
      <span class="mask_hide" :style="{height: `${lineH}px`, color: hideColor}" @click="hideIntro($event)">
        {{hideTxt}}
        <!-- <i class="iconfont icon-up" :style="{color: `${hideColor}`}"></i> -->
        <i class="triangle-up" :style="{borderBottomColor: `${hideColor}`}"></i>
      </span>
    </div>
  </div>
</template>
<script>
export default {
name: 'Collape',
components: {},
props: {
  lineH: {
    type: Number,
    required: true
  },
  rowNum: {
    type: Number,
    required: true
  },
  bgColor: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  showTxt: {
    type: String,
    default: '展开'
  },
  hideTxt: {
    type: String,
    default: '收起'
  },
  showColor: {
    type: String,
    required: true
  },
  hideColor: {
    type: String,
    required: true
  }
},
data: () => ({
  boxH: '',
}),
computed: {},
watch: {},
created() {
  this.boxH = this.lineH * this.rowNum
},
mounted() {},
beforeCreate() {}, // 生命周期 - 创建之前
beforeMount() {}, // 生命周期 - 挂载之前
beforeUpdate() {}, // 生命周期 - 更新之前
updated() {}, // 生命周期 - 更新之后
beforeDestroy() {}, // 生命周期 - 销毁之前
destroyed() {}, // 生命周期 - 销毁完成
activated() {},
methods: {
  showIntro:function(el) {
    this.$refs.hwC.style.overflow = "visible";
    this.$refs.mask.style.display = "none";
  },
  hideIntro:function(el) {
    this.$refs.hwC.style.overflow = "hidden";
    this.$refs.mask.style.display = "block";
  }
},
};
</script>
<style>
  .hw_content {
    position: relative;
    overflow: hidden;
    font-size: 14px;
    color: #333;
    width: 80%;
    margin: auto;
  }
  .hw_content .intro {
    text-align: left;
  }
  .mask {
    position: absolute;
    bottom:0;
    left: 70%;
    width: 30%;
    cursor: pointer;
    text-align: left;
  }
  .mask .maskSpan {
    padding-left: 10px;
    position: relative;
  }
  /* .mask .maskSpan:after {
    position: absolute;
    content: '>>';
    right: -30px;
  } */
  .triangle-up {
    display: inline-block;
    vertical-align: middle;
    width: 0;
    height: 0;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-bottom: 6px solid red;
  }
  .triangle-down {
    display: inline-block;
    vertical-align: middle;
    width: 0;
    height: 0;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-top: 6px solid red;
  }
  .mask_hide {
    display: inline-block;
    vertical-align: middle;
    cursor: pointer;
    position: relative;
  }
  /* .mask_hide:after {
    position: absolute;
    content: '<<';
    right: -30px;
  }
  .mask_hide .icon-up {
    vertical-align: middle;
  } */
</style>