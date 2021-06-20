const mongoose = require("mongoose")
mongoose.connect(
    "mongodb://localhost:27017/students-api",
    {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
)
.then(_ => console.log('CONNECTED'))
.catch(err => console.log('NOT CONNECTED', err))