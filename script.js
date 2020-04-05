window.onload = function() {
    getNews();
};

function getNews(){
    var url = 'http://newsapi.org/v2/top-headlines?' +
            'country=us&' +
            'apiKey=948434005607451495f706ca0792f4b9';
    var req = new Request(url);
    fetch(req)
        .then(function(response) {
            console.log(response.json());
        })
}