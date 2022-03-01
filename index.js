fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=eminem",  {

method: "GET"
headers: { }

})

.then(response =>  response.json() )

.then