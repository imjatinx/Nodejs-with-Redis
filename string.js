import client from './client.js';

export async function initString() {
    await client.set('user:1', "Jatin sharma")
    const user = await client.get('user:1')
    console.log(user)

    const profile = {
        name : "Nikhil",
        age: 20,
        description : "I am a stundent",
    };

    await client.mset(profile) // multiple values set

    const name = await client.get('name')
    console.log(name);

    const age = await client.get('age');
    console.log(age, typeof(age));

    const profileData = await client.mget("name", "age", "description"); // returns array
    console.log(profileData);

    await client.del(["name", "test"]);

    const exist = await client.exists("name"); // 0=false, 1=true
    console.log(exist);
    
    await client.incr("age");
    const age2 = await client.get("age");
    console.log(age2);

    await client.incrby("age", 5);
    const age3 = await client.get("age");
    console.log(age3);

    await client.decr("age");
    const age4 = await client.get("age");
    console.log(age4);

    await client.decrby("age", 10);
    const age5 = await client.get("age");
    console.log(age5);

    await client.set("ttl_key", "hello", "EX", 1000);
    const ttl = await client.get("ttl_key");
    console.log(ttl);
    
}