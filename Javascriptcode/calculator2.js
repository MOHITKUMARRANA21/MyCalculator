const button1=document.querySelectorAll('button');
const arrayButton=Array.from(button1);
const Arraybutton1=['⌫','%','÷','×','-','+'];
/*for(let i=0;i<Arraybutton1.length;i++)
{
  arrayButton.forEach((value) =>{
    if(value.innerText === Arraybutton1[i])
      value.style.color='orange';
  })
}
*/
arrayButton.forEach(value =>{
  if(Arraybutton1.includes(value.innerText))
    value.style.color='darkorange';
  else if(value.innerText === 'AC')
    value.style.backgroundColor='#941835';
});

const menuBtn = document.querySelector(".js-buttonimage");
const popup = document.querySelector(".popup-menu");

menuBtn.addEventListener("click", () => {
  condition();
});
function condition(){
  
  if(popup.style.display === "block"){
      popup.style.display = "none";
  }else{
      popup.style.display = "block";
  }
}
const theme=document.querySelector(".js-menu2");
const theme1=document.querySelector(".container");
let k=false;
theme.addEventListener("click",()=>{
  popup.style.display="none";
  theme1.classList.toggle("light-theme");
  if(k === false){
    document.body.style.backgroundColor="#D5D5D5";
    k=true;
  }
  else {
    document.body.style.backgroundColor="#3f3f4b";
    k=false;
  }
});
let stringValue='';
const displayValue=document.querySelector('.Input-value');
arrayButton.forEach((value)=>{
  value.addEventListener('click',(event)=>{
    const value=event.target.innerText;
    if((stringValue === '' && /[×÷%+-]/.test(value)))
    {
      return;
    }
    if(/[×÷%+-]/.test(value) && /[×÷%+-]$/.test(stringValue))
    {
      return;
    }
    if(event.target.innerText === '⌫')
    {
      stringValue=stringValue.slice(0,-1);
      displayValue.value =stringValue;
    }
    else if(event.target.innerText === 'AC')
    {
      stringValue='';
      displayValue.value=stringValue;
    }
    else if(event.target.innerText === '=')
    {
      stringValue=stringValue.replace(/×/g,'*');
      stringValue=stringValue.replace(/÷/g,'/');
      stringValue=eval(stringValue).toString();
      displayValue.value=stringValue;
    }
    else
    {
      stringValue+=value;
      displayValue.value=stringValue;
      bottomDisplay(stringValue);
    }  
    stringValue=stringValue.replace(/^0+(?=\d)/,'');
    displayValue.value=stringValue;
  })
});
function bottomDisplay(result)
{
  if(/\d+[×÷%+-]\d/.test(result))
    console.log(eval(result));
}