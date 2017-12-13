function click(e) {
    chrome.tabs.executeScript(null,
{
    code:"document.body.style.backgroundImage=url(" + images[e.target.Id]
    + ")"
});
    window.close();
}

document.addEventListener('DOMContentLoaded',function ()   {

    var divs = document.querySelectorAll('div');
    for (var i =0;i<divs.length;i++)
    {
        divs[i].addEventListener('click',click);
    }
});
var images ={
fb: 'dream-973061_1280.png',
    insta: 'love-you-2198772_1280.png',   
 whatsapp: 'quote-2378976_1280.jpg',
    twitter: 'sentiment-998335_1280.jpg',
    hike: 'quote-1460228_1280.jpg'
}
