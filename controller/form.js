const Form = require('../models/form');

//create
exports.createForm = (req, res) => {
  const formData = new Form(req.body);
  formData.save((err, formData) => {
    if (err) {
      return res.status(400).json({
        error: 'NOT able to save data in DATABASE',
      });
    }
    res.json({ formData });
  });
};

//get all data
exports.getALLFormData = (req, res) => {
  Form.find().exec((err, FormData) => {
    if (err) {
      return res.status(400).json({
        error: 'No data Found in DATABASE',
      });
    }
    res.json(FormData);
  });
};
