const quot = document.getElementById("output");  
const butt = document.getElementById("btn");
const ins = document.getElementById("inspiration");
const url = "https://api.api-ninjas.com/v1/quotes";

const apiKey = "q1vTl8R7IUxg/343noBs8g==kCAI01ZBdI0ocS6p ";

async function getQuote() {
  const response = await fetch(url, {
    method: "GET",  // Specifies the request method
    headers: {
      'X-Api-Key': apiKey,  // Your API key in the header
      'Content-Type': 'application/json'  // Optional, ensures JSON format
    }
  });

  if (!response.ok) {
    console.error("Error:", response.statusText);
    return;
  }

  const data = await response.json();
  quot.innerHTML =  `<p>"${data[0].quote}"</p>
    <p><strong>- ${data[0].author}</strong></p>`;
  console.log(data);
}

butt.addEventListener("click", getQuote);
