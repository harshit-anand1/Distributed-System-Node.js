import { getNextJob } from "./queue.js";

export async function startProcessor() {
    console.log('[Processor] Started job processor...');

    setInterval(async ()=>{
        const job = getNextJob();

        if(!job){
            return;
        }
        console.log(`[processor] running job ${job.id} of type ${job.type}... `);
    
        try{
            await new Promise((res)=> setTimeout(res,2000));

            //randomly succeed or fail

            const success = Math.random()>0.2;

            if(success){
                job.status = 'completed';
                console.log(
                    `[Processor] Job ${job.id} completed `
                );

            }
            else {
                job.status='failed';
                console.log(`[Processor] job ${job.id} failed`)
            }

            job.updatedAt =new  Date();
        }

        catch (err){
            console.error(`[processor] Error :`, err);
            job.status = 'error';
            job.updatedAt= new Date();
            
        }

    
    }, 3000);


    
}