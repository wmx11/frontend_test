let documentReady = function() 
{
    let document = document.readyState;
    const state = "complete";
    
    if (document === state) {
        return true;
    } else {
        return false; 
    }
}

function domById(elementId)
{
    return document.getElementById(elementId); 
}

if (documentReady) {
    let headerImages = domById("header-images");
    let headerTitle = domById("header-title");
    let underscore = domById("underscore");
    
    setTimeout(function() {
        headerImages.style.opacity = 1;
        imageChanger();
    }, 500);
    
    setTimeout(function() {
        headerTitle.style.opacity = 1;
    }, 900);
    
    setTimeout(function() {
        underscore.style.width = "42vw";
    }, 1000);
}

document.addEventListener("scroll", function() {
    let service = domById("service-list").getBoundingClientRect(); 
    let services = document.getElementsByClassName("list-item");
    let index = 0; 
    if (service.top <= window.innerHeight) {
        setInterval(function() {
            if (index < services.length) {
                services[index].style.opacity = 1; 
                index++;
            }
        }, 100);
    }
});

function imageChanger()
{
    let index = 0; 
    
    let images = [
        "slider1", 
        "slider2", 
        "slider3", 
        "slider4", 
        "slider5", 
        "slider6", 
        "slider7", 
        "slider8", 
        "slider9"]; 
    
    let image1 = domById("img1");
    let image2 = domById("img2");
    let image3 = domById("img3");
    let image4 = domById("img4");
    
    setInterval(function() {
        
        if (index === images.length || index > images.length) {
            index = 0;
        }
        
        image1.style.opacity = 0; 
            image1.style.backgroundImage = "url(images/slider/" + images[index] + ".jpg)";
        image1.style.opacity = 1;
        
        setTimeout(function(){
        image2.style.opacity = 0; 
            if (index+1 < images.length) {
                image2.style.backgroundImage = "url(images/slider/" + images[index+1] + ".jpg)";
            }
        image2.style.opacity = 1;
        }, 2000)
        
        setTimeout(function(){
        image3.style.opacity = 0; 
            if (index+2 < images.length) {
                image3.style.backgroundImage = "url(images/slider/" + images[index+2] + ".jpg)";
            }
        image3.style.opacity = 1;
        }, 2800)
        
        setTimeout(function(){
        image4.style.opacity = 0; 
            if (index+3 < images.length) {
                image4.style.backgroundImage = "url(images/slider/" + images[index+3] + ".jpg)";
            }
        image4.style.opacity = 1;
        }, 3600)
        
        index++;
        
    }, 5000);
}