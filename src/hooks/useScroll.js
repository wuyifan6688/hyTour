import { onMounted, onUnmounted } from "vue"
import {ref} from "vue"
import {throttle} from "underscore"


export default function useScroll(){
    let isReachBottom=ref(false)
    const clientHeight=ref(0)
    const scrollTop=ref(0)
    const scrollHeight=ref(0)

    const scrollListenerHandler=throttle(()=>{
        clientHeight.value=document.documentElement.clientHeight;
        scrollTop.value=document.documentElement.scrollTop;
        scrollHeight.value=document.documentElement.scrollHeight

        if(scrollTop.value+clientHeight.value>=scrollHeight.value){
            isReachBottom.value=true
        }
        //console.log(scrollTop.value,clientHeight.value,scrollHeight.value)
    },100)

    onMounted(()=>{
        window.addEventListener("scroll",scrollListenerHandler)
       
    })

    onUnmounted(()=>{
        window.removeEventListener("scroll",scrollListenerHandler)
    })



    return {isReachBottom,scrollHeight,scrollTop,clientHeight}
}