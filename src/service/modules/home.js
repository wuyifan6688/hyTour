import HYRequest from "../request/index.js"
export function getHomeHotSuggests(){
    return HYRequest.get({
        url:"/home/hotSuggests"
    })
}