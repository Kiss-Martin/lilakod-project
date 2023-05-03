function jelentkezes() {
    let text;
    let person = prompt("A Lilaköd Projekt főkutatójának neve");
    if (person == null || person == "" || person != "Kiss Gábor") {
        text = "Jelentkezése sikertelen. Úton vagyunk.";
    } else {
        text = "Jelentkezése sikeres, köszönjük!";
    }
    document.getElementById("jelentkezes").innerHTML = text;
}