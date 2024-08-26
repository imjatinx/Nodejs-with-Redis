import client from "./client.js";

export async function initHashMap(){
    await client.hset('user-session:123', {
        name: 'John',
        surname: 'Smith',
        company: 'Redis',
        age: 29
    })
    
    let userSession = await client.hgetall('user-session:123');
    console.log("HashMap ==> ", JSON.stringify(userSession, null, 2));
}