document.addEventListener('DOMContentLoaded', function () {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');

  checkboxes.forEach((checkbox) => {
    const id = checkbox.id;
    const saved = localStorage.getItem(id);
    if (saved) {
      checkbox.checked = JSON.parse(saved);
    }
    checkbox.addEventListener('change', () => {
      localStorage.setItem(id, checkbox.checked);
    });
  });
});
