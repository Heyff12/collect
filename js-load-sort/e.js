console.log('eeee')
setTimeout(()=>{
    document.getElementById('spanShow').innerHTML = 'js----e--------set-span-content---setTimeout--eeee'
    console.log(document.getElementById('spanShow').innerHTML)
},3000)
document.getElementById('spanShow').innerHTML = 'js----e--------set-span-content-----eeee'
console.log(document.getElementById('spanShow').innerHTML)