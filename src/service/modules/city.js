import HYRequest from "../request/index.js"
export function getCityAll(){
    return HYRequest.get({
        url: "/city/all"
    })
}
