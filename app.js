const BASE_URL =
  "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";
  const dropdowns =document.querySelectorAll(".dropdown select");
//   for (code in countryList){
//     console.log(code);
//   }
let i=0;
for(let select of dropdowns){
    for(currCode in countryList){
        let newoption=document.createElement("option")
        newoption.innerText=currCode;
        newoption.value=currCode;
        if(select.name==="from" && currCode==="USD"){
            newoption.selected="selected";
        }
        if(select.name==="to" && currCode==="INR"){
            newoption.selected="selected";
        }
        select.append(newoption);
    }

    select.addEventListener("change",(e)=>{
        updateflag(e.target)

    })
}


const updateflag =(element)=>{
    let currCode=element.value;
        let countrycode = countryList[currCode]
        let newsrc=`https://flagsapi.com/${countrycode}/flat/64.png`
        let img = element.parentElement.querySelector("img")
        img.src = newsrc;
}