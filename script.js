// Variebles

const navbar=document.querySelector(".navbar");
const logo=document.querySelector(".logo__image");
const closePlan=document.querySelector(".close");
const planPopUp=document.querySelector(".request-plan");
const plans=document.getElementsByClassName("plans__card");
let options=document.getElementsByClassName("option")
let selectedPlan=document.querySelector(".plan-select").value;
const menuIcon=document.querySelector(".burger-icon");
const sidebar=document.querySelector(".sidenavbar");
const closeSideNav=document.querySelector(".close-side__main");
// let selectedPlan=document.querySelector(".plan-select");

window.addEventListener("scroll", () => {
    navbar.classList.toggle("sticky", window.scrollY > 500)
    logo.src="./images/logo 1.png";
});

// console.log(selectedPlan.options)

for (const plan of plans) {
    // Click Plan
    plan.addEventListener("click",function(){
        selectedPlan=this.id;
        planPopUp.style.display="block";

        // Select Option
        for (const option of options) {
            if(option.value==selectedPlan){
                let arrayOptions=Array.from(options);

                arrayOptions.forEach(el=>el.removeAttribute("selected"));
                option.setAttribute("selected","true")
                console.log(option);
                console.log(selectedPlan)
            }
        }
    
    });
}
// Smooth slide
 function smoothScroll(target,pageSection){
     let tsection=document.querySelector(`#${pageSection}`);
     target.addEventListener("click",()=>{
         
        tsection.scrollIntoView({
             behavior:"smooth"
         },5000);
         sidebar.style.width="0%"
     });
 };


// Close Pop Up
closePlan.addEventListener("click",()=>{
    planPopUp.style.display="none";
})

// Open sidebar
menuIcon.addEventListener("click",()=>{
    sidebar.style.width="100%";
})

// Close sidebar

closeSideNav.addEventListener("click",()=>{
    sidebar.style.width="0%"
})









