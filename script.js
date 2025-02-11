let text=document.querySelector(".text p")
text.innerHTML = text.innerHTML.split("").map((char, i)=>
'<b style="transform:rotate(${i✶ 6.3}deg")>${char}</b>').join("");

scrollreveal({
    distance:"90px", duration:2000,delay:200,
});

scrollReceal().reveal(".hero",{origin:"top"});