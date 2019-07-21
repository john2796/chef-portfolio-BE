const express = require("express")
const router = express.Router()
const bcrypt = require("bcryptjs")

const tokens = require("./token.js")
const db = require("../data/dbConfig")

router.post("/register", (req, res) => {
  const user = req.body

  if (!user.username || !user.password || !user.email || !user.location) {
    res.status(400).json({
      error: "Please fill out all of the fields"
    })
  } else {
    const hash = bcrypt.hashSync(user.password, 14)
    user.password = hash
    db("users")
      .insert(user)
      .then(ids => {
        const id = ids[0]

        db("users")
          .where({ id })
          .first()
          .then(user => {
            const token = tokens.generateToken(user)
            res
              .status(201)
              .json({ id: user.id, username: user.username, token })
          })
      })
      .catch(({ message }) => {
        res.status(500).json({ message })
      })
  }
})

router.post("/login", (req, res) => {
  let { username, password } = req.body
  if (!username || !password) {
    res.status(400).json({
      error: "Please provide a username and password."
    })
  } else {
    db("users")
      .where({ username })
      .first()
      .then(user => {
        if (user && bcrypt.compareSync(password, user.password)) {
          const token = tokens.generateToken(user)
          res
            .status(200)
            .json({ message: `${user.username} is logged in.`, token })
        } else {
          res.status(401).json({
            error: "Please provide the correct username and password."
          })
        }
      })
      .catch(({ message }) => {
        res.status(500).json({ message })
      })
  }
})

module.exports = router
