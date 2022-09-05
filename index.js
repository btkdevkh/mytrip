const mainCards = document.querySelector('.main-cards')

let index = 0
const datas = [
  {
    title: 'Title 1',
    description: 'Description 1',
    link: 'https://google.com',
    paths: [
      './img/alien.jpg',
      './img/css.jpg',
      './img/html.jpg',
    ]
  },
  {
    title: 'Title 2',
    description: 'Description 2',
    link: 'https://google.com',
    paths: [
      './img/css.jpg',
      './img/html.jpg',
    ]
  },
  {
    title: 'Title 3',
    description: 'Description 3',
    link: 'https://google.com',
    paths: [
      './img/js.jpg',
    ]
  }
]

datas.forEach(data => createCardItem(data))

function generateImgTag(paths, idx) { 
  return `<img src="${paths[idx]}" alt="" class="main-cards-item-img">`
}

function createCardItem(data) {
  mainCards.innerHTML += `
    <article class="main-cards-item">
      <div class="main-cards-item-img-wrapper">
        ${data.paths.length > 1 ? '<div class="main-cards-item-img-wrapper-chevron-left"><</div>' : ''}
        
        <div class="main-cards-item-imgs">
          ${generateImgTag(data.paths, 0)}
        </div>

        ${data.paths.length > 1 ? '<div class="main-cards-item-img-wrapper-chevron-right">></div>' : ''}
      </div>
      <div class="main-cards-item-description">
        <h3 class="main-cards-item-description-h3">${data.title}</h3>
        <p class="main-cards-item-description-p">${data.description}</p>
        <a class="main-cards-item-description-link" href="#">Details</a>
      </div>
    </article>
  `
}

const linksDetails = document.querySelectorAll('.main-cards-item-description-link')
const chevronLefts = document.querySelectorAll('.main-cards-item-img-wrapper-chevron-left')
const chevronRights = document.querySelectorAll('.main-cards-item-img-wrapper-chevron-right')
const mainCardsItemImgs = document.querySelectorAll('.main-cards-item-imgs')

linksDetails.forEach((link, idx) => {
  link.addEventListener('click', () => {
    handleClickDetails(idx)
  })
})

mainCardsItemImgs.forEach((_, idx) => {
  if(mainCardsItemImgs[idx].previousElementSibling) {
    mainCardsItemImgs[idx].previousElementSibling.addEventListener('click', (e) => {      

      index--

      if(index < 0) index = datas[idx].paths.length - 1

      mainCardsItemImgs[idx].innerHTML = `${generateImgTag(datas[idx].paths, index)}`
    })
  }

  if(mainCardsItemImgs[idx].nextElementSibling) {
    mainCardsItemImgs[idx].nextElementSibling.addEventListener('click', (e) => {

      index++

      if(index >= datas[idx].paths.length) index = 0

      mainCardsItemImgs[idx].innerHTML = `${generateImgTag(datas[idx].paths, index)}`
    })
  }
})

function handleClickDetails(idx) {
  console.log(idx);
}
