n=document.getElementsByClassName("num")
s=document.getElementsByClassName("sy")
e=document.getElementById("equal")
v=document.getElementById("vag")
g=document.getElementById("gun")
t=document.getElementById("tdp")
c=document.getElementById("rl")
uni=document.getElementById("container")

b1=document.getElementById("box1")
b2=document.getElementById("box2")

for (let i=0;i<n.length;i++){
n[i].addEventListener("click",() =>{
        b1.textContent +=n[i].textContent    
})
}

for (let j=0;j<s.length;j++){
s[j].addEventListener("click",() =>{
        c1=s[j].textContent 
        d1=c1.replace(/xʸ/g,"^")
        b1.textContent += d1  
})
}

function fac(p){
        p1=1
        for(let i=1;i<p+1; i++){
            p1=i*p1
        }
        return p1
}


e.addEventListener("click",()=>{
        // alert("pritam")
        c=b1.textContent
        d=c.replace(/×/g,"*").replace(/÷/g,"/").replace(/\%/g,"*(1/100)").replace(/sin\(([^)]+)\)/g, (_, angle) => `Math.sin((${angle}) * Math.PI / 180)`).replace(/cos\(([^)]+)\)/g, (_, angle) => `Math.cos((${angle}) * Math.PI / 180)`).replace(/tan\(([^)]+)\)/g, (_, angle) => `Math.tan((${angle}) * Math.PI / 180)`).replace(/lg\(([^)]+)\)/g, (_, val) => `Math.log10(${val})`).replace(/\^/g,"**").replace(/√/,"Math.sqrt").replace(/(\d+)!/g, 'fac($1)').replace(/π/g,"3.1415926536")
        // .replace(/\!/g,"fac")
        result=eval(d)
        b1.textContent = b1.textContent + " = " + result
        
})

c.addEventListener("click", () =>{
        location.reload()
})

bot2=document.getElementById("botam2")
bot=document.getElementById("botam")


c1=document.getElementById("cover1")
c2=document.getElementById("cover2")
c3=document.getElementById("cover3")
    

bot2.addEventListener("click", () =>{
       c1.style.transform="translateX(-500px)"
       c1.style.transition="5s"
        c2.style.transform="translateX(500px)"
       c2.style.transition="5s"
        c3.style.transform="translateY(520px)"
       c3.style.transition="5s"
    
       bot.style.transform="translateY(460px)"
       bot.style.backgroundColor="red"
       b2.style.transition="5s"
       bot2.innerHTML="OFF"
       bot2.style.borderColor="red"
       b2.style.marginTop="-40px"
     bot2.addEventListener("click", () =>{
        uni.style.transition="5s"
         location.reload()

     })

})
