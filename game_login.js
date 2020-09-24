function addUser(){
    user_1Name=document.getElementById("name1").value;
    user_2Name=document.getElementById("name2").value;

    localStorage.setItem("Name_1",user_1Name);
    localStorage.setItem("Name_2",user_2Name);
    
    window.location.replace("game_page.html");
}