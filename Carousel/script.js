const sliders = document.querySelector(".carouselbox");
let scrollPerClick;
let ImagePadding = 40;

showMovieData();

async function showMovieData() {
    const api_key ="1268590fd0b518ebdddbeb4a3e70199c";
   

    let result = await axios.get(
        "http://api.themoviedb.org/3/discover/movie?api_key="+
        api_key + 
        "&sort_by=popularity.desc"
    );

    result = result.data.results;

    result.map(function (cur, index) {
        sliders.insertAdjacentHTML(
            "beforeend",
            `<img class="img-${index} slider-img" src="https://image.tmdb.org/t/p/w185/${cur.poster_path}" />`
        );
    });

    scrollPerClick = 400;
}



let scrollAmount = 0;

function sliderScrollLeft() {
    sliders.scrollTo({
        top: 0,
        left: (scrollAmount -= scrollPerClick),
        behavior: "smooth",
    });

    if(scrollAmount < 0) {
        scrollAmount = 0
    }
}




function sliderScrollRight() {
    if(scrollAmount <= sliders.scrollWidth - sliders.clientWidth){
        sliders.scrollTo({
            top: 0,
            left: (scrollAmount += scrollPerClick),
            behavior:"smooth",
        })
    }
}