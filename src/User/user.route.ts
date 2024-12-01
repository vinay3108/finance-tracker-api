import express,{Request,Response} from 'express';
import { signUp } from './Controller/user.controller';
import { validateRequest } from './Middlewares/validateRequest.middleware';
import { createUserValidation } from './Validation/user.validation';

export default function AccountRouter () {
    const router=express.Router();
    router.route('/').post(validateRequest(createUserValidation),signUp);

    return router;
}