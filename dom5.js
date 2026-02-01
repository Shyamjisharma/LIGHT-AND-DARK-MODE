var btn=document.querySelector('button');
var body=document.querySelector('body');
var mode='light';
btn.addEventListener('click',()=>{
    // document.body.style.background='black';
    // document.body.style.color='white';
    //  btn.innerHTML="Light Mode";

    // document.body.classList.toggle('dark');

if(mode=='light'){
btn.innerHTML="Light Mode";
body.classList.add('dark');
 body.classList.remove('light');
mode='dark';
}
else{
    btn.innerHTML="Dark Mode";
    body.classList.add('light');
     body.classList.remove('dark');
    mode='light';
}
})