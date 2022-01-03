var navbar = document.querySelector("#navbarV");

navbar.innerHTML = `
  <div class="hide">
          <ul class="navbarV-nav ">
    
          
  
            <li class="navV-item user-item l-in l-in-i" id="userInfo">
              <a href="#" class="navV-link removeGray" >
              <span id="userIcon"><img src="icons/usermale.svg"  class="pl-3 pr-3 "></span>
              
                <span class="link-text" id="nav-user"></span>
              </a>
            </li>
  
            <li class="navV-item l-out" id="signUpBtn">
              <a href="#" class="navV-link" >
              <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fad"
              data-icon="cat"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              class="svg-inline--fa fa-cat fa-w-16 fa-9x"
            >
              <g class="fa-group">
                <path
                  fill="currentColor"
                  d="M448 96h-64l-64-64v134.4a96 96 0 0 0 192 0V32zm-72 80a16 16 0 1 1 16-16 16 16 0 0 1-16 16zm80 0a16 16 0 1 1 16-16 16 16 0 0 1-16 16zm-165.41 16a204.07 204.07 0 0 0-34.59 2.89V272l-43.15-64.73a183.93 183.93 0 0 0-44.37 26.17L192 304l-60.94-30.47L128 272v-80a96.1 96.1 0 0 0-96-96 32 32 0 0 0 0 64 32 32 0 0 1 32 32v256a64.06 64.06 0 0 0 64 64h176a16 16 0 0 0 16-16v-16a32 32 0 0 0-32-32h-32l128-96v144a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16V289.86a126.78 126.78 0 0 1-32 4.54c-61.81 0-113.52-44.05-125.41-102.4z"
                  class="fa-secondary"
                ></path>
                <path
                  fill="currentColor"
                  d="M376 144a16 16 0 1 0 16 16 16 16 0 0 0-16-16zm80 0a16 16 0 1 0 16 16 16 16 0 0 0-16-16zM131.06 273.53L192 304l-23.52-70.56a192.06 192.06 0 0 0-37.42 40.09zM256 272v-77.11a198.62 198.62 0 0 0-43.15 12.38z"
                  class="fa-primary"
                ></path>
              </g>
            </svg>
                <span class="link-text">Sign Up</span>
              </a>
            </li>
    
            <li class="navV-item l-out" id="logInBtn">
              <a href="#" class="navV-link">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fad"
                  data-icon="alien-monster"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                  class="svg-inline--fa fa-alien-monster fa-w-18 fa-9x"
                >
                  <g class="fa-group">
                    <path
                      fill="currentColor"
                      d="M560,128H528a15.99954,15.99954,0,0,0-16,16v80H480V176a15.99954,15.99954,0,0,0-16-16H416V96h48a16.00079,16.00079,0,0,0,16-16V48a15.99954,15.99954,0,0,0-16-16H432a15.99954,15.99954,0,0,0-16,16V64H368a15.99954,15.99954,0,0,0-16,16v48H224V80a15.99954,15.99954,0,0,0-16-16H160V48a15.99954,15.99954,0,0,0-16-16H112A15.99954,15.99954,0,0,0,96,48V80a16.00079,16.00079,0,0,0,16,16h48v64H112a15.99954,15.99954,0,0,0-16,16v48H64V144a15.99954,15.99954,0,0,0-16-16H16A15.99954,15.99954,0,0,0,0,144V272a16.00079,16.00079,0,0,0,16,16H64v80a16.00079,16.00079,0,0,0,16,16h48v80a16.00079,16.00079,0,0,0,16,16h96a16.00079,16.00079,0,0,0,16-16V432a15.99954,15.99954,0,0,0-16-16H192V384H384v32H336a15.99954,15.99954,0,0,0-16,16v32a16.00079,16.00079,0,0,0,16,16h96a16.00079,16.00079,0,0,0,16-16V384h48a16.00079,16.00079,0,0,0,16-16V288h48a16.00079,16.00079,0,0,0,16-16V144A15.99954,15.99954,0,0,0,560,128ZM224,320H160V224h64Zm192,0H352V224h64Z"
                      class="fa-secondary"
                    ></path>
                    <path
                      fill="currentColor"
                      d="M160,320h64V224H160Zm192-96v96h64V224Z"
                      class="fa-primary"
                    ></path>
                  </g>
                </svg>
                <span class="link-text">log in</span>
              </a>
            </li>
    
  
    
            <li class="navV-item l-in" id="newIncome">
              <a href="#" class="navV-link">
                <img src="icons/addFacility.svg" class="svg">
                <span class="link-text">new Facility</span>
              </a>
            </li>
    
    
            <li class="navV-item  l-in-i" id="editFacility">
              <a href="#" class="navV-link">
               <img src="icons/edit.svg" class="svg">
                <span class="link-text">Edit Income</span>
              </a>
            </li>
    
    
            <li class="navV-item  l-in-i" id="deleteFacility">
              <a href="#" class="navV-link">
  
                <img src="icons/delete.svg" class="svg">
                <span class="link-text">Delete Income</span>
              </a>
            </li>
    
    
            <li class="navV-item  l-in-i" id="addRenterBtn">
              <a href="#" class="navV-link">
                <img src="icons/addrenter.svg" class="svg">
                <span class="link-text">Add Renter </span>
              </a>
            </li>
    
    
            <li class="navV-item  l-in-i" id="addPaymentBtn">
              <a href="#" class="navV-link">
                <img src="icons/money.svg" class="svg">
                <span class="link-text">New Payment</span>
              </a>
            </li>
    
            <li class="navV-item mt-auto l-in l-in-i" id="logOutBtn">
              <a href="#" class="navV-link">
                <img src="icons/logout.svg" class="svg">
                <span class="link-text">log out</span>
              </a>
            </li>
  
            <li class="logo mb-0 " id="arrows">
            <a href="#" class="navV-link">
              <span class="link-text logo-text" >RENTCITY</span>
              <span>
                <svg
                id="logo1"
                aria-hidden="true"
                focusable="false"
                data-prefix="fad"
                data-icon="angle-double-right"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                class="svg-inline--fa fa-angle-double-right fa-w-14 fa-5x"
              >
              
                <g class="fa-group">
                  <path
                    fill="currentColor"
                    d="M224 273L88.37 409a23.78 23.78 0 0 1-33.8 0L32 386.36a23.94 23.94 0 0 1 0-33.89l96.13-96.37L32 159.73a23.94 23.94 0 0 1 0-33.89l22.44-22.79a23.78 23.78 0 0 1 33.8 0L223.88 239a23.94 23.94 0 0 1 .1 34z"
                    class="fa-secondary"
                  ></path>
                  <path
                    fill="currentColor"
                    d="M415.89 273L280.34 409a23.77 23.77 0 0 1-33.79 0L224 386.26a23.94 23.94 0 0 1 0-33.89L320.11 256l-96-96.47a23.94 23.94 0 0 1 0-33.89l22.52-22.59a23.77 23.77 0 0 1 33.79 0L416 239a24 24 0 0 1-.11 34z"
                    class="fa-primary"
                  ></path>
                </g>
              </svg>
              </span>
            </a>
          </li>
          
  
          
          </ul>
        </div>
  `;


var burgerbtn = document.querySelector("#showNav");
burgerbtn.addEventListener("click", (e) => {
  e.preventDefault();
  $(".hide").toggleClass("show");
  $("#backdrop").toggleClass("backdrop");
});

var closeMenu = document.querySelector("#arrows");
closeMenu.addEventListener("click", (e) => {
  e.preventDefault();
  $(".hide").toggleClass("show");
  // window.open("index.html","_self");
  window.history.back();
});
document.querySelector("#backdrop").addEventListener("click", (e) => {
  e.preventDefault();
  $(".hide").toggleClass("show");
  $("#backdrop").toggleClass("backdrop");
  $(".menu").toggleClass("opened");
});
