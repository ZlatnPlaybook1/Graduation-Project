// For routing staff
import { Router } from "express";
import { body } from "express-validator";
import { createNewUser } from "./user/user";
let router = Router();
/*
* createNewUser
* */
router.get('/users');
router.post('/users', body('name').isString(), body('email').isEmail(), body('password').isString(), createNewUser);
// loginRouter.ts.('/users',body('name').isString(),handleUserInput,createProduct)
// loginController.registerRouter.ts.delete('/users/:id',deleteProduct)
// /*
// * update
// * */
// loginRouter.ts.get('/update', getUpdates)
// loginRouter.ts.get('/update/:id', getOneUpdate)
// loginController.registerRouter.ts.put('/update/:id',
//     body('title').isString().optional(),
//     body('updateStatus').isIn(['IN_PROGRESS', 'SHIPPED', 'DEPRECATED']).optional(),
//     body('body').isString().optional(),
//     body('features').isString().optional(),
//     body('version').isString().optional(),
//     updateUpdate
// )
// loginController.register.router.ts.post('/update',
//     body('body').exists().isString(),
//     body('title').exists().isString(),
//     body('productId').exists().isString(),
//     createUpdate
//     )
// loginRouter.ts.delete('/update/:id',deleteUpdate)
// /*
// * updatepoint
// * */
// loginController.registerRouter.ts.get('/updatedetail', ()=>{})
// loginRouter.ts.get('/updatedetail/:id', ()=>{})
// loginController.register.router.ts.put('/updatedetail/:id',
//     body('name').isString().optional(),
//     body('description').isString().optional(),
//     ()=>{}
// )
// loginRouter.ts.post('/updatedetail',
//     body('name').isString().exists(),
//     body('description').isString().exists(),
//     body('updateId').isString(),
//     ()=>{}
// )
// loginRouter.ts.delete('/updatedetail/:id', ()=>{})
export default router;
//# sourceMappingURL=loginRouter.ts.js.map