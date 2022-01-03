function displayInfoCardsBuilding(doc) {
	const cards = document.querySelector("#cards");
	cards.innerHTML = `
	<div class="col-sm-12 col-md-4 py-3">
		<div class="card" >
			<div class="card-body">
					<h5 class="card-title title pt-1" id="card-title" >${doc.data().currentlyRented}/${doc.data().totalPeople
		}</h5>
					<p class="subtitle">Rented Apt.</p>
					
					<h5 class="card-title title pt-3" id="card-title" >${(
			parseInt(doc.data().amountMonth) * doc.data().currentlyRented
		).toLocaleString()} ${doc.data().currency}</h5>
					<p class="subtitle">Total to be paid</p>
					
					<h5 class="card-title title pt-3" id="card-title" >${parseInt(doc.data().amountMonth).toLocaleString()} ${doc.data().currency
		}</h5>
					<p class="subtitle">Rent </p>
				
			</div>
		</div>
	</div> 
	<div class="col-sm-12 col-md-4 py-3">
		<div class="card" >
			<div class="card-body">
					<h5 class="card-title title pt-1" id="card-title" >${doc.data().currentlyRented}/${doc.data().totalPeople
		}</h5>
					<p class="subtitle">Rented Apt.</p>
					
					<h5 class="card-title title pt-3" id="card-title" >${(
			parseInt(doc.data().amountMonth) * doc.data().currentlyRented
		).toLocaleString()} ${doc.data().currency}</h5>
					<p class="subtitle">Total to be paid</p>
					
					<h5 class="card-title title pt-3" id="card-title" >${parseInt(doc.data().amountMonth).toLocaleString()} ${doc.data().currency
		}</h5>
					<p class="subtitle">Rent </p>
				
			</div>
		</div>
	</div> 
	<div class="col-sm-12 col-md-4 py-3">
		<div class="card pb-1" >
			<div class="card-body">
				    <form id="notesForm">
                        <h5 class="card-title title pt-1" id="card-title" >Notes:</h5>
                        <textarea  value="${doc.data().notes
		}"  class="form-control" id="income-notes" rows="8" style="background-color: transparent;color:#B7BBD9 " ></textarea>

                        <div class="collapse" id="notesBtn">
                        
                            <button class="btn btn-primary ml-auto mt-3" id="notes-submit" >Save</button>
                    
                        </div>



					</form>	
			</div>
		</div>
	</div>
	
	 `;
}
function displayInfoCardsHouse(doc) {
	const cards = document.querySelector("#cards");
	cards.innerHTML = `
	<div class="col-sm-12 col-md-4 py-3">
		<div class="card" >
			<div class="card-body">
					<h5 class="card-title title pt-1" id="card-title" >${doc.data().facilityName}</h5>
					<p class="subtitle">house's name</p>
					
					<h5 class="card-title title pt-2" id="card-title" >${Number.parseFloat(doc.data().rentAmount).toFixed(2)} ${doc.data().currency
		}</h5>
					<p class="subtitle">Monthly Rent</p>
					
					<h5 class="card-title title pt-2" id="card-title" >${doc.data().availability}</h5>
					<p class="subtitle">Available for rent </p>
				
			</div>
		</div>
	</div> 
	<div class="col-sm-12 col-md-4 py-3">
		<div class="card" >
			<div class="card-body">
					<h5 class="card-title title pt-1" id="card-title" >${doc.data().streetNumber}
		</h5>
					<p class="subtitle">Street number</p>
					
					<h5 class="card-title title pt-2" id="card-title" >${doc.data().zipCode}
						</h5>
					<p class="subtitle">Zip Code</p>
					
					<h5 class="card-title title pt-2" id="card-title" >${doc.data().rooms} 
	</h5>
					<p class="subtitle">Number of Rooms </p>
				
			</div>
		</div>
	</div> 
	<div class="col-sm-12 col-md-4 py-3">
		<div class="card pb-1" >
			<div class="card-body">
				    <form id="notesForm">
                        <h5 class="card-title title pt-2" id="card-title" >Notes:</h5>
                        <textarea  value="${doc.data().notes
		}"  class="form-control pb-3" id="income-notes" rows="7" style="background-color: transparent;color:#B7BBD9 " ></textarea>

                        <div class="collapse" id="notesBtn">
                        
                            <button class="btn btn-primary ml-auto mt-3" id="notes-submit" >Save</button>
                    
                        </div>



					</form>	
			</div>
		</div>
	</div> 
	 `;
}
function displayInfoCardsWarehouse(doc) {
	const cards = document.querySelector("#cards");
	cards.innerHTML = `
	<div class="col-sm-12 col-md-4 py-3">
		<div class="card" >
			<div class="card-body">
					<h5 class="card-title title pt-1" id="card-title" >${doc.data().facilityName}</h5>
					<p class="subtitle">warehouse's name</p>
					
					<h5 class="card-title title pt-2" id="card-title" >${Number.parseFloat(doc.data().rentAmount).toFixed(2)} ${doc.data().currency
		}</h5>
					<p class="subtitle">Monthly Rent</p>
					
					<h5 class="card-title title pt-2" id="card-title" >${doc.data().availability}</h5>
					<p class="subtitle">Available for rent </p>
				
			</div>
		</div>
	</div> 
	<div class="col-sm-12 col-md-4 py-3">
		<div class="card" >
			<div class="card-body">
					<h5 class="card-title title pt-1" id="card-title" >${doc.data().streetNumber}
		</h5>
					<p class="subtitle">Street number</p>
					
					<h5 class="card-title title pt-2" id="card-title" >${doc.data().zipCode}
						</h5>
					<p class="subtitle">Zip Code</p>
					
					<h5 class="card-title title pt-2" id="card-title" >${doc.data().rooms} 
	</h5>
					<p class="subtitle">Number of Rooms </p>
				
			</div>
		</div>
	</div> 
	<div class="col-sm-12 col-md-4 py-3">
		<div class="card pb-1" >
			<div class="card-body">
				    <form id="notesForm">
                        <h5 class="card-title title pt-2" id="card-title" >Notes:</h5>
                        <textarea  value="${doc.data().notes
		}"  class="form-control pb-3" id="income-notes" rows="7" style="background-color: transparent;color:#B7BBD9 " ></textarea>

                        <div class="collapse" id="notesBtn">
                        
                            <button class="btn btn-primary ml-auto mt-3" id="notes-submit" >Save</button>
                    
                        </div>



					</form>	
			</div>
		</div>
	</div> 
	 `;
}

