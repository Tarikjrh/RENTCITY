var queryString = decodeURIComponent(window.location.search);
queryString = queryString.substring(1);
var queries = queryString.split("=");

const peopleRef = db.collection("users")
	.doc(`${queries[1]}`)
	.collection("incomes")
	.doc(`${queries[2]}`)
	.collection(`People`);



fetchPeople();
function fetchPeople() {
	// Get ALL People
	document.querySelector("#peopleTitle").innerHTML = `
	Renters <span style='float: right' > <button class='subtitle ' id='addRenterBtn'> + Add </button></span>`;

	peopleRef
		.onSnapshot(
			(snapshot) => {
				if (snapshot.docChanges().length == 0) {
					document.querySelector("#peopleIndicator").innerHTML = `
					  <span class="mx-auto">
					<h2 class="subtitle ">there is no one renting this facility</h2>
				  </span>  `;
				} else {
					document.querySelector("#peopleIndicator").innerHTML = "";
				}

				snapshot.docChanges().forEach((change) => {
					const people = document.querySelector("#people");
					const doc = change.doc;

					if (change.type === "added") {
						if (doc.exists) {
							people.innerHTML += renderPeople(doc);
						}
					}
					if (change.type === "modified") {
						updatePersonInfo(doc);
					}
					if (change.type === "removed") {
					}
				});
			},
			(err) => {
				console.log(err.message);
			}
		);
}

// GET RENTER INFORMATION FORM
const NewRenter = document.querySelectorAll("#addRenterBtn");
NewRenter.forEach((element) => {
	element.addEventListener("click", (e) => {
		e.preventDefault();

		$("#authModal").modal("show");
		const modalTitle = document.querySelector("#modalTitle");
		modalTitle.innerHTML = `Add a Renter`;

		// display the form
		const modalContent = document.querySelector("#modalInfo");
		modalContent.innerHTML = WriteRenterForm("", "", "", "", "", "", "", "");

		// get data from form
		const form = document.querySelector("#renter-form");
		form.addEventListener("submit", (e) => {
			e.preventDefault();

			var gender = document.querySelector('input[name = "genderToggle"]:checked').value;
			let person = {
				personName: form["renter-name"].value,
				paymentAmount: form["income-amount"].value,
				personPhoneNumber: form["renter-phone"].value,
				apt: form["renter-apt"].value,
				email: form["renter-email"].value,
				dateOfEntry: form["renter-dateOfEntry"].value,
				notes: form["renter-notes"].value,
				dateAdded: firebase.firestore.FieldValue.serverTimestamp(),
				genderSelected: gender,
			};

			// if (emptyPlaces >= 0) {

			newPerson(person);
			ShowSpinner();
			form.reset();

			// }
			// else {
			//     console.log("no more space left")
			// }
		});
	});
});

//Upload new Person to building
function newPerson(person) {
	peopleRef
		.add(person)
		.then(() => {
			console.log("added ok");
		})
		.then(() => {
			// add the number of rented places by 1
			db.collection("users")
				.doc(`${queries[1]}`)
				.collection("incomes")
				.doc(`${queries[2]}`)
				.update({
					currentlyRented: firebase.firestore.FieldValue.increment(1),
				})
				.then(() => {
					console.log("income renter number updated");
					getFacilityData();
					WriteSuccessMessage(" New renter added", `${person.personName} added `, "Update complete");
					$("#authModal").modal("show");

					//add new person to month
					addNewPersonToMonth(person);
				});
		})
		.catch((err) => {
			console.log(err);
			$("#authModal").modal("show");
			WriteErrorMessage(err);
		});
}

people.addEventListener("click", (e) => {
	//REMOVE PEOPLE
	e.preventDefault();
	console.log(e.target.parentElement)
	if (e.target.parentElement.getAttribute("data-id") == "deleteRenter") {
		docId = e.target.parentElement.parentElement.parentElement.parentElement.getAttribute("renter-id");
		const modalTitle = document.querySelector("#modalTitle");
		modalTitle.innerHTML = `Deleting User`;
		ShowSpinner();
		$("#authModal").modal("show");

		db.collection("users")
			.doc(`${queries[1]}`)
			.collection("incomes")
			.doc(`${queries[2]}`)
			.update({
				currentlyRented: firebase.firestore.FieldValue.increment(-1),
			})
			.then(() => {
				console.log("removed from db");
				getFacilityData();
			})
			.then(() => {
				peopleRef
					.doc(`${docId}`)
					.delete();
			})
			.then(() => {
				fetchPeople();
				$("#authModal").modal("show");
				WriteSuccessMessage("person deleted", "person deleted");
				e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.innerHTML = ``;

			})

			.catch((err) => {
				console.log(err);
				$("#authModal").modal("show");
				WriteErrorMessage(err);
			});
	}
});

