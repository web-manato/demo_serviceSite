var tl = gsap.timeline();

var img = document.querySelectorAll('.bl_kv_imgWrapper');
var mainCopy = document.querySelectorAll('.bl_kv_mainCopy');
var listItem = document.querySelectorAll('.bl_kv_function_listItem');
var btn = document.querySelectorAll('.el_btn');

tl.from(img, {
        autoAlpha: 0,
        duration: 0.6,
    })
    .from(mainCopy, {
        autoAlpha: 0,
        duration: 0.8,
    })
    .from(listItem, {
        autoAlpha: 0,
        x: -20,
        ease: 'Power3.easeOut',
        duration: 0.5,
        stagger: 0.3,
    })
    .to(btn, {
        y: 0,
        duration: 0.3,
        ease: 'Power3.easeIn',
    })