function WriteRenterForm(
	personName,
	gender,
	personPhoneNumber,
	apt,
	email,
	dateOfEntry,
	paymentAmount,
	currency,
	notes
) {
	personName = personName || "";
	paymentAmount = paymentAmount || "";
	personPhoneNumber = personPhoneNumber || "";
	gender = gender || "";
	apt = apt || "";
	email = email || "";
	dateOfEntry = dateOfEntry || "";
	notes = notes || "";
	currency = currency || "";

	html =
		`
	<form id="renter-form">

	<div class="form-group">
	    <label for="renter-name">Name</label>
	    <input type="text" class="form-control" id="renter-name" value="${personName}" required/>
	</div>
` +
		genderSelected(gender) +
		`

	<div class="form-group">
	    <label for="renter-phone">Phone number</label>
	    <input type="tel" class="form-control" id="renter-phone" value="${personPhoneNumber}"/>
	</div>

	<div class="form-group">
	    <label for="renter-apt">Apt. number</label>
	    <input type="tel" class="form-control" id="renter-apt" value="${apt}"/>
	</div>


	<div class="form-group">
	    <label for="renter-email">Email</label>
	    <input type="email" class="form-control" id="renter-email" value="${email}"/>
	</div>
	<div class="form-group">
	    <label for="renter-dateOfEntry">Date Of Entry</label>
	    <input type="date" class="form-control" id="renter-dateOfEntry" value="${dateOfEntry}"/>
	</div>
`
		+ currencySelector(currency, paymentAmount) +
		`

	<div class="form-group">
	    <label for="renter-notes">Notes</label>
	    <textarea class="form-control" id="renter-notes" >${notes}</textarea>

	</div>


	<div class="modal-footer">
	    <button id="sendbtn" class="btn  btn-primary">SAVE</button>
	    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>

	</div>

  </form>
	`;
	return html;
}

