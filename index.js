document.addEventListener("DOMContentLoaded", () => {
    const nagygomb = document.querySelector("#nagybetus")
    const visszafele = document.querySelector("#visszafele")
    const szavak = document.querySelector("#szavak")
    const hossza = document.querySelector("#hossza")
    const szokozNelkul = document.querySelector("#szokozNelkul")
    const bekezdesInput = document.querySelector("#bekezdesInput")
    const bekezdes = document.querySelector("#bekezdes")

    nagygomb.addEventListener("click", () => {
        nagybetu()
    });
    function nagybetu(){
        let ertek = bekezdesInput.value;
        bekezdes.innerHTML = ertek.toUpperCase();
    }

    visszafele.addEventListener("click", () => {
        vissza()
    });
    function vissza(){
        let ertek = bekezdesInput.value;
        let visszaszoveg = ertek.split("").reverse().join("");
        bekezdes.innerHTML = visszaszoveg;
    }

    szavak.addEventListener("click", () => {
        rendezetlen()
    });
    function rendezetlen(){
        let ertek = bekezdesInput.value;
        let rendezetlenLista = "<ul>";
        let szavak = ertek.split(" ");
        szavak.forEach(szo => {
            rendezetlenLista += "<li>" + szo + "</li>";
        });
        rendezetlenLista += "</ul>"
        bekezdes.innerHTML = rendezetlenLista;
    }
});