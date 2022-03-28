const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://sypark:ww1120ww@bolierplate.k4fzn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
    // useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('mongoDB Connected....'))
.catch(err => console.log(err))



app.get('/', (req, res) => {
  res.send('Hello World! ~ 안녕하세요')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})//시작됫을때 콜솔 출력