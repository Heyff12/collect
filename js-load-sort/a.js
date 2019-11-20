console.log('aaaa')
setTimeout(()=>{
    document.getElementById('spanShow').innerHTML = 'js----a--set-span-content---setTimeout--aaaaaa'
    console.log(document.getElementById('spanShow').innerHTML)
},3000)
document.getElementById('spanShow').innerHTML = 'js----a--------set-span-content-----aaaaaa'
console.log(document.getElementById('spanShow').innerHTML)