TweenMax.defaultEase = Linear.easeOut;

new fullpage("#fullpage", {
  //options here
  autoScrolling: true,
  navigation: true,
  onLeave: (origin, destination, direction) => {
    const section = destination.item;
    const title = section.querySelector("h1"); 
    const shows = document.getElementsByClassName("shows");
    const show1 = document.getElementsByClassName("show1");
    const show2 = document.getElementsByClassName("show2");
    const show3 = document.getElementsByClassName("show3");
    const show4 = document.getElementsByClassName("show4");
    const player =document.getElementsByClassName("player");
    const tl = new TimelineMax({ delay: 0.2 });

      
    tl.fromTo(title, 0.5, { y: "50", opacity: 0 }, { y: "0", opacity: 1 });
    tl.fromTo(shows, 0.5, { x: "-1000", opacity: 0.2 }, { x: "0", opacity: 1 });
    tl.fromTo(show1, 0.5, { x: "-1000", opacity: 0.2 }, { x: "0", opacity: 1 });
    tl.fromTo(show2, 0.5, { x: "-1000", opacity: 0.2 }, { x: "0", opacity: 1 });
    tl.fromTo(show3, 0.5, { x: "-1000", opacity: 0.2 }, { x: "0", opacity: 1 });
    tl.fromTo(show4, 0.5, { x: "-1000", opacity: 0.2 }, { x: "0", opacity: 1 });
    
      if (destination.index === 1) {
      const pics = document.querySelectorAll(".chair");
      const description = document.querySelector(".description");
     
      tl.fromTo(pics, 1, { x: "200%" }, { x: "-10%" })
        .fromTo(description, 0.5, { opacity: 0, y: "50" }, { y: "0", opacity: 1 })
        .fromTo(player, 0.5, { x: "-100", opacity: 0 }, { x: "0", opacity: 1 })
        .fromTo(pics[0], 5, { opacity: 1 }, { opacity: 1 })
        .fromTo(pics[1], 5, { opacity: 0 }, { opacity: 1 })
        .fromTo(pics[2], 5, { opacity: 0 }, { opacity: 1 });
    }
  }
});
