const { db } = require('./database/pgAdaptor')

db.one('select * from users').then((res) => {
  console.log(res)
})
