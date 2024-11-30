const jwt = require("jsonwebtoken")
const bcrypt = require('bcrypt');
const { UserModel } = require("../model/User.model")

const express = require("express")

const userRouts = express.Router()

userRouts.get("/", async (req, res) => {
    let data = await UserModel.find()
    res.send(data)
})

userRouts.get("/:id", async (req, res) => {
    // const payload = req.body
    const id = req.params.id
    try {
        let data = await UserModel.findOne({ "_id": id })
        res.send({ "success": true, "msg": ` this is your id (${id})`, "user": data })
    } catch (err) {
        console.log(err)
    }
})

userRouts.patch("/update/:id", async (req, res) => {
    const payload = req.body
    const id = req.params.id

    try {
        await UserModel.findByIdAndUpdate({ "_id": id }, payload)
        res.send({ "msg": "User Detail has been updated" })
    } catch (err) {
        res.send({ "msg": "User detail not updated" })
    }
})
userRouts.delete("/delete/:id", async (req, res) => {
    const id = req.params.id

    try {
        await UserModel.findByIdAndDelete({ "_id": id })
        res.send({ "msg": "User  has been delated" })
    } catch (err) {
        res.send({ "msg": "User has not deated" })
    }
})

userRouts.post("/register", async (req, res) => {
    const { role, firstname, lastname, dob, email, password, registerfulldate, registeryear, gender, avatar } = req.body
    try {
        const user = await UserModel.find({ email })
        if (user.length > 0) {
            res.send({ "success": false, "msg": "User already exist, please login" })
        } else {
            bcrypt.hash(password, 7, async (err, hash) => {
                if (err) {
                    res.send({ "success": false, "msg": "something went erong", "err": err.message })
                } else {
                    const user = new UserModel({ role, firstname, lastname, dob, email, password: hash, registerfulldate, registeryear, gender, avatar })
                    await user.save()
                    console.log(user)
                    res.send({ "success": true, "msg": "New User Register Sucessfully" })
                }
            })
        }


    }
    catch (err) {
        console.log(err)
        res.send("Can't register")
    }
})


userRouts.post("/login", async (req, res) => {
    const { email, password } = req.body
    try {
        const user = await UserModel.find({ email })

        if (user.length > 0) {
            bcrypt.compare(password, user[0].password, (err, result) => {
                if (result) {
                    const token = jwt.sign({ userID: user[0]._id }, 'sportszone')
                    res.send({ "success": true, msg: "Login Sucessful", avatar: user[0].avatar, id: user[0]._id, role: user[0].role, token: token, firstname: user[0].firstname, lastname: user[0].lastname, email: user[0].email, dob: user[0].dob, registerfulldate: user[0].registerfulldate, registeryear: user[0].registeryear })

                } else {
                    res.send({ "success": false, msg: "wrong Credential" })
                }
            });
        } else {
            res.send({ "success": false, msg: "Wrong credentials" })
        }
    }
    catch (err) {
        res.send("Wrong")
    }

})

module.exports = {
    userRouts
}

