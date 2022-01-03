const modalTitle = document.querySelector("#modalTitle");
const modalContent = document.querySelector("#modalInfo");

//get data from links
var queryString = decodeURIComponent(window.location.search);
queryString = queryString.substring(1);
var queries = queryString.split("=");

auth.onAuthStateChanged((user) => {
	if (user) {
		// console.log(user)
		document.querySelector("#nav-user").innerHTML = user.displayName;
		loggedInLinksInfo.forEach((item) => (item.style.display = "inline"));
		loggedOutLinks.forEach((item) => (item.style.display = "none"));
	}
});
getFacilityData();
function getFacilityData() {
	// fetch data from db
	db.collection("users")
		.doc(`${queries[1]}`)
		.collection("incomes")
		.doc(`${queries[2]}`)
		.get()
		.then((facilityData) => {
			// console.log(facilityData)
			renderSelectedFacility(facilityData);
			var facilityInfo = facilityData.data();

			var editFacilityBtn = document.querySelector("#editFacility");
			editFacilityBtn.addEventListener("click", (e) => {
				e.preventDefault();
				editFacility(facilityInfo);
			});
		})
		.catch((err) => {
			// console.log(err)
			WriteErrorMessage(err);
		});
}

function renderSelectedFacility(doc) {
	// render the selected facility name and location above of the cards
	const IncomeName = document.querySelector("#placeName");
	IncomeName.innerHTML = `
			<h5 class="card-title title " id="card-title" >${doc.data().facilityName}</h5>
			<p class="subtitle ">${doc.data().facilityLocation}</p>
	`;
	const IncomeIcon = document.querySelector("#facilityIcon");
	IncomeIcon.innerHTML = `
			<img src="icons/${doc.data().type}.svg">
	`;

	// render the cards html
	if (doc.data().type == "building") {
		displayInfoCardsBuilding(doc);
	} else if (doc.data().type == "house") {
		displayInfoCardsHouse(doc);
	} else if (doc.data().type == "warehouse") {
		displayInfoCardsWarehouse(doc);
		// displayInfoCardsHouse(doc);
	}

	// check if there is some previous notes and display them
	var notesForm = document.querySelector("#income-notes");
	notesForm.innerHTML = doc.data().notes;

	// show and hide the notes btn
	notesForm.addEventListener("input", (e) => {
		e.preventDefault();

		$("#notesBtn").collapse("show");
		if (document.querySelector("#income-notes").value.trim() === "") {
			setTimeout(() => {
				$("#notesBtn").collapse("hide");
			}, 3000);
		}
	});

	// uses firebase to talk to the db and update notes after SUBMIT
	updateNotes();
}

function updateNotes() {
	var notesForm = document.querySelector("#notesForm");
	notesForm.addEventListener("submit", (e) => {
		e.preventDefault();
		$("#authModal").modal("show");

		ShowSpinner();
		db.collection("users")
			.doc(`${firebase.auth().currentUser.uid}`)
			.collection("incomes")
			.doc(`${queries[2]}`)
			.update({
				notes: `${document.querySelector("#income-notes").value}`,
			})

			.then(function () {
				// console.log("Document successfully updated!");
				$("#notesBtn").collapse("hide");
				$("#authModal").modal("show");

				WriteSuccessMessage("note changes saved", `Notes`);
			})

			.catch(function (error) {
				$("#authModal").modal("show");
				// console.error("Error updating document: ", error);
				WriteErrorMessage(error);
			});
	});
}

//called in get facility data
function editFacility(facilityInfo) {
	// console.log(facilityInfo);

	$("#authModal").modal("show");

	modalTitle.innerHTML = `Edit Income ${facilityInfo.type}`;

	showCustomForm(facilityInfo.type, facilityInfo, "modify");
}

function sendEditedDataDb(income) {
	db.collection("users")
		.doc(`${firebase.auth().currentUser.uid}`)
		.collection("incomes")
		.doc(`${queries[2]}`)
		.set(income, { merge: true })
		.then(() => {
			// console.log("added ok");

			WriteSuccessMessage("Income added", `edited ok`);
			getFacilityData();
		})

		.catch((err) => {
			// console.log(err);
			WriteErrorMessage(err);
		});
}

var deleteFacilityBtn = document.querySelector("#deleteFacility");
deleteFacilityBtn.addEventListener("click", (e) => {
	e.preventDefault();
	deleteFacility(queries[2]);
});

function deleteFacility(id) {
	// modalContent.innerHTML = `Are You Sure you Want to delete?`;

	db.collection("users")
		.doc(`${firebase.auth().currentUser.uid}`)
		.collection("incomes")
		.doc(id)
		.delete()
		.then(() => {
			$("#authModal").modal("show");
			const modalTitle = document.querySelector("#modalTitle");
			modalTitle.innerHTML = `Delete Income`;

			WriteSuccessMessage("Income deleted", "all data removed");
			setTimeout(() => {
				window.open("index.html", "_self");
			}, 2000);
		})
		.catch((err) => {
			$("#authModal").modal("show");
			const modalTitle = document.querySelector("#modalTitle");
			modalTitle.innerHTML = `Delete Income`;
			WriteErrorMessage(err);
		});
}

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
