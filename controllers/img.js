const handleImg = (req, res, db) => {
    const { id } = req.body;
    db("users").where("id", "=", id)
    .increment("enteries", 1)
    .returning("entries")
    .then(entries => {
      res.json(entries[0]);
    })
    .catch(err => res.status(400).json("Unable to get entries!"));
};


module.exports = {
    handleImg: handleImg
};
