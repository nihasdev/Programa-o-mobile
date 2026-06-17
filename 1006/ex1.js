function mudarLivro(){

    let colunaLivro = document.getElementsByTagName("td");


    for(let i = 0; i < colunaLivro.length; i += 2){

        colunaLivro[i].style.backgroundColor = "blue";
        colunaLivro[i].style.color = "white";

    }

}



function mudarPaginas(){

    let colunaPaginas = document.getElementsByTagName("td");


    for(let i = 1; i < colunaPaginas.length; i += 2){

        colunaPaginas[i].style.backgroundColor = "green";

    }

}