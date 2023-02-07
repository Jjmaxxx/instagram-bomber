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
let insults = ["i hate you", "fuck you you useless sack of shit","send me it please","please send it","idiot","loser man","i hate you so mch you ingrate","your mother dropped you as a head as a child","hannah you fucking ingrate","you fat pig","you piece of piece","stupidi diot loser man","heretic","uou FUCKING jellyfish","babboon ape moneky ","nitwit loser idiot","nincompoop","you fucking little rapscallion you aydsi asudoiahsjdasjk","AAAAAAAAAAAAAAA","donald trump idiot","unguloatae"]
const postToInsta = async () => {
    const ig = new IgApiClient();
    ig.state.generateDevice(process.env.IG_USERNAME);
    await ig.account.login(process.env.IG_USERNAME, process.env.IG_PASSWORD);
    const userId = await ig.user.getIdByUsername('liza_potatova');
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
