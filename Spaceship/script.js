// this line deals with the flash of unstyled content in codepen, don't worry about it!
// https://gsap.com/resources/fouc/
gsap.set("svg", { opacity: 1 });

// let lt = gsap.timeline({repeat: 2 });

// move the UFO in from the left
// gsap.from("#ufo", {
//   x: -500,
//   duration: 2
// });

// or try a rotation
gsap.to("#ufo", {
  rotation: 360,
  transformOrigin: "center center",
  duration: 2
});

gsap.to("#lights > *", {
  fill: "#fff",
  scale: 2,
  transformOrigin: "center",
  duration: 1,
  stagger: {
    each: 0.2,
    yoyo: true,
    repeat: -1
  }
});

// gsap.to("#beam", {
 // duration: 2.5,
 // ease: "back.inOut",
 // y: -20,
//  yoyo: true
// });

gsap.to("person", {
  rotation: 360,
  y: -300,
  opacity: 0,
  transformOrigin: "center center",
  duration: 2
})