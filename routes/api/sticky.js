const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");

const Sticky = require("../../models/Sticky");

// @route GET api/sticky
// @desc Get all sticky notes
// @access Public
router.get("/api/sticky", (req, res) => {
  Sticky.find()
    .sort({ date: -1 })
    .then((sticky) => res.json(sticky))
    .catch((err) => console.error(err));
});

// @route POST api/sticky
// @desc Create a sticky note
// @access Private
router.post("/api/sticky", auth, (req, res) => {
  const newSticky = new Sticky({
    content: req.body.content,
  });

  newSticky
    .save()
    .then((sticky) => res.json(sticky))
    .catch((err) => console.error(err));
});

// @route DELETE api/sticky/:id
// @desc Delete a sticky note
// @access Private
router.delete("/api/sticky/:id", auth, (req, res) => {
  Sticky.findById(req.params.id)
    .then((sticky) => sticky.remove().then(res.json({ success: true })))
    .catch((err) => res.status(404).json({ success: false }));
});

module.exports = router;
