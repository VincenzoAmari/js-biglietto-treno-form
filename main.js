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
  //   if (eta < 18) {
  //     prezzoFinale = prezzoBase * 0.8;
  //   } else if (eta > 65) {
  //     prezzoFinale = prezzoBase * 0.6;
  //   }

  //   alert("per te il costo del biglietto è: €" + prezzoFinale.toFixed(2));
});

// calcoloPrezzo();
