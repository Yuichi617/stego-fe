<template>
  <transition name="modal">
    <div class="overlay" @click="$emit('close')">
      <div class="form-wrapper add-form-wrapper" @click.stop>
        <div class="close-button-wrapper"><button class="close-button" @click="$emit('close')"></button></div>
        <div class="form-container add-form-container">
          <h1>映画の記録</h1>
          <!-- <div>
          <p>鑑賞日</p>
          <p th:if="${#fields.hasErrors('addDate')}" th:errors="*{addDate}" th:errorclass="err"></p>
          <input class="input-area" id="today" type="date" th:field="*{addDate}" th:errorclass="err" />
        </div> -->
          <div class="input-container">
            <div>
              <p>タイトル</p>
              <input class="input-area" type="text" />
            </div>
            <div>
              <p>ジャンル</p>
              <select class="input-area">
                <option>action</option>
              </select>
            </div>
            <div>
              <p>コメント</p>
              <textarea class="input-area"></textarea>
            </div>
            <div>
              <p>評価</p>
              <div class="evaluation input-area">
                <input id="star1" type="radio" value="5" />
                <label for="star1">★</label>
                <input id="star2" type="radio" value="4" />
                <label for="star2">★</label>
                <input id="star3" type="radio" value="3" />
                <label for="star3">★</label>
                <input id="star4" type="radio" value="2" />
                <label for="star4">★</label>
                <input id="star5" type="radio" value="1" />
                <label for="star5">★</label>
              </div>
            </div>
          </div>
          <input type="submit" value="登録" />
        </div>
      </div>
    </div>
  </transition>
</template>

<style lang="scss" scoped>
.form-wrapper {
  position: relative;
  max-width: 650px;
  width: 90%;
  margin: 80px auto;
  background: white;
  border-radius: 20px;
  //border: solid 1px #C7C7C7;
  box-shadow: 0 0 1px gray;
  box-sizing: border-box;
  padding: 60px 75px;

  @include mobile {
    margin: 50px auto;
    padding: 40px 10px;
  }

  .close-button-wrapper {
    position: absolute;
    top: 15px;
    right: 20px;

    .close-button {
      display: block;
      position: relative;
      width: 30px;
      height: 30px;
      border: none;
      background: #fff;
      cursor: pointer;

      &::before,
      &::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 3px;
        height: 22px;
        background: #333;
      }

      &::before {
        transform: translate(-50%, -50%) rotate(45deg);
      }

      &::after {
        transform: translate(-50%, -50%) rotate(-45deg);
      }
    }
  }

  .form-container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    h1 {
      font-size: 25px;
      font-weight: bold;
      margin-bottom: 20px;

      @include mobile {
        font-size: 23px;
        text-align: center;
        margin-bottom: 30px;
      }
    }

    p {
      font-size: 16px;
      color: #7b7b7b;
      margin-bottom: 3px;

      @include mobile {
        font-size: 14px;
      }
    }

    .input-area {
      margin-bottom: 20px;

      @include mobile {
        margin-bottom: 10px;
      }
    }

    // input[type='date'] {
    //   width: 200px;
    //   border: solid 1px rgb(118, 118, 118);
    //   border-radius: 5px;
    //   padding: 5px 8px;

    //   @include mobile {
    //     width: 50%;
    //     height: 25px;
    //     color: black;
    //     background: white;
    //   }
    // }

    select {
      width: 200px;
      border: solid 1px rgb(118, 118, 118);
      border-radius: 5px;
      padding: 5px 8px;

      @include mobile {
        width: 50%;
        height: 35px;
        color: black;
        background: white;
      }
    }

    input[type='text'] {
      width: 100%;
      border: solid 1px rgb(118, 118, 118);
      border-radius: 5px;
      box-sizing: border-box;
      padding: 5px 8px;
    }

    textarea {
      width: 100%;
      height: 80px;
      border: solid 1px rgb(118, 118, 118);
      border-radius: 5px;
      box-sizing: border-box;
      padding: 5px 8px;
    }

    input[type='submit'] {
      align-self: flex-end;
      font-weight: bolder;
      font-size: 18px;
      width: 130px;
      height: 50px;
      background: black;
      color: white;
      border-radius: 15px;
      border: none;
      cursor: pointer;
      margin-top: 20px;

      &:hover {
        opacity: 0.8;
      }

      @include mobile {
        font-size: 16px;
        width: 80%;
        height: 43px;
        align-self: center;
      }
    }

    .btn-wrap {
      display: flex;
      justify-content: flex-end;

      @include mobile {
        justify-content: center;
      }

      input[type='submit'] {
        margin-right: 15px;

        @include mobile {
          width: 30%;
          margin-right: 30px;
        }
      }

      a {
        font-weight: bolder;
        font-size: 18px;
        width: 130px;
        background: #ffbfbf;
        color: white;
        border-radius: 15px;
        border: none;
        cursor: pointer;
        margin-top: 20px;
        padding: 0;
        padding-top: 9px;
        text-align: center;

        &:hover {
          opacity: 0.8;
        }

        @include mobile {
          border-radius: 25px;
          padding-top: 7px;
          font-size: 16px;
          width: 30%;
        }
      }
    }
  }
}
/*====== 星評価 ======*/
.evaluation {
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-end;
  margin-top: -5px;
}

.evaluation input[type='radio'] {
  display: none;
}

.evaluation label {
  position: relative;
  color: gray;
  cursor: pointer;
  padding: 0 2px;
  font-size: 25px;
}

.evaluation label:hover,
.evaluation label:hover ~ label,
.evaluation input[type='radio']:checked ~ label {
  color: #ffcc00;
}
</style>
