<template>
  <transition name="modal">
    <div class="overlay">
      <div class="delete-modal-wrapper">
        <div class="delete-modal-container">
          <p>削除します。よろしいですか？</p>
          <div>
            <button>はい</button>
            <button @click="$emit('close')">いいえ</button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script></script>

<style lang="scss" scoped>
.delete-modal-wrapper {
  position: relative;
  max-width: 650px;
  width: 90%;
  margin: 80px auto;
  background: white;
  border-radius: 20px;
  //border: solid 1px #C7C7C7;
  box-shadow: 0 0 1px gray;
  box-sizing: border-box;
  padding: 30px 45px;

  @include mobile {
    margin: 50px auto;
    padding: 40px 10px;
  }

  .delete-modal-container {
    display: flex;
    justify-content: space-between;
  }
}
</style>
