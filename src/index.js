import data,{
  home,
  link,
  content,
  newDiv,
  about,
  contactUs,
  newP,
  newHeadline,
  newImg,
} from "./exports.js";
console.log(home)


// import "./style.css"


const images = data.map((items)=>{
  const img = newImg()
  const div =  newDiv()
  img.src = items

  div.appendChild(img)
  div.classList.add("containers")
  return div
})


// home.style.backgroundColor = "green"

home.addEventListener("click", () => {
  content.innerHTML = "";
  const newD = newDiv();
  const _P = newP();
  const h1 =newHeadline()
  h1.textContent ="The Odin company"
  _P.textContent =
    "welcome to the odin project created by yours truely, \n Prince charles amacheree";
    newD.appendChild(h1)
  newD.appendChild(_P);
  content.appendChild(newD);

  console.log("fuck the world");
});
about.addEventListener("click", ()=>{
  content.innerHTML = "";

  console.log(images)


  images.forEach((item)=>{
    content.appendChild(item)
  })


})
contactUs.addEventListener("click", ()=>{
  const newLink  = link()
  const div = newDiv()
  newLink.href = "https://github.com/prince-hope1975/restaurant_homepage";
  newLink.textContent="Link to my github profile here"
  const _P = newP()
  _P.textContent= "Contact Me with the link below"
  div.appendChild(_P)
  div.appendChild(newLink)
  content.innerHTML = "";
  content.appendChild(div)
  

})
