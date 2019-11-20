console.log('bbbb')
setTimeout(()=>{
    document.getElementById('spanShow').innerHTML = 'js----b--------set-span-content---setTimeout--bbbbb'
    console.log(document.getElementById('spanShow').innerHTML)
},3000)
document.getElementById('spanShow').innerHTML = 'js----b--------set-span-content-----bbbbb'
console.log(document.getElementById('spanShow').innerHTML)