<template>
  <div class="py-5 border-t-2 border-gray-200">
    <div class="block">
      <span v-html="issue.html" class="block mt-3 text-base leading-6 text-gray-600"
        ></span
      >
    </div>
  </div>
</template>
<style>
ul{
list-style: disc;
padding: revert;
}
</style>

<script>
export default {
  props: {
    issue: {
      type: Object,
      required: false,
    },
  },
};
</script>
