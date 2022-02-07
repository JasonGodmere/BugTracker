import express from 'express';

import { 
    getSite,
    addUser,
    removeUser
} from '../controllers/sites.js';

const router = express.Router();

router.get('/', getSite);
router.post('/add-user', addUser);
router.post('/remove-user', removeUser);

export default router;