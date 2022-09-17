



/*================ADMIN====================*/
/*=                                       =*/
/*=       USER PROFILE SWAGGGER           =*/
/*=                                       =*/
/*=========================================*/




/*==============User Profile Schema=============*/

/**
 * @swagger
 *  components:
 *      schemas:
 *          userProfile:
 *                  type : object
 *                  properties:
 *                       userName:
 *                              type : string
 *                       walletAddress:
 *                              type: string
 *                       Avatar:
 *                              type: string
 *                       background:
 *                              type: string   
 *                       description:
 *                              type: string
 *                       twitter:
 *                              type: string
 *                       facebook:
 *                              type: string
 *                       instagram:   
 *                              type: string                  
 */










/*==============CREATE USER=============*/

/**
 * @swagger
 * /api/profile:
 *  post:
 *      summary: This Api used to Create a User profile.
 *      description: Run this api to create a User profile.
 *      requestBody:
 *             required : true
 *             content:
 *                      application/json:
 *                          schema: 
 *                                 $ref : '#components/schemas/userProfile'
 *      responses:
 *           200:
 *              description: User Created Successfully 

 * */













/*==============UPDATE USER=============*/

/**
 *@swagger
 *  /api/profile:
 *      patch:
 *           summary: Run This Api To Update the user profile
 *           description: If you want to update user so Run This APi to update the User
 *           requestBody:
 *                  required : true
 *                  content :
 *                          application/json:
 *                               schema:
 *                                  $ref : '#components/schemas/userProfile'
 *           responses:
 *                  200:
 *                     description: user profile udpated successfully
 *                     
 *          
 */








 

/*============== GET SINGLE USER BY WALLET ADDRESS =============*/

/**
 * @swagger
 * /api/profile/{walletAddress}:
 *  get:
 *      summary: Run This API to get Single User 
 *      description: pass walletAddress as prameter and run this api to get single user Exp api/profile/4374874824827492378
 *      parameters:
 *         - in: path
 *           name: walletAddress
 *           required: true
 *           description: add user walletAddress
 *           schema:
 *                 type : string
 *      responses:
 *          200:
 *              description: successfully data fetched
 *              content:
 *                  application/json:
 *                       schema:
 *                          type : array
 *                          items:
 *                              $ref: '#components/schemas/userProfile'                                 
 *                
 */









/*============== DELETE USER =============*/
/**
 *@swagger
 *  /api/profile/:
 *      delete:
 *           summary: Run this api to delete the user
 *           description: pass wallet address in body to delete that user by wallet address
 *           requestBody:
 *                  required : true
 *                  content :
 *                          application/json:
 *                               schema:
 *                                  $ref : '#components/schemas/userProfile'
 *           responses:
 *                  200:
 *                     description: user deleted successfully
 *                     
 *          
 */








 /*================ADMIN====================*/
/*=                                       =*/
/*=           ADMIN SWAGGGER              =*/
/*=                                       =*/
/*=========================================*/






 

/*==============Admin Register Schema=============*/

/**
 * @swagger
 *  components:
 *      schemas:
 *          adminRegister:
 *                  type : object
 *                  properties:
 *                       walletAddress:
 *                              type : string
 *                       name:
 *                              type: string
 *                       email:
 *                              type: string        
 */








/*==============ADMIN REGISTER=============*/
/**
 * @swagger
 * /api/admin:
 *  post:
 *      summary: This Api used to Create a Admin.
 *      description: pass body and add wallet Address, name, email to create admin
 *      requestBody:
 *             required : true
 *             content:
 *                      application/json:
 *                          schema: 
 *                                 $ref : '#components/schemas/adminRegister'
 *      responses:
 *           200:
 *              description: Admin Created Successfully 

 * */







/*==============UPDATE ADMIN=============*/

/**
 *@swagger
 *  /api/admin:
 *      patch:
 *           summary: Run This Api To Update admin
 *           description: In Admin you can only udpate name, email, so run this api to update admin
 *           requestBody:
 *                  required : true
 *                  content :
 *                          application/json:
 *                               schema:
 *                                  $ref : '#components/schemas/adminRegister'
 *           responses:
 *                  200:
 *                     description: Admin udpated successfully
 *                     
 *          
 */






 /*==============Delete Admin ADMIN=============*/

/**
 *@swagger
 *  /api/admin:
 *      delete:
 *           summary: Run this api to delete the Admin
 *           description: Pass the walletAddress in body to delete the admin. (delete admin by walletAddress)
 *           requestBody:
 *                  required : true
 *                  content:
 *                         application/json:
 *                              schema:
 *                                 $ref : '#components/schemas/adminRegister'
 *           responses:
 *                  200:
 *                     description: Admin Deleted Successfully
 *                     
 *          
 */