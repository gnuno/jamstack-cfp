<template>
  <Layout>
    <SubmissionList title="Envíos Aceptados" :issues="issues">
      Los envíos aceptados se agregan al repositorio como archivos json, después de mergear el pull request.
    </SubmissionList>
  </Layout>
</template>

<page-query>
    query {
    github {
      repository(owner: "gnuno", name: "gnuno-talks") {
        issues(last:20, labels: ["Accepted"], states:CLOSED) {
      edges {
        node {
          title
          bodyHTML
          url
          labels(first:5) {
            edges {
              node {
                id
                name
              }
            }
          }
        }
      }},
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
    issues() {
      console.log(this.$page.github.repository);
      let issues = [];
      this.$page.github.repository.issues.edges.map((e, index) => {
        issues.push({id:index, html: e.node.bodyHTML})
      })
      return issues;
    },
  },
};
</script>

<style lang="scss" scoped></style>
