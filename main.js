
const summarySection = document.querySelector('section:last-child')
const summaryCategory = summarySection.querySelectorAll('p span:first-child')
const summaryScore = summarySection.querySelectorAll('b')

fetch('./data.json')
    .then((response) => response.json())
    .then((json) => {

        summaryCategory[0].innerHTML = `<span><img src=${json[0].icon}> ${json[0].category} <span>`
        summaryCategory[1].innerHTML = `<span><img src=${json[1].icon}> ${json[1].category} <span>`
        summaryCategory[2].innerHTML = `<span><img src=${json[2].icon}> ${json[2].category} <span>`
        summaryCategory[3].innerHTML = `<span><img src=${json[3].icon}> ${json[3].category} <span>`

        summaryScore[0].textContent = json[0]['score']
        summaryScore[1].textContent = json[1]['score']
        summaryScore[2].textContent = json[2]['score']
        summaryScore[3].textContent = json[3]['score']
    });

// I intend to come back to this
