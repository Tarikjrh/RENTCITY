
const logOutBtn = document.getElementById("logOutBtn");
const userName = document.getElementById("uName");
const loggedOutLinks = document.querySelectorAll(".l-out");
const loggedInLinks = document.querySelectorAll(".l-in");
const loggedInLinksInfo = document.querySelectorAll(".l-in-i");
const authModal = document.querySelector("#authModal");
const userNav = document.querySelector("#nav-user");
// UI HANDELLING---------------------------------------------------------------------------------------------------------------------------------------
// CHECK IF USER IS LOGGED IN
const setupUI = (user) => {
	// DISPLAY ICONS IF USER IS SIGNED IN
	if (user) {

		//CLEAR PREVIOUS DATA, IF ANY
		const cards = document.querySelector("#cards");
		cards.innerHTML = ``;
		// DISPLAY ICONS IF USER IS SIGNED IN
		loggedInLinks.forEach((item) => (item.style.display = "inline"));
		loggedOutLinks.forEach((item) => (item.style.display = "none"));
		document.querySelector("#arrows").classList.remove("mt-auto");

		// GET USER NAME
		userNav.innerHTML = firebase.auth().currentUser.displayName;
		userName.innerHTML = user.displayName;
		// userName.innerHTML += firebase.auth().currentUser.displayName;

		db.collection("users")
			.doc(firebase.auth().currentUser.uid)
			.get()
			.then(doc => {
				document.querySelector("#userIcon").innerHTML =
					`
					<img src="icons/user${doc.data().gender}.svg"  class="pl-3 pr-3 ">
				`
			}).catch(err => {
				console.log(err)
			})
	} else {
		userName.innerHTML = ``;
		//const cards = document.querySelector("#cards");
		// cards.innerHTML = `
		// <div class="row home-info">
		// 						<div class="col-sm-4 text-center">
		// 							<img src="icons/logoColor.svg" alt=""  height="320"/>
		// 						</div>
		// 						<div class="col-sm-1"></div>
		// 						<div class="col-md-7 col-sm-12">

		// 							<div class="">
		// 								<h1 class="header1">
		// 									<span style="color: #3DB39E;">RENTCITY</span> allows you keep track of who paid rent in your building
		// 								</h1>
		// 							</div>
		// 							<div class="">
		// 								<h2 class="subheader">access your account to start</h1>
		// 							</div>
		// 							<div class="text-center text-md-left mt-5">
		// 								<button class="btn btn-home " id="signUpBtn">Sign up</button>
		// 								<button class="btn btn-home ml-4 ml-md-5" id="logInBtn" style="background-color:#0EADC3">Log in</button>
		// 							</div>
		// 						</div>
		// 					</div>
		// 	`;


		document.querySelector("#arrows").classList.add("mt-auto");
		loggedInLinks.forEach((item) => (item.style.display = "none"));
		loggedOutLinks.forEach((item) => (item.style.display = "inline"));
	}
};
const signupBtn = document.querySelectorAll("#signUpBtn");
const logInBtn = document.querySelectorAll("#logInBtn");
// modalTitle
//SIGN UP---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
signupBtn.forEach((btn) => {
	btn.addEventListener("click", (e) => {
		e.preventDefault();
		displaySignUpForm();

		const signupForm = document.querySelector("#signup-form");
		signupForm.addEventListener("submit", (e) => {
			e.preventDefault();

			const email = signupForm["signup-email"].value;
			const password = signupForm["signup-password"].value;
			const name = signupForm["signup-name"].value;
			const phone = signupForm["signup-phone"].value;
			const genderSelected = document.querySelector("input[name = genderToggle]:checked").value;

			ShowSpinner();

			// SEND AUTH DATA TO FIREBASE
			auth
				.createUserWithEmailAndPassword(email, password)
				.then((cred) => {
					cred.user
						.updateProfile({
							displayName: name,
							// photoURL: "",
							// phoneNumber: "",
						})

						.then(function () {
							//this is to save extra data from the user

							db.collection("users").doc(cred.user.uid).set({
								//to add the values to the doc we use set()

								name: signupForm["signup-name"].value,
								phoneNumber: phone,
								memberSince: firebase.firestore.FieldValue.serverTimestamp(),
								gender: genderSelected,
							});
						})
						.then(function () {
							// user creation successful.;
							setupUI(cred.user);
							WriteSuccessMessage("your profile was created ", `Nice to meet you, "${name}"!`);

							signupForm.reset();
						});
				})
				.catch(function (err) {
					WriteErrorMessage(err);
				});
		});
	});
});

