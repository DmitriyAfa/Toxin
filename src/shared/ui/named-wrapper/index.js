import { toggleNamedWrapperContent } from "./named-wrapper"

let namedWrappers = document.querySelectorAll('.js-named-wrapper')
console.log(namedWrappers)
if (namedWrappers) {
  namedWrappers.forEach((namedWrapper) => {
    toggleNamedWrapperContent(namedWrapper)
  })
}