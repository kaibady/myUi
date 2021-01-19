
/**
 * 该文件由 .my/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M999.95475 810.3c-3.4 115.1 4.4 140.3-17.3 155.7-9.7 6.9-22.7 10.1-38 10.1-88.9 0-254.1-108.2-273.4-235-8.4-55.2 13.8-83.2 0-155.7-11.5-60.3-49.3-108.5-80.6-142.2L550.55475 425c-12.2-5.6-25.4-8.3-38.5-8.3-13.2 0-26.3 2.8-38.5 8.3l-40.1 18.2c-31.3 33.7-69.1 82-80.6 142.2-13.8 72.5 8.4 100.5 0 155.7-19.3 126.9-184.5 235-273.4 235-15.3 0-28.4-3.2-38-10.1-21.7-15.5-13.9-40.6-17.3-155.7-6.4-220-37.8-231.9-17.3-328.8 7.7-36.7 34.3-139.5 121.1-224.9 68.9-67.8 163.9-112.8 214-112.8 12.7 0 22.5 2.9 28.3 9 15.2 16.2 6 58.6 0 86.5-9 41.8-24.7 61.5-17.3 69.2 4.4 4.7 31.8 60.7 72.5 68l0.3-0.2c33.2-15.1 54.6-48.3 54.6-84.8V55.8c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v236c0 36.5 21.3 69.7 54.6 84.8 40.7-7.3 68.1-63.3 72.5-68 7.4-7.7-8.3-27.5-17.3-69.2-6-27.9-15.2-70.4 0-86.5 5.8-6.1 15.6-9 28.3-9 50.1 0 145.1 45 214 112.8 86.8 85.4 113.4 188.3 121.1 224.9 20.1 96.9-11.2 108.8-17.6 328.7z"/>
    </svg>
  )
}

Vue.component('icon-breathe-fill', Icon)
export default Icon
