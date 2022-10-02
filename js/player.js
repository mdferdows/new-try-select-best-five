let playerList = [];
let numberOfPlayers;

function addToSelectedPlayers(name) {
    if (playerList.length > 4) {
        alert('cannot add more than five');
        return 0;
    }
    else {
        // step-1
        const playerName = name.parentNode.childNodes[1].innerText;
        playerList.push(playerName);
        name.disabled = true;
        // step-2:
        // console.log(playerName);
        const li = document.createElement('li');
        li.innerText = playerName;
        // step-2.5:
        const selectedPlayer = document.getElementById('selected-players');
        selectedPlayer.appendChild(li);
        // step-3:
        // total-added-player
        const totalAddedPlayers = document.getElementById('total-added-player');
        numberOfPlayers = playerList.length;

        totalAddedPlayers.innerText = numberOfPlayers;
        // console.log(typeof (totalAddedPlayers.innerText));

        // return numberOfPlayers;
    }
}
// console.log(numberOfPlayers);

//============= Calculate portion  ====================
// step-1:---calculate Buttob -------------
let newCost;
document.getElementById('calculate').addEventListener('click', function () {
    // console.log('calculate btn clicked');
    const perPlayerField = document.getElementById('player-budget');
    const perPlayerFieldString = perPlayerField.value;
    const newperPlayerAmount = parseFloat(perPlayerFieldString);

    perPlayerField.value = '';

    // step-1.5:
    const initialPerPlayerElement = document.getElementById('player-expense');
    const initialPerPlayerString = initialPerPlayerElement.innerText;
    const initialPerPlayerAmount = parseFloat(initialPerPlayerString);

    // step-2:
    newCost = newperPlayerAmount * (playerList.length) + initialPerPlayerAmount;
    initialPerPlayerElement.innerText = newCost;

})

// -------Calculation total Button ---------

document.getElementById('calculate-total').addEventListener('click', function () {

    //step-3
    //mangerCost
    const managerCostField = document.getElementById('manager-cost');
    const managerCostFieldString = managerCostField.value;
    const managerCost = parseFloat(managerCostFieldString);
    // console.log(mangerCost);
    managerCostField.value = '';


    //coachCost
    const coachCostField = document.getElementById('coach-cost');
    const coachCostFieldString = coachCostField.value;
    const coachCost = parseFloat(coachCostFieldString);
    // console.log(coachCost);
    coachCostField.value = '';

    const initialTotalAmount = document.getElementById('initial-total');
    const initialTotalAmountString = initialTotalAmount.innerText;
    const initialTotal = parseFloat(initialTotalAmountString);


    totalCost = managerCost + coachCost + initialTotal + newCost;
    initialTotalAmount.innerText = totalCost;

})