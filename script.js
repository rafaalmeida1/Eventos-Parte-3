function loaded(){ //serve para colocar o script antes do body, para assim o script ser carregado só depois que o body for carregado
                    //momento de usar isso é quando eu quiser pegar um elemento depois que o body for carregado, porém o link do script estar antes
    let t = document.getElementById("titulo"); //quando o body for carregado, o h1 vai existir, e ai sim consigo dar t.innerHTML e pega o h1

    // t.innerHTML = "rrr";

    //primeira maneira de passar onclick pelo js
    //t.onclick = mudarText;  //posso passar a função sem os parenteses, pois se colocar os parenteses aqui dentro, ele vai executar a função aqui nesse momento, e não lá no HTML

    //segunda maneira de passar onclick aqui pelo js

    t.addEventListener("mouseover", mudarText); //isso faz a mesma coisa, o "click" faz a mesma coisa que onclick
    t.addEventListener("mouseout", mouseout);
    //     quando tiver o click, ele modifica o texto com a função mudarText
    //     posso passar outros eventos aqui, como onmouseover, e é tudo minúsculo mesmo, não é onmouseOver não
}

function mudarText(){
    this.innerHTML = "Novo Texto"; //o this vai ser exatamente o objeto que está usando o onclick
}

function mouseout(){
    this.innerHTML = "teste";
}