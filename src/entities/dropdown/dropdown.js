import {
  buttonVariants,
  removeDisabledFromMinusBtn,
  addDisabledFromMinusBtn,
  addBtnVisability,
  removeBtnVisability,
  moveExpandButtonUp,
} from '@/shared/ui/button/button';

const dropdowns = document.querySelectorAll('.js-dropdown');

const createDropdownFunctional = ({ dropdown, createInputTextCallback, name }) => {
  if (name === 'amenities' || name === 'guests') {
    const drop = dropdown.querySelector('.js-dropdown__drop');
    const expandBtn = dropdown.querySelector('.js-dropdown__button-expand');
    const formWrapper = dropdown.querySelector('.js-dropdown__form-wrapper');

    const handleExpandBtn = () => {
      drop.classList.toggle('dropdown__drop_hidden');

      if (name === 'guests') {
        formWrapper.classList.toggle('dropdown__form-wrapper_radius_top-radius-smallest');
      }
    };
    expandBtn.addEventListener('click', handleExpandBtn);

    const expandBtnFromShared = expandBtn.querySelector(`.${buttonVariants.EXPAND}`);
    if (!drop.classList.contains('dropdown__drop_hidden')) {
      moveExpandButtonUp(expandBtnFromShared);
    }

    const state = {
      first: 0,
      second: 0,
      third: 0,
    };
    const input = dropdown.querySelector('.js-input');
    let footer;
    let clearBtn;
    let clearBtnClassList;
    let items = drop.querySelectorAll('.js-dropdown__item');
    items = [...items];

    items.forEach((item) => {
      if (item.dataset.name === 'first') {
        state.first = +item.dataset.value;
      }
      if (item.dataset.name === 'second') {
        state.second = +item.dataset.value;
      }
      if (item.dataset.name === 'third') {
        state.third = +item.dataset.value;
      }
    });

    const text = createInputTextCallback(state);
    input.value = text;

    if (name === 'guests') {
      footer = drop.querySelector('.js-dropdown__footer');
      clearBtn = footer.querySelector('.js-button');
      clearBtnClassList = clearBtn.classList;
    }

    const crateCounterHandler = ({ stateName, _state }) => {
      const item = items.find((elem) => (elem.dataset.name === stateName));
      if (item) {
        const counter = item.querySelector('.js-dropdown__counter');
        const counterText = counter.querySelector('.js-text');
        const minusBtn = counter.querySelector(`.${buttonVariants.MINUS}`);
        const plusBtn = counter.querySelector(`.${buttonVariants.PLUS}`);
        const minusBtnClassList = minusBtn.classList;

        const plusClickHandle = () => {
          _state[stateName] += 1;
          counterText.innerText = _state[stateName];
          const thisText = createInputTextCallback(_state);

          input.value = thisText;
          if (_state[stateName] > 0) {
            removeDisabledFromMinusBtn(minusBtnClassList);
          }
          const allStateMoreThenZero = (thisState) => (
            thisState.first > 0 || thisState.second > 0 || thisState.third > 0
          );
          const clearBtnClassIsExistAndAllStateMoreThenZero = () => (
            clearBtnClassList && (allStateMoreThenZero(_state))
          );
          if (clearBtnClassIsExistAndAllStateMoreThenZero() && clearBtnClassList.contains('button_visability_hidden')) {
            addBtnVisability(clearBtnClassList);
          }
        };

        const minusClickHandle = () => {
          if (_state[stateName] > 0) {
            _state[stateName] -= 1;
            counterText.innerText = _state[stateName];
            const thisText = createInputTextCallback(_state);

            input.value = thisText;
            if (state[stateName] <= 0 && !minusBtnClassList.contains('button_variant_math_disabled')) {
              addDisabledFromMinusBtn(minusBtnClassList);
            }
            const allStateAreEqualZero = (thisState) => (
              thisState.first === 0 && thisState.second === 0 && thisState.third === 0
            );
            const clearBtnClassIsExistAndAllStateAreEqualZero = () => (
              clearBtnClassList && (allStateAreEqualZero(_state))
            );
            if (clearBtnClassIsExistAndAllStateAreEqualZero() && !clearBtnClassList.contains('button_visability_hidden')) {
              removeBtnVisability(clearBtnClassList);
            }
          }
        };

        plusBtn.addEventListener('click', plusClickHandle);
        minusBtn.addEventListener('click', minusClickHandle);

        if (clearBtn) {
          const countersText = counter.querySelectorAll('.js-text');
          const minusBtns = counter.querySelectorAll(`.${buttonVariants.MINUS}`);
          const clearBtnHandle = () => {
            removeBtnVisability(clearBtnClassList);
            countersText.forEach((thisText) => {
              thisText.innerText = 0;
            });
            minusBtns.forEach((btn) => addDisabledFromMinusBtn(btn.classList));
            input.value = 'Сколько гостей';
            state.first = 0;
            state.second = 0;
            state.third = 0;
          };

          clearBtn.addEventListener('click', clearBtnHandle);
        }
      } else {
        // eslint-disable-next-line no-console
        console.log(`Item with the name ${stateName} is not found`);
      }
    };

    crateCounterHandler({ stateName: 'first', _state: state });
    crateCounterHandler({ stateName: 'second', _state: state });
    crateCounterHandler({ stateName: 'third', _state: state });
  }
};

export { dropdowns, createDropdownFunctional };
