import client from './client.js';

export async function initString() {
    await client.set('user:1', "Jatin sharma")
    const res = await client.get('user:1')
    console.log("String ==> ", res)
}