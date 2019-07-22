const express = require("express")
const router = express.Router()

const db = require("../data/dbConfig.js")
const restricted = require("../auth/restricted.js")

router.get("/", restricted, (req, res) => {
  db("posts")
    .returning("id")
    .where({ user_id: req.decodedToken.subject })
    .then(posts => {
      res.status(200).json(posts)
    })
    .catch(({ message }) => {
      res.status(500).json({ message })
    })
})

router.get("/all", (req, res) => {
  db("posts")
    .returning("id")
    .then(posts => {
      res.status(200).json(posts)
    })
    .catch(({ message }) => {
      res.status(500).json({ message })
    })
})

router.get("/:id", (req, res) => {
  const { id } = req.params

  db("posts")
    .returning("id")
    .where({ id })
    .first()
    .then(post => {
      if (post) {
        res.status(200).json(post)
      } else {
        res.status(404).json({ error: "Not Found" })
      }
    })
    .catch(({ message }) => {
      res.status(500).json({ message })
    })
})

router.post("/", restricted, (req, res) => {
  const post = req.body

  if (!post.chef_name) {
    res.status(400).json({ error: "Please provide a chef name for the post." })
  } else {
    post.user_id = req.decodedToken.subject
    db("posts")
      .returning("id")
      .insert(post)
      .then(ids => {
        const id = ids[0]
        db("posts")
          .returning("id")
          .where({ id })
          .first()
          .then(post => {
            res.status(201).json(post)
          })
      })
      .catch(({ message }) => {
        res.status(500).json({ message })
      })
  }
})

router.put("/:id", restricted, (req, res) => {
  const { id } = req.params
  const changes = req.body

  db("posts")
    .where({ id })
    .update(changes)
    .returning("id")
    .then(count => {
      res
        .status(200)
        .json(changes)

        .catch(({ message }) => {
          res.status(500).json({ message })
        })
    })
})

router.delete("/:id", restricted, (req, res) => {
  const { id } = req.params
  db("posts")
    .where({ id, user_id: req.decodedToken.subject })
    .del()
    .returning("id")
    .then(count => {
      if (count > 0) {
        res.status(200).json({ message: "successfully deleted" })
      } else {
        res
          .status(404)
          .json({ error: "You cannot access the post with this specific id." })
      }
    })
    .catch(({ message }) => {
      res.status(500).json({ message })
    })
})

module.exports = router

// get request that takes in token as authorization and pulls the id off token and then find all the posts in the database that match that user id and returns that post
