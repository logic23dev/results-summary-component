fetch('data.json')
  .then(response => response.json())
  .then(data => fillComponent(data))
  .catch(error => console.error('Unable to fetch data:', error));

function fillComponent(data) {
  const ul = document.querySelector('.summary-list');

  let sum = 0;
  const circleScore = document.querySelector('.circle-score');

  for (let i = 0; i < data.length; i++) {
    const li = `<li class="summary-item ${data[i].category.toLowerCase()}">
                  <div class="item-title">
                    <img src="${data[i].icon}" alt="" />
                    <p>${data[i].category}</p>
                  </div>
                  <div class="item-score"><span class="score">${
                    data[i].score
                  }</span> / 100</div>
                </li>`;

    ul.insertAdjacentHTML('beforeend', li);

    sum += data[i].score;
  }

  let totalScore = Math.round(sum / data.length);
  circleScore.textContent = totalScore;
}
