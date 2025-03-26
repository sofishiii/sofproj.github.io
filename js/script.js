// Wait for DOM to load
document.addEventListener("DOMContentLoaded", () => {
  // Navbar scroll effect
  const navbar = document.querySelector(".navbar")
  const navLinks = document.querySelector(".nav-links")
  const hamburger = document.querySelector(".hamburger")

  // Scroll event for navbar
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled")
    } else {
      navbar.classList.remove("scrolled")
    }
  })

  // Mobile menu toggle
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active")
    hamburger.classList.toggle("active")
  })

  // Close mobile menu when clicking on a link
  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active")
      hamburger.classList.remove("active")
    })
  })

  // Parallax effect for hero section
  const parallaxBg = document.querySelector(".parallax-bg")

  window.addEventListener("scroll", () => {
    const scrollPosition = window.pageYOffset
    if (parallaxBg) {
      parallaxBg.style.transform = `translateY(${scrollPosition * 0.5}px)`
    }
  })

  // Scroll reveal animation
  const revealElements = document.querySelectorAll(".reveal")

  function checkReveal() {
    const triggerBottom = window.innerHeight * 0.8

    revealElements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top

      if (elementTop < triggerBottom) {
        element.classList.add("active")
      }
    })
  }

  // Initial check on page load
  checkReveal()

  // Check on scroll
  window.addEventListener("scroll", checkReveal)

  // Skill bars animation
  const skillLevels = document.querySelectorAll(".skill-level")

  function animateSkillBars() {
    skillLevels.forEach((skill) => {
      const skillSection = document.querySelector("#skills")
      const sectionTop = skillSection.getBoundingClientRect().top
      const triggerBottom = window.innerHeight * 0.8

      if (sectionTop < triggerBottom) {
        skill.style.width = skill.style.width || skill.parentElement.previousElementSibling.lastElementChild.textContent
      } else {
        skill.style.width = 0
      }
    })
  }

  // Initial check for skill bars
  animateSkillBars()

  // Check on scroll for skill bars
  window.addEventListener("scroll", animateSkillBars)

  // Form submission
  const contactForm = document.querySelector(".contact-form")

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault()

      // Get form values
      const name = document.getElementById("name").value
      const email = document.getElementById("email").value
      const subject = document.getElementById("subject").value
      const message = document.getElementById("message").value

      // Here you would typically send the form data to a server
      // For demonstration, we'll just log it to console
      console.log("Form submitted:", { name, email, subject, message })

      // Show success message (you can customize this)
      alert("¡Mensaje enviado con éxito! Gracias por contactarme.")

      // Reset form
      contactForm.reset()
    })
  }

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()

      const targetId = this.getAttribute("href")
      const targetElement = document.querySelector(targetId)

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 70, // Adjust for navbar height
          behavior: "smooth",
        })
      }
    })
  })
})

