const { Router } = require('express');
const { getFiles, getFileById, updateFileById, deleteFileById, createFile } = require('../controllers/Files.controller');
const router = Router();

//all Files
router.get('/', getFiles);
//Find a user
router.get('/:fileId', getFileById);
//Create File
router.post('/', createFile);
//Update user
router.put('/:fileId', updateFileById);
//Delete
router.delete('/:fileId', deleteFileById);

module.exports = router;