people.addEventListener("click", (e) => {
	//EDIT PEOPLE
	e.preventDefault();
	console.log(e.target);
	var userId = "";
	if (e.target.getAttribute("data-id") == "editRenter") {
		userId = e.target.parentElement.parentElement.parentElement.getAttribute("renter-id");
	}
	if (e.target.getAttribute("src") == "icons/edit.svg") {
		userId = e.target.parentElement.parentElement.parentElement.parentElement.getAttribute("renter-id");
	}
	// console.log(e.target.parentElement.parentElement.parentElement);
	// Get ALL People
	peopleRef
		.doc(`${userId}`)
		.get()
		.then((doc) => {
			$("#authModal").modal("show");

			const modalTitle = document.querySelector("#modalTitle");
			modalTitle.innerHTML = `Edit a Renter`;
			ShowSpinner();
			$("#authModal").modal("show");
			const modalContent = document.querySelector("#modalInfo");
			modalContent.innerHTML = WriteRenterForm(
				doc.data().personName,
				doc.data().genderSelected,
				doc.data().personPhoneNumber,
				doc.data().apt,
				doc.data().email,
				doc.data().dateOfEntry,
				doc.data().paymentAmount,
				doc.data().currency,
				doc.data().notes
			);
			var element = document.querySelector("#modalParent");
			element.classList.remove("modal-lg");

			const form = document.querySelector("#renter-form");
			form.addEventListener("submit", (e) => {
				e.preventDefault();

				var gender = document.querySelector('input[name = "genderToggle"]:checked').value;
				let person = {
					personName: form["renter-name"].value,
					paymentAmount: form["income-amount"].value,
					personPhoneNumber: form["renter-phone"].value,
					email: form["renter-email"].value,
					apt: form["renter-apt"].value,

					dateOfEntry: form["renter-dateOfEntry"].value,
					notes: form["renter-notes"].value,
					lastEdited: firebase.firestore.FieldValue.serverTimestamp(),
					// active: true,
					genderSelected: gender,
				};
				console.log(person);

				db.collection("users")
					.doc(`${queries[1]}`)
					.collection("incomes")
					.doc(`${queries[2]}`)
					.collection(`People`)
					.doc(`${userId}`)
					.set(person, { merge: true })
					.then(() => {
						WriteSuccessMessage(`${person.personName}'s profile updated`, `New data saved`);
						updatePersonInfo(doc);
						form.reset();
					})

					.catch((err) => {
						console.log(err);
						$("#authModal").modal("show");
						WriteErrorMessage(err);
					});
			});
		}); //end of get
	// } //if
}); //event listener

function updatePersonInfo(doc) {
	// console.log(  document.querySelector(`div[renter-id="${doc.id}"]`) )
	console.log("oi", doc.data());
	const userId = document.querySelector(`div[renter-id="${doc.id}"]`);
	if (doc.id == userId.getAttribute("renter-id")) {
		userId.parentElement.parentElement.outerHTML = renderPeople(doc);
	}
}

//DISPLAY INFO
people.addEventListener("click", (e) => {
	e.preventDefault();
	var renterId = "";
	//find better way to do this
	if (e.target.getAttribute("class") == "card-body") {
		renterId = e.target.getAttribute("renter-id");
	}
	if (e.target.getAttribute("class") == "row align-middle") {
		renterId = e.target.parentElement.getAttribute("renter-id");
	}
	if (e.target.getAttribute("class") == "card-title pl-3 ") {
		renterId = e.target.parentElement.parentElement.parentElement.getAttribute("renter-id");
	}

	if (renterId != "") {
		db.collection("users")
		peopleRef
			.doc(`${renterId}`)
			.get()
			.then((person) => {
				const modalTitle = document.querySelector("#modalTitle");
				modalTitle.innerHTML = `<div class="person-title">${person.data().personName}</div>`;

				const modalContent = document.querySelector("#modalInfo");
				modalContent.innerHTML = `
                <div class="row  px-md-4   px-sm-1">
                    <div class="col-md-2 col-sm-12 text-center mb-4">
                        <img style="height:120px; " src="icons/user${person.data().genderSelected
					}.svg" class="">
                    </div>
					<div class="col-1"></div>
                    <div class="col-md-4 col-sm-12">
                        <div class="person-title">${person.data().personPhoneNumber}</div>
                            <p class="person-subtitle">phone Number</p>

                            <div class="person-title">${person.data().email}</div>
                            <p class="person-subtitle">email</p>
                            
					</div>
					<div class="col-1"></div>
                    <div class="col-md-4 col-sm-12">
                      
                            <div class="person-title">${person.data().dateOfEntry}</div>
                            <p class="person-subtitle">date of entry</p>
                            <div class="person-title">${person.data().apt}</div>
                            <p class="person-subtitle">Apt. number</p>
					</div>
                </div>
				<div class="row px-md-4 px-sm-1	mx-0">
					<label for="income-notes">Notes</label>
					<textarea class="form-control" id="income-notes" ></textarea>
				</div>
                `;
				var element = document.querySelector("#modalParent");
				element.classList.add("modal-lg");
				$("#authModal").modal("show");
			})
			.catch(err => {
				console.log(err.message)
			})
	}
}); //event listener
