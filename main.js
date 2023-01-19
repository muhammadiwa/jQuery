//     // DOM Selection
// const el = $("#hello")
// const el1 = document.getElementsByTagName("p")
// const el2 = document.querySelectorAll("p")

// console.log(el)
// console.log(el1)
// console.log(el2)

    // DOM Manipulation
    //.html()
// const el = $("#text")
// el.html("<h1>Hello World</h1>")

    //.attr()
// const inp = $("input")
// // inp.attr("type", "checkbox")

//     //add & remove class
// el.addClass("red")
// el.addClass("blue")

// el.removeClass("blue")
// el.removeClass("red")
// el.removeClass()

//     //css
// // inp.css("border", "1px solid red")
// inp.css({
//     border : "1px solid red",
//     marginLeft : "100px"
// })

    //DOM EVENT
    //cara lama
// const el = document.getElementById("text")
// el.addEventListener("mouseenter", function(){
//     el.style.border = "1px solid red"
// })

    //cara baru
const el = $("#text")
el.mouseenter(function(){
    el.css("border","1px solid red")
})

const inp = $("input")
el.focus(function(){
    inp.css("border","1px solid blue")
})

    //Effect & Animation
const btnShow = $("#show")
const btnHide = $("#hide")
const btnFadeIn = $("#fadeIn")
const btnFadeOut = $("#fadeOut")
const btnToggle = $("#toggle")

const div = $("div")

btnShow.click(function(){
    div.show("slow")
})

btnHide.click(function(){
    div.hide("slow")
})

btnFadeIn.click(function(){
    div.fadeIn("slow")
})

btnFadeOut.click(function(){
    div.fadeOut("slow")
})

btnToggle.click(function(){
    div.toggle()
})