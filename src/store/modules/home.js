import {getHomeHotSuggests} from "@/service/modules/home.js"
import { defineStore } from "pinia"

const useHomeStore=defineStore("home",{
    state:()=>({
        hotSuggests:{}
    }),
    actions:{
        async fetchHotSugggets(){
            const res =await getHomeHotSuggests()
            this.hotSuggests=res.data
        }
    }
})

export default useHomeStore