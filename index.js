// make a fetch request to get data from API
// make forEach to get all the the data from the array and have access to the project
// make an event listener that when you click gives a random generator fact 


// fetch request
fetch(`https://anime-facts-rest-api.herokuapp.com/api/v1/one_piece`)
.then(resp => resp.json())
.then(data => {
    console.log(data)
})

// start button
document.querySelector('.start-button').addEventListener('click', (e) => {
    e.preventDefault();
    console.log('hi!')
})


// multiple choice quiz
const result = () => {
    let score = 0;
    if (document.getElementById('correct1').checked) {
        score++;
    }
    if (document.getElementById('correct2').checked) {
        score++;
    }
    if (document.getElementById('correct3').checked) {
        score++;
    }
    if (document.getElementById('correct4').checked) {
        score++;
    }
    if (document.getElementById('correct5').checked) {
        score++;
    }
    if (document.getElementById('correct6').checked) {
        score++;
    }
    if (document.getElementById('correct7').checked) {
        score++;
    }
    if (document.getElementById('correct8').checked) {
        score++;
    }
    if (document.getElementById('correct9').checked) {
        score++;
    }
    if (document.getElementById('correct10').checked) {
        score++;
    }
    alert('Nice weeb! Your score is:' +score);
}