/* Modul-niveau flag, så introen kun spiller ved første indlæsning af
   sitet — ikke ved intern navigation tilbage til forsiden. */
let played = false;

export function shouldPlayIntro() {
  return !played;
}

export function markIntroPlayed() {
  played = true;
}