function renderPeople(doc) {
	html = `
        <div class="col-sm-6 p-3">
          <div class="card p-1 p-md-3" >
            <div class="card-body" renter-id="${doc.id}">
            
            <div class="row align-middle">
              <img src="icons/user${doc.data().genderSelected}.svg" alt="user icon">
             <span class="align-middle"> <h3 class="card-title pl-3 " id="card-title"  >${doc.data().personName
		}</h3></span>
          
                      
             <div class=" ml-auto">
             <a href="#" data-id="editRenter" class="btn  renterIcons  " ><img class="" src="icons/edit.svg" height="20"></a>
             <a href="#" data-id="deleteRenter" class="btn  renterIcons " ><img class="" src="icons/delete.svg" height="20"></a>
             </div>

            </div>
        
            </div>
          </div>
        </div>
 `;
	return html;
}

function facilityTypeForm() {
	return `
      <form id="income-form-type">

      <div class="form-inline text-center">
      <div class="custom-control custom-radio pr-3">
        <input
          type="radio"
          id="buildingToggle"
          name="fType"
          class="custom-control-input"
          value="building"
          checked
        />
        <label class="custom-control-label" for="buildingToggle">Building </label>
      </div>
    
      <div class="custom-control custom-radio pr-3">
        <input
          type="radio"
          id="HouseToggle"
          name="fType"
          class="custom-control-input"
          value="house"
        />
        <label class="custom-control-label" for="HouseToggle">House </label>
      </div>
    
      <div class="custom-control custom-radio pr-3">
        <input
          type="radio"
          id="wareHouseToggle"
          name="fType"
          class="custom-control-input"
          value="warehouse"
        />
        <label class="custom-control-label" for="wareHouseToggle">warehouse </label>
      </div>
    
    
    </div>
      <div class="modal-footer">
          <button id="nextBtn" class="btn btn-primary">Next</button>
          <button type="button" class="btn btn-secondary" data-dismiss="modal">
            Close
          </button>
        </div>
      </form>
      `;
}

function buildingForm(previousFacilityInfo) {
	previousFacilityInfo.facilityName = previousFacilityInfo.facilityName || "";
	previousFacilityInfo.facilityLocation = previousFacilityInfo.facilityLocation || "";
	previousFacilityInfo.amountMonth = previousFacilityInfo.amountMonth || "";
	previousFacilityInfo.currency = previousFacilityInfo.currency || "";
	previousFacilityInfo.totalPeople = previousFacilityInfo.totalPeople || "";
	previousFacilityInfo.notes = previousFacilityInfo.notes || "";
	// $("#income-currency").val(previousFacilityInfo.currency);

	formHtml =
		`
       
    
        <div class="form-group">
          <label for="income-name">Building Name*</label>
          <input type="text" class="form-control" value="${previousFacilityInfo.facilityName}" id="income-name" required />
        </div>
        <div class="form-group">
          <label for="income-location">location</label>
          <input type="text" class="form-control" value="${previousFacilityInfo.facilityLocation}"  id="income-location" />
        </div>
    
        <div class="form-group">
          <label for="income-number">Number of Apartments*</label>
          <input type="tel    " class="form-control" value="${previousFacilityInfo.totalPeople}" id="income-number" required />
        </div>

	

    ` +
		currencySelector(previousFacilityInfo.currency, previousFacilityInfo.amountMonth) +
		`
		

    
		
    
        <div class="form-group">
          <label for="income-notes">Notes</label>
          <textarea class="form-control" id="income-notes">${previousFacilityInfo.notes}</textarea>
        </div>
    
        <div class="modal-footer">
          <button id="sendbtn" class="btn btn-primary">SAVE</button>
          <button type="button" class="btn btn-secondary" data-dismiss="modal">
            Close
          </button>
        </div>
      
    
      `;
	return formHtml;
}

