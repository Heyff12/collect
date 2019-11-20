console.log('ffff')
setTimeout(()=>{
    document.getElementById('spanShow').innerHTML = 'js----f--------set-span-content---setTimeout--ffff'
    console.log(document.getElementById('spanShow').innerHTML)
},3000)
document.getElementById('spanShow').innerHTML = 'js----f--------set-span-content-----fffff'
console.log(document.getElementById('spanShow').innerHTML)