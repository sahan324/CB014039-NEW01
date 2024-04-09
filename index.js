fetch('data.json')
.then(response => response.json())
.then(data => {
  const heading = document.querySelector('.headings10');
  const image = document.querySelector('#image img');
  const paragraph = document.querySelector('#explain p');

  heading.textContent = data.title;
  image.src = data.imageSrc;
  paragraph.textContent = data.description;
})
.catch(error => console.error('Error fetching data:', error));

// second P

fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const heading = document.querySelector('.headings11');
    const image = document.querySelector('#image01 img');
    const paragraph = document.querySelector('#explain01 p');

    heading.textContent = data.title;
    image.src = data.imageSrc;
    paragraph.textContent = data.description;
  })
  .catch(error => console.error('Error fetching data:', error));

  // thrid P

fetch('data.json')
.then(response => response.json())
.then(data => {
  const heading = document.querySelector('.headings12');
  const image = document.querySelector('#image02 img');
  const paragraph = document.querySelector('#explain02 p');

  heading.textContent = data.title;
  image.src = data.imageSrc;
  paragraph.textContent = data.description;
})
.catch(error => console.error('Error fetching data:', error));