function houseForm(previousFacilityInfo) {
	previousFacilityInfo.facilityName = previousFacilityInfo.facilityName || "";
	previousFacilityInfo.facilityLocation = previousFacilityInfo.facilityLocation || "";
	previousFacilityInfo.zipCode = previousFacilityInfo.zipCode || "";
	previousFacilityInfo.renterName = previousFacilityInfo.renterName || "";
	previousFacilityInfo.rentAmount = previousFacilityInfo.rentAmount || "";
	previousFacilityInfo.streetNumber = previousFacilityInfo.streetNumber || "";
	previousFacilityInfo.currency = previousFacilityInfo.currency || "";
	previousFacilityInfo.rooms = previousFacilityInfo.rooms || "";
	previousFacilityInfo.availability = previousFacilityInfo.availability || "";

	previousFacilityInfo.notes = previousFacilityInfo.notes || "";

	return (
		`
       
    
        <div class="form-group">
          <label for="income-name">House Name*</label>
          <input type="text" class="form-control" id="income-name" value="${previousFacilityInfo.facilityName}" required />
        </div>
        <div class="form-group">
          <label for="income-location">Address*</label>
          <input type="text" class="form-control" id="income-location" value="${previousFacilityInfo.facilityLocation}" required/>
        </div>
          <div class="form-group">
          <label for="income-street-number">Street </label>
          <input type="text" class="form-control" id="income-street-number" value="${previousFacilityInfo.streetNumber}" />
        </div>
        <div class="form-group">
          <label for="income-zip">House Zip code</label>
          <input type="tel" class="form-control" id="income-zip"  value="${previousFacilityInfo.zipCode}"/>
        </div>
        <div class="form-group">
          <label for="income-rooms">Number of rooms</label>
          <input type="tel" class="form-control" id="income-rooms"  value="${previousFacilityInfo.rooms}"/>
        </div>
    
		<label for="availableToggle">is it available</label>
` +
		IsAvailable(previousFacilityInfo.availability) +
		`


   
    
        ` +
		currencySelector(previousFacilityInfo.currency, previousFacilityInfo.rentAmount) +
		`
    
    

        <div class="form-group">
          <label for="income-notes">Notes</label>
          <textarea class="form-control" id="income-notes"></textarea>
        </div>
    
        <div class="modal-footer">
          <button id="sendbtn" class="btn btn-primary">SAVE</button>
          <button type="button" class="btn btn-secondary" data-dismiss="modal">
            Close
          </button>
        </div>
     
      `
	);
}
function warehouseForm(previousFacilityInfo) {
	previousFacilityInfo.facilityName = previousFacilityInfo.facilityName || "";
	previousFacilityInfo.facilityLocation = previousFacilityInfo.facilityLocation || "";
	previousFacilityInfo.zipCode = previousFacilityInfo.zipCode || "";
	previousFacilityInfo.renterName = previousFacilityInfo.renterName || "";
	previousFacilityInfo.rentAmount = previousFacilityInfo.rentAmount || "";
	previousFacilityInfo.streetNumber = previousFacilityInfo.streetNumber || "";
	previousFacilityInfo.currency = previousFacilityInfo.currency || "";
	previousFacilityInfo.rooms = previousFacilityInfo.rooms || "";
	previousFacilityInfo.availability = previousFacilityInfo.availability || "";

	previousFacilityInfo.notes = previousFacilityInfo.notes || "";

	return (
		`
    
        <div class="form-group">
          <label for="income-name">House Name*</label>
          <input type="text" class="form-control" id="income-name" value="${previousFacilityInfo.facilityName}" required />
        </div>
        <div class="form-group">
          <label for="income-location">Address*</label>
          <input type="text" class="form-control" id="income-location" value="${previousFacilityInfo.facilityLocation}" required/>
        </div>
          <div class="form-group">
          <label for="income-street-number">Street </label>
          <input type="text" class="form-control" id="income-street-number" value="${previousFacilityInfo.streetNumber}" />
        </div>
        <div class="form-group">
          <label for="income-zip">House Zip code</label>
          <input type="tel" class="form-control" id="income-zip"  value="${previousFacilityInfo.zipCode}"/>
        </div>
        <div class="form-group">
          <label for="income-rooms">Number of rooms</label>
          <input type="tel" class="form-control" id="income-rooms"  value="${previousFacilityInfo.rooms}"/>
        </div>
    
		<label for="availableToggle">is it available</label>
` +
		IsAvailable(previousFacilityInfo.availability) +
		`

    
        ` +
		currencySelector(previousFacilityInfo.currency, previousFacilityInfo.rentAmount) +
		` 

        <div class="form-group">
          <label for="income-notes">Notes</label>
          <textarea class="form-control" id="income-notes"></textarea>
        </div>
    
        <div class="modal-footer">
          <button id="sendbtn" class="btn btn-primary">SAVE</button>
          <button type="button" class="btn btn-secondary" data-dismiss="modal">
            Close
          </button>
        </div>
     
      `
	);
}

