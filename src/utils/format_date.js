import dayjs from "dayjs"

export function formatMonthDay(data,format="MM月DD日"){
    return dayjs(data).format(format)
}

export function getDiffDays(start,end){
    return dayjs(end).diff(start,"day")
}