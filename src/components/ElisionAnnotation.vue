<template>
<span class="elision">
  <AnnotationExpansionToggle v-if="isHead"
                             :annotation="annotation"
                             aria-label="elided text"/>
  <!-- Use v-show rather than v-if here so that
       the text is included in offset calculations -->
  <span v-show="uiState.expanded"
        class="selected-text"><slot></slot></span>
  <span v-if="isTail && uiState.expanded"
        data-exclude-from-offset-calcs="true"
        class="sr-only">(end of elided text)</span>
                    :ui-state="uiState">
</span>
</template>

<script>
import AnnotationBase from './AnnotationBase';
import AnnotationExpansionToggle from './AnnotationExpansionToggle';
import { createNamespacedHelpers } from 'vuex';
const { mapActions } = createNamespacedHelpers('annotations_ui');

export default {
  extends: AnnotationBase,
  components: {
    AnnotationExpansionToggle
  },
  data: () => ({
    expandedDefault: false
  }),
  methods: {
    ...mapActions(['toggleExpansion'])
  }
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
