const express = require('express');
const router = express.Router();
const Celebrity = require("../models/celebrity");

router.get("/celebrities", (req, res) => {
    Celebrity.find()
      .then((allCelebs) => {
        res.render("celebrities/index.hbs", { celebrities: allCelebs });
      })
      .catch((err) => console.error(err));
  });

router.get("/celebrities/:celebId", (req, res, next) => {
    const { celebId } = req.params;
  
    Celebrity.findById(celebId)
      .then((celeb) => {
        console.log("Found celeb");
        const data = { celeb: celeb };
        res.render("celebrities/show.hbs", data);})
      .catch((err) => {
        console.log("There's an error", err);
        next();
    });
});
router.post("/celebrities/delete/:celebId", (req, res, next) => {
    const { celebId } = req.params;
  
    Celebrity.findByIdAndRemove(celebId)
      .then((result) => {
        console.log("Deleted celeb");
        res.redirect("/celebrities");
    })
});

router.get("/celebrities/new", (req, res) => {
    res.render("celebrities/new.hbs");
});

router.post("/celebrities", (req, res) => {
    const { name, occupation, catchPhrase } = req.body;

    Celebrity.create({ name, occupation, catchPhrase })
    .then((result) => {
        console.log(`Succeeded`);
        res.redirect("/celebrities");
      })
})

module.exports = router;