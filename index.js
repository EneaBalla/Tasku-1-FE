var menu=true;
document.getElementById("menu").addEventListener("click", () => {
  if (menu){
  document.getElementById("nav-items").style.display="contents";
  menu=false;}
  else if (!menuHapur){
    document.getElementById("nav-items").style.display="none";
    menu=true;
  }
});