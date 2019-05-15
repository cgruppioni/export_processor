<template>
</template>

<script>
import AnnotationHandle from './AnnotationHandle';
import { createNamespacedHelpers } from 'vuex';

export default {
  components: {
    AnnotationHandle
  },
  props: {
    annotation: {type: Object,
                 required: true},
    // The index, startOffset, and endOffset here are for this
    // particular section of the rendered annotation. Annotation templates
    // can be split up across multiple HTML elements and each portion
    // needs to understand its context in the length in order to know
    // whether to show things like the annotation handle, which only
    // the first instance (the "head") of the template gets
    index: {type: Number,
            required: true},
    startOffset: {type: Number,
                  required: true},
    endOffset: {type: Number,
                required: true}
  },
  data: () => ({
    expandedDefault: true
  })
}
</script>

<style lang="scss" scoped>
</style>
