const User = require("../models/User")
module.exports = {
  async store(req, res) {

    const user = await User.create(req.body)
    return res.json(user)
  },
  async list(req, res) {
    const tutoriais = await User.find({})
    return res.json(tutoriais)
  },
  async index(req, res) {
    const user = await User.findOne({ _id: req.params.id })
    return res.json(user)
  },
  async update(req, res) {
    const user = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    )
    return res.json(user)
  },
  async destroy(req, res) {
    await User.deleteOne({ _id: req.params.id })
    return res.json({
      message: "Exclusão realizada com sucesso!"
    })
  }
}
