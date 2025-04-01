document.addEventListener("DOMContentLoaded", () => {
  const lucide = window.lucide
  lucide.createIcons()

  const faqItems = document.querySelectorAll(".faq-item")

  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question")
    question.addEventListener("click", () => {
      item.classList.toggle("active")
    })
  })

  // Navbar functionality
  const navbarToggle = document.querySelector(".navbar-toggle")
  const navbarMenu = document.querySelector(".navbar-menu")

  if (navbarToggle && navbarMenu) {
    // Toggle navigation menu
    navbarToggle.addEventListener("click", () => {
      navbarMenu.classList.toggle("active")
      navbarToggle.classList.toggle("active")
    })

    // Close menu when clicking outside
    document.addEventListener("click", (event) => {
      const isClickInsideNav = navbarMenu.contains(event.target)
      const isClickOnToggle = navbarToggle.contains(event.target)

      if (!isClickInsideNav && !isClickOnToggle && navbarMenu.classList.contains("active")) {
        navbarMenu.classList.remove("active")
        navbarToggle.classList.remove("active")
      }
    })

    // Close menu when clicking on a nav link
    const navLinks = document.querySelectorAll(".nav-link")
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        navbarMenu.classList.remove("active")
        navbarToggle.classList.remove("active")
      })
    })

    // Handle window resize
    window.addEventListener("resize", () => {
      if (window.innerWidth > 768 && navbarMenu.classList.contains("active")) {
        navbarMenu.classList.remove("active")
        navbarToggle.classList.remove("active")
      }
    })
  }

  // Tab functionality
  const tabs = document.querySelectorAll(".tab")
  const tabContents = document.querySelectorAll(".tab-content")

  tabs.forEach((tab) => {
    tab.addEventListener("click", function () {
      const tabId = this.getAttribute("data-tab")

      // Remove active class from all tabs and tab contents
      tabs.forEach((t) => t.classList.remove("active"))
      tabContents.forEach((content) => content.classList.remove("active"))

      // Add active class to current tab and content
      this.classList.add("active")
      const activeContent = document.getElementById(tabId)
      if (activeContent) {
        activeContent.classList.add("active")
      }
    })
  })
})

