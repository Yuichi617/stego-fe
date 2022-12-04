<template>
  <header>
    <div class="header-container">
      <p class="header-logo"><a>Movies</a></p>
    </div>
  </header>
</template>

<style lang="scss" scoped>
header {
  height: 100px;
  background: #fff;
  border-bottom: solid 1px #e3e3e3;
  @include mobile {
    height: 80px;
  }

  .header-container {
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 50px;
    @include mobile {
      padding: 0 15px;
    }

    .header-logo {
        font-family: Helvetica;
        font-weight: bold;
        font-size: 30px;
        @include mobile {
          font-size: 20px;
        }
    }
  }
}
</style>
