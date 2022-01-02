import fetch from 'node-fetch';

const asycn= async ()=>{
   const response=  await fetch('https://jsonplaceholder.typicode.com/users')
   const data = await response.json()
   console.log(data)
}

// console.log(asycn())

const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/albums',
    'https://jsonplaceholder.typicode.com/posts'

]

const asyn1 =async (urls) =>{
    try{
    const [user, albums, posts] = await Promise.all(urls.map(url =>
        fetch(url).then(resp=> resp.json())))

    console.log(user)
    console.log(albums)
    console.log(posts)
    }catch (err){
        console.log('ops', err)
    }
}
// console.log(asyn1(urls))


const getdata =  async (urls) =>{
    const arrayOfPromises = urls.map(url => fetch(url))

    for await (let request of arrayOfPromises){
        const data =  await request.json()
        console.log(data)
    
    }
}
console.log(getdata(urls))