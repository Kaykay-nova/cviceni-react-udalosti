/*
Zadání: Po kliku na tlačítko zobrazte alert s textem „Ahoj“.
*/

export const Uloha1 = () => {
  const kliknuti = () => {
    alert('Ahoj');
  }
  return <button onClick={kliknuti}>Ukaž bublinu</button>;
};
