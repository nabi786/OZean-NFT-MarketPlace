

const router = require('express').Router()
const admin = require('../controllers/adminRegistration')
const auth = require('../middleware/auth')

// create Admin
router.post('/admin', admin.adminRegister)

// update Admin
router.patch('/admin', admin.updateAdmin)

// delete Admin here
router.delete('/admin', admin.deleteAdmin)

// get all Admin
// router.get('/admin', admin.getAllAdmins)

// login admin
router.post('/admin-login', admin.adminLogin)

// getSingle Admin by walletAddress
router.get('/getSingleAdmin', admin.getSingleAdmin)


// exporting module
module.exports = router
