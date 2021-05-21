d3.select('h3').style('color','chocolate');
d3.select('h3').style('font-size', '25px');

var app1 = new Vue({
    el: '#app-1', 
            
    data: {
        message: "Check for allergens when you order"
    }
});
var app2 = new Vue({
    el: '#app-2', 
            
    data: {
        message: "Check for allergens when you order"
    }
});
var app3 = new Vue({
    el: '#app-3', 
            
    data: {
        message: "Check for allergens when you order"
    }
});

$(document).ready(function(){
    $('#fade').click(function(){
      $("#app-1").fadeIn();
      $("#app-2").fadeIn("slow");
      $("#app-3").fadeIn(3000);
    })
  })