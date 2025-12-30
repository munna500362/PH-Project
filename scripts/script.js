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
    console.log(videos);
   videos.forEach(video => {
    const div = document.createElement("div");
// 

    
    div.innerHTML = `
    
               <div class="card bg-base-100 shadow-sm ">
                <figure class="relative ">
                    <img class="w-full h-48 object-cover"
                    src="${video.thumbnail}"
                    alt="" />
                    <span class="absolute bottom-2 right-2 bg-black text-white text-xs px-2 py-1 rounded">3hrs 56 min ago
                        
                    </span>
                </figure>
                <div class="flex  gap-5 px-0 py-5">
                           <div class="profile">
                                <div class="avatar">
                                    <div class="ring-primary ring-offset-base-100 w-8 rounded-full ring-2 ring-offset-2">
                                        <img src="${video.authors[0].profile_picture}" />
                                    </div>
                                </div>
                            </div>
                           
                           
                            <div>
                                <h2 class="text-sm font-bold">${video.title}</h2>
                           
                                <p class="flex text-sm text-gray-600 ">${video.authors[0].profile_name} <img class="w-5" src="https://img.icons8.com/?size=48&id=98A4yZTt9abw&format=png"></p>
                                <p>91K views</p>
                            </div> 
                </div>
            </div>
    
    
    `
    videoContainer.appendChild(div);
    
   });
}

catagory();

// videofetchSection();


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