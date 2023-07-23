import toggleNamedWrapperContent from './named-wrapper';

const namedWrappers = document.querySelectorAll('.js-named-wrapper');
if (namedWrappers.length > 0) {
  namedWrappers.forEach((namedWrapper) => {
    toggleNamedWrapperContent(namedWrapper);
  });
}
