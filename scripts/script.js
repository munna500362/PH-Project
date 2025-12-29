// console.log("Hello, World!");

function catagory (){
    fetch ("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then(res => res.json())
    .then((data) => loadData(data.categories))
}

const videoSection = () => {
    fetch ('https://openapi.programming-hero.com/api/phero-tube/videos')
    .then ((res) => res.json())
    .then ((data) => console.log(data))

}
// category
// : 
// "Music"
// category_id
// : 
// "1001"
function loadData(categories){
    
    for(const cat of categories){
// console.log(cat);
        const categoriContainer = document.getElementById("categori-container");
        const div = document.createElement("div")
        div.innerHTML = `
                <button class="btn btn-sm hover:bg-[#FF1F3D] hover:text-white">${cat.category}</button>
        
        `
        categoriContainer.appendChild(div);
}}

catagory();

videoSection();