import { toggleNamedWrapperContent } from "./named-wrapper"

let namedWrappers = document.querySelectorAll('.js-named-wrapper')
if (namedWrappers) {
  namedWrappers.forEach((namedWrapper) => {
    toggleNamedWrapperContent(namedWrapper)
  })
}