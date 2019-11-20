console.log('dddd')
setTimeout(()=>{
    document.getElementById('spanShow').innerHTML = 'js----d--------set-span-content---setTimeout--dddd'
    console.log(document.getElementById('spanShow').innerHTML)
},3000)
document.getElementById('spanShow').innerHTML = 'js----d--------set-span-content-----ddddd'
console.log(document.getElementById('spanShow').innerHTML)