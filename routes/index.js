const express = require("express");
const router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Isaiah",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Mike",
    added: new Date(),
  },
];

router.get("/", (req, res) => {
  res.render("index", { title: "Mini Messageboard", messages });
});

router.get("/new", (req, res) => {
  res.render("form", { title: "New Message" });
});

router.post("/new", (req, res) => {
  const { messageUser, messageText } = req.body;
  messages.push({
    text: messageText,
    user: messageUser,
    added: new Date(),
  });
  res.redirect("/");
});

router.get("/message/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const message = messages[id];
  
    if (!message) {
      return res.status(404).send("Message not found");
    }
  
    res.render("message", { message });
  });
  

module.exports = router;
