// https://stackoverflow.com/questions/69106875/a-tag-goes-to-new-page-but-does-not-go-to-the-top-of-the-new-page
exports.onRouteUpdate = () => {
  if (typeof window !== `undefined`) {
    window.scrollTo(0, 0);
  }
};

exports.shouldUpdateScroll = (args) => {
  return false;
};

exports.onInitialClientRender = () => {};
