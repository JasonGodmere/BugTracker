import express from 'express';

import { 
    getLiveBugs,
    getDeadBugs,
    addBug,
    updateBugStatus
} from '../controllers/bugs.js';

const router = express.Router();

router.get('/live', getLiveBugs);
router.get('/dead', getDeadBugs);
router.post('/add', addBug);
router.post('/update-status', updateBugStatus);

export default router;