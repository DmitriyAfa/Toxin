import { toggleExpandButton, isExpandButton, buttonVariants, removeDisabledFromMinusBtn, addDisabledFromMinusBtn } from "@/shared/ui/button/button";

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

const makeDropdownFunctional = (dropdown, makeInputTextCallback) => {
  const state = {
    first: 0,
    second: 0,
    third: 0,
  }
  const drop = dropdown.querySelector('.js-dropdown__drop');
  const input = dropdown.querySelector('.js-input')
  let items = drop.querySelectorAll('.js-dropdown__item');
  items = [...items]

  function makeCounterHandler({ stateName, state }) {
    const item = items.find(elem => (elem.dataset.name === stateName));
    if (item) {
      const counter = item.querySelector(`.js-dropdown__counter`)
      const counterText = counter.querySelector('.js-text')
      const minusBtn = counter.querySelector(`.${buttonVariants.MINUS}`)
      const plusBtn = counter.querySelector(`.${buttonVariants.PLUS}`)
      const minusBtnClassList = minusBtn.classList;

      const plusClickHandle = () => {
        state[stateName] += 1
        counterText.innerText = state[stateName]
        let text = makeInputTextCallback(state)
        // text.pop()

        // input.value = `${text.join(', ')}...`;
        console.log(text)
        if (state[stateName] > 0) {
          removeDisabledFromMinusBtn(minusBtnClassList)
        }
      }

      const minusClickHandle = () => {
        if (state[stateName] > 0) {
          state[stateName] -= 1
          counterText.innerText = state[stateName]
          let text = makeInputTextCallback(state)
          // text.pop()

          // input.value = `${text.join(', ')}...`;

          console.log(text)
          if (state[stateName] <= 0 && !minusBtnClassList.contains('button_variant_math_disabled')) {
            addDisabledFromMinusBtn(minusBtnClassList)
          }
        }
      }

      plusBtn.addEventListener('click', plusClickHandle)
      minusBtn.addEventListener('click', minusClickHandle)
    } else {
      console.log(`Item with the name ${stateName} is not found`)
    }
  }

  makeCounterHandler({ stateName: 'first', state })
  makeCounterHandler({ stateName: 'second', state })
  makeCounterHandler({ stateName: 'third', state })

}

export { dropdowns, makeDropdownFunctional };