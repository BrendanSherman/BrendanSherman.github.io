var link = document.querySelector('link[rel="import"]');
var content = link.import;
var el = content.querySelector('.sidebar');
document.body.appendChild(el.cloneNode(true));