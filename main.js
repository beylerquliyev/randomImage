

let fullDiv=document.querySelector("#fullDiv")
async function date(){
try{
    
    let response=await fetch("https://blog-api-t6u0.onrender.com/posts")
    let response2=await response.json()
  console.log(response2);
   
    let date2=response2.map((item,index)=>{
        return `

        <div class="card" style="width: 18rem;">
        <img src="https://loremflickr.com/640/480/${index}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${item.title}</h5>
          <p class="card-text">${item.body}</p>
          
        </div>
      </div>
        `


    })
fullDiv.innerHTML=date2.join("")
}
catch(eror){
    console.log("eror");

}

}

date()



console.log(fullDiv);