
// start with creating a drop down menu with all anime menue
// event listener for one is selected 
// user selection assigns it to animeName 
// click event listener that displays anime facts
document.addEventListener('DOMContentLoaded', (e) => {
   

const userSelection = (animeName) => {
    fetch(`https://anime-facts-rest-api.herokuapp.com/api/v1/${animeName}`)
    .then(resp => resp.json())
    .then(data => {
        console.log(data)
        console.log(data.data)
        renderFact(data.data)

})
} // end of userSelection
// grabs the drop down menu and puts the names in the function userSelection and grabs each name of the anime
document.querySelector('.dropdown-content').addEventListener('click', (e) =>{
    console.log(e.target.id)
    userSelection(e.target.id);
    renderFact()
})


const renderFact = (data) => {
    data.forEach(anime => {
        console.log(anime.fact)
        
        const ul = document.querySelector('#ol')
        const li = document.createElement('li')
        li.textContent = anime.fact
        ul.append(li)
    })
}




// 

 



 // 
}) // end of domContentLoaded






