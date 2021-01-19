
/**
 * 该文件由 .my/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M1015.8 500.8c-5.5-13.2-13.8-25.3-24.9-36.2-14.5-14.5-51-24.2-73.8-29-12-2.5-21.4-11.7-24.4-23.5l-47.5-189.5c-7.5-31.2-25-57.6-52-78.7s-56.8-31.8-89.5-31.8h-384c-32.6 0-62.5 10.6-89.5 31.8-26.9 21.1-44.3 47.4-52 78.7L130.8 412c-3 11.9-12.4 21-24.4 23.5-22.8 4.8-59.2 14.5-73.8 29C10.9 486.3 0 512.8 0 543.8v192c0 4.7 1.4 8.5 4.5 11.5 2.9 2.9 6.9 4.5 11.5 4.5h48v64c0 26.6 9 49.4 27.8 68.1 18.8 18.7 41.3 28 68.1 28s49.4-9.5 68.1-28c18.7-18.8 28-41.3 28-68.1v-64h512v64c0 26.6 9.2 49.3 27.8 68 18.8 18.7 41.3 28 68.1 28s49.4-9.5 68.1-28c18.7-18.8 28-41.3 28-68.1v-63.9h48c4.7 0 8.5-1.4 11.5-4.5 2.9-2.9 4.5-6.9 4.5-11.5v-192c0-15.5-2.7-29.8-8.2-43z m-55.8 187h-64v0.2h-64v-0.2H192v0.2h-64v-0.2H64v-144c0-13.3 3.7-23 12.2-32.3 4.4-2.4 17.9-8 43.4-13.4 35.6-7.5 64.4-35.2 73.2-70.6L240.3 238v-0.4c4.2-17.3 13.6-31.2 29.3-43.6 15.8-12.4 31.7-18.1 50-18.1h384c18.3 0 34.2 5.8 50 18.2 15.7 12.3 25 26.1 29.2 43.4l0.1 0.3 0.1 0.3 47.5 189.5c8.9 35.3 37.6 63 73.2 70.6 25.8 5.5 39.3 11.1 43.7 13.5 8.9 9.3 12.6 18.8 12.6 32.2v143.9zM216.6 648.4C232.2 632.8 240 614 240 592s-7.9-40.8-23.4-56.4c-15.6-15.6-34.4-23.4-56.4-23.4s-40.8 7.9-56.4 23.4C88.2 551.2 80.4 570 80.4 592s7.8 40.8 23.4 56.4c15.6 15.6 34.4 23.4 56.3 23.4s40.7-7.8 56.5-23.4zM299 431.8h426.1c20.8 0 36.1-19.6 31-39.8l-34.6-138.7c-0.6-2.7-3.1-5.6-7-8.7s-7.4-4.7-10.5-4.7H320c-3.1 0-6.5 1.5-10.5 4.7s-6.3 6.1-7 8.7c0 0-21.4 86.1-34.5 138.7-5.1 20.3 10.2 39.8 31 39.8z m621.6 216.6C936.2 632.8 944 614 944 592s-7.9-40.8-23.4-56.4c-15.6-15.6-34.4-23.4-56.4-23.4s-40.8 7.9-56.4 23.4c-15.6 15.6-23.4 34.4-23.4 56.4s7.8 40.8 23.4 56.4c15.6 15.6 34.4 23.4 56.3 23.4 21.8 0 40.7-7.8 56.5-23.4z"/>
    </svg>
  )
}

Vue.component('icon-car2', Icon)
export default Icon
