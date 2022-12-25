<template lang="">
<div class="container-flex topbar">
      <div class="container-flex angle-container">
        <fa class="fa-angle" icon="fa-solid fa-angle-left" @click="this.$router.go(-1)"/>
        <fa class="fa-angle" icon="fa-solid fa-angle-right" @click="this.$router.go(1)"/>
      </div>
      <ul class="container-flex" id="account-dropdown-menu" @click="toggleAccountDropdown">
        <img src="../../static/images/pfp.jpeg"/>
        <h1>liaozhuu</h1>
        <fa icon="fa-solid fa-caret-down" id="caret-down" />
        <fa icon="fa-solid fa-caret-up" id="caret-up" style="display: none"/>
      </ul>
    </div>
</template>
<script>
export default {
    name: "TopbarVue"
}
</script>
<style lang="">
    
</style>