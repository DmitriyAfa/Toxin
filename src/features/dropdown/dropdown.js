import { toggleExpandButton } from "@/shared/ui/button/button";

const dropdowns = document.querySelectorAll('.js-dropdown')

if (dropdowns) {

  const isButton = (classList) => {
    return classList.contains('js-button');
  }

  dropdowns.forEach((dropdown) => {
    dropdown.addEventListener('click', (e) => {
      const classList = e.target.classList;
      if (isButton(classList)) {
        toggleExpandButton(e.target.classList)
      }
    })
  })
}