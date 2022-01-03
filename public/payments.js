now = new Date();
// now = new Date("Dec 21, 2021 01:15:00");

handlePaymentUI();

function handlePaymentUI() {
	const paymentsTitle = document.querySelector("#paymentsTitle");
	paymentsTitle.innerHTML = `	Payments <span style='float: right'> <button class='subtitle' id="addPaymentBtn">+ Add </button></span>`;

	db.collection("users")
		.doc(`${queries[1]}`)
		.collection("incomes")
		.doc(`${queries[2]}`)
		.collection(`Payments`)
		// .orderBy("date", "desc")
		// .limit(2)
		.onSnapshot(function (snapshot) {
			//if there is not data yet, notify the user
			if (snapshot.docChanges().length == 0) {
				document.querySelector("#paymentsIndicator").innerHTML = `
                  <span class="mx-auto">
                <h2 class="subtitle ">there are no payments in this facility</h2>
              </span>  `;
			} else {
				document.querySelector("#paymentsIndicator").innerHTML = "";
			}

			snapshot.docChanges().forEach(function (change) {
				doc = change.doc;

				if (change.type === "added") {
					renderPaymentsCards(doc, change.type);
				}

				if (change.type === "modified") {
					renderPaymentsCards(doc, change.type);
				}
			});
		});
}

//add a new payment
const newPaymentBtn = document.querySelectorAll("#addPaymentBtn");
newPaymentBtn.forEach((element) => {
	element.addEventListener("click", (e) => {
		e.preventDefault();
		handlePaymentData();
	});
});

function handlePaymentData(payId = `${now.getFullYear()}-${now.getMonth()}`) {
	const modalTitle = document.querySelector("#modalTitle");

	modalTitle.innerHTML = `Rent Information for ${payId}`;
	$("#authModal").modal("show");
	db.collection("users")
		.doc(`${queries[1]}`)
		.collection("incomes")
		.doc(`${queries[2]}`)
		.collection(`Payments`)
		.doc(`${payId}`)
		.get()
		.then((snapshot) => {
			// if there is no document for this month create a new one
			if (!snapshot.exists) {
				db.collection("users")
					.doc(`${queries[1]}`)
					.collection("incomes")
					.doc(`${queries[2]}`)
					.collection(`People`)
					.get()
					.then((people) => {
						let header = `  <form id="income-form">`;
						let body = "";

						people.forEach((person) => {
							// console.log(person.data().personName);
							body += writePaymentFormBody(person.data().personName);
						});
						let footer = writeFooter();
						modalContent.innerHTML = header + body + footer;
						$("#authModal").modal("show");

						getPaymentInfoFormToUpdate(payId);
					});
			} else {
				//if there is update it
				let payments = snapshot.data().paymentsThisMonth;
				let header = `  <form id="income-form">`;
				let body = "";
				payments.forEach((data) => {
					// console.log(data.name);

					body += writePaymentFormBody(data.name, data.paid);
				});

				let footer = writeFooter();

				modalContent.innerHTML = header + body + footer;
				$("#authModal").modal("show");

				getPaymentInfoFormToUpdate(payId);
			}
		});
}
function writePaymentFormBody(name, paid) {
	paid = paid || "false";
	checked = ["", ""];
	if (paid == "true") {
		checked[0] = "checked";
	} else {
		checked[1] = "checked";
	}

	html = `<div  class="form-group" >
                    <div class="form-row px-3">
                        <h3>${name}</h3>

                        <div class="custom-control custom-radio ml-auto my-auto">
                            <input type="radio" id="${name}1" name="${name}" class="custom-control-input"
                                value="true"  ${checked[0]} >
                            <label class ="custom-control-label" for="${name}1">Yes </label>
                        </div>

                        <div class="custom-control custom-radio ml-auto my-auto">
                            <input type="radio" id="${name}2" name="${name}" class="custom-control-input"
                                value="false" ${checked[1]} >
                            <label class ="custom-control-label" for="${name}2">No  </label>
                        </div>

                    </div>
</div >
                    `;
	return html;
}

function addNewPersonToMonth(person) {
	var docToUpdate = db
		.collection("users")
		.doc(`${queries[1]}`)
		.collection("incomes")
		.doc(`${queries[2]}`)
		.collection(`Payments`)
		.doc(`${now.getFullYear()}-${now.getMonth()}`);

	docToUpdate
		.get()
		.then((docData) => {
			if (docData.exists) {
				docToUpdate.update({
					paymentsThisMonth: firebase.firestore.FieldValue.arrayUnion({
						name: person.personName,
						paid: "false",
						datePaid: null,
					}),
				});
			} else {
				// console.log("no doc to be updated");
			}
		})
		.catch((error) => {
			console.log(error);
		});
}

// function removePersonFromMonth() {
// 	console.log("hi");
// 	db.collection("users")
// 		.doc(`${queries[1]}`)
// 		.collection("incomes")
// 		.doc(`${queries[2]}`)
// 		.collection(`Payments`)
// 		.doc(`${now.getFullYear()}-${now.getMonth()}`)
// 		.update({
// 			paymentsThisMonth: firebase.firestore.FieldValue.arrayRemove({name: "max"}),
// 		});
// }

