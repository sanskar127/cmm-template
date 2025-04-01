document.addEventListener('DOMContentLoaded', function () {
    const lucide = window.lucide;
    lucide.createIcons();

    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
      const question = item.querySelector('.faq-question');
      question.addEventListener('click', () => {
        item.classList.toggle('active');
      });
    });
  });