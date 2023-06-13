import { toggleExpandButton, isExpandButton } from "@/shared/ui/button/button.js";

const dropdowns = document.querySelectorAll('.js-dropdown')

if (dropdowns) {

  const handleToggleButton = (e) => {
    const classList = e.target.classList;
    if (isExpandButton(classList)) {
      toggleExpandButton(e.target.classList)
    }
  }

  dropdowns.forEach((dropdown) => {
    dropdown.addEventListener('click', handleToggleButton)
  })
}