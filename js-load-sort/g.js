console.log('gggg')
setTimeout(()=>{
    document.getElementById('spanShow').innerHTML = 'js----g--------set-span-content---setTimeout--gggg'
    console.log(document.getElementById('spanShow').innerHTML)
},3000)
document.getElementById('spanShow').innerHTML = 'js----g--------set-span-content-----gggg'
console.log(document.getElementById('spanShow').innerHTML)