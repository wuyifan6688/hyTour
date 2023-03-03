import {getHomeHotSuggests,getHomeCategories,getHomeContent} from "@/service/modules/home.js"
import { defineStore } from "pinia"

const useHomeStore=defineStore("home",{
    state:()=>({
        hotSuggests:{},
        categories:{},
        content:[],
        currentPage:1
    }),
    actions:{
        async fetchHotSugggets(){
            const res =await getHomeHotSuggests()
            this.hotSuggests=res.data
        },


        async fetchCategories(){
            const res=await getHomeCategories();
            this.categories=res.data
        },

        async fetchContent(){
            const res =await getHomeContent(this.currentPage);//必须要用this
            this.content.push(...res.data)
            this.currentPage++;
        }
    }
})

export default useHomeStore