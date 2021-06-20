const express = require("express")
const router = new express.Router()
const Student = require("../models/students")

// create a new student

// using process
/* router.post("/students", (req, res) => {
    const user = new Student(req.body)
    user.save()
    .then(_ => res.status(201).send(user))
    .catch(err => res.status(400).send(err))
}) */

// using async await
router.post("/students", async (req, res) => {
    try {
        const user = new Student(req.body)
        const createUser = await user.save()
        res.status(201).send(createUser)
    } catch(err) {
        res.status(400).send(err)
    }
})

// Get all student's records
router.get("/students", async (req, res) => {
    try {
        const studentsData = await Student.find()
        res.status(200).send(studentsData)
    } catch(err) {
        res.status(400).send(err)
    }
})

// Get single user's records by id
router.get("/students/:id", async (req, res) => {
    try {
        const _id = req.params.id
        const studentData = await Student.findById(_id)
        if (!studentData) {
            return res.status(404).send()
        }
        res.status(200).send(studentData)
    } catch (err) {
        res.status(500).send(err)
    }
})

// delete a user's record by id
router.delete("/students/:id", async (req, res) => {
    try {
        const deleteStudent = await Student.findByIdAndDelete(req.params.id)
        if (!req.params.id) {
            return res.status(400).send()
        }
        res.status(200).send(deleteStudent)
    } catch(err) {
        res.status(500).send(err)
    }
})

// update single user's record by id
router.patch("/students/:id", async (req, res) => {
    try {
        console.log(`updating single users record`)
        const _id = req.params.id
        const updateStudent = await Student.findByIdAndUpdate(_id, req.body, {new: true})
        console.log(updateStudent)
        res.status(200).send(updateStudent)
    } catch(err) {
        res.status(400).send(err)
    }
})

module.exports = router