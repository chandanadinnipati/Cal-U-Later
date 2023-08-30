function even(){
    var a=document.getElementById('t').value;
    var x=parseFloat(a);
    if(x%2==0){
        s=""+a+" is Even number";
        document.getElementById("top").innerHTML=s;
    }
    else{
        s=""+a+" is not an Even number";
        document.getElementById("top").innerHTML=s;
    }
}
function odd(){
    var a=document.getElementById('t').value;
    var x=parseFloat(a);
    if(x%2!=0){
        s=""+a+" is Odd number";
        document.getElementById("top").innerHTML=s;
    }
    else{
        s=""+a+" is not an Odd number";
        document.getElementById("top").innerHTML=s;
    }
}
function prime(){
    var a=document.getElementById('t').value;
    var x=parseFloat(a);
   // document.getElementById('').innerHTML=a+" is not a prime";
    var i;
    var f=0;
    for(i=2;i<=Math.floor(x/2);i++){
        if(x%i==0){
            f=1;
            break;
        }
    }
    document.getElementById('top').innerHTML=a+" is not a prime";
    if(f==1){
        document.getElementById('top').innerHTML=a+" is not a prime";
        f=0;
    }
    else{
        document.getElementById('top').innerHTML=a+" is a prime";
    }

}
function perfect(){
    var a=document.getElementById('t').value;
    var x=parseFloat(a);
    if(Math.ceil(Math.sqrt(x))==Math.floor(Math.sqrt(x))){
        document.getElementById('top').innerHTML=""+Math.sqrt(x)+" square is "+a;
    }
    else{
        document.getElementById('top').innerHTML=a+" is not a perfect square";
    }
}
function fact(){
    var a=document.getElementById('t').value;
    var x=parseFloat(a);
    var i;
    var p=1;
    for(i=2;i<=x;i++){
        p=p*i;
    }
    document.getElementById('top').innerHTML=p;
}
function pal(){
    var a=document.getElementById('t').value;
    var t="";
    var i;
    for(i=(a.length)-1;i>=0;i--){
        t=t+a.charAt(i);
    }
    if(a.localeCompare(t)==0){
        document.getElementById('top').innerHTML=a+" is a palindrome";
    }
    else{
        document.getElementById('top').innerHTML=a+" is not a palindrome";
    }
}