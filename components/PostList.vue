<template>
  <ul>
    <li class="li-desc">
      <p><span>タイトル</span></p>
      <p><span>ジャンル</span></p>
      <p><span>コメント</span></p>
      <p><span>評価</span></p>
      <p><span></span></p>
    </li>
    <li class="li-add">
      <p @click="$emit('openAddModal')"><span>+</span></p>
    </li>
    <li v-for="post in posts" :key="post.id">
      <!-- TODO: 閲覧日カラム追加 -->
      <p>
        <span>{{ post.name }}</span>
      </p>
      <p>
        <span>{{ post.genreName }}</span>
      </p>
      <p>
        <span>{{ post.comment }}</span>
      </p>
      <p><span class="star5_rating" :data-rate="post.eval"></span></p>
      <p>
        <span><img src="~/assets/img/garbage_can.svg" @click="$emit('openDeleteModal')"/></span>
      </p>
    </li>
  </ul>
</template>

<script>
export default {
  props: ['posts'],
}
</script>

<style lang="scss" scoped>
ul {
  width: 90%;
  max-width: 1000px;
  margin: 0 auto;

  .li-desc {
    background: #8787d2;
    color: white;
    font-weight: bold;
    height: 60px;
    @include mobile {
      font-size: 12px;
      height: 50px;
    }
  }

  .li-add {
    cursor: pointer;
    height: 60px;
    @include mobile {
      height: 50px;
    }

    &:hover {
      opacity: 0.8;
    }

    p {
      // 一個しか要素ないけどプロパティの上書きのため
      &:last-child {
        width: 100%;
      }

      span {
        font-size: 20px;
        font-weight: bold;
      }
    }
  }

  li {
    display: flex;
    height: 70px;
    background: white;
    margin-bottom: 10px;
    border-radius: 10px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    @include mobile {
      height: 60px;
    }

    p {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 23%;
      @include mobile {
        font-size: 12px;
        overflow: scroll;
      }

      &:last-child {
        width: 8%;
      }

      span {
        white-space: nowrap;
        overflow: scroll;

        img {
          width: 15px;
          cursor: pointer;
        }
      }
    }
  }
}

/*================================
    star5_rating
=================================*/
.star5_rating {
  position: relative;
  z-index: 0;
  display: inline-block;
  white-space: nowrap;
  color: #cccccc; /* グレーカラー 自由に設定化 */
  /*font-size: 30px; フォントサイズ 自由に設定化 */
}

.star5_rating:before,
.star5_rating:after {
  content: '★★★★★';
}

.star5_rating:after {
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  overflow: hidden;
  white-space: nowrap;
  color: #ffcf32; /* イエローカラー 自由に設定化 */
}

.star5_rating[data-rate='5']:after {
  width: 100%;
} /* 星5 */
.star5_rating[data-rate='4']:after {
  width: 80%;
} /* 星4 */
.star5_rating[data-rate='3']:after {
  width: 60%;
} /* 星3 */
.star5_rating[data-rate='2']:after {
  width: 40%;
} /* 星2 */
.star5_rating[data-rate='1']:after {
  width: 20%;
} /* 星1 */
.star5_rating[data-rate='0']:after {
  width: 0%;
} /* 星0 */
</style>
