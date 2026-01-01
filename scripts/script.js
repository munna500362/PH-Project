function removeActiveClass(){
    const categoryButtons = document.getElementsByClassName("active");
    for(const button of categoryButtons){
        button.classList.remove("active");
    }
}

function VideoDetails(video_id){
   const url = 
   `
   https://openapi.programming-hero.com/api/phero-tube/video/${video_id}
   `
   fetch (url)
   .then ((res) => res.json())
   .then ((data) => VideoButtonDetails(data.video))
};

function VideoButtonDetails(video){
    console.log(video);
      document.getElementById("VideoDetails_Container").showModal();
      const videoDetailsModel = document.getElementById("videoDetailsModel");
      videoDetailsModel.innerHTML = 
      `
        <div class="card bg-base-100 image-full w-full shadow-sm">
  <figure>
    <img
      src="${video.thumbnail}"
      alt="videoThumnail" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">${video.title}</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div class="card-actions justify-end">
    </div>
  </div>
</div>
      `
    // videoContainerDetails.innerHTML = 
    // `
    // <h1> ${video.title}</h1>
    // `
    
}

function catagoryButton (){
    fetch ("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then(res => res.json())
    .then((data) => loadData(data.categories))
}

const videofetchSection = () => {
    fetch ('https://openapi.programming-hero.com/api/phero-tube/videos')
    .then ((res) => res.json())
    .then ((data) => {
        removeActiveClass();
        const AllData = document.getElementById("All-btn");
        AllData.classList.add("active");
        VideoCategorySection(data.videos);

    })
}



function videofetchSectionByCategory (id){
    const url = `https://openapi.programming-hero.com/api/phero-tube/category/${id}`;
    fetch (url)
    .then ((res) => res.json())
    .then ((data) => {
        removeActiveClass()
        const CategoryID = document.getElementById(`btn-${id}`);
        CategoryID.classList.add("active");
        console.log(CategoryID);
        VideoCategorySection(data.category);
    })
}

function loadData(categories){
    for(const cat of categories){
        const categoriContainer = document.getElementById("categori-container");
        const div = document.createElement("div")
        div.innerHTML = 

        `
         <button id="btn-${cat.category_id}" onclick="videofetchSectionByCategory(${cat.category_id})" class="btn btn-sm hover:bg-[#FF1F3D] hover:text-white">${cat.category}</button>
        `
        categoriContainer.appendChild(div);
}}


const VideoCategorySection = (videos) => {
    const videoContainer = document.getElementById("video-container");
    videoContainer.innerHTML = "";
    if(videos.length === 0){
        videoContainer.innerHTML =
        `
            <div class="col-span-full flex flex-col justify-center items-center text-center">              
                <img class="w-[120px] py-3 lg:py-5" src="image/Icon.png" alt="">
                <h1 class="font-bold lg:font-extrabold">Oops!! Sorry, There is no content here</h1>
             
            </div>
        `
        return;

    }
    console.log(videos);
   videos.forEach(video => {
    const div = document.createElement("div");
    div.innerHTML = `
    
               <div class="card bg-base-100 shadow-sm ">
                <figure class="relative ">
                    <img class="w-full h-auto md:h-48 object-cover"
                    src="${video.thumbnail}"
                    alt="" />
                    <span class="absolute bottom-2 right-2 bg-black text-white text-xs px-2 py-1 rounded">3hrs 56 min ago
                        
                    </span>
                </figure>
                <div class="flex  gap-3 lg:gap-5 px-0 py-3  lg:py-5">
                           <div class="profile">
                                <div class="avatar">
                                    <div class="ring-primary ring-offset-base-100 w-8 rounded-full ring-2 ring-offset-2">
                                        <img src="${video.authors[0].profile_picture}" />
                                    </div>
                                </div>
                            </div>
                           
                           
                            <div>
                                <h2 class="text-sm font-bold">${video.title}</h2>
                           
                                <p class="flex text-sm text-gray-600 ">
                                ${video.authors[0].profile_name} 
                                ${video.authors[0].verified == true ? 
                                    `
                                        <img class="w-5" src="https://img.icons8.com/?size=48&id=98A4yZTt9abw&format=png">
                                ` : ``}
                                </p>
                                <p>91K views</p>
                            </div> 

                </div>
                                 
                            <button onclick = "VideoDetails('${video.video_id}')" class="btn btn-block">Details</button>
            </div>
    
    
    `
    videoContainer.appendChild(div);
    
   });
}

catagoryButton();


{/* <img class="w-5" src="https://img.icons8.com/?size=48&id=98A4yZTt9abw&format=png"></img> */}