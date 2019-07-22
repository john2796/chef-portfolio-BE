const express = require("express")
const router = express.Router()
const bcrypt = require("bcryptjs")

const tokens = require("./token.js")
const db = require("../data/dbConfig")

router.post("/register", async (req, res) => {
  let user = req.body

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
    user.password = await bcrypt.hash(user.password, 1)

    const [user_id] = await db.insert(user).into("users")
    const payload = await db
      .select()
      .from("users")
      .where({ id: user_id })
      .first()

    const token = await tokens.generateToken(payload)
    res.status(201).json({ id: payload.id, username: payload.username, token })
  } catch ({ message }) {
    res.status(500).json({ message })
  }
})

router.post("/login", async (req, res) => {
  let { username, password } = req.body
  if (!username) {
    return res.status(400).json({ message: "Username field is required" })
  }
  if (!password) {
    return res.status(400).json({ message: "Password field is required" })
  }
  try {
    const user = await db
      .select()
      .from("users")
      .where({ username })
      .first()

    if (user) {
      const correct = await bcrypt.compare(password, user.password)
      // console.log(user.password, password, correct, user)
      if (correct) {
        const token = await tokens.generateToken(user)
        return res
          .status(200)
          .json({ message: `${user.username} is logged in.`, token })
      }
    }

    res.status(401).json({ message: "Invalid credentials, Unauthorized" })
  } catch ({ message }) {
    res.status(500).json({ message })
  }
})

module.exports = router
