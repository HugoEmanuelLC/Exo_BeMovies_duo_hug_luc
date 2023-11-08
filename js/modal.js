let template_login_item = document.querySelector('.template_login_item').innerHTML
let template_register_item = document.querySelector('.template_register_item').innerHTML
let template_modal_infos_movies = document.querySelector('.template_modal_infos_movies').innerHTML
let register_login_item = document.querySelector('.register_login_item')
let choice = document.querySelector('.choice span')
let modal_movie_item = document.querySelector('.modal_movie_item .movie_item')
let btn_modal_movie_off = document.querySelector('.btn_modal_movie_off')
let btn_modal_movie_on = document.querySelector('.btn_modal_movie_on')
let btn_modal_login_off = document.querySelector('.btn_modal_login_off')
let btn_modal_login_on = document.querySelector('.btn_modal_login_on')
let btn_modal_register_on = document.querySelector('.btn_modal_register_on')
let modal_bloc_float = document.querySelectorAll('.bloc_float')


const tabGenresID= {
    Action         : 28,
    Animation      : 16,
    Comedy         : 35,
    Drama          : 18,
    Fantasy        : 14,
    Romance        : 10749,
    Adventure      : 12,
    Crime          : 80,
    Documentary    : 99,
    Family         : 10751,
    History        : 36,
    Horror         : 27,
    Music          : 10402,
    Mystery        : 9648,
    ScienceFiction : 878,
    TVMovie        : 10770,
    Thriller       : 53,
    War            : 10752,
    Western        : 37,
};


modal_movie_item.innerHTML = template_modal_infos_movies;

function getInfosMovies(movieId, swiperWrapper) {

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NTJmOWI5NjgxODNkZjI1MTkzZmU1MmU0YzRmODViZiIsInN1YiI6IjYzYWNiNzllYzgxMTNkMDBhMDI4MjFiMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qgY78uATNXnVYR0plkDVoVxwIYIt-_vSwyvjQOUArzU'
        }
    };

        fetch(`https://api.themoviedb.org/3/movie/${movieId}?language=en-US`, options)
        .then(response => response.json())
        .then(movie => {
            console.log(movie);
            let img = modal_movie_item.querySelector('img')
            let title = modal_movie_item.querySelector('.title')
            let date = modal_movie_item.querySelector('.date')
            let note = modal_movie_item.querySelector('.note')
            let genre = modal_movie_item.querySelector('.genre')
            let description = modal_movie_item.querySelector('.description')
            let actors = modal_movie_item.querySelector('.actors')

            genre.innerHTML = ""
            actors.innerHTML = ""

            img.setAttribute('src', `https://image.tmdb.org/t/p/w300${movie.poster_path}`)
                title.innerText = movie.title
                date.innerText = movie.release_date
                date.innerText = movie.release_date.slice(0,4)
                note.innerText = Number.parseFloat(movie.vote_average).toFixed(1);
                description.innerText = movie.overview;

                movie.genres.forEach(genreId => {
                    for (let i = 0; i < Object.keys(tabGenresID).length; i++) {
                        if (genreId.id == tabGenresID[Object.keys(tabGenresID)[i]]) {
                            genre.append(`${Object.keys(tabGenresID)[i]} / `) 
                        } else {
                            console.log(false);
                        }
                    }
                })

                let tabTampon;
    
                tabTampon = genre.innerText.split(' ')
                console.log(tabTampon);
                genre.innerHTML = ""
                tabTampon.pop()
                tabTampon.forEach(ele => genre.append(`${ele} `));

                fetch(`https://api.themoviedb.org/3/trending/person/day?language=en-US`, options)
                    .then(actor => actor.json())
                    .then( data => {
                        
                        data.results.forEach(actor => {
                        
                        actor.known_for.filter(a => {
                            
                            if (a.original_title == movie.original_title) {
                                actors.append(`${actor.original_name} `) 
                            } else {}
                        })
                        })
                    })
                    .catch(er => console.log(er))

                
        })
        .catch(err => console.error(err));
}





