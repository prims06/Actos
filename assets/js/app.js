const btnNav = document.querySelector(".responsive-nav-btn");
const navList = document.querySelector("nav ul");
const essaiBtn = document.querySelector(".lien-essai");
const imgBtn = document.querySelector(".responsive-nav-btn img");

btnNav.addEventListener("click", () => {
    navList.classList.toggle('active-nav');
    essaiBtn.classList.toggle('active-nav');

  if(imgBtn.src.includes('cancel')){
    imgBtn.src="assets/images/small-slide.svg"
  }else{
    imgBtn.src="assets/images/cancel.svg"
  }

});

const allCross = document.querySelectorAll('.panneau img');

allCross.forEach((e)=>{
  e.addEventListener('click', function(){
    const height = this.parentNode.parentNode.childNodes[3].scrollHeight;
    const currentChoise = this.parentNode.parentNode.childNodes[3]
    if(this.src.includes('add')){
      this.src = "assets/images/close.svg"
      currentChoise.style.height = height+40+'px'
      currentChoise.style.opacity = 1
      currentChoise.style.padding = "20px 15px"
    }else{
      this.src = "assets/images/add.svg"
      currentChoise.style.height = 0
      currentChoise.style.opacity = 0
      currentChoise.style.padding = "0px 15px"
    }
  })
})
