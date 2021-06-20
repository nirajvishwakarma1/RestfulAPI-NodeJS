const mongoose = require("mongoose")
mongoose.connect(
    "mongodb://localhost:27017/students-api",
    {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    }
)
.then(_ => console.log('DB CONNECTED'))
.catch(err => console.log('DB NOT CONNECTED', err))