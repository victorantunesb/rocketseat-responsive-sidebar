const sidebar = document.querySelector(".container-open")
const menu = document.querySelector(".menu-icon")
const optionsText = document.querySelectorAll(".options-text")
const search = document.querySelector('.search')
const logoutHide = document.querySelectorAll('.logout-hide')
const logoutBtn = document.querySelector('.logout-icon')
const logoutContainer = document.querySelector('.logout-container')

const hideItems = [logoutHide, optionsText]

hideOrShowText = () => {

for (let index = 0; index < hideItems.length; index++) {   
    hideItems[index].forEach(option => {
        let hide = function (){
            option.style.display = 'none'
            menu.style.marginLeft = '0px'
            search.style.paddingRight = '11.5px'
            logoutBtn.style.margin = '0px'
            logoutContainer.style.justifyContent = 'center'
            
        }
        let show = function (){
            option.style.display = ''
            menu.style.marginLeft = '90px'
            search.style.paddingRight = '98px'

        } 

        if(option.style.display == 'none'){
            setTimeout(show, 0250)
        }
        else{hide()}
        
    })
}}


menu.addEventListener('click', openSBar = () => {
    if (sidebar.classList.contains("container-open")) {
        sidebar.classList.replace("container-open","container-close")
        hideOrShowText()
    } else {
        sidebar.classList.replace("container-close","container-open")
        hideOrShowText()
    }
})




