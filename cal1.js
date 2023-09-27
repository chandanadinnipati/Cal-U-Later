function lcm(){
    var a=document.getElementById('t').value;
    const sa = a.split(',');
    p=sa[0];
    for(let i=1;i<sa.length;i++){
        q=sa[i];
        p=tlcm(p,q);
    }
    // s=
    document.getElementById("top").innerHTML="LCM is "+p.toString();
}
function tlcm(num1,num2){
    let min = (num1 > num2) ? num1 : num2;
    while (true) {
        if (min % num1 == 0 && min % num2 == 0) {
            return min;
        }
        min++;
    }
}
function HCF(){
    var a=document.getElementById('t').value;
    const sa = a.split(',');
    p=sa[0];
    for(let i=1;i<sa.length;i++){
        q=sa[i];
        p=thcf(p,q);
    }
    // s=
    document.getElementById("top").innerHTML="HCF is "+p.toString();
    
}
function thcf(a,b){
    let hcf;
    for (let i = 1; i <= a && i <= b; i++) {

        // check if is factor of both integers
        if( a % i == 0 && b % i == 0) {
            hcf = i;
        }
    }
    return hcf;
    
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
function factor(){
    var x=document.getElementById('t').value;
    f=0;
    s=""
    for(i=1;i<=Math.floor(x/2);i++){
        if(x%i==0){
           if(f==0){
            s+=i.toString();
            f=1;
           }
           else{
            s=s+","+i.toString();
           }
        }
    }
    // s=
    document.getElementById("top").innerHTML=s;
}
