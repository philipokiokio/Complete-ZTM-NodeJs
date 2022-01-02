import fetch from 'node-fetch'

const promise =  new Promise((resolve, reject)=>{
    if (true){
        resolve('Stuff worked')
    }else{
        reject('Error it broke')
    }
})


promise
.then(result => result + "!")
.catch(()=> console.log('Error!'))
.then(result2=>{
    console.log( result2 +'!')
})

const promise2 =  new Promise((resolve,reject)=>{
    setTimeout(resolve, 100,'Hi');
})

const promise3 =  new Promise((resolve,reject)=>{
    setTimeout(resolve, 1000,'Hi cookie');
})
const promise4 =  new Promise((resolve,reject)=>{
    setTimeout(resolve, 3000,'is it me Jesus');
})

Promise.all([promise,promise2,promise3,promise4])
.then(values =>{
    console.log(values)
})





const urls =[
    'https://jsonplaceholdertypicode.com/users',
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/users'
]

Promise.all(urls.map(url=>{
    return fetch(url).then(resp => resp.json())
})).then(results =>{
    console.log(results[0])
    console.log(results[0])
    console.log(results[0])
}).catch(()=>{console.log('Error')})