<template>
  <Layout>
    <SubmissionList title="Envíos pendientes" :submissions="submissions">
      Los envíos pendientes son los <ExternalLink
        href="https://github.com/gnuno/gnuno-talks/pulls?q=is%3Apr+is%3Aopen+label%3Asubmission"
        >pull requests</ExternalLink
      >. Al agregar la API de GitHub como 
      <ExternalLink href="https://gridsome.org/plugins/@gridsome/source-graphql"
        >fuente de GraphQL</ExternalLink
      > podemos compilarlos estáticamente. Una deploy se activa después de que se abre un nuevo RP para mostrar siempre las últimas presentaciones.
    </SubmissionList>
  </Layout>
</template>

<page-query>
  query {
    github {
      repository(owner: "gnuno", name: "gnuno-talks") {
        pullRequests(last: 100, labels: "submission", states: OPEN) {
          edges {
            node {
              id
              body
              createdAt
            }
          }
        }
      }
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
    submissions() {
      return this.$page.github.repository.pullRequests.edges.map((e) => {
        const [_, title, name, description] = e.node.body.match(
          /# (.+)\n## by (.+)\n> ((.|\n)+)/
        );

        return {
          id: e.node.id,
          date: e.node.createdAt,
          description,
          name,
          title,
        };
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
