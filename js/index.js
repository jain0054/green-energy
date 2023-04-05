// Define the services as an object
const services = {
    1: {
        title: "Solar Energy",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.",
        image: "./img/solar.jpg" 
    },
    2: {
        title: "Hydro Energy",
        content: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia. Nam pretium turpis et arcu. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum.",
        image: "./img/hydro.jpg" 
    },
    3: {
        title: "Geothermal Energy",
        content: "Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Maecenas malesuada. Praesent congue erat at massa. Sed cursus turpis vitae tortor. Donec posuere vulputate arcu.",
        image: "./img/geo.jpg" 
    }
  };
    // Get the buttons and content
    const btn = document.querySelectorAll(".manipulation button");
    const content = document.querySelector(".post");
    
    // Loop through the buttons and add a click event listener
    btn.forEach(function(button) {
      button.addEventListener("click", function() {
          // Remove the active class from all buttons
          btn.forEach(function(btn) {
              btn.classList.remove("active-button");
          });
          // Add the active class to the clicked button
          button.classList.add("active-button");
          // Get the ID of the clicked button
  const id = button.getAttribute("id").slice(-1);
  // Get the service from the services object
  const service = services[id];
  // Update the content
  // content.innerHTML = `<h2>${service.title}</h2><p>${service.content}</p><img src="${service.image}" alt="${service.title} Image">`;
  content.innerHTML = `
  <h1>${service.title}</h1>
  <img src="${service.image}" alt="${service.title} Image">
  <p>${service.content}</p>`;
  
      });
    });
  
  // Set the first button to active by default
  btn[0].classList.add("active-button");
  
  // Responsive design
  const mediaQuery = window.matchMedia('(min-width: 30rem)');
  const wrapper = document.querySelector('.wrapper');
  const landing = document.querySelector('.landing');
  
  function handleMediaQuery(mediaQuery) {
  if (mediaQuery.matches) {
    wrapper.style.fontSize = '1.2rem';
    landing.style.height = '50vh';
  } else {
    wrapper.style.fontSize = '1rem';
    landing.style.height = '30rem';
  }
  }
  
  handleMediaQuery(mediaQuery);
  mediaQuery.addListener(handleMediaQuery);
  
  
  
