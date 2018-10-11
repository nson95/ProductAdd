$().ready(function() {
    var url= "http://localhost:8080/Products/List"
    $.getJSON(url)
    .then(function(data) {
        console.log(data);
        render(data);
    });
});

function render(data) {
    var tbody = $("#tb");
    var products = [];
    for(var product of data) {
        var row = "<tr>"
        row += "<td>"+product.id+"</td>"
        row += "<td>"+product.name+"</td>"
        row += "<td>"+product.price+"</td>"
        row += "<td>"+product.vendor.name+"</td>"
        row += "</tr>"
        tbody.append(row);
    }


}