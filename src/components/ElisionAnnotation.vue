<template>
<span class="elision">
  <!-- Use v-show rather than v-if here so that
       the text is included in offset calculations -->
  <span class="selected-text"><slot></slot></span>
  <span v-if="isTail"
        data-exclude-from-offset-calcs="true"
        class="sr-only">(end of elided text)</span>
                    :ui-state="uiState">
</span>
</template>

<script>
import AnnotationBase from './AnnotationBase';
import { createNamespacedHelpers } from 'vuex';

export default {
  extends: AnnotationBase,
}
</script>

<style lang="scss" scoped>
@import '../styles/vars-and-mixins';

.selected-text {
  padding: 0.35em;
  display: inline;
  color: #555;
  background-color: $translucent-light-gray;
}
</style>
