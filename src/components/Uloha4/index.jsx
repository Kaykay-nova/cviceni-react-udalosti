/*
Zadání 1: Pomocí události `change` a vlastnosti `event.target.value` vypisujte do konzole, co
  postupně uživatel do inputu píše ve formátu
  console.log('Uživatel napsal: ' + DOPLŇ_TEXT_OD_UŽIVATELE).
Zadání 2: Pokud uživatel z textového políčka vše smaže, vypište „Uživatel nenapsal nic“.
*/

export const Uloha4 = () => {
  const zmena = (event) => {
    if (event.target.value === '' || event.target.value === ' ' ) {
    console.log('Uživatel nic nenapsal')
   } else {
    console.log(`Uzivatel napsal : ${event.target.value }`)}
  }

  return <input onChange={zmena}/>;
};
