
const API_KEY = "b3877871306e4badaf3712d14ec2fef5"

var d = new Date();
var month = d.getMonth()+1;
var from = ""+ d.getFullYear()+ "-"+ d.getMonth()+ "-"+ d.getDate();
var to = ""+ d.getFullYear()+ "-"+ month+ "-"+ d.getDate();
console.log(from)
var url = "https://newsapi.org/v2/everything?q=cyber&from="+from +"&to="+to+ "&apiKey=" + API_KEY

$.get(url, function(data){
    data.articles.forEach(element => {
        var heading = "<h1 class='title'>" + element.title+"</h1>";
        var author = "<h3 class='author'>" + element.author + "</h3>";
        var article = "<p class='description'>" + element.description + "</p>";
        var container = "<div class='newscontainer widthChanger'>" + heading + author + article + "</div>";
        $("body").append(container);
    });
    //console.log(data);
})