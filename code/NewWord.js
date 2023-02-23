document.getElementById("submit_btn").addEventListener("click", (event) => { AddWords(); });



let btnplus = document.getElementsByClassName("button_plus");





AddRow = () => {

    let mainSection = document.getElementById("input-box");

    let section = document.createElement("section");
    section.setAttribute("class","labels");

    let hu = document.createElement("input");
    let en = document.createElement("input");
    hu.setAttribute("class", "hu");
    hu.setAttribute("placeholder", "Hungarian");
    hu.setAttribute("type", "text");

    en.setAttribute("class", "en");
    en.setAttribute("placeholder", "English");
    en.setAttribute("type", "text");
    
    let btn_plus = document.createElement("button");
    let btn_del = document.createElement("button");


    btn_del.setAttribute("class", "button_del");
    btn_del.setAttribute("onclick", "DeleteRow(this)");
    btn_del.innerHTML = `<i class="fa-solid fa-trash"></i>`;
    
    btn_plus.setAttribute("class", "button_plus");
    btn_plus.setAttribute("onclick", "AddRow()");
    btn_plus.innerHTML = `<i class="fa-solid fa-plus"></i>`;


    section.append(hu);
    section.append(en);
    section.append(btn_plus);
    section.append(btn_del);
    mainSection.append(section);
}






DeleteRow = (e) => {
    let btndel = document.getElementsByClassName("button_del");

    if(btndel.length !=1){

        e.parentElement.remove();
    }else{
        alert("nem tudod kitörölni az elsot")
    }
}

AddWords = () => {
    let enList = document.getElementsByClassName("en");
    let huList = document.getElementsByClassName("hu");
    let user = document.getElementById("user");

    for (let i = 0; i < enList.length; i++) {
        if (enList[i].value == "" || huList[i].value == "") {
            console.log(enList[i])
            console.log(huList[i])
            document.querySelector('.alert').style.display = '';
            return;
        }
    }


    words = []

    for (let i = 0; i < enList.length; i++) {
        var myObj = {
            word: huList[i].value,
            definition: enList[i].value
        };
        words.push(myObj);
    }
    
    
    let data = {
        words: words
    }
    let option = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify(data)
    }
    fetch(`https://guideianangel.herokuapp.com/new?user=${user.value}`, option)
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
    })
    
    for (let i = 0; i < enList.length; i++) {
        enList[i].value = "";
        huList[i].value = "";
    }
    user.value = "";
    
};

let option = {
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    method: "DELETE",
}



document.addEventListener('load', (fetch('https://guideianangel.herokuapp.com/delete?user=Béla', option)) ); 