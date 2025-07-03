a=document.getElementById("one")
b=document.getElementById("two")
c=document.getElementById("next")

a.addEventListener("click",()=>{
    c.addEventListener("click",() =>{
        window.location.href="index2.html"
    })
})
b.addEventListener("click",()=>{
    c.addEventListener("click",() =>{
        window.location.href="index3.html"
    })
})
