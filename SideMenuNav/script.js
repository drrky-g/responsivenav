//SideMenu Script

let hamburger = document.getElementById('hamburger');
let exit = document.getElementById('exit');

hamburger.addEventListener('click',function(){
  openSlideMenu();
  hamburger.style.display = 'none';
});

exit.addEventListener('click',function(){
  closeSlideMenu();
  hamburger.style.display = 'inline';
})

function openSlideMenu() {
  document.getElementById('sidemenu').style.width = '250px';
  document.getElementById('main').style.marginLeft = '250px';
}

function closeSlideMenu() {
  document.getElementById('sidemenu').style.width = '0px';
  document.getElementById('main').style.marginLeft = '0px';
}
