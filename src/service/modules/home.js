import HYRequest from "../request/index.js"
export function getHomeHotSuggests(){
    return HYRequest.get({
        url:"/home/hotSuggests"
    })
}


export function getHomeCategories(){
    return HYRequest.get({
        url:"/home/categories"
    })
}


export function getHomeContent(currentPage){
    return HYRequest.get({
        url:"/home/houselist",
        params:{
            page:currentPage
        }
    })
}