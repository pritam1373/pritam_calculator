n=document.getElementsByClassName("num")
s=document.getElementsByClassName("sy")
e=document.getElementById("equal")
v=document.getElementById("vag")
g=document.getElementById("gun")

v.textContent="/"
g.textContent="*"


b1=document.getElementById("box1")
b2=document.getElementById("box2")

for (let i=0;i<n.length;i++){
n[i].addEventListener("click",() =>{
        b1.textContent +=n[i].textContent    
})
}

for (let j=0;j<s.length;j++){
s[j].addEventListener("click",() =>{
        b1.textContent +=s[j].textContent     
})
}

e.addEventListener("click",()=>{
        // alert("pritam")
        result=eval(b1.textContent)
        b1.textContent = b1.textContent + " = " + result
        
})

