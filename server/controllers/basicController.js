const basicController = {};

basicController.get = (req, res) => {
  res.json({
    message: 'welcome to our API'
  });
};

export default basicController;
