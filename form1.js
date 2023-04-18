console.log("working")
window.history.pushState({},"","/index.html")
const loginForm=document.getElementById('loginForm')
const fullName=document.getElementById('full-name')
const signUpForm=document.getElementById('regForm')
const submitBtn=document.getElementById('submitBtn')

let page=0;
console.log(window.location.pathname)
render()
submitBtn.addEventListener('click',submitHandler);
function submitHandler(event){
    event.preventDefault();
    // signUpForm.checkValidity()
    // signUpForm.reportValidity()
    obj={
        name:fullName.value
    }
    window.history.pushState(obj,"","/loginform")
    render();
}
function render(){

    if(window.location.pathname==="/loginform"){
        const elem=document.createElement("p");
        elem.innerHTML=window.history.state.name
        loginForm.appendChild(elem)
        loginForm.style.display="block"
        signUpForm.style.display="none"
    }else if(window.location.pathname==="/index.html"){
        loginForm.style.display="none"
        signUpForm.style.display="block"
    }
}
window.addEventListener("popstate",render)

