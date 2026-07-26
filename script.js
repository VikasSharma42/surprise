// Loading Screen

window.onload = function(){

    setTimeout(function(){
    
    document.getElementById("loader").style.display="none";
    
    },2500);
    
    }
    
    // Music
    
    function playMusic(){
    
    document.getElementById("music").play();
    
    }
    
    // Friendship Counter
    
    const startDate=new Date("2025-12-04");
    
    function updateCounter(){
    
    const now=new Date();
    
    const diff=now-startDate;
    
    const days=Math.floor(diff/(1000*60*60*24));
    
    document.getElementById("counter").innerHTML=
    days+" Days ❤️";
    
    }
    
    updateCounter();
    
    setInterval(updateCounter,1000);
    
    // Floating Hearts
    
    const container=document.getElementById("hearts");
    
    setInterval(()=>{
    
    const heart=document.createElement("div");
    
    heart.className="heart";
    
    heart.innerHTML="❤️";
    
    heart.style.left=Math.random()*100+"%";
    
    heart.style.fontSize=(20+Math.random()*30)+"px";
    
    container.appendChild(heart);
    
    setTimeout(()=>{
    
    heart.remove();
    
    },8000);
    
    },500);
    
    // Confetti
    
    const canvas=document.getElementById("confetti");
    const ctx=canvas.getContext("2d");
    
    canvas.width=window.innerWidth;
    canvas.height=window.innerHeight;
    
    let particles=[];
    
    function celebrate(){
    
    particles=[];
    
    for(let i=0;i<250;i++){
    
    particles.push({
    
    x:Math.random()*canvas.width,
    y:Math.random()*canvas.height,
    r:Math.random()*6+2,
    dx:(Math.random()-0.5)*8,
    dy:(Math.random()-0.5)*8
    
    });
    
    }
    
    animate();
    
    }
    
    function animate(){
    
    ctx.clearRect(0,0,canvas.width,canvas.height);
    
    particles.forEach(p=>{
    
    ctx.beginPath();
    
    ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
    
    ctx.fillStyle=`hsl(${Math.random()*360},100%,50%)`;
    
    ctx.fill();
    
    p.x+=p.dx;
    
    p.y+=p.dy;
    
    });
    
    requestAnimationFrame(animate);
    
    }