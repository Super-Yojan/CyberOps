
const API_KEY = "b3877871306e4badaf3712d14ec2fef5"

var d = new Date();
var month = d.getMonth()+1;
var from = ""+ d.getFullYear()+ "-"+ d.getMonth()+ "-"+ d.getDate();
var to = ""+ d.getFullYear()+ "-"+ month+ "-"+ d.getDate();
console.log(from)
var url = "https://newsapi.org/v2/everything?q=cyber&from="+from +"&to="+to+ "&apiKey=" + API_KEY
var gnews = "https://gnews.io/api/v4/search?q=cyber&token=c27c7c82ca00d67cb075ab68b6741e9f&lang=en&country=us"
$.get(gnews, function(data){
    data.articles.forEach(element => {
        var heading = "<h5 class='card-title'>" + element.title+"</h1>";
        var author = "<h6 class='card-subtitle mb-2 text-muted'>" + element.source.name + "</h3>";
        var article = "<p class='card-text'>" + element.description + "</p>";
        var link = "<a href='"+element.url+"' target='_blank'>Learn More</a>"
        var image = "<img src='"+element.image+"' class='card-img-top newsimage' alt='...'>"
        var container = "<div class='card mb-3 container' style='width: 700px;'> "+"<div class='card-body'>" + image + heading + author + article + link+"</div></div>";
        $(".newsContainer").append(container);
    });
    //console.log(data);
})