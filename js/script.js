
var images = document.getElementsByClassName("img-fluid");
var ligthboxContainer = document.querySelector(".ligth-container");
var sliderItem = document.querySelector(".slider");
var next = document.getElementById("next");
var previous = document.getElementById("prev");
var closeWindow = document.getElementById("wClose");
var imgArray = [];
var currentIndex = 0
for(var i=0;i<images.length;i++)
    {
        imgArray.push(images[i]);
        images[i].addEventListener("click",function(e){
        ligthboxContainer.classList.add("show");
        var imgSrc = e.target.src;
        sliderItem.style.backgroundImage = "url("+imgSrc+")";
        currentIndex = imgArray.indexOf(e.target);
        })
    }
next.addEventListener("click",function(){
                     nextItem();
    
})
previous.addEventListener("click",function(){
    previousItem();
})
function nextItem()
{
    currentIndex++;
    if(currentIndex==imgArray.length)
        {
             currentIndex = 0;
             sliderItem.style.backgroundImage = "url("+imgArray[currentIndex].src+")";
        }
    else
         sliderItem.style.backgroundImage = "url("+imgArray[currentIndex].src+")";
    
}
function previousItem()
{
    currentIndex--;
    if(currentIndex < 0)
        {
             currentIndex = imgArray.length - 1;
             sliderItem.style.backgroundImage = "url("+imgArray[currentIndex].src+")";
        }
    else
         sliderItem.style.backgroundImage = "url("+imgArray[currentIndex].src+")";
    
}
closeWindow.addEventListener("click",function(){
     ligthboxContainer.classList.remove("show");
})
document.addEventListener("keydown",function(e){
    if(e.keyCode == 27)
        {
              ligthboxContainer.classList.remove("show");
        }
    else if(e.keyCode == 39)
        {
            nextItem();
        }
    else if(e.keyCode == 37)
        {
            previousItem();
        }
})