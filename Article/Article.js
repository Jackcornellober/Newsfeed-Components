// Because classes are not hoisted you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor(domElement) {
    // assign this.domElement to the passed in domElement
    this.domElement = domElement;
    // create a reference to the ".expandButton" class. 
    this.expandButton = domElement.querySelector('.expandButton');
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.textContent = 'Click to Expand'
    // Set a click handler on the expandButton reference, calling the expandArticle method.
    this.expandButton.addEventListener('click',(event) => this.expandArticle());
  }

  expandArticle() {
    // Using our reference to the domElement, toggle a class to expand or hide the article.
    
    // this.domElement.classList.toggle('article-open');

    //////////////////MVP above, stretch below////////////////////
    
    if (this.expandButton.textContent === 'Click to Expand') {
      TweenMax.to(this.domElement, 1.5,{height:'450px',background: 'cyan'})
      this.expandButton.textContent = 'Click to Close'
    }
    else {
      this.expandButton.textContent = 'Click to Expand'
      TweenMax.to(this.domElement, 1.5,{height:'50px',background: 'white'})
    }
  }
}

/* START HERE: 

- Select all classes named ".article" and assign that value to the articles variable.  

- With your selection in place, now chain .forEach() on to the articles variable to iterate over the articles NodeList and create a new instance of Article by passing in each article as a parameter to the Article class.

*/

const articles = document.querySelectorAll('.article');

articles.forEach((article) => {let articleInstance = new Article(article)})


// let articleMaker = () => {
  
//   let queenBee = document.querySelector('.queenBee');
//   let clone1 = queenBee.cloneNode(true);
//   console.log(clone1);
//   clone1.content.textContent = ''
  
//   // let newArticle = document.createElement
  
  
//   // new Article(jsPath)
//   // jsPath.querySelector('h2').textContent = header;
//   // jsPath.querySelector('.date').textContent = date;
//   // jsPath.querySelector('.date').textContent = date;
// }

// articleMaker()