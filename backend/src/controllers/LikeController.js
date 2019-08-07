const Dev = require('../models/Dev');

module.exports = {
  async store(req, res) {
    const { username } = req.body;


    return res.json(dev);
  }
};