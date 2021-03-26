const schedule = require('node-schedule')

schedule.scheduleJob('10 * * * * *', () => {
  console.log('每分钟的第10秒触发一次')
})
