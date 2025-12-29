// console.log("Hello, World!");

function catagory (){
    fetch ("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then(res => res.json())
    .then((data) => loadData(data.categories))
}

const videofetchSection = () => {
    fetch ('https://openapi.programming-hero.com/api/phero-tube/videos')
    .then ((res) => res.json())
    .then ((data) => VideoCategorySection(data.videos))

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


const VideoCategorySection = (videos) => {
    const videoContainer = document.getElementById("video-container");
    // console.log(videos);
   videos.forEach(video => {
    const div = document.createElement("div");
// 

    
    div.innerHTML = `
    
    
    <div class="card bg-base-100 shadow-sm">
                <figure class="relative">
                    <img
                    src="${video.thumbnail}"
                    alt="${video.title}" />
                    <span class="absolute bottom-2 right-2 bg-black text-white text-xs px-2 py-1 rounded">${video.others.posted_date}</span>
                </figure>
                <div class="card-body">
                    <h2 class="card-title">${video.title}</h2>
                    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                    <div class="card-actions justify-end">
                    <button class="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
    
    
    
    `
    videoContainer.appendChild(div);
    
   });
}

catagory();

videofetchSection();


// authors
// : 
// [{…}]
// category_id
// : 
// "1001"
// description
// : 
// "Dive into the rhythm of 'Shape of You,' a captivating track that blends pop sensibilities with vibrant beats. Created by Olivia Mitchell, this song has already gained 100K views since its release. With its infectious melody and heartfelt lyrics, 'Shape of You' is perfect for fans looking for an uplifting musical experience. Let the music take over as Olivia's vocal prowess and unique style create a memorable listening journey."
// others
// : 
// {views: '100K', posted_date: '16278'}
// thumbnail
// : 
// "https://i.ibb.co/L1b6xSq/shape.jpg"
// title
// : 
// "Shape of You"
// video_id
// : 
// "aaaa"
// [[Prototype]]
// : 
// Object