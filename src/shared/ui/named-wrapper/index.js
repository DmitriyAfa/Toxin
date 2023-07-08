import { toggleNamedWrapperContent } from "./named-wrapper"

let namedWrappers = document.querySelectorAll('.js-named-wrapper')
if (namedWrappers.length > 0) {
  namedWrappers.forEach((namedWrapper) => {
    toggleNamedWrapperContent(namedWrapper)
  })
}