let box=document.querySelector(".box")
let newBtn=document.querySelector(".newBtn")


let newXhr=new XMLHttpRequest()
let category='https://api.thecatapi.com/v1/categories'
newXhr.open("GET",category)
newXhr.onload=(categoryFunction)=>{
    let allCategory=JSON.parse(categoryFunction.currentTarget.response)

    allCategory.forEach(element => {
    let but=document.createElement("button")
    but.innerHTML=`<button'>${element.name}</button>`
    newBtn.append(but) 

   

    but.addEventListener("click",()=>{
    let xhr=new XMLHttpRequest()
    let a=element.id;
    box.innerHTML=""
    let photo=`https://api.thecatapi.com/v1/images/search?limit=10&page=1&category_ids=${a}`
    xhr.open("GET",photo)
    xhr.onload=(photoFunction)=>{
        let allImages=JSON.parse(photoFunction.currentTarget.response)
        a=element.id
        allImages.forEach((item)=>{
            let newDiv=document.createElement("div")
            newDiv.innerHTML=`<img src="${item.url}" alt="" >`
            box.append(newDiv)  
        })  
    }
      xhr.send()      
    })
   });
}
newXhr.send()
