let btn = document.getElementById("Ag-btn");
let Quote = document.getElementById("Quote");
let author = document.getElementById("author");
let newQuota = [
  {
    quote: "“Be yourself; everyone else is already taken.",
    author: "Oscar Wilde",
  },
  {
    quote:
      "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
    author: "― Marilyn Monroe",
  },
  {
    quote: "“So many books, so little time.”",
    author: "Frank Zappa",
  },
  {
    quote:
      "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
    author: "Albert Einstein ",
  },
  {
    quote:
      "“It is better to be hated for what you are than to be loved for what you are not.”",
    author: "Andre Gide, Autumn Leaves ",
  },
];

let lastNum = -1;
function New() {
  let num;
  do {
    num = Math.floor(Math.random() * newQuota.length);
  } while (num === lastNum);

  lastNum = num;
  Quote.innerHTML = newQuota[num].quote;
  author.innerHTML = newQuota[num].author;
console.log(num);
}

//
