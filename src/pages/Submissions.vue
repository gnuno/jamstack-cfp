<template>
  <Layout>
    <SubmissionList title="Envíos Aceptados" :submissions="submissions">
      Los envíos aceptados se agregan al repositorio como archivos json, después de mergear el pull request.
    </SubmissionList>
  </Layout>
</template>

<page-query>
  query {
    submissions: allSubmission {
      edges {
        node {
          id
          date
          description
          name
          title
        }
      }
    }
  }
</page-query>

<script>
import SubmissionList from "~/components/SubmissionList";

export default {
  components: {
    SubmissionList,
  },
  computed: {
    submissions() {
      return this.$page.submissions.edges.map((e) => e.node);
    },
  },
};
</script>

<style lang="scss" scoped></style>
