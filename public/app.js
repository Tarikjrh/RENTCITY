const newIncome = document.querySelectorAll("#newIncome");

//add income
newIncome.forEach((element) => {
	element.addEventListener("click", (e) => {
		e.preventDefault();
		displayNewIncomeForm();
	});
});

function addIncomeToDb(income) {
	db.collection("users")
		.doc(`${firebase.auth().currentUser.uid}`)
		.collection("incomes")
		.add(income)
		.then(() => {
			WriteSuccessMessage(`your new ${income.type} was added`, `You're all set`);
		})
		.catch((err) => {
			// console.log(err);
			WriteErrorMessage(err);
		});
}

auth.onAuthStateChanged((user) => {
	if (user) {
		setupUI(user);
		// console.log(user.displayName, "is logged in");

		// get the uses incomes from the database if available
		db.collection("users")
			.doc(`${user.uid}`)
			.collection("incomes")
			.onSnapshot(
				(snapshot) => {
					// handle the cards whether there is data or not
					// -----------------------------------------------------  -----------------------------------------------------  -------------------------------------------------------------------------------------------------------------------------------------
					if (snapshot.size == 0) {
						const noIncome = document.querySelector("#noIncome");
						noIncome.style.display = "flex";
					} else {
						const noIncome = document.querySelector("#noIncome");
						noIncome.style.display = "none";
					}

					// check for new things in the database and add it or delete it
					snapshot.docChanges().forEach((change) => {
						const doc = change.doc;
						// console.log(change.type)
						if (change.type === "added") {
							renderAllIncomeCards(doc);
							// console.log(doc.data());
						}
						if (change.type === "modified") {
						} else if (change.type === "removed") {
							deleteIncome(doc.id);
						}
					});
				},
				(err) => {
					// console.log(err.message);
				}
			);
	} else {
		setupUI();
	}
});

// go to next page where there is more info about an income
cards.addEventListener("click", (e) => {
	e.preventDefault();
	// console.log(e.target.getAttribute("class"));
	// console.log(e.currentTarget)

	if (e.target.getAttribute("class") == "card-body") {
		// TITLE BEFORE THE INFO IN THE LINK
		var queryString =
			"?pid=" + firebase.auth().currentUser.uid + "=" + e.target.parentElement.getAttribute("data-id");
		window.open("details.html" + queryString, "_self");
	} else if (
		e.target.getAttribute("class") == "card-title title pt-3" ||
		e.target.getAttribute("class") == "card-title title pt-1"
	) {
		var queryString =
			"?pid=" +
			firebase.auth().currentUser.uid +
			"=" +
			e.target.parentElement.parentElement.getAttribute("data-id");
		+"=";
		window.open("details.html" + queryString, "_self");
	}
});
