

const router = require('express').Router()
const admin = require('../controllers/adminRegistration')


// create Admin
router.post('/admin', admin.adminRegister)


// update Admin
router.patch('/admin', admin.updateAdmin)



// delete Admin here
router.delete('/admin', admin.deleteAdmin)



// get all Admin
router.get('/admin', admin.getAllAdmins)


// getSingle Admin by walletAddress
router.get('/admin/:walletAddress', admin.getSingleAdmin)




// login admin
router.post('/admin-login', admin.adminLogin )




// exporting module
module.exports = router
