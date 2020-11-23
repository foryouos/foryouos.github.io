window.onload=function (){
    document.getElementById("reimg").onclick=reimg;
    }

function reimg(){
    var img=document.getElementById("reimg");
    var sound=document.getElementById("sound")
    if(img.src=='https://www.foryouos.com/wp-content/uploads/2020/11/close.png'){
        img.src='https://www.foryouos.com/wp-content/uploads/2020/11/open.png';
        sound.muted=false;
    }
    else{
        img.src='https://www.foryouos.com/wp-content/uploads/2020/11/close.png';
        sound.muted=true;
    }
}
