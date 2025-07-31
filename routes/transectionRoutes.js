const express = require('express');
const { addTransection, getAllTransection,editTransection, deleteTransection} = require('../controllers/transectionCtrl');


//router object
const router = express.Router();

//routes
//add transection post methods
router.post("/add-transection",addTransection);
//add transection post methods
router.post("/edit-transection",editTransection);

//add transection post methods
router.post("/delete-transection",deleteTransection);

//get transections
router.post("/get-transection",getAllTransection);



module.exports = router;