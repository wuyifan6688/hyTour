import dayjs from "dayjs"

export function formatMonthDay(data){
    return dayjs(data).format("MM月DD日")
}

export function getDiffDays(start,end){
    return dayjs(end).diff(start,"day")
}