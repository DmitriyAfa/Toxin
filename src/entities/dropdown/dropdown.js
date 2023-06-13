import { toggleExpandButton, isExpandButton } from "@/shared/ui/button/button";

const dropdowns = document.querySelectorAll('.js-dropdown')

if (dropdowns) {

  const handleExpandBtn = (e) => {
    const classList = e.target.classList;
    if (isExpandButton(classList)) {
      toggleExpandButton(e.target.classList)
    }
  }

  dropdowns.forEach((dropdown) => {
    dropdown.addEventListener('click', handleExpandBtn)
  })
}

export { dropdowns };