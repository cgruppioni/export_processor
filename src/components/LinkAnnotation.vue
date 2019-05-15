<template>
<span class="link">
  <a :href="annotation.content" target="_blank" class="selected-text"><slot></slot></a>
</span>
</template>

<script>
import AnnotationBase from "./AnnotationBase";

export default {
  extends: AnnotationBase,
  props: ["value"],
}
</script>

<style lang="scss" scoped>
@import '../styles/vars-and-mixins';
a[target="_blank"] {
  background: url(../images/external-link-icon.svg) center right no-repeat;
  background-size: 0.55em 0.55em;
  padding-right: 0.7em;
  margin-right: 0.1em;
}
.link-content-wrapper {
  @include sans-serif($regular, 12px, 14px);
  @include square(0);
  position: absolute;
  right: 0;
  overflow: visible;
  display: block;
  z-index: 999;

  /* counteract styles that might come from the enclosing section */
  font-style: normal;
  text-align: left;

  .form {
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    padding: 10px 15px;
    width: 200px;
    background: white;
    margin-left: 10px;
    z-index: 999;
  }
}
.edit-menu {
  margin-left: 10px;
}
</style>
