function myFunction() {
    let text;
    let person = prompt("Kérem írjon egy rövid véleményt kutatásunkról!", "SZKUBIDUBIDOOOO");
    if (person == null || person == "") {
        text = "Nem írtál semmit.\nSZÉGYELLD MAGAD!!!";
    } else {
        text = "Köszönjük lilaköd megvalósulásához való hozzájárulását!";
    }
    document.getElementById("demo").innerHTML = text;
}