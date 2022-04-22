
// start with creating a drop down menu with all anime menue
// event listener for one is selected 
// user selection assigns it to animeName 
// click event listener that displays anime facts
document.addEventListener('DOMContentLoaded', (e) => {


    const userSelection = (animeName) => {
        fetch(`https://anime-facts-rest-api.herokuapp.com/api/v1/${animeName}`)
            .then(resp => resp.json())
            .then(data => {
                renderFacts(data.data)

            })
    }
    // grabs the drop down menu and puts the names in the function userSelection and grabs each name of the anime
    document.querySelector('.dropdown-content').addEventListener('click', (e) => {
        userSelection(e.target.id);


    })

    const renderFacts = (data) => {
        data.forEach(anime => {

            const ol = document.querySelector('#ol')
            const li = document.createElement('li')
            li.textContent = anime.fact
            ol.append(li)
            
        })
    }

    document.querySelector('#new-comment')
    const form = document.querySelector('#comments-form')
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        const ul = document.querySelector('#ul')
        const li = document.createElement('li')
        const newComment = document.querySelector('#comment')
        li.textContent = newComment.value
        ul.append(li)
        form.reset();
        })
    

    const randomFactSelector = (data) => {
        const index = Math.floor(Math.random() * data.data.length);
        return data.data[index].fact

    }

    // click event for Random Generator
    const startButton = document.querySelector('.start-button')
    const quotesContainer = document.querySelector('#quotesContainer')



    startButton.addEventListener('click', (e) => {
        e.preventDefault();

        const animeNames = ['attack_on_titan', 'jujutsu_kaisen', 'demon_slayer', 'boku_no_hero_academia', 'naruto', 'dragon_ball', 'fma_brotherhood']
        const index = Math.floor(Math.random() * animeNames.length);
        const animeName = animeNames[index]
        const p = document.createElement('p')
        fetch(`https://anime-facts-rest-api.herokuapp.com/api/v1/${animeName}`)
            .then(resp => resp.json())
            .then(data => {
                p.textContent = randomFactSelector(data)
            })

        quotesContainer.innerHTML = ''
        quotesContainer.append(p)

    })





}) // end of domContentLoaded






