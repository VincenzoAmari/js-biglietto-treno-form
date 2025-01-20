function calcoloPrezzo() {
  const eta = parseInt(prompt("quanti anni hai?"));
  const km = parseFloat(prompt("quanti chilometri vuoi percorrere?"));
  const prezzoBase = km * 0.21;
  let prezzoFinale = prezzoBase;

  if (eta < 18) {
    prezzoFinale = prezzoBase * 0.8;
  } else if (eta > 65) {
    prezzoFinale = prezzoBase * 0.6;
  }

  alert("per te il costo del biglietto è: €" + prezzoFinale.toFixed(2));
}

calcoloPrezzo();
