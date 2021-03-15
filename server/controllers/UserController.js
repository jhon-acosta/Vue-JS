const User = require("../models/User");

const getUser = async (req, res) => {
  await User.find()
    .then((response) => {
      return res.status(200).json({
        data: response
      })
    })
    .catch((error) => {
      return res.status(500).json({
        message: error,
      });
    })
}

const getOnlyUser = async (req, res) => {
  const id = req.params.id;
  const data = req.body;
  await User.findById({ _id: id }, data, { new: true })
    .then((response) => {
      return res.status(200).json({
        data: response
      })
    })
    .catch((error) => {
      return res.status(500).json({
        message: 'Not Found',
        error
      });
    });
}

const postUser = async (req, res) => {
  const data = req.body;
  await User.create(data)
    .then((response) => {
      return res.status(200).json({
        data: response,
      });
    })
    .catch((error) => {
      return res.status(500).json({
        message: error,
      });
    });
};

const updateUser = async (req, res) => {
  const id = req.params.id;
  const data = req.body;
  await User.findByIdAndUpdate({ _id: id }, data, { new: true })
    .then((response) => {
      return res.status(200).json({
        data: response
      })
    })
    .catch((error) => {
      return res.status(500).json({
        message: 'Not Found',
        error
      });
    });
}

const deleteUser = async (req, res) => {
  const id = req.params.id;
  const data = req.body;
  await User.findByIdAndRemove({ _id: id })
    .then((response) => {
      return res.status(200).json({
        message: 'Deleted',
        data: response

      })
    })
    .catch((error) => {
      return res.status(500).json({
        message: 'Not Found',
        error
      });
    });
}
module.exports = {
  postUser,
  getUser,
  updateUser,
  deleteUser,
  getOnlyUser
};
