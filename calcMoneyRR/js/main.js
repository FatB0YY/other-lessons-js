"use strict";

document.addEventListener("DOMContentLoaded", function() {
    const totalBalance = document.querySelector(".total__balance");
    const totalMoneyIncome = document.querySelector(".total__money-income");
    const totalExpenses = document.querySelector(".total__expenses");
    const totalMoneyExpenses = document.querySelector(".total__money-expenses");
    const totalIncome = document.querySelector(".total__income");
    const historyList = document.querySelector(".history__list");
    const operationName = document.querySelector(".operation__name");
    const operationAmount = document.querySelector(".operation__amount");
    const form = document.querySelector("#form");

    const generateId = () => `id${Math.round(Math.random() * 1e8).toString(16)}`;

    // localStorage.clear(); очистить

    let dbOperation = JSON.parse(localStorage.getItem("calc")) || [];

    const renderOperation = (operation) => {
        //const className =operation.amount < 0 ? "history__item-minus" : "history__item-plus"; // => if снизу

        let className = "";
        if (operation.amount < 0) {
            className = "history__item-minus";
        } else {
            className = "history__item-plus";
        }

        const listItem = document.createElement("li");
        listItem.classList.add("history__item");
        listItem.classList.add(className);

        listItem.innerHTML = `${operation.description}
            <span class="history__money">${operation.amount} ₽</span>
            <button class="history__delete" data-id="${operation.id}">x</button>
        `;

        historyList.append(listItem); //append вставляет в конец
    };

    const updateBalance = () => {
        /*
                  //через filter
                  const resultIncome = dbOperation
                  .filter((item) => {
                      return item.amount > 0;
                  })
                  
                  .reduce((result, item) => result + item.amount, 0);

                  //можем сократить код
                  const resultExpenses = dbOperation
                      .filter((item) => item.amount < 0)
                      .reduce((result, item) => result + item.amount, 0);
                  */

        //то же самое, только через for и if
        let resultArrIncome = [];
        let resultArrExpenses = [];

        for (let i = 0; i < dbOperation.length; i++) {
            if (dbOperation[i].amount > 0) {
                resultArrIncome.push(dbOperation[i].amount);
            } else if (dbOperation[i].amount < 0) {
                resultArrExpenses.push(dbOperation[i].amount);
            }
        }

        //замена reduce
        let resultCashIncome = 0;
        let resultCachExpenses = 0;
        for (let i = 0; i < resultArrIncome.length; i++) {
            resultCashIncome += resultArrIncome[i];
        }
        for (let i = 0; i < resultArrExpenses.length; i++) {
            resultCachExpenses += resultArrExpenses[i];
        }

        //вывод
        totalMoneyIncome.textContent = resultCashIncome + " ₽";
        totalMoneyExpenses.textContent = resultCachExpenses + " ₽";
        totalBalance.textContent = resultCashIncome + resultCachExpenses + " ₽";
    };

    const init = () => {
        historyList.textContent = "";

        //dbOperation.forEach(renderOperation); // => for снизу
        for (let i = 0; i < dbOperation.length; i++) {
            renderOperation(dbOperation[i]);
        }

        updateBalance();
        localStorage.setItem("calc", JSON.stringify(dbOperation));
    };

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const operationNameValue = operationName.value;
        const operationAmountValue = operationAmount.value;

        operationName.style.borderColor = "";
        operationAmount.style.borderColor = "";

        if (operationNameValue !== "" && operationAmountValue !== "") {
            const operation = {
                id: generateId(),
                description: operationNameValue,
                amount: parseInt(operationAmountValue),
            };

            dbOperation.push(operation);
            init();
        } else {
            if (!operationNameValue) operationName.style.borderColor = "red";
            if (!operationAmountValue) operationAmount.style.borderColor = "red";
        }

        operationName.value = "";
        operationAmount.value = "";
    });

    historyList.addEventListener("click", (event) => {
        const target = event.target;
        if (target.classList.contains("history__delete")) {
            dbOperation = dbOperation.filter(
                (operation) => operation.id !== target.dataset.id
            );
            init();
        }
    });

    init();
});