function currencySelector(currency, amount) {
	currency = currency || "$";
	cc = ["$", "LBP", "R$", "€"];
	checked = ["", "", "", ""];

	var x = cc.indexOf(`` + currency);
	checked[x] = "selected";
	return `
	<div class="form-row">
        <div  class="col-9 ">
			<label for="income-amount">Monthly Rent*</label>
          	<input type="tel" class="form-control" id="income-amount" value="${amount}" required />
		</div>
		
		  <div class="col-3 ">
		  <label class="" for="income-currency">Currency</label>
		  <select class="custom-select mr-sm-2" id="income-currency" >
			  <option value="$" ${checked[0]}>$</option>
			  <option value="LBP" ${checked[1]}>LBP</option>
			  <option value="R$" ${checked[2]}>R$</option>
			  <option value="€" ${checked[3]}>€</option>
		  </select>
	  	</div>
	</div>
	`;
}
function genderSelected(gender) {
	// console.log(gender);
	gender = gender || "male";
	cc = ["male", "female"];
	checked = ["", ""];

	var x = cc.indexOf(`` + gender);
	checked[x] = "checked='true'";

	html = `
    <div  class="form-row" >
          <div class="custom-control custom-radio pr-3">
            <input
              type="radio"
              id="maleToggle"
              name="genderToggle"
              class="custom-control-input"
              value="male"
              ${checked[0]}

            />
            <label class="custom-control-label" for="maleToggle">male</label>
          </div>
    
          <div class="custom-control custom-radio pr-3">
            <input
              type="radio"
              id="femaleToggle"
              name="genderToggle"
              class="custom-control-input"
              value="female"
              ${checked[1]}
            />
            <label class="custom-control-label" for="femaleToggle">female </label>
          </div>
        </div>
    `;

	return html;
}

function IsAvailable(available) {
	available = available || "no";
	cc = ["yes", "no"];
	checked = ["", ""];

	var x = cc.indexOf(`` + available);
	checked[x] = "checked";
	return `
    <div  class="form-row pl-1" >
          <div class="custom-control custom-radio pr-3">
            <input
              type="radio"
              id="yesToggle"
              name="availableToggle"
              class="custom-control-input"
              value="yes"
              ${checked[0]}

            />
            <label class="custom-control-label" for="yesToggle">yes</label>
          </div>
    
          <div class="custom-control custom-radio pr-3">
            <input
              type="radio"
              id="noToggle"
              name="availableToggle"
              class="custom-control-input"
              value="no"
              ${checked[1]}
            />
            <label class="custom-control-label" for="noToggle">no </label>
          </div>

    </div>
    `;
}

// function displaySpinner(id) {
// 	const cards = document.querySelector(`#${id} `);
// 	cards.innerHTML = `
//     <div  class="text-center mx-auto" >
//       <div class="spinner-border text-white " role="status">
//         <span class="sr-only">Loading...</span>
//       </div>
//       </div >
//     `;
// }

function ShowSpinner() {
	const modalContent = document.querySelector("#modalInfo");
	modalContent.innerHTML = `
    <div  class="text-center m-5" >
      <div class="spinner-border text-white " role="status">
        <span class="sr-only">Loading...</span>
      </div>
        </div >
    `;
}

