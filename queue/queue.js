import {v4 as uuidv4} from 'uuid';

const jobs = {};
const jobQueue = [];

export function addJob(type, data){
    const id = uuidv4();
    const now = new Date();
  
    const job = {
      id,
      type,
      data,
      status: 'pending',
      attempts: 0,
      createdAt: now,
      updatedAt: now
    };
  
    jobs[id] = job;
   jobQueue.push(id);
  
    return job;
}

export function getNextJob() {
    for (const jobId of jobQueue) {
      const job = jobs[jobId];
  
      if (job.status === 'pending') {
        job.status = 'in-progress';
        job.updatedAt = new Date();
        return job;
      }
    }
  
    return null; // No pending jobs
  }
  

export function getJob(id){
    return jobs[id];
}


