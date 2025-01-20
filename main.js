document.getElementById("genera").addEventListener("click", function () {
  const nome = document.getElementById("nome").value;
  const km = parseFloat(document.getElementById("km").value);
  const eta = document.getElementById("eta").value;

  const prezzoBase = km * 0.21;
  let prezzoFinale = prezzoBase;
  let offerta = "Biglietto Standard";

  if (!nome || isNaN(km) || km <= 0) {
    alert("Per favore, inserisci tutti i dati correttamente.");
    return;
  }
  if (eta === "minorenne") {
    prezzoFinale *= 0.8;
    offerta = "Sconto Minorenni";
  } else if (eta === "over65") {
    prezzoFinale *= 0.6;
    offerta = "Sconto Over 65";
  }

  const carrozza = Math.floor(Math.random() * 10) + 1;
  const codiceCp = Math.floor(Math.random() * 100000);

  document.getElementById("nome-passeggero").textContent = nome;
  document.getElementById("offerta").textContent = offerta;
  document.getElementById("carrozza").textContent = carrozza;
  document.getElementById("codice-cp").textContent = codiceCp;
  document.getElementById(
    "costo-biglietto"
  ).textContent = `€${prezzoFinale.toFixed(2)}`;
});

// calcoloPrezzo();
