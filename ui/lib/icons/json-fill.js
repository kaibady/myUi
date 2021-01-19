
/**
 * 该文件由 .my/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M1008 464h-72c-4.4 0-8-3.6-8-8V314.5c0-17-6.7-33.3-18.7-45.3L658.7 18.7C646.7 6.7 630.5 0 613.5 0H144c-26.5 0-48 21.5-48 48v408c0 4.4-3.6 8-8 8H16c-8.8 0-16 7.2-16 16v400c0 8.8 7.2 16 16 16h80c0 35.3 14.3 67.3 37.5 90.5 23.2 23.2 55.2 37.5 90.5 37.5h656c26.5 0 48-21.5 48-48v-64c0-8.8 7.2-16 16-16h64c8.8 0 16-7.2 16-16V480c0-8.8-7.2-16-16-16zM704 154.5l69.5 69.5H708c-2.2 0-4-1.8-4-4v-65.5zM160 72c0-4.4 3.6-8 8-8h408c35.3 0 64 28.7 64 64v144c0 8.8 7.2 16 16 16h144c35.3 0 64 28.7 64 64v104c0 4.4-3.6 8-8 8H168c-4.4 0-8-3.6-8-8V72z m492.3 603.5c0 32.5-9.5 58.9-28.4 79.1-18.9 20.3-43.7 30.4-74.3 30.4-29.9 0-54.2-9.8-72.9-29.4-18.5-19.6-27.9-44.9-27.9-75.8 0-32.7 9.5-59.3 28.6-79.8s44.3-30.8 75.6-30.8c29.8 0 53.8 9.9 72 29.8 18.2 19.8 27.3 45.4 27.3 76.5z m-365.9 53.3c16.9 13.9 35.9 20.9 57.3 20.9 12.1 0 21.2-2.1 27.3-6.3 6.1-4.2 9.2-9.5 9.2-16.1 0-5.7-2.4-11-7.3-16s-17.6-11.9-38.4-20.5c-32.6-13.8-48.9-33.9-48.9-60.4 0-19.4 7.4-34.5 22.2-45.2s34.3-16.1 58.7-16.1c20.4 0 37.5 2.7 51.3 7.9v41.8c-14-9.5-30.4-14.3-49.2-14.3-11 0-19.7 2-26.3 6-6.6 4-9.8 9.4-9.8 16.1 0 5.4 2.2 10.4 6.7 14.9s15.6 10.7 33.3 18.4c20.7 8.9 35 18.3 42.8 28.2 7.8 9.9 11.7 21.6 11.7 35.3 0 20-7.1 35.3-21.3 45.8S371.3 785 345.2 785c-23.9 0-43.5-3.9-58.7-11.6l-0.1-44.6c0.1 0 0 0 0 0z m-139.6 8.9c7.7 5.8 16.5 8.8 26.4 8.8 21.4 0 32.1-16.2 32.1-48.6V572.7h44.5v126.8h-0.1c0 27.6-6.4 48.7-19.1 63.5-12.7 14.6-30.9 22-54.6 22-10.5 0-20.3-1.8-29.2-5.4v-41.9zM864 952c0 4.4-3.6 8-8 8H224c-35.3 0-64-28.7-64-64h696c4.4 0 8 3.6 8 8v48z m9.2-170.6h-45.5l-88.4-135c-4.6-7-7.9-12.7-10-17h-0.7c0.8 7.2 1.2 18.3 1.2 33.3v118.7h-42.2V572.7h48.5l85.1 131.2c5.7 8.7 9.1 14.2 10.4 16.6h0.7c-0.9-5-1.3-14.6-1.3-28.8v-119h42.2v208.7zM286.5 728.8s-0.1 0 0 0zM605.8 678.2c0 20.9-4.8 37.5-14.5 49.8s-23.3 18.5-40.7 18.5c-17.1 0-30.5-6.4-40.3-19.3-9.8-12.9-14.7-29.5-14.7-49.8 0-20.6 5-37.3 15-50.2 10.1-12.9 23.8-19.4 41.2-19.4 17.2 0 30.5 6.3 39.9 18.9 9.4 12.6 14.1 29.8 14.1 51.5z"/>
    </svg>
  )
}

Vue.component('icon-json-fill', Icon)
export default Icon
