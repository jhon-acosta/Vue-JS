const TestController = {};

TestController.getData = (req, res) => {
  res.send("get");
};

TestController.postData = (req, res) => {
  res.send("post");
};

TestController.updateData = (req, res) => {
  res.send("update");
};

TestController.deleteData = (req, res) => {
  res.send("delete");
};

module.exports = TestController;
