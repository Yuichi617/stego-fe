<template>
  <footer>
    <div class="footer-wrapper">
      <div class="footer-container">
        <p class="footer-logo"><a th:href="@{/movie}">Movies</a></p>
        <p class="footer-copyright"><span lang="en">©</span>&nbsp;yuichi-sugiyama</p>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  width: 100%;
  height: 150px;
  background: #fff;
  @include mobile {
    height: 115px;
  }

  .footer-wrapper {
    @include mobile {
      border-top: solid 1px #e3e3e3;
    }

    .footer-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-top: 50px;
      @include mobile {
        padding-top: 45px;
      }

      .footer-logo {
        font-family: Helvetica;
        font-weight: bold;
        font-size: 25px;
        @include mobile {
          font-size: 20px;
        }
      }

      .footer-copyright {
        font-size: 15px;
        @include mobile {
          font-size: 12px;
        }
      }
    }
  }
}
</style>