function displaySignUpForm() {
	document.querySelector("#modalTitle").innerHTML = `Signing Up`;
	document.querySelector("#modalInfo").innerHTML =
		`
    <form id="signup-form">
            <div class="form-group">
                <label for="signup-email">Email address</label>
                <input type="email" class="form-control" id="signup-email" required />
            </div>
          
            <div class="form-group">
                <label for="signup-password">Choose password</label>
                <input type="password" class="form-control" id="signup-password" required />
            </div>
            
            <div class="form-group">
                <label for="signup-name">Name</label>
                <input type="text" class="form-control" id="signup-name" required />
            </div>
            
            <div class="form-group">
                <label for="signup-name">Phone Number</label>
                <input type="phone" class="form-control" id="signup-phone"  />
            </div>
  ` +
		genderSelected() +
		`
			<div class="modal-footer " >
			<div id="row" class="mx-auto">
				<button class="btn px-5 btn-primary">Sign up</button>
			</div>
            </div >
        </form >
    `;

	$("#authModal").modal("show");
}

function displaySignInform() {
	document.querySelector("#modalTitle").innerHTML = `Log In!`;
	document.querySelector("#modalInfo").innerHTML = `

    <form  id = "login-form" >
        <div class="form-group">
          <label for="login-email">Email address</label>
          <input type="email" class="form-control" id="login-email" required />
        </div>
    
        <div class="form-group">
          <label for="login-password">Your password</label>
          <input type="password" class="form-control" id="login-password" required />
        </div>
    
        <div class="modal-footer ">
          <div id="row" class="mx-auto">
            <button class="btn px-5 btn-primary ">Log In</button>
          </div>
        </div>
      </form >

    `;
	$("#authModal").modal("show");
}

function WriteSuccessMessage(message, modalHeader) {
	document.querySelector("#modalTitle").innerHTML = `${modalHeader}`;

	const modalContent = document.querySelector("#modalInfo");
	modalContent.innerHTML = `
    
      <div class="modal-body ">
      <div class="row align-middle">
    
        <div class="row ">
         <p style="font-size: 1.3em;" class="pl-2 p-xs-0">
         <span class="bi bi-check2-circle text-success ">
       
        <svg width="1.5em" height="1.5em" viewBox="0 0 16 16"  fill="green" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M15.354 2.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L8 9.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
        <path fill-rule="evenodd" d="M8 2.5A5.5 5.5 0 1 0 13.5 8a.5.5 0 0 1 1 0 6.5 6.5 0 1 1-3.25-5.63.5.5 0 1 1-.5.865A5.472 5.472 0 0 0 8 2.5z"/>
        </svg>
        
         
         </span> ${message} Successfully.</p>
         </div>
      </div>
    
    
    
    
      
    
            `;
	$("#authModal").modal("show");
}

function WriteErrorMessage(err) {
	const modalTitle = document.querySelector("#modalTitle");
	modalTitle.innerHTML = `Error !`;

	const modalContent = document.querySelector("#modalInfo");
	modalContent.innerHTML = `
    
           <div class="modal-body ">
           <div class="row align-middle">
                    
                <p style="font-size: 1.5em;">
                <span > 
                <script src="https://cdn.lordicon.com/libs/mssddfmo/lord-icon-2.1.0.js"></script>
                <lord-icon
                src="https://cdn.lordicon.com/tdrtiskw.json"
                trigger="loop"
                colors="primary:#ffffff,secondary:#e83a30"
                stroke="71"
                
                style="width:45px;height:45px">
            </lord-icon>
                </span> ${err.message}</p>
           </div>
     
    
           `;
	$("#authModal").modal("show");
}

