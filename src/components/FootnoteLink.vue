<!-- Not sure if this is used -->

<template>
  <a @click.prevent="handleClick"><slot></slot></a>
</template>

<script>
import VueScrollTo from "vue-scrollto";
import { createNamespacedHelpers } from 'vuex';
const { mapActions } = createNamespacedHelpers('annotations_ui');

export default {
  props: {
    enclosingAnnotationIds: {type: Array,
                             default: []}
  },
  computed: {
    id() {
      return this.$attrs.name || this.$attrs.id;
    },
    siblingId() {
      return (this.$attrs.href || "").slice(1);
    },
    relatedAnnotationIds() {
      return this.$store.getters['footnotes_ui/getById'](this.siblingId) || [];
    }
  },
  methods: {
    ...mapActions(['expandById']),
    handleClick() {
      this.expandById(this.relatedAnnotationIds);
      this.$nextTick(() => VueScrollTo.scrollTo(document.querySelector(`[id="${this.siblingId}"], [name="${this.siblingId}"]`)));
    }
  },
}
// I need to have the footnotes register their state, by ID, in vuex
// so that dependent links can expand their partner's annotations
</script>
