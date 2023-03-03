import { defineStore } from "pinia";
const startDate=new Date();
const endDate=new Date();

const useMainStore=defineStore("main",
{
    state:()=>({
         startDate:startDate,
         endDate:endDate
        }),

})


export default useMainStore