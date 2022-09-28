async function getData(){
    let res = await fetch("photos.json")
    let data = await res.json()
    return(data)
} 

function getBodyHtml(data){
    let photoHtml = data.map(photo => {
        return `<img class="photo" src="https://picsum.photos/id/${photo.id}/100/100" alt="${photo.title}">`
    }).join('')
    return `
        <div class="photo-galery">
            ${photoHtml}
        </div>
    `
    
}

getData().then(data => {
    document.body.innerHTML = `<div class="galery"> 
            <div class="photo" style="width:200px; height:200px">
            <img  id="selected-photo" src="https://picsum.photos/id/1/200/200" alt="accusamus beatae ad facilis cum similique qui sunt">
            </div>
            ${getBodyHtml(data)} 
        </div>`
    let imgArray = Array.from(document.getElementsByClassName("photo"))
    imgArray.forEach(img => {
        img.addEventListener("click", () => {
            let imgSrcCrop = img.src.substring(0, img.src.length - 7)
            const selectedPhoto = document.getElementById("selected-photo")
            selectedPhoto.src = imgSrcCrop + "200/200"
            selectedPhoto.style.display = "inline"
            
        })
        
    })
})