//LOG IN---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
logInBtn.forEach((btn) => {
	btn.addEventListener("click", (e) => {
		e.preventDefault();
		displaySignInform();

		const loginForm = document.querySelector("#login-form");
		loginForm.addEventListener("submit", (e) => {
			e.preventDefault();
			ShowSpinner();

			const email = loginForm["login-email"].value;
			const password = loginForm["login-password"].value;

			//send login credentials to firebase
			auth
				.signInWithEmailAndPassword(email, password)
				.then((cred) => {

					loginForm.reset();
					WriteSuccessMessage(`${cred.user.displayName} logged in`, "Welcome back!");
					// console.log(firebase.auth().currentUser);
				})
				.catch((err) => {
					WriteErrorMessage(err);
				});
		});
	});
});

//LOG OUT------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
logOutBtn.addEventListener("click", (e) => {
	e.preventDefault();
	document.querySelector("#modalTitle").innerHTML = `Log Out`;
	ShowSpinner();
	$("#authModal").modal("show");

	auth
		.signOut()
		.then(function () {
			WriteSuccessMessage("logged out ");
			// Sign-out successful.

			// console.log("Sign-out successful.");
			window.open("index.html", "_self");
		})
		.catch(function (err) {
			WriteErrorMessage(err);
		});
});
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- 
//get and display current user data so that he can update it
document.querySelector("#userInfo").addEventListener("click", (e) => {
	e.preventDefault();
	document.querySelector("#modalTitle").innerHTML = `Edit profile`;
	db.collection("users")
		.doc(firebase.auth().currentUser.uid)
		.get()
		.then(doc => {
			console.log(doc.data())
			user = firebase.auth().currentUser
			document.querySelector("#modalInfo").innerHTML = editUserHTML(user, doc, isVerified())

			editForm()
			$("#authModal").modal("show");

		})




	//verify user email
	document.querySelector("#verify").addEventListener("click", (e) => {
		e.preventDefault();
		firebase
			.auth()
			.currentUser.sendEmailVerification()
			.then((e) => {
				// console.log(e, "email sent");
			});
	});
})



// edit user info when he click at the icon in the nav
function editForm() {
	var editForm = document.querySelector("#editUser-form")
	editForm.addEventListener("submit", (e) => {
		e.preventDefault();
		db.collection("users").doc(firebase.auth().currentUser.uid).update({
			//to add the values to the doc we use set()

			// name: editForm["signup-name"].value,
			phoneNumber: editForm["signup-phone"].value,
			gender: editForm.querySelector("input[name = genderToggle]:checked").value,


		})
			.then(() => {
				firebase.auth().currentUser.updateProfile({
					displayName: editForm["signup-name"].value,
				}).then(() => {
					userNav.innerHTML = firebase.auth().currentUser.displayName;
					userName.innerHTML = user.displayName;
				})
			})
			.then(() => {
				console.log("done")
				setupUI(user)

				$("#authModal").modal("hide");
				editForm.reset();
			})

	});

}


function isVerified() {
	if (firebase.auth().currentUser.emailVerified) {
		return `	<button class="btn btn-dark " disabled id="verify">verified</button>`
	}
	else {
		return `<button class="btn btn-dark "  id="verify">verify</button>`
	}

}
















