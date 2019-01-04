<template>
  <div class="timeline-container">
    <ul class="timeline">
      <li class="milestone">
        <span class="milestone-point"></span>
        <div class="milestone-title font-handwriting">IT-HTL Ybbs an der Donau</div>
        <div class="milestone-content">bla lakjl akfjlk alkalalsj <br>jfdkaljflaksdj asdkf jalfal alkjalkalkfaa aslf</div>
      </li>
      <li class="milestone">B</li>
      <li class="milestone">C</li>
      <li class="milestone">D</li>
      <li><br><br><br><br></li>

      <li class="milestone">
        <span class="milestone-point"></span>
        <div class="milestone-title font-handwriting">IT-HTL Ybbs an der Donau</div>
        <div class="milestone-content">bla lakjl akfjlk alkalalsj <br>jfdkaljflaksdj asdkf jalfal alkjalkalkfaa aslf</div>
      </li>
      <li class="milestone">B</li>
      <li class="milestone">C</li>
      <li class="milestone">D</li>

      <li class="milestone">
        <span class="milestone-point"></span>
        <div class="milestone-title font-handwriting">IT-HTL Ybbs an der Donau</div>
        <div class="milestone-content">bla lakjl akfjlk alkalalsj <br>jfdkaljflaksdj asdkf jalfal alkjalkalkfaa aslf</div>
      </li>
      <li class="milestone">B</li>
      <li class="milestone">C</li>
      <li class="milestone">D</li>

      <li class="milestone">
        <span class="milestone-point"></span>
        <div class="milestone-title font-handwriting">IT-HTL Ybbs an der Donau</div>
        <div class="milestone-content">bla lakjl akfjlk alkalalsj <br>jfdkaljflaksdj asdkf jalfal alkjalkalkfaa aslf</div>
      </li>
      <li class="milestone">B</li>
      <li class="milestone">C</li>
      <li class="milestone">D</li>

      <li class="milestone">
        <span class="milestone-point"></span>
        <div class="milestone-title font-handwriting">IT-HTL Ybbs an der Donau</div>
        <div class="milestone-content">bla lakjl akfjlk alkalalsj <br>jfdkaljflaksdj asdkf jalfal alkjalkalkfaa aslf</div>
      </li>
      <li class="milestone">B</li>
      <li class="milestone">C</li>
      <li class="milestone">D</li>

      <li class="milestone">
        <span class="milestone-point"></span>
        <div class="milestone-title font-handwriting">IT-HTL Ybbs an der Donau</div>
        <div class="milestone-content">bla lakjl akfjlk alkalalsj <br>jfdkaljflaksdj asdkf jalfal alkjalkalkfaa aslf</div>
      </li>
      <li class="milestone">B</li>
      <li class="milestone">C</li>
      <li class="milestone">D</li>

      <li class="milestone">
        <span class="milestone-point"></span>
        <div class="milestone-title font-handwriting">IT-HTL Ybbs an der Donau</div>
        <div class="milestone-content">bla lakjl akfjlk alkalalsj <br>jfdkaljflaksdj asdkf jalfal alkjalkalkfaa aslf</div>
      </li>
      <li class="milestone">B</li>
      <li class="milestone">C</li>
      <li class="milestone">D</li>
      <li><br><br><br><br></li>

      <li class="milestone">
        <span class="milestone-point"></span>
        <div class="milestone-title font-handwriting">IT-HTL Ybbs an der Donau</div>
        <div class="milestone-content">bla lakjl akfjlk alkalalsj <br>jfdkaljflaksdj asdkf jalfal alkjalkalkfaa aslf</div>
      </li>
      <li class="milestone">B</li>
      <li class="milestone">C</li>
      <li class="milestone">D</li>
      <li><br><br><br><br></li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
@import "~assets/scss/_variables.scss";

.timeline-container {
  width: 100%;
  padding: 20px;

  @media screen and (min-width: 768px){
    margin-left: $character-width;
    max-width: (100% - $character-width);
  }

  .timeline {
    list-style-type: none;
    position: relative;
    margin: 0;
    padding: 0 5px;
    border-left: 2px solid lightgray;

    .milestone {
      .milestone-point {
        display: block;
        position: absolute;
        left: -6px;
        width: 10px;
        height: 10px;
        background-color: white;
        border-radius: 51%;

        border: 2px solid map-get($colors, primary);
      }

      .milestone-title {
        margin-left: 10px;
        font-size: 20px;
        font-weight: 400;
        position: relative;
        top: -4px;
      }

      .milestone-content {
        margin: 5px 8px;
      }
    }
  }
}
</style>
