/* elements are also declared with bulma classes for added style*/
const div = document.createElement('div');
div.classList.add('section');
const div1 = document.createElement('div');
div1.classList.add('container');
const div2 = document.createElement('div');
div2.classList.add('columns');
const div3 = document.createElement('div');
div3.classList.add('column','is-three-fifths','is-offset-one-fifth');
const div4 = document.createElement('div');
div4.classList.add('card','has-background-warning-light');
const div5 = document.createElement('div');
div5.classList.add('card-content','p-5');
const h1 = document.createElement('h1');
h1.classList.add('title','is-3');
const p = document.createElement('p');
p.classList.add('subtitle','is-5','is-italic', 'has-text-right');
const btn = document.createElement('button');
btn.classList.add('button','has-background-primary','is-centered','has-text-white');
btn.innerText = 'Inspire Me!';

document.body.append(div);
div.append(div1);
div1.append(div2);
div2.append(div3);
div3.append(div4);
div4.append(div5);
div5.append(h1,p,btn);

const getRandomQuote = async () => {
  const quotes = await axios.get('https://api.quotable.io/quotes/random');
  h1.innerText = `"${quotes.data[0].content}"`;
  p.innerText = `${quotes.data[0].author}`;
}

getRandomQuote();

btn.addEventListener('click', getRandomQuote);