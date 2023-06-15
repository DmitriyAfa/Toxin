import {
  toggleExpandButton,
  isExpandButton,
  buttonVariants,
  removeDisabledFromMinusBtn,
  addDisabledFromMinusBtn,
  addBtnVisability,
  removeBtnVisability,
} from "@/shared/ui/button/button";

const dropdowns = document.querySelectorAll('.js-dropdown')

const makeDropdownFunctional = ({ dropdown, makeInputTextCallback, name = 'amenities' }) => {
  const drop = dropdown.querySelector('.js-dropdown__drop');
  const expandBtn = dropdown.querySelector(`.${buttonVariants.EXPAND}`)
  const formWrapper = dropdown.querySelector('.js-dropdown__form-wrapper')

  const handleExpandBtn = (e) => {
    toggleExpandButton(e.target.classList)
    drop.classList.toggle('dropdown__drop_hidden')

    if (name === 'guests') {
      formWrapper.classList.toggle('form-wrapper_radius_top-radius-smallest')
    }
  }
  expandBtn.addEventListener('click', handleExpandBtn)

  let state = {
    first: 0,
    second: 0,
    third: 0,
  }
  const input = dropdown.querySelector('.js-input')
  let footer;
  let clearBtn;
  let clearBtnClassList;
  let items = drop.querySelectorAll('.js-dropdown__item');
  items = [...items]

  if (name === 'guests') {
    footer = drop.querySelector('.js-dropdown__footer')
    clearBtn = footer.querySelector('.js-button')
    clearBtnClassList = clearBtn.classList
  }

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
        const text = makeInputTextCallback(state)

        input.value = text;
        if (state[stateName] > 0) {
          removeDisabledFromMinusBtn(minusBtnClassList)
        }
        if (clearBtnClassList && (state.first > 0 || state.second > 0 || state.third > 0) && clearBtnClassList.contains('button_visability_hidden')) {
          addBtnVisability(clearBtnClassList)
        }
      }

      const minusClickHandle = () => {
        if (state[stateName] > 0) {
          state[stateName] -= 1
          counterText.innerText = state[stateName]
          const text = makeInputTextCallback(state)

          input.value = text;
          if (state[stateName] <= 0 && !minusBtnClassList.contains('button_variant_math_disabled')) {
            addDisabledFromMinusBtn(minusBtnClassList)
          }
          if (clearBtnClassList && state.first === 0 && state.second === 0 && state.third === 0 && !clearBtnClassList.contains('button_visability_hidden')) {
            removeBtnVisability(clearBtnClassList)
          }
        }
      }

      plusBtn.addEventListener('click', plusClickHandle)
      minusBtn.addEventListener('click', minusClickHandle)


      if (clearBtn) {
        const countersText = counter.querySelectorAll('.js-text')
        const minusBtns = counter.querySelectorAll(`.${buttonVariants.MINUS}`)
        const clearBtnHandle = () => {
          removeBtnVisability(clearBtnClassList)
          countersText.forEach((text) => text.innerText = 0)
          minusBtns.forEach((btn) => addDisabledFromMinusBtn(btn.classList))
          input.value = "Сколько гостей";
          state.first = 0
          state.second = 0
          state.third = 0
        }

        clearBtn.addEventListener('click', clearBtnHandle)
      }

    } else {
      console.log(`Item with the name ${stateName} is not found`)
    }
  }

  makeCounterHandler({ stateName: 'first', state })
  makeCounterHandler({ stateName: 'second', state })
  makeCounterHandler({ stateName: 'third', state })

}

export { dropdowns, makeDropdownFunctional };