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

