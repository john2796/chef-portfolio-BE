const express = require("express")
const router = express.Router()
const bcrypt = require("bcryptjs")

const tokens = require("./token.js")
const db = require("../data/dbConfig")

router.post("/register", async (req, res) => {
  const user = req.body

  if (!user.username) {
    return res.status(400).json({ message: "Username field is required" })
  }
  if (!user.password) {
    return res.status(400).json({ message: "Password field is required" })
  }
  if (!user.email) {
    return res.status(400).json({ message: "Email field is required" })
  }
  if (!user.location) {
    return res.status(400).json({ message: "Location field is required" })
  }
  try {
    password = await bcrypt.hashSync(user.password, 14)
    const user_id = await db.insert(user).into("users")
    const user = await db("users")
      .where({ id: user_id })
      .first()
    const token = await tokens.generateToken(user)
    res.status(201).json({ id: user.id, username: user.username, token })
  } catch ({ message }) {
    res.status(500).json({ message })
  }
})

router.post("/login", (req, res) => {
  let { username, password } = req.body
  if (!username) {
    return res.status(400).json({ message: "Location field is required" })
  }
  if (!password) {
    return res.status(400).json({ message: "Location field is required" })
  }

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
})

module.exports = router
