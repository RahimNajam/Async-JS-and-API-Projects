const key = `M152wYam1d07BMmQjpoY+w==6ERMyyDT1VxwoKAS`
const url = `https://api.api-ninjas.com/v1/quotes`
const quote = document.getElementById("quote");
const author = document.getElementById("author");


function clickBtn() {
  quote.textContent = "Loading...";
  author.textContent = "Rahim Shaikh";

  fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      'X-Api-Key': key
    }
  })
    // .then(res => res.json ().then(data => console.log(data))) ---------> hamai console mai check krny ky liay code kai api work kr rhi hai ya nahi

    .then(res => res.json().then(data => {
      quote.textContent = data[0].quote
      author.textContent = data[0].author
    }))
}

clickBtn()



