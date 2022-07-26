<template>
  <MyMapHtml v-bind="$attrs"
             ref="html"
             positioning="bottom-center"
             :class="classes"
             :style="{'width': width}"
             v-clickoutside="handleClickOutside">
    <i class="my-map-popup__close el-icon-close" v-if="closable" @click="hide"></i>
    <div v-if="title" class="my-map-popup__title">
      <slot name="title">
        <MyIcon v-if="icon" v-bind="iconProps"></MyIcon>
        {{title}}
      </slot>
    </div>
    <div class="my-map-popup__body" :style="{'height': height}">
      <slot></slot>
    </div>
  </MyMapHtml>
</template>

<script>
  /**
   * 地图弹窗组件
   * @module $ui/map/my-map-popup
   */
  import MyMapHtml from '../my-map-html/Html'
  import {MyIcon} from '$ui'
  import clickoutside from 'element-ui/lib/utils/clickoutside'
  /**
   * 属性参数
   * @member props
   * @property {string} [width] 弹窗主体宽度
   * @property {string} [height] 弹窗主体高度
   * @property {string} [title] 弹窗标题
   * @property {string|object} [icon] 弹窗icon
   * @property {boolean} [closable] 是否可关闭
   * @property {boolean} [closeOnClick] 是否点击外部关闭
   * @property {string} [theme] 样式
   * @property {boolean} [showArrow] 是否显示箭头
   */

  /**
   * slots 插槽
   * @member slot
   * @property {string} default 默认插槽，定义主体内容
   * @property {string} title 头部标题的插槽
   */
  export default {
    name: 'MyMapPopup',
    directives: {
      clickoutside
    },
    components: {
      MyMapHtml,
      MyIcon
    },
    props: {
      width: String,
      height: String,
      title: String,
      icon: [String, Object],
      closable: {
        type: Boolean,
        default: true
      },
      closeOnClick: Boolean,
      theme: {
        type: String,
        default: 'light',
        validator() {
          return ['dark', 'light']
        }
      },
      showArrow: {
        type: Boolean,
        default: true
      }
    },
    computed: {
      iconProps() {
        if (!this.icon) return null
        return typeof this.icon === 'object' ? {...this.icon} : {name: this.icon}
      },
      classes() {
        return ['my-map-popup', `is-${this.theme}`, `${this.showArrow ? 'arrow' : ''}`]
      }
    },
    methods: {
      show(position) {
        const coordinate = position || this.$refs.html.position
        this.$refs.html.setPosition(coordinate)
        this.$emit('show', coordinate)
      },
      hide() {
        this.$refs.html.setPosition(null)
        this.$emit('hide')
      },
      handleClickOutside() {
        if (this.closeOnClick) {
          this.hide()
        }
      }
    }
  }
</script>

