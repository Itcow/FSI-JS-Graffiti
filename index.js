
// Select some elements...
let header = document.querySelector('#page-header')
header.style.textAlign = "left"

//radius dog images
let dogImages = document.querySelectorAll('.dog-image')
for(let i = 0; i < dogImages.length; i++)
{
    dogImages[i].style.borderRadius = '50px'
    //flip image
    dogImages[i].style.transform = "scaleX(-1)";
}

//align dog names left
let dogNames = document.querySelectorAll('.dog-name')
for(let i = 0; i < dogNames.length; i++){ dogNames[i].style.textAlign= "left"}

//make footer color
let footer = document.querySelector(".footer")
footer.style.color = "pink";


