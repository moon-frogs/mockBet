
let Info = document.cookie;
console.log(Info)
let apiKey
let cookies = document.cookie;
console.log(cookies);

if (!cookies.includes('apiKey')) {
    let apiKey = prompt("Please go to https://the-odds-api.com/ to create a free API key", "API Key Here");
    document.cookie = `apiKey=${apiKey}; credit=200; path=/; expires=${new Date(Date.now() + 365*24*60*60*1000).toUTCString()}`;
    console.log(document.cookie);
}

