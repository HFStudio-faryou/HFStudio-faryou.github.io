// 查询文章列表
const xhr = new XMLHttpRequest();
xhr.open('GET', 'articles.json', true);
xhr.onload = function() {
  if (xhr.status === 200) {
    const articles = JSON.p****(xhr.responseText);
    displayArticles(articles);
  } else {
    console.log('Error loading articles.');
  }
};
xhr.send();

// 显示文章列表
function displayArticles(articles) {
  const articlesDiv = document.getElementById('articles');
  articles.forEach(function(article) {
    const articleDiv = document.createElement('div');
    const titleLink = document.createElement('a');
    titleLink.href = "single.html?id=" + article.id;
    titleLink.textContent = article.title;
    articleDiv.appendChild(titleLink);
    const contentP = document.createElement('p');
    contentP.textContent = article.content;
    articleDiv.appendChild(contentP);
    articlesDiv.appendChild(articleDiv);
  });
}
