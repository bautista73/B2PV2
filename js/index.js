// tab JS
function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
  
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    document.getElementById(tabName).style.display = "grid";
    evt.currentTarget.className += " active";
  
    // page number JS
    if (tabName === "Home") {
      document.getElementById("homeTabNum").style.display = "flex";
      document.getElementById("portfolioTabNum").style.display = "none";
      document.getElementById("aboutTabNum").style.display = "none";
      document.getElementById("contactTabNum").style.display = "none";
    } else if (tabName === "Portfolio") {
      document.getElementById("homeTabNum").style.display = "none";
      document.getElementById("portfolioTabNum").style.display = "flex";
      document.getElementById("aboutTabNum").style.display = "none";
      document.getElementById("contactTabNum").style.display = "none";
    } else if (tabName === "About") {
      document.getElementById("homeTabNum").style.display = "none";
      document.getElementById("portfolioTabNum").style.display = "none";
      document.getElementById("aboutTabNum").style.display = "flex";
      document.getElementById("contactTabNum").style.display = "none";
    } else if (tabName === "Contact") {
      document.getElementById("homeTabNum").style.display = "none";
      document.getElementById("portfolioTabNum").style.display = "none";
      document.getElementById("aboutTabNum").style.display = "none";
      document.getElementById("contactTabNum").style.display = "flex";
    }
  }  

function resumeTab() {
    document.getElementById('resumeOpen').click();
}

function aboutTab() {
    document.getElementById('aboutOpen').click();
}

function portfolioTab() {
  document.getElementById('portfolioOpen').click();
}

function contactTab() { 
  document.getElementById('contactOpen').click();
}

document.getElementById("defaultOpen").click();// change this
// document.getElementById("portfolioOpen").click();



 // hamburger JS
var menu = document.querySelector('.hamburger');

function toggleMenu (event) {
  this.classList.toggle('is-active');
  document.querySelector( ".menuppal" ).classList.toggle("is_active");
  event.preventDefault();
}

menu.addEventListener('click', toggleMenu, false);

function closeNav() {
    menu.click();
}




  
  
  