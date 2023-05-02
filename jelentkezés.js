function jelentkezes() {
    let text;
    let person = prompt("A lilaköd főkutatójának neve");
    if (person == "asd") {
        text = "Helyes! Jelentkezése sikeres.";  
    }

    if (person == null || person == "") {
        text = "Írjál má be valamit!";
    }

    else{
        text = "Jelentkezése sikertelen. Úton vagyunk."
    }

    document.getElementById("jelentkezes").innerHTML = text;
}