const express = require('express');
const router = express();

const { createForm, getALLFormData } = require('../controller/form');

router.post('/formData/create', createForm);
router.get('/formData', getALLFormData);

module.exports = router;
