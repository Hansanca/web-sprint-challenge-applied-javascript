import axios from "axios";

const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //

 
  
  const cardDiv = document.createElement('div');
  cardDiv.classList.add('card');

  const headlineDiv = document.createElement('div');
  headlineDiv.classList.add('headline');
  headlineDiv.textContent = article.headline

  const authorDiv = document.createElement('div');
  authorDiv.classList.add('author');

  const imageContainer = document.createElement('div');
  imageContainer.classList.add('img-container');

  const imageItself = document.createElement('img');
  imageItself.src = article.authorPhoto;

  const authorNameSpan = document.createElement('span');
  authorNameSpan.textContent = `By ${article.authorName}`

  imageContainer.appendChild(imageItself);
  authorDiv.appendChild(imageContainer);

  authorDiv.appendChild(authorNameSpan);

  cardDiv.appendChild(headlineDiv);
  cardDiv.appendChild(authorDiv);

  cardDiv.addEventListener('click', () => {
    console.log(article.headline);
  });

  return cardDiv;
}
  
  

  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //



  const cardAppender = (selector) => {
    // console.log(document.querySelector('.cards-container'))
    // return document.querySelector(selector).appendChild(Card('headline', 'authorPhoto', 'authorName'));
    axios.get('http://localhost:5001/api/articles')
      .then(res => {
        // console.log(res.data.articles);
        for (let x in res.data.articles) {
          res.data.articles[x].forEach(article => {
            document.querySelector(selector).appendChild(Card(article))
          })
        }
      })
  }




  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5001/api/articles` (test it with console.log!!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //


export { Card, cardAppender }
