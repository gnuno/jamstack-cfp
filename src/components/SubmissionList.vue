<template>
  <section class="my-5">
    <h2
      class="text-3xl leading-9 tracking-tight font-extrabold text-gray-900 sm:text-4xl sm:leading-10"
    >
      {{ title }}
    </h2>
    <div class="mt-3 sm:mt-4">
      <p class="text-xl leading-7 text-gray-600">
        <slot />
      </p>
    </div>
    <div class="mt-6" v-if="issues">
          <Submission
        v-for="issue in issues"
        :key="issue.id"
        :issue="issue"
      />
    </div>
  </section>
</template>

<script>
import Submission from "~/components/Submission";

export default {
  components: {
    Submission,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    issues: {
      type: Array,
      required: false,
    }
  },
};
</script>
