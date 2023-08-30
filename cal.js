var a="0";
var b="0";
var s="";
var o="";
var t=0;
var ta=0;
var tb=0;
var eq=0;
function i1(){
    if(eq==1){
        eq=0;
        cr();
    }
    s+=1;
    if(t==0){
        a=a+1;
    }
    else{
        b=b+1;
    }
    document.getElementById("top").innerHTML=s;
}
function i2(){
    if(eq==1){
        eq=0;
        cr();
    }
    s+=2;
    if(t==0){
        a=a+2;
    }
    else{
        b=b+2;
    }
    document.getElementById("top").innerHTML=s;
}
function i3(){
    if(eq==1){
        eq=0;
        cr();
    }
    s+=3;
    if(t==0){
        a=a+3;
    }
    else{
        b=b+3;
    }
    document.getElementById("top").innerHTML=s;
}
function i4(){
    if(eq==1){
        eq=0;
        cr();
    }
    s+=4;
    if(t==0){
        a=a+4;
    }
    else{
        b=b+4;
    }
    document.getElementById("top").innerHTML=s;
}
function i5(){
    if(eq==1){
        eq=0;
        cr();
    }
    s+=5;
    if(t==0){
        a=a+5;
    }
    else{
        b=b+5;
    }
    document.getElementById("top").innerHTML=s;
}
function i6(){
    if(eq==1){
        eq=0;
        cr();
    }
    s+=6;
    if(t==0){
        a=a+6;
    }
    else{
        b=b+6;
    }
    document.getElementById("top").innerHTML=s;
}
function i7(){
    if(eq==1){
        eq=0;
        cr();
    }
    s+=7;
    if(t==0){
        a=a+7;
    }
    else{
        b=b+7;
    }
    document.getElementById("top").innerHTML=s;
}
function i8(){
    if(eq==1){
        eq=0;
        cr();
    }
    s+=8;
    if(t==0){
        a=a+8;
    }
    else{
        b=b+8;
    }
    document.getElementById("top").innerHTML=s;
}
function i9(){
    if(eq==1){
        eq=0;
        cr();
    }
    s+=9;
    if(t==0){
        a=a+9;
    }
    else{
        b=b+9;
    }
    document.getElementById("top").innerHTML=s;
}
function i0(){
    if(eq==1){
        eq=0;
        cr();
    }
    s+=0;
    if(t==0){
        a=a+0;
    }
    else{
        b=b+0;
    }
    document.getElementById("top").innerHTML=s;
}
function r1(){
    if(eq==1){
        eq=0;
    }
    s+="+";
    if(t==0){
        t=1;
    }
    else if(t==1){
       a=cal1(a,b);
        b="0";
        tb=0;
        t=2;
    }
    else{
        t=1;
    }
    o="+";
    document.getElementById("top").innerHTML=s;
}
function r2(){
    if(eq==1){
        eq=0;
    }
    s+="-";
    if(t==0){
        t=1;
    }
    else if(t==1){
       a=cal1(a,b);
        b="0";
        tb=0;
        t=2;
    }
    else{
        t=1;
    }
    o="-";
    document.getElementById("top").innerHTML=s;
}
function r3(){
    if(eq==1){
        eq=0;
    }
    s+="*";
    if(t==0){
        t=1;
    }
    else if(t==1){
       a=cal1(a,b);
        b="0";
        tb=0;
        t=2;
    }
    else{
        t=1;
    }
    o="*";
    document.getElementById("top").innerHTML=s;
}
function r4(){
    if(eq==1){
        eq=0;
    }
    s+="/";
    if(t==0){
        t=1;
    }
    else if(t==1){
       a=cal1(a,b);
        b="0";
        tb=0;
        t=2;
    }
    else{
        t=1;
    }
    o="/";
    document.getElementById("top").innerHTML=s;
}
function r5(){
    if(eq==1){
        eq=0;
    }
    s+="%";
    if(t==0){
        t=1;
    }
    else if(t==1){
       a=cal1(a,b);
        b="0";
        tb=0;
        t=2;
    }
    else{
        t=1;
    }
    o="%";
    document.getElementById("top").innerHTML=s;
}
function res(){
    eq=1;
    a=cal1(a,b);
    a=a*1.0;
    b="0";
    ta=0;
    tb=0;
    s=""+a
    o="";
    document.getElementById("top").innerHTML=a;
}
function cal1(a,b){
    if(ta==0){
        a=a+".0";
    }
    if(tb==0){
        b=b+".0";
    }
    k=parseFloat(a);
    l=parseFloat(b);
    if(o.localeCompare("+")==0){
        a=""+(k+l);
    }
    else if(o.localeCompare("-")==0){
        a=""+(k-l);
    }
    else if(o.localeCompare("*")==0){
        a=""+(k*l);
    }
    else if(o.localeCompare("/")==0){
        a=""+(k/l);
    }
    else if(o.localeCompare("%")==0){
        a=""+((k*l)/100);
    }
    return a;
}
function r6(){
    if(t==0){
        a=a+".";
        ta=1;
    }
    else{
        b=b+".";
        tb=1;
    }
    s=s+".";
    document.getElementById("Top").innerHTML=s;
}
function cr(){
    a="0";
    b="0";
    s="";
    o="";
    t=0;
    ta=0;
    tb=0;
    document.getElementById("top").innerHTML=a;
}