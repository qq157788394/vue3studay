<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view/>
</template>

<style lang="less">
@font-face {
  font-family: 'number';
  src: url('./assets/RobotoCondensed-Regular.ttf');
}

#app {
  font-family: number;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-weight: 900;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.scrollBar {
    //定义特殊的scrollbar
  &::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, .06);
    border-radius: .5rem;
    box-shadow: rgba(0, 0, 0, .04) 0 0 0 1px inset;
  }

  &::-webkit-scrollbar-track {
    background-color: rgba(0, 0, 0, .04);
  }
}

// ::-webkit-scrollbar {
//   width: 6px;
//   height: 6px;
// }

// ::-webkit-scrollbar-track {
//   width: 6px;
//   background: rgba(#101F1C, 0.1);
//   -webkit-border-radius: 2em;
//   -moz-border-radius: 2em;
//   border-radius: 2em;
// }

// ::-webkit-scrollbar-thumb {
//   background-color: rgba(#101F1C, 0.5);
//   background-clip: padding-box;
//   min-height: 28px;
//   -webkit-border-radius: 2em;
//   -moz-border-radius: 2em;
//   border-radius: 2em;
// }

// ::-webkit-scrollbar-thumb:hover {
//   background-color: rgba(#101F1C, 1);
// }

</style>
