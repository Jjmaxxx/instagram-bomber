import { createRequire } from 'module';
const require = createRequire(import.meta.url);
require("dotenv").config();
let timer = 0;
let messages=0;

import { IgApiClient } from 'instagram-private-api';
function delay(milliseconds){
    return new Promise(resolve => {
        setTimeout(resolve, milliseconds);
    });
}
let insults = ["thumbs up","thumbs down","man","whatever dude", "ok bro"]
const postToInsta = async () => {
    const ig = new IgApiClient();
    ig.state.generateDevice(process.env.IG_USERNAME);
    await ig.account.login(process.env.IG_USERNAME, process.env.IG_PASSWORD);
    const userId = await ig.user.getIdByUsername('han_peckham_');
    async function init() {
        const thread = ig.entity.directThread([userId.toString()]);
        await thread.broadcastText(insults[Math.floor(Math.random()*insults.length)]);
        await delay(1000);
    }
    while(0==0){
        if(timer < 1000){
            console.log("message: " + messages);
            await init();
            timer+=1;
            messages+=1;
            
        }else{
            console.log("waiting");
            await delay(100000);
            console.log("running");
            timer=0;
        }
        
    }
}
postToInsta();
