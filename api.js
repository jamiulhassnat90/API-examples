const randomQuote =()=>{
    fetch('https://api.kanye.rest/')
    .then(ran=>ran.json())
    .then(data => displayQuote(data))
}

const displayQuote=(myRandoms)=>{
    const section = document.getElementById('my-quote');
   const quoteDisplayNewTag = document.createElement('h3');
   quoteDisplayNewTag.innerText=myRandoms.quote;
   section.appendChild(quoteDisplayNewTag);
}
