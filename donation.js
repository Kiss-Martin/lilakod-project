function myFunction() {
    let text;
    let person = prompt("Kérem írjon egy rövid véleményt kutatásunkról!", );
    if (person == null || person == "") {
        text = "Nem írtál semmit.\nSZÉGYELLD MAGAD!!!";

    } else {
        text = "KÖSZÖNJÜK A FITYINGET! SZKUBIDUBIDOOOO";
    }
    document.getElementById("demo").innerHTML = text;

}