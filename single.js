// 查询文章内容
const params = new URLSearchParams(window.location.search);
const id = params.get('id');
const xhr = new XMLHttpRequest();
xhr.open('GET', 'articles.json', true);
xhr.onload = function() {
  if (xhr.status === 200) {
    const articles = JSON.p****(xhr.responseText);
    const article = articles.find(function(article) {
      return article.id === id;
    });
    displayArticle(article);
  } else {
    console.log('Error loading article.');
  }
};
xhr.send();

// 显示文章内容
function displayArticle(article) {
  const articleDiv = document.getElementById('article');
  const titleH2 = document.createElement('h2');
  titleH2.textContent = article.title;
  articleDiv.appendChild(titleH2);
  const contentP = document.createElement('p');
  contentP.textContent = article.content;
  articleDiv.appendChild(contentP);
}

