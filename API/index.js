require('dotenv').config()

const { conn }=require('./src/db.js')
const app=require('./src/app.js')
const port= process.env.PORT || 3001

conn.sync({ force: false })
.then(()=>app.listen(
        port,
        () => {console.log(`%s listening at ${port}`)}
    )
)


