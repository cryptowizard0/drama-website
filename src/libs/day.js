import dayjs from 'dayjs'

const getWeekdaysList = (dayNows = new Date(), dayRange = 7, format = 'DD') => {
    const arr = []
    for (let i = 0; i < dayRange; i++) {
        const markDay = parseInt(dayRange / 2) - i
        arr.push(`${dayjs(dayNows).subtract(markDay, 'day').format(format)}`)
    }
    return arr
}
const formatDay = (day, format) => dayjs(day).format(format)
export { getWeekdaysList, formatDay }