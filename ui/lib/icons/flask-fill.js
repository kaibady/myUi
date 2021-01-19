
/**
 * 该文件由 .my/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M915.823948 833.230409L705.567678 460.78501C672.989948 403.224358 655.90163 338.268762 655.90163 272.113985V127.91256C655.90163 57.260857 598.640773 0 527.98907 0h-47.96721c-70.651703 0-127.91256 57.260857-127.91256 127.91256v147.998829c0 63.656485-15.889138 126.413584-46.168439 182.375329L166.536157 716.410266l-4.297063 7.994535-59.959012 110.924173c-46.068508 85.241729 15.689275 188.671026 112.52308 188.671026h589.596955c98.032985 0 159.590905-105.527862 111.423831-190.769591z m-665.545037-137.206207l111.92349-207.258319c35.175954-65.15546 53.763248-138.705182 53.763247-212.754563V127.91256c0-35.375817 28.680394-63.95628 63.95628-63.95628h47.96721c35.275886 0 63.95628 28.580463 63.95628 63.95628v144.201425c0 77.047331 19.986337 153.195277 57.860447 220.149507L734.747731 642.560749c1.898702 3.397677-1.698839 7.295013-5.296379 5.496243-3.097882-1.598907-6.195765-2.997951-9.293647-4.396994-39.972675-18.287499-79.245828-24.982922-116.620279-19.786474-41.571582 5.796038-69.252659 24.483263-96.034352 42.470967-20.186201 13.590709-41.071923 27.681077-71.05143 39.273153-52.064409 20.186201-110.72431 24.683127-174.880452 13.59071-10.792622-1.698839-16.488728-13.690641-11.292281-23.184152zM166.536157 716.410266l-4.297063 7.994535c1.099249-2.898019 2.498292-5.596174 4.297063-7.994535z"/>
    </svg>
  )
}

Vue.component('icon-flask-fill', Icon)
export default Icon
