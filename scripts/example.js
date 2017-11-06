function insertParagraph(text) {
    var str = "<p>";
    str += text;
    str += "</p>"
    document.write(str);
}

// window.onload = function() {
//     var testdiv = document.getElementById("testdiv");
//     testdiv.innerHTML = "<p>This is <em>my</em> content.</p>";
// }


window.onload = function() {    
    var para = document.createElement("p");    
    var txt = document.createTextNode("Hello word");
    para.appendChild(txt);
    var testdiv = document.getElementById("testdiv");
    testdiv.appendChild(para);

    var tmp = document.getElementsByTagName("body");
    alert(tmp[0]);
    alert(tmp.length);

    // var info = "nodeName: ";
    // info += para.nodeName;
    // info += " nodeType: ";
    // info += para.nodeType;
    // alert(info);
}