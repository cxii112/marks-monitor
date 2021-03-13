export const translateDate = (dateStr: string) => {
  let date = new Date(dateStr).toUTCString().split(' ');
  switch (date[2]) {
    case 'Jan':
      return `${date[1]} Янв ${date[3]}`
    case 'Feb':
      return `${date[1]} Фев ${date[3]}`
    case 'Mar':
      return `${date[1]} Мар ${date[3]}`
    case 'Apr':
      return `${date[1]} Апр ${date[3]}`
    case 'May':
      return `${date[1]} Мая ${date[3]}`
    case 'Jun':
      return `${date[1]} Июн ${date[3]}`
    case 'Jul':
      return `${date[1]} Июл ${date[3]}`
    case 'Aug':
      return `${date[1]} Авг ${date[3]}`
    case 'Sep':
      return `${date[1]} Сен ${date[3]}`
    case 'Oct':
      return `${date[1]} Окт ${date[3]}`
    case 'Nov':
      return `${date[1]} Ноя ${date[3]}`
    case 'Dec':
      return `${date[1]} Дек ${date[3]}`
  }
}