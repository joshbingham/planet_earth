// Get size of user's drink
function getSize() {
  while (true) {
    const res = prompt(
      "What size drink can I get for you?\n[a] Small\n[b] Medium\n[c] Large"
    );
    if (res === "a") return "small";
    else if (res === "b") return "medium";
    else if (res === "c") return "large";
    else alert("Please select either a, b, or c.");
  }
}

// Get type of drink
function getDrinkType() {
  while (true) {
    const res = prompt(
      "What type of drink would you like?\n[a] Brewed Coffee\n[b] Mocha\n[c] Latte"
    );
    if (res === "a") return "brewed coffee";
    else if (res === "b") return "mocha";
    else if (res === "c") return "latte";
    else alert("Please select either a, b, or c.");
  }
}

// Get type of milk (if latte)
function getMilk() {
  while (true) {
    const res = prompt(
      "What kind of milk would you like?\n[a] 2% Milk\n[b] Non-fat Milk\n[c] Oat Milk"
    );
    if (res === "a") return "2% milk";
    else if (res === "b") return "non-fat milk";
    else if (res === "c") return "oat milk";
    else alert("Please select either a, b, or c.");
  }
}

// Get order in or takeaway
function getOrderType() {
  while (true) {
    const res = prompt(
      "Is this order for here or to go?\n[a] Here\n[b] To go"
    );
    if (res === "a") return "for here";
    else if (res === "b") return "to go";
    else alert("Please select either a or b.");
  }
}

// Main coffee bot function
function coffeeBot() {
  alert("Welcome to the cafe!");
  
  const size = getSize();
  alert(`Alright, a ${size} drink coming up!`);
  
  const drinkType = getDrinkType();
  alert(`Great choice! A ${size} ${drinkType} coming right up!`);
  
  let milk;
  if (drinkType === "latte") {
    milk = getMilk();
    alert(`Awesome! A ${size} ${drinkType} with ${milk}, coming up!`);
  }

  const name = prompt("Can I get your name please?");
  alert(`Thanks, ${name}! Your drink will be ready shortly.`);

  const orderType = getOrderType();
  if (orderType === "for here") {
    alert("Alright, please take a seat. I'll have that right out for you!");
  } else {
    alert(`Alright, so I have a ${size} ${drinkType} ${orderType} for you, ${name}.`);
  }
}