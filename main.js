import './styles/index.scss'

function main() {
  let billValue = 0;
  let peopleCount = 1;
  let tip = 0;

  document.getElementById("tip-5").onclick = () => {
    tip = 5;
    updateAmount();
  }

  document.getElementById("tip-10").onclick = () => {
    tip = 10;
    updateAmount();
  }

  document.getElementById("tip-15").onclick = () => {
    tip = 15;
    updateAmount();
  }

  document.getElementById("tip-25").onclick = () => {
    tip = 25;
    updateAmount();
  }

  document.getElementById("tip-50").onclick = () => {
    tip = 50;
    updateAmount();
  }

  // document.getElementById("tip-5").onclick = () => {
  //   tip = 5;
  // }

  const bill = document.getElementById("bill");

  bill.addEventListener("input", (event) => {
    billValue = +event.target.value;

    updateAmount();
  })

  const people = document.getElementById("people");

  people.addEventListener("input", (event) => {
    peopleCount = +event.target.value;

    updateAmount();
  })

  const tipEl = document.getElementById("tipPerPerson");
  const totalEl = document.getElementById("totalPerPerson");

  const updateAmount = () => {
    const tipAmount = (tip * billValue) / 100;

    const totalBill = billValue + (tipAmount * peopleCount);

    const totalPerPerson = totalBill / peopleCount;

    tipEl.textContent = "$" + tipAmount;
    totalEl.textContent = "$" + totalPerPerson;

  }

  document.getElementById("reset").onclick = () => {
    tip = 0;
    billValue = 0;
    peopleCount = 0;

    bill.value = 0;
    people.value = 0;

    tipEl.textContent = "$0.00";
    totalEl.textContent = "$0.00";
  }
}

main();