var images = document.getElementsByTagName('img');
for (var i = 0, l = images.length; i < l; i++) {
  images[i].src = 'http://placekitten.com/' + images[i].width + '/' + images[i].height;
}

var firstHref = $("a[href^='http']").eq(0).attr("href");

console.log(firstHref);
