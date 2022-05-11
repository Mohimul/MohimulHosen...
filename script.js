
let menu = document.querySelector('#menu-btn');
let header = document.querySelector('.header');


menu.onclick = () =>{

    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
    
   
}
 
// dark site start
 
const darkBtn = document.querySelector('#theme-toggoler');
const bodyEl = document.querySelector('body');

let themetoggoler = document.querySelector('#theme-toggoler');
themetoggoler.onclick = () =>{
    themetoggoler.classList.toggle('fa-sun');
}



const darkMode = () =>{
    bodyEl.classList.toggle('dark')
}

darkBtn.addEventListener('click', () => {
           setDarkMode = localStorage.getItem('dark');

           if(setDarkMode !== "on") {
            darkMode();

               setDarkMode = localStorage.setItem('dark', 'on');
               
           }else{
               darkMode();

               setDarkMode = localStorage.setItem('dark', null);

           }
         
});

let setDarkMode = localStorage.getItem('dark');
if(setDarkMode === 'on'){
    darkMode();
}


window.onscroll = () =>{
    menu.classList.remove('fa-times');
    header.classList.remove('active');
     


}




