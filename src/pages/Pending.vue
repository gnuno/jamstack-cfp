<template>
  <Layout>
    <SubmissionList title="Envíos pendientes" :issues="issues">
      Los envíos pendientes son los <ExternalLink
        href="https://github.com/gnuno/gnuno-talks/issues?q=is%3Aopen+is%3Aissue+label%3Atalk"
        >Issues abiertos con etiqueta "Talk"</ExternalLink
      >. Al agregar la API de GitHub como 
      <ExternalLink href="https://gridsome.org/plugins/@gridsome/source-graphql"
        >fuente de GraphQL</ExternalLink
      > podemos compilarlos estáticamente. Los Issues estan siendo consultados mediante una API de Github para mostrar siempre las últimas presentaciones.
    </SubmissionList>
  </Layout>
</template>

<page-query>
  query {
    github {
      repository(owner: "gnuno", name: "gnuno-talks") {
        issues(last:20, states:OPEN) {
      edges {
        node {
          bodyHTML
          }
        }
      }},
      }
  }
</page-query>

<script>
import ExternalLink from "~/components/ExternalLink";
import SubmissionList from "~/components/SubmissionList";

export default {
  components: {
    ExternalLink,
    SubmissionList,
  },
  computed: {
    issues() {
      let issues = [];
      this.$page.github.repository.issues.edges.map((e, index) => {
        issues.push({id:index, html: e.node.bodyHTML})
      })
      return issues;
    },
}};
</script>

<style lang="scss" scoped></style>
