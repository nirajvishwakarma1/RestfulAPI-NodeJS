const express = require('express')
const app = express()
const port = process.env.PORT || 8000

app.use(express.json())

require("./db/conn")
    const Student = require("./models/students")

// create a new student

// using process
/* app.post("/students", (req, res) => {
    const user = new Student(req.body)
    user.save()
    .then(_ => res.status(201).send(user))
    .catch(err => res.status(400).send(err))
}) */

// using async await
app.post("/students", async (req, res) => {
    try {
        const user = new Student(req.body)
        const createUser = await user.save()
        res.status(201).send(createUser)
    } catch(err) {
        res.status(400).send(err)
    }
})

app.get("/students", async (req, res) => {
    try {
        const studentsData = new Student.find()
        res.status(200).send(studentsData)
    } catch(err) {
        res.status(400).send(err)
    }
})

// app.get("/students")

app.listen(port, _ => {
    console.log(`CONNECTED to port ${port}`)
})