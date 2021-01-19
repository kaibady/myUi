
/**
 * 该文件由 .my/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M941.579256 406.004875c-5.199885-1.699963-9.0998-6.099866-10.399771-11.499746C881.880571 186.609709 694.984689 32.013115 471.989601 32.013115c-35.899209 0-70.79844 3.999912-104.297702 11.599744-5.599877 1.299971-11.399749-0.499989-15.299663-4.699896C330.89271 15.41348 300.093389 0.513809 265.894142 0.01382 199.6956-0.986158 144.79681 52.412665 143.996828 118.511209c-0.099998 10.89976 1.199974 21.399529 3.799916 31.399308 1.399969 5.499879-0.399991 11.299751-4.399903 15.299663C54.898791 251.00829 0 371.105644 0 504.002716c0 140.596902 61.498645 266.89412 158.996497 353.292217 4.599899 3.999912 6.399859 10.299773 4.899892 16.199643-2.599943 9.799784-3.899914 19.999559-3.899914 30.599326 0.099998 66.498535 54.998788 120.697341 121.497323 119.897358 41.899077-0.499989 78.598268-22.499504 99.697804-55.498777 0.399991-0.699985 1.199974-0.999978 1.999956-0.89998 28.799366 5.499879 58.398713 8.399815 88.798043 8.399815 210.795356 0 389.291423-138.196955 449.890089-328.892754 1.699963-5.299883 5.89987-9.299795 11.299751-10.699765 52.19885-12.999714 90.798-60.198674 90.797999-116.397435 0-53.09883-34.49924-98.197837-82.398184-113.997489z m-86.798088 239.394726c-2.199952 5.799872-4.399903 11.599744-6.899848 17.399617-20.499548 48.598929-49.998898 92.197969-87.498072 129.697142s-81.098213 66.898526-129.697143 87.498073c-50.298892 21.299531-103.697715 31.999295-158.796501 31.999295-23.799476 0-47.298958-1.999956-70.398449-5.999868-0.89998-0.199996-1.599965-0.999978-1.599965-1.999956 0-66.298539-53.698817-119.997356-119.997356-119.997356-24.599458 0-47.498954 7.399837-66.498535 20.099557-6.199863 4.09991-14.299685 3.399925-19.699566-1.699963-3.499923-3.299927-6.899848-6.599855-10.299773-9.899782C145.996784 754.997186 116.597431 711.398147 95.997885 662.799218 74.798352 612.500326 63.99859 559.101502 63.99859 504.002716s10.799762-108.49761 31.999295-158.796501c19.199577-45.498998 46.198982-86.598092 80.398229-122.397304l0.699984-0.699984c5.399881-5.599877 13.999692-6.499857 20.399551-2.199952 19.299575 12.899716 42.499064 20.299553 67.498513 20.099557 64.89857-0.499989 118.097398-53.398824 118.997378-118.297393v-2.799939c-0.099998-7.799828 5.399881-14.599678 13.099712-16.099645 24.49946-4.499901 49.498909-6.79985 74.898349-6.79985 55.098786 0 108.49761 10.799762 158.796502 31.999295 48.598929 20.499548 92.197969 49.998898 129.697143 87.498072s66.898526 81.098213 87.498072 129.697143c6.399859 15.099667 11.899738 30.599326 16.299641 46.198982 2.199952 7.599833-1.699963 15.599656-8.999802 18.799586C813.282082 428.904371 783.982728 471.003443 783.982728 520.002364c0 45.798991 25.599436 85.598114 63.298605 105.797669 7.099844 3.799916 10.299773 12.099733 7.499835 19.599568zM480.389416 512.00254m-223.995065 0a223.995065 223.995065 0 1 0 447.990131 0 223.995065 223.995065 0 1 0-447.990131 0Z"/>
    </svg>
  )
}

Vue.component('icon-circulation-fill', Icon)
export default Icon
