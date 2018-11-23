### react-apollo ❤ webpack

Demonstrates webpack's ability to treeshake react-apollo without breaking anything.

This webpack configuration can build a react-apollo with/ without treeshaking.  Once built, the app can be viewed at `http://localhost:9000`:

```sh
yarn
# Build and launch the app using an unshaken version of react-apollo.
# `dist/main.js` should be about 294KB (85KB gzipped).
TREE_SHAKE_REACT_APOLLO=false yarn server

# Build and launch the app using an treeshaken version of react-apollo.
# `dist/main.js` should be about 265KB (76KB gzipped)
TREE_SHAKE_REACT_APOLLO=true yarn server
```

(This app is based on code from https://www.apollographql.com/docs/react/essentials/get-started.html.)