function getPaymentInfoFormToUpdate(payId) {
	//this renders the radio boxes in the forms
	const form = document.querySelector("#income-form");
	form.addEventListener("submit", (e) => {
		e.preventDefault();
		var i;
		var ar = [];
		var payment = {
			date: `${payId} `,
			// rent: rent,
			timeOfTransaction: firebase.firestore.FieldValue.serverTimestamp(),
		};
		for (i = 0; i < form.length; i++) {
			if (form[i].checked) {
				var x = {
					name: form[i].name,
					paid: form[i].value,
				};
				if (x.paid == "true") {
					x.datePaid = new Date();
				} else {
					x.datePaid = null;
				}
				ar.push(x);
			}
		}

		payment.paymentsThisMonth = ar;
		// console.log(payment);
		uploadPayment(payment, payId);
		ShowSpinner();
	});
}

//Upload new payment to db
function uploadPayment(payment, payId = `${now.getFullYear()} - ${now.getMonth()}`) {
	// console.log("uploading a new one", payment.date);
	db.collection("users")
		.doc(`${queries[1]}`)
		.collection("incomes")
		.doc(`${queries[2]}`)
		.collection(`Payments`)
		.doc(payId)
		.set(payment, { merge: true })
		.then(() => {
			// console.log("added ok");
			WriteSuccessMessage("new payment added");
			$("#authModal").modal("show");
		})
		.catch((err) => {
			console.log(err);
			$("#authModal").modal("show");
			WriteErrorMessage(err);
		});
}

function renderPaymentsCards(doc, changeType) {
	var month = doc.id.split("-");
	NumberOfPeopleThatPayed = 0;
	totalNumberOfRenters = 0;
	doc.data().paymentsThisMonth.forEach((element) => {
		totalNumberOfRenters++;
		if (element.paid == "true") {
			NumberOfPeopleThatPayed++;
		}
	});
	if (changeType == "added") {
		const payments = document.querySelector("#payments");
		payments.innerHTML += `
            <div class="col-sm-6 ">
            <div class="card " pay-id="${doc.id}" >
            <div class="card-body" >
            <h5 class="card-title title pt-1" id="card-title" >
                ${getMonthName(month[1])} - ${month[0]}  ${remainingPayments(
			NumberOfPeopleThatPayed,
			totalNumberOfRenters
		)} 
            </h5>
            </div>
            </div>
            </div>
     `;
	} else if (changeType == "modified") {
		const payments = document.querySelector(`[pay-id="${doc.id}"]`);
		payments.innerHTML = `
            
            <div class="card-body" >
            <h5 class="card-title title pt-1" id="card-title" >
            ${getMonthName(month[1])} - ${month[0]}  ${remainingPayments(
			NumberOfPeopleThatPayed,
			totalNumberOfRenters
		)} 
        </h5>
            </div>
     
     `;
	}
}

function remainingPayments(NumberOfPeopleThatPayed, totalNumberOfRenters) {
	if (NumberOfPeopleThatPayed == totalNumberOfRenters) {
		return `
        <span style="float:right" class="pr-1">
        <lord-icon
        src="https://cdn.lordicon.com/lupuorrc.json"
        trigger="loop"
        colors="primary:#ffffff,secondary:#08a88a"
        scale="60"
        style="width:65px;height:65px">
    </lord-icon>
    
    </span> 
    <p class="subtitle "> ${NumberOfPeopleThatPayed}/${totalNumberOfRenters} Paid</p > 
  

            `;
	} else {
		return `
        <span style="float:right" class="pr-1">
        <lord-icon
        src="https://cdn.lordicon.com/hrqwmuhr.json"
        trigger="loop"
        colors="primary:#ffffff,secondary:#c7166f"
        scale="60"
        style="width:65px;height:65px">
    </lord-icon>
    </span> 
        <p class="subtitle"> ${NumberOfPeopleThatPayed}/${totalNumberOfRenters} Paid</p > 
  

            `;
	}
}

//allow user to interact with cards and previous payments
document.querySelector("#payments").addEventListener("click", (e) => {
	e.preventDefault();
	var payId = "";
	if (e.target.getAttribute("id") == "card-title") {
		payId = e.target.parentElement.parentElement.getAttribute("pay-id");
	}
	handlePaymentData(payId);

	// db.collection("users")
	// 	.doc(`${queries[1]}`)
	// 	.collection("incomes")
	// 	.doc(`${queries[2]}`)
	// 	.collection(`Payments`)
	// 	.doc(`${payId}`)
	// 	.get()
	// 	.then((doc) => {
	// 		if (doc.exists) {
	// 			console.log("Document data:", doc.data());
	// 			const modalTitle = document.querySelector("#modalTitle");
	// 			modalTitle.innerHTML = `Payment for ${payId}`;
	// 			var modalContent = document.querySelector("#modalInfo");
	// 			var html = "";
	// 			doc.data().paymentsThisMonth.forEach((payments) => {
	// 				var paid = "not paid";
	// 				if (payments.paid == "true") {
	// 					paid = "paid";
	// 				}
	// 				if (payments.datePaid) {
	// 					datePaid = payments.datePaid.toDate().toDateString();
	// 				} else {
	// 					date = null;
	// 				}
	// 				html += ` <h3>${payments.name} <span style="float:right" >${paid}<span style="float:right" class="pl-2">${datePaid}</span></span> </h3>`;
	// 			});

	// 			modalContent.innerHTML = html;

	// 			$("#authModal").modal("show");
	// 		} else {
	// 			// doc.data() will be undefined in this case
	// 			console.log("No such document!");
	// 		}
	// 	})
	// 	.catch((error) => {
	// 		console.log("Error getting document:", error);
	// 	});
});
