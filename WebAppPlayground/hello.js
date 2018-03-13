var friends = ["Ray", "Oscar", "Gwen", "Bob", "Marie"];
var friends_and_colors = { "Ray": "red", "Oscar": "orange", "Gwen": "green", "Bob": "blue","Marie": "magenta"};

while(Object.values(friends_and_colors).length > 0){
  var i = (Math.floor(Math.random() * Object.values(friends_and_colors).length))
  var background_color = Object.values(friends_and_colors)[i];
  var name = Object.keys(friends_and_colors)[i];
  color_html = '<mark style="background-color: ' + background_color + '">Hello ' + name + '</mark><br>';
  document.getElementById("friends").innerHTML += color_html;
  delete friends_and_colors[name];
}