// liens category
let genreCategory = document.querySelector('.nav_genre')
genreCategory.querySelectorAll('a').forEach(li => {
  
  li.addEventListener('click', (e)=>{

    genreCategory.querySelectorAll('a').forEach(allLi => {
      allLi.classList = '';
    })
    document.querySelector('.category-p').innerText = e.target.innerText;

    let tampon = e.target.innerText;

    e.target.classList = 'active';

    try {
      genre = tabGenresID[tampon]
    } catch (error) {
      console.log(error);
    }
})})


document.addEventListener('click', (e)=>{
    e.stopPropagation()
    if (e.target.matches('.bloc_float')) {
        console.log(e.target.accessKey);
        verifModal('modal_movie_item', e.target.accessKey)
    } else {
        if (e.target.matches('.btn_modal_register_on')) {
            register_login_item.innerHTML = template_register_item
        } else if (e.target.matches('.btn_modal_login_on')) {
            register_login_item.innerHTML = template_login_item
        }else if (e.target.className == 'sig') {
            register_login_item.innerHTML = template_register_item
            
        }else if(e.target.className == 'log') {
            register_login_item.innerHTML = template_login_item
    
        }else if( e.target.innerHTML == choice.innerHTML){
            register_login_item.innerHTML = template_register_item
    
        }
        // else if(document.querySelector('.bloc_login form .submit')){
        //     console.log('login');
        //     let formLogin = document.querySelector('.bloc_login form');
        //     let login_btn = formLogin.querySelector('.submit');

        //     formLogin.addEventListener('submit', ()=>{
        //         console.log('|||||||||||| submit register |||||||||||||');
                
        //         console.log(`Username: ${formLogin.username.value}`);
        //         console.log(`Password: ${formLogin.password.value}`);
        //         console.log(`Remember: ${formLogin.remember.value}`);
        //         alert(`Welcome ${formLogin.username.value}`)
        //     })
        // }
    }
})


// MODAL ON OFF
function verifModal( modal, id ) {
    if (document.querySelector(`.${modal}`).matches('.modal_desactive') == true) {
        document.querySelector(`.${modal}`).className = `modal ${modal} modal_active`
        if (modal == "modal_movie_item") {
            getInfosMovies(id, modal_movie_item)
        } else {}
    } else {
        document.querySelector(`.${modal}`).className = `modal ${modal} modal_desactive`
    }
}
btn_modal_movie_off.addEventListener('click', () => verifModal('modal_movie_item'))

// btn_modal_movie_on.addEventListener('click', () => verifModal('modal_movie_item'))

btn_modal_login_on.addEventListener('click', ()=> verifModal('modal_register_login'))
btn_modal_register_on.addEventListener('click', ()=> verifModal('modal_register_login'))

btn_modal_login_off.addEventListener('click', ()=> verifModal('modal_register_login'))







// DONNES LOGINS OR REGISTER
// bloc_login
// bloc_register
// let formLogin = document.querySelector('bloc_login form');
// let login_btn = formLogin.querySelector('.submit');

// login_btn.addEventListener('click', ()=>{
//     console.log('|||||||||||| submit register |||||||||||||');
    
//     console.log(`Username: ${formLogin.username.value}`);
//     console.log(`Password: ${formLogin.password.value}`);
//     console.log(`Remember: ${formLogin.remember.value}`);
//     alert(`Welcome ${formLogin.username.value}`)
// })




// let formLogin = document.querySelector('form');
// let login_btn = document.querySelector('.submit_login');

// login_btn.addEventListener('click', ()=>{
//                 console.log('|||||||||||| submit register |||||||||||||');
                
//                 console.log(`Username: ${formLogin.username.value}`);
//                 console.log(`Password: ${formLogin.password.value}`);
//                 console.log(`Remember: ${formLogin.remember.value}`);
//                 alert(`Welcome ${formLogin.username.value}`)
//             })