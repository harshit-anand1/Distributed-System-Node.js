import express from 'express';
import { addJob, getNextJob, getJob} from '../queue/queue.js';
const router = express.Router();

// Placeholder route
router.post('/enqueue', (req, res) => {
   const {type, data} = req.body;

   if(!type || !data) 
    return res.status(400).json({error:'Job type and data required'});
    //res.send({ message: 'Job enqueued (mock)' });

    const job = addJob(type, data);
    res.status(200).json(job);
    console.log(job);
});


// Get next job
router.get('/next', (req, res) => {
    const job = getNextJob();
    if (!job) {
      return res.status(404).json({ message: 'No pending jobs' });
    }
  
    res.json(job);
  });



  // Optional: Check status of a specific job
router.get('/:id', (req, res) => {
    const job = getJob(req.params.id);
    if (!job) {
      return res.status(404).json({ message: 'Job not found' });
    }
  
    res.json(job);
  });







export default router;
