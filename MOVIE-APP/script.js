const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="'

const main = document.getElementById('main')
const form = document.getElementById('form')
const search = document.getElementById('search')


getMovies(API_URL)

form.addEventListener('submit', (e) => {
    e.preventDefault()

    fetch(SEARCH_API + search.value)
        .then(res => res.json())
        .then(data => {
            showMovies(data.results)
        })
})

function getMovies(url) {
    fetch(url)
        .then(res => res.json())
        .then(data => {
            showMovies(data.results)            
        })
}

function showMovies(movies) {
    main.innerHTML = ''

    movies.forEach(movie => {
            
        const {title, poster_path, vote_average, overview} = movie
        const movieElement = document.createElement('div')
        movieElement.classList.add('movie')
        movieElement.innerHTML = `
            <img src="${IMG_PATH + poster_path}">
            <div class="title">
                <h3>${title}</h3>
                <span class="${styleRate(vote_average)}">${vote_average}</span>
            </div>
            <div class="overvew">
                <h3>${title}</h3>
                ${overview}
            </div>
        `

        main.appendChild(movieElement)
    });
}

function styleRate(vote) {
    if(vote >= 8) {
        return 'green'
    }else if(vote >= 5) {
        return 'orange'
    }else{
        return 'red'
    }
}