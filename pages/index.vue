<template>
  <div class="fv-wrapper">
    <div class="img-wrapper">
      <img src="~/assets/img/first_view.jpeg" />
    </div>
    <div class="text-container">
      <div class="title-container">
        <h1>はじめよう。</h1>
        <h1>自分だけの映画記録を。</h1>
        <p>Moviesは鑑賞した映画を記録することができるwebアプリです。</p>
        <p>映画に対する評価や感想が公開されることはありません。</p>
        <p>鑑賞後のあなただけの思いを記録してみませんか。</p>
      </div>
      <div class="btn-container">
        <div class="btn btn-register"><a>新規登録</a></div>
        <div class="btn btn-login"><a>ログイン</a></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.fv-wrapper {
  position: relative;

  .img-wrapper {
    width: 100%;
    height: calc(100vh - 250px);
    @include mobile {
      height: calc(100vh - 80px);
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .text-container {
    position: absolute;
    top: 100px;
    left: 50px;
    @include mobile {
      top: 60px;
      left: 15px;
    }

    .title-container {
      margin-bottom: 45px;
      @include mobile {
        margin-bottom: 40px;
      }

      h1 {
        color: white;
        font-family: '游ゴシック体';
        font-weight: normal;
        font-size: 50px;
        @include mobile {
          font-size: 30px;
        }

        &:nth-child(2) {
          margin-bottom: 25px;
          @include mobile {
            margin-bottom: 30px;
          }
        }
      }

      p {
        color: white;
        font-family: '游ゴシック体';
        font-size: 18px;
        @include mobile {
          font-size: 14px;
        }
      }
    }

    .btn-container {
      display: flex;

      .btn-register {
        background-color: #3e54cf;
        background-image: linear-gradient(43deg, #3e54cf 0%, #bf5ab7 70%);
        margin-right: 25px;

        a {
          color: white;
          font-weight: bold;
        }
      }

      .btn-login {
        border: solid 1px white;

        a {
          color: white;
          font-weight: bold;
        }
      }
    }
  }
}
</style>
