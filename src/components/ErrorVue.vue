<template>
  <div class="container-flex full-height column">
    <img src="../../static/images/sig.png" style="object-fit: contain"/>
    <div class="content container-flex column">
      <div class="container-flex column">
        <h1>Page not found</h1>
        <p>I can’t seem to find the page you are looking for.</p>
      </div>
      <RouterLink to="/">Home</RouterLink>
      <h3 class="help">
        Help
        <p class="popup">Nobody can help you</p>
      </h3>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        helpShowing: false,
      }
    }
  }
</script>
<style scoped>
  div {
    width: 100%;
    background-color: rgba(18,18,18,255);
    color: white;
  }

  div img {
    width: 60px;
    height: 60px;
    margin-bottom: 10px;
  }

  .content {
    gap: 40px;
  }

  .content h1 {
    font-size: 48px;
    font-weight: 700;
    letter-spacing: -.04em;
    line-height: 1;
    margin: 40px 0 16px;
  }

  .content a {
    background: #fff;
    border: 1px solid #878787;
    border-radius: 48px;
    color: #000;
    display: inline-block;
    line-height: 24px;
    padding: 12px 32px;
    text-align: center;
    white-space: nowrap;
    font-weight: 500;
  }

  .content a:hover {
    transform: scale(1.02);
  }

  .help {
    display: block;
    font-size: 1em;
    font-weight: 400;
    text-decoration: none;
    cursor: pointer;
    position: relative;
    text-align: center;
  }

  .help:hover {
    text-decoration: underline;
  }

  .popup {
    position: absolute;
    bottom: 25px;
    right: -55px;
    background-color: rgb(30, 30, 30);
    padding: 10px;
    border-radius: 4px;
    font-size: 0.8rem;
    visibility: hidden;
    width: 150px;
  }

  .help:hover .popup {
    visibility:visible;
  }
</style>