function renderAllIncomeCards(doc) {
	if (doc) {
		const cards = document.querySelector("#cards");
		// console.log(doc.data().type);

		var html = "";
		if (doc.data().type == "building") {
			html += `
			      <div  class="col-sm-6 pt-3 px-0 p-md-3" >
			        <div class="card" data-id="${doc.id}">

			          <div class="card-body">
			            <h5 class="card-title title pt-1" id="card-title" >${doc.data().facilityName
				} <span class="title card-price pr-3">
			              <img src="icons/${doc.data().type}.svg" alt="icon type">
			            </span></h5>
			            <p class="subtitle">${doc.data().facilityLocation}</p>

			            <h5 class="card-title title pt-3" id="card-title" >${doc.data().currentlyRented}/${doc.data().totalPeople
				} <span class=" card-price pr-3">${(
					parseInt(doc.data().amountMonth) * parseInt(doc.data().currentlyRented)
				).toLocaleString()}${doc.data().currency}</span></h5>
			            <p class="subtitle">apt. Rented</p>

			          </div>
			        </div>
			          </div >
			  `;
		} else if (doc.data().type == "house") {
			html += `
    <div  class="col-sm-6 pt-3 px-0 p-md-3" >
    	<div class="card" data-id="${doc.id}">
  
        	<div class="card-body">
            <h5 class="card-title title pt-1" id="card-title" >${doc.data().facilityName}
				<span class="title card-price pr-3">
              		<img src="icons/${doc.data().type}.svg" alt="icon type">
            	</span>
			</h5>
            <p class="subtitle">${doc.data().facilityLocation}</p>
  
            <h5 class="card-title title pt-3" id="card-title" >${doc.data().availability
				} <span class=" card-price pr-3">${parseInt(parseInt(doc.data().rentAmount))} ${doc.data().currency
				}</span></h5>
            <p class="subtitle">Available</p
  
  
  
        	</div>
        </div>
    </div >
  `;
		} else if (doc.data().type == "warehouse") {
			// console.log("oi");
			html += `
		    <div  class="col-sm-6 pt-3 px-0 p-md-3" >
		      <div class="card" data-id="${doc.id}">

		        <div class="card-body">
		          <h5 class="card-title title pt-1" id="card-title" >${doc.data().facilityName
				} <span class="title card-price pr-3">
		            <img src="icons/${doc.data().type}.svg" alt="icon type">
		          </span></h5>
		          <p class="subtitle">${doc.data().facilityLocation}</p>

		          <h5 class="card-title title pt-3" id="card-title" >${doc.data().availability
				} <span class=" card-price pr-3">${parseInt(parseInt(doc.data().rentAmount))} ${doc.data().currency
				}</span></h5>
		          <p class="subtitle">Available</p

		        </div>
		      </div>
		        </div >
		`;
		}
	}

	cards.innerHTML += html;
}

function displayNewIncomeForm() {
	$("#authModal").modal("show");
	const modalTitle = document.querySelector("#modalTitle");
	modalTitle.innerHTML = `Add a New Income to your list`;

	const modalContent = document.querySelector("#modalInfo");
	var buildingType = facilityTypeForm();

	modalContent.innerHTML = buildingType;

	const typeForm = document.querySelector("#income-form-type");
	typeForm.addEventListener("submit", (e) => {
		e.preventDefault();
		var typeSelected = document.querySelector("input[name = fType]:checked").value;

		// old name
		// customFields(typeSelected)
		typeForm.reset();
		showCustomForm(
			typeSelected,
			{
				name: "",
				location: "",
				amountMonth: "",
				renterName: "",
				rentAmount: "",
				personPhoneNumber: "",
				currency: "",
				type: "",
				totalPeople: "",
				currentlyRented: "",
				notes: "",
				entryDate: "",
				exitDate: "",
			},
			"add"
		);
	});
}

function showCustomForm(
	typeSelected,
	previousFacilityInfo = {
		facilityName: "",
		facilityLocation: "",
		amountMonth: "",
		renterName: "",
		rentAmount: "",
		personPhoneNumber: "",
		currency: "",
		available: "",
		type: "",
		totalPeople: "",
		currentlyRented: "",
		notes: "",
		entryDate: "",
		exitDate: "",
	},
	whatToDo
) {
	console.log("type slected", typeSelected, "pervious info", previousFacilityInfo);

	const modalTitle = document.querySelector("#modalTitle");
	modalTitle.innerHTML = `tell us about your ${typeSelected} `;

	var formContent = `<form form id = "income-form" > `;

	const modalContent = document.querySelector("#modalInfo");
	console.log("pervious info", previousFacilityInfo);
	if (typeSelected == "building") {
		formContent += buildingForm(previousFacilityInfo);
	} else if (typeSelected == "house") {
		formContent += houseForm(previousFacilityInfo);
	} else if (typeSelected == "warehouse") {
		formContent += warehouseForm(previousFacilityInfo);
	}

	formContent += `</form > `;
	modalContent.innerHTML = formContent;

	// turn back on
	uploadData(typeSelected, whatToDo);
}

