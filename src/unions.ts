// Literal i funktion der returnerer længden
function returnLength(value: any[] | string) {
  return value.length;
}

returnLength("hejhejhej"); // 9
returnLength(["per", "bo", "mille"]); // 3
returnLength([0, 0, 2, 3]); // 4

// Union-literal i funktioner der sætter positionen på et element
function setPosition(pos: "start" | "center" | "end") {
  let el = document.createElement("div");
  el.style.position = pos;
}
