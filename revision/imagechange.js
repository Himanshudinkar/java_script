function photochangge(){
    let photo = document.querySelector('#photo')
    photo.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlRYwS5A0rCCfblZi-Tt2sj8U7LzDZ1u6x1g&s";

    let photos = document.querySelector('#photos')
    photos.style.scale = "1.1";
    photos.style.transition = "scale 0.5s";
}