function getMonthName(i) {
	var month = new Array();
	month[0] = "Jan";
	month[1] = "Feb";
	month[2] = "Mar";
	month[3] = "Apr";
	month[4] = "May";
	month[5] = "Jun";
	month[6] = "Jul";
	month[7] = "Aug";
	month[8] = "Sep";
	month[9] = "Oct";
	month[10] = "Nov";
	month[11] = "Dec";
	return (n = month[i]);
}

function uploadData(typeSelected, whatToDo) {
	const form = document.querySelector("#income-form");
	form.reset();
	form.addEventListener("submit", (e) => {
		e.preventDefault();
		ShowSpinner();
		console.log(form);
		console.log(typeSelected, "from data");
		// const curSelected = document.querySelector("input[name = currencyToggle]:checked").value;
		let income = {};

		var entryDate;

		if (typeSelected == "building") {
			income = {
				facilityName: form["income-name"].value,
				facilityLocation: form["income-location"].value,
				amountMonth: form["income-amount"].value,
				currency: form["income-currency"].value,
				type: typeSelected,
				totalPeople: form["income-number"].value,
				currentlyRented: 0,
				notes: form["income-notes"].value,
				createdAt: firebase.firestore.FieldValue.serverTimestamp(),
			};
		} else if (typeSelected == "house") {
			// console.log(available);
			income = {
				facilityName: form["income-name"].value,
				facilityLocation: form["income-location"].value,
				rentAmount: form["income-amount"].value,
				streetNumber: form["income-street-number"].value,
				currency: form["income-currency"].value,
				availability: form["availableToggle"].value,
				zipCode: form["income-zip"].value,
				rooms: form["income-rooms"].value,
				// available: document.querySelector('input[name="genderToggle"]:checked').value,
				type: typeSelected,
				notes: form["income-notes"].value,
				createdAt: firebase.firestore.FieldValue.serverTimestamp(),
			};
		} else if (typeSelected == "warehouse") {
			//add other things later
			income = {
				facilityName: form["income-name"].value,
				facilityLocation: form["income-location"].value,
				rentAmount: form["income-amount"].value,
				streetNumber: form["income-street-number"].value,
				currency: form["income-currency"].value,
				availability: form["availableToggle"].value,
				zipCode: form["income-zip"].value,
				rooms: form["income-rooms"].value,
				type: typeSelected,
				notes: form["income-notes"].value,
				createdAt: firebase.firestore.FieldValue.serverTimestamp(),
			};
		}

		if (whatToDo == "add") {
			addIncomeToDb(income);
		} else if (whatToDo == "modify") {
			sendEditedDataDb(income);
		}
	});
}

function writeFooter() {
	return `

	<div class="form-group">
		<label for="renter-notes">Notes</label>
		<textarea class="form-control" id="renter-notes"></textarea>

	</div>

	<div class="modal-footer">
		<button id="sendbtn" class="btn  btn-primary">SAVE</button>
		<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
	</div>

</form>
`;
}

function homepageInfo() { }


function editUserHTML(user, doc, verified) {
	return `
	<form id="editUser-form">
			<div class="form-group">
				<div class="row">
					<div class="col-9">
						<label for="signup-email">Email address</label>
						<input type="email" class="form-control" id="signup-email" disabled value="${user.email}" required />
					</div>
					<div class="col-2 mt-auto">
						${verified}
					</div>
				</div>

			</div>
		  
		
			
			<div class="form-group">
				<label for="signup-name">Name</label>
				<input type="text" class="form-control" id="signup-name" required value="${user.displayName}" />
			</div>
			
			<div class="form-group">
				<label for="signup-name">Phone Number</label>
				<input type="phone" class="form-control" id="signup-phone" value="${doc.data().phoneNumber}" />
			</div>
  ` +
		genderSelected(doc.data().gender) +
		`
			<div class="modal-footer " >
			<div id="row" class="mx-auto">
				<button class="btn px-5 btn-primary">Save</button>
			</div>
			</div >
		</form >
	`;
}