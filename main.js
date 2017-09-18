/**
 * Created by Marta on 9/18/2017.
 */
document.getElementById("add-button").onclick = function () {
    var text = document.getElementById("shopping-field").value;
    var li = document.createElement("li");
    var textnode = document.createTextNode(text);
    li.appendChild(textnode);
    document.getElementById("list").appendChild(li);

}


