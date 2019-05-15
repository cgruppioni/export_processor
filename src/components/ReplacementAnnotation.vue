<template>
<span class="replacement"
      :class="{head: isHead, tail: addTailClass}">
  <template v-if="isHead">
    <span v-else
          ref="replacementText"
          class="replacement-text"
          data-exclude-from-offset-calcs="true"
          @blur="revert"
          @keydown.enter.prevent="submit"
          @keyup.esc="$event.target.blur"
          v-contenteditable:content="true"></span>
  </template>
  <!-- Use v-show rather than v-if here so that
       the text is included in offset calculations -->
  <span v-show="uiState.expanded" class="selected-text"><slot></slot></span>
  <span v-if="isTail && uiState.expanded"
        data-exclude-from-offset-calcs="true"
        class="sr-only">(end of replaced text)</span>
</span>
</template>

<script>
import AnnotationBase from "./AnnotationBase";

export default {
  extends: AnnotationBase,
  computed: {
    addTailClass() {
      return (this.isTail && this.uiState.expanded) ||
             (this.isHead && !this.uiState.expanded);
    }
  },
}
</script>

<style lang="scss" scoped>
@import '../styles/vars-and-mixins';

.head {
  margin-left: 0.25em;
}
.tail {
  margin-right: 0.25em;
}
.replacement-text,
.selected-text {
  background-color: $translucent-light-gray;
  padding: 0.35em;
}
.selected-text {
  display: inline;
  color: #555;
  border-radius: 3px;
}  
.replacement-text {
  color: $light-blue;
}
.replacement-text:empty::before {
  content: 'Enter replacement text';
  color: $dark-gray;
}
.active .replacement-text:empty::before {
  content: ' ';
}
</style>
