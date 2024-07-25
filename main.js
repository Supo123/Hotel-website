document.addEventListener("DOMContentLoaded", function() {
    var tl = gsap.timeline();
    
    tl.from(".welcome", {
        y: 30,
        opacity: 0,
        duration: 0.5,
        scale: 0.6
    });

   gsap.from(".image-hotel",{
    scale:0,
    delay:1,
    duration:1,
   
   
scrollTrigger:{trigger:".image-hotel",
scroller:"body",
scrub:true
}

   })

gsap.from("  .page2 .about-hotel",{
    opacity:1,
    duration:1,
    x:100,
    scrollTrigger:{trigger:" .page2 .about-hotel",
        scroller:"body",
        scrub:true}
})
gsap.from(".info1",{
    opacity:0,
    duration:2,
    y:60,
    delay:1,
    stagger:0.5,
    
})
gsap.from(".info2",{
    opacity:0,
    duration:2,
    y:60,
    delay:1,
    stagger:0.5,
    
})

});
// with help of scrub all property runs completly on the basis of scrolling




const imgCircle  = document.querySelector(".swiper-slide");
const review =document.querySelector(".review");

fetch("pic.html") 
    .then(response => {
        return response.json();
    })
    .then(data => {
        
        data.forEach(item => {
            const imageUrl = item.url; 
            const img = document.createElement('img');
            img.src = imageUrl;
            imgCircle.appendChild(img);
            const reviewText = item.body;
            // console.log( reviewText);
            const p = document.createElement('p');
            p.textContent = reviewText;
            // review.innerHTML=reviewText;

            review.appendChild(p);

        });
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });

   