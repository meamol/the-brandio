
/* -------------------------------
	Mobile Menu Toggle
------------------------------- */

	const menuBtn = document.querySelector('.menu-toggle');
	const nav = document.querySelector('.nav');

	menuBtn.addEventListener('click', () => {
	  nav.classList.toggle('open');
	  menuBtn.classList.toggle('active');
	});


/* -------------------------------
	Menu Active
------------------------------- */

	const navLinks = document.querySelectorAll('.nav-list a');

	navLinks.forEach(link => {
	  link.addEventListener('click', () => {
	    navLinks.forEach(l => l.classList.remove('active'));
	    link.classList.add('active');
	  });
	});


/* -------------------------------
	Header Animation
------------------------------- */

	gsap.registerPlugin(ScrollTrigger);


	gsap.from('.logo', {
	  y: -40,
	  opacity: 0,
	  duration: 0.8
	});

	gsap.from('.nav-list li', {
	  y: -20,
	  opacity: 0,
	  stagger: 0.1,
	  duration: 0.6,
	  delay: 0.4
	});


/* -------------------------------
	Sticky Header
------------------------------- */

	gsap.to(".site-header", {
	  	padding: "2px 2px",
	  	boxShadow: "0 8px 30px rgba(0,0,0,0.08)",
	  	duration: 0.3,
	  	scrollTrigger: {
	    trigger: "body",
	    start: "top -80",
	    toggleActions: "play reverse play reverse"
  		}
	});


/* -------------------------------
	Slider
------------------------------- */

	/* 1. All slides select */
	const slides = document.querySelectorAll(".slide");

	/* 2. First slide index */
	let currentSlide = 0;

	/* 3. Slide function */
	function showSlide(index) {

	  // All slides hide 
	  slides.forEach(slide => {
	    slide.classList.remove("active");
	  });

	  // Current slide show
	  const activeSlide = slides[index];
	  activeSlide.classList.add("active");

	  // Text elements select 
	  const text = activeSlide.querySelectorAll(".content > *");

	  // Can image select 
	  const image = activeSlide.querySelector("img");

	  // Text animation (left → center)
	  gsap.fromTo(
	    text,
	    { x: -30, opacity: 0 },
	    { x: 0, opacity: 1, duration: 0.6, stagger: 0.15 }
	  );

	  // Image animation (right → center)
	  gsap.fromTo(
	    image,
	    { x: 100, opacity: 0, scale: 0.95 },
	    { x: 0, opacity: 1, scale: 1, duration: 0.8 }
	  );
	}

	/* 4. Auto slider (every 5 seconds) */
	setInterval(() => {
	  currentSlide++;

	  if (currentSlide >= slides.length) {
	    currentSlide = 0;
	  }

	  showSlide(currentSlide);
	}, 5000);

	/* 5. Floating can animation */
	gsap.to(".visual img", {
	  y: -28,
	  duration: 2.5,
	  repeat: -1,
	  yoyo: true,
	  ease: "sine.inOut"
	});

	/* 6. First slide load */
	showSlide(currentSlide);


/* -------------------------------
	About us
------------------------------- */

	gsap.from(".about-content > *", {
	  scrollTrigger: ".about-row",
	  y: 30,
	  opacity: 0,
	  stagger: 0.15,
	  duration: 0.8
	});

	gsap.from(".about-image img", {
	  scrollTrigger: ".about-row",
	  y: 40,
	  opacity: 0,
	  duration: 1
	});


/* -------------------------------
	Products
------------------------------- */

	gsap.from(".product-card", {
	  scrollTrigger: ".product-row",
	  y: 40,
	  opacity: 0,
	  duration: 0.8,
	  stagger: 0.25,
	  ease: "power2.out"
	});


/* -------------------------------
	Flavors
------------------------------- */

	gsap.from(".flavor-card", {
	  scrollTrigger: ".flavor-row",
	  y: 40,
	  opacity: 0,
	  duration: 0.8,
	  stagger: 0.25,
	  ease: "power2.out"
	});
	

/* -------------------------------
	Gallery
------------------------------- */

	const items = document.querySelectorAll(".gallery-item");
	const moreBtn = document.getElementById("loadMore");
	const lessBtn = document.getElementById("loadLess");

	let visible = 3;
	update();

	moreBtn.onclick = () => { visible += 3; update(); };
	lessBtn.onclick = () => { visible = 3; update(); };

	function update() {
	  items.forEach((item, i) => {
	    item.classList.toggle("show", i < visible);
	  });

	  gsap.from(".gallery-item.show", {
	    opacity: 0,
	    y: 25,
	    stagger: 0.1,
	    duration: 0.5
	  });

	  moreBtn.style.display = visible >= items.length ? "none" : "inline-block";
	  lessBtn.style.display = visible > 3 ? "inline-block" : "none";
	}

	/* Fancybox safe init */
	Fancybox.bind("[data-fancybox='gallery']", {
	  Hash: false
	});

	/* Close popup on refresh */
	window.addEventListener("load", () => Fancybox.close());


/* -------------------------------
	Story
------------------------------- */

	gsap.from(".story-content", {
	  scrollTrigger: ".story-section",
	  y: 40,
	  opacity: 0,
	  duration: 0.6,
	  ease: "power1.out"
	});

	gsap.from(".story-image img", {
	  scrollTrigger: ".story-section",
	  scale: 0.96,
	  opacity: 0,
	  duration: 0.6,
	  ease: "power1.out"
	});

	
/* -------------------------------
	Sustainability
------------------------------- */

	gsap.from(".sustainability-content", {
	  scrollTrigger: ".sustainability-section",
	  y: 40,
	  opacity: 0,
	  duration: 0.6,
	  ease: "power1.out"
	});

	gsap.from(".sustainability-image img", {
	  scrollTrigger: ".sustainability-section",
	  scale: 0.96,
	  opacity: 0,
	  duration: 0.6,
	  ease: "power1.out"
	});


/* -------------------------------
	Contact Us
------------------------------- */

	gsap.from(".contact-form input, .contact-form textarea, .contact-form button", {
	  scrollTrigger: ".contact-section",
	  opacity: 0,
	  y: 20,
	  stagger: 0.15,
	  duration: 0.6,
	  ease: "power1.out"
	});


/* -------------------------------
		END
------------------------------- */
