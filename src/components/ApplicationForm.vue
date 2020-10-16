<template>
  <form @submit.prevent="handleSubmit">
    <h2
      class="text-3xl leading-9 tracking-tight font-extrabold text-gray-900 sm:text-4xl sm:leading-10"
    >
      Envío
    </h2>
    <div class="mt-3 sm:mt-4">
      <p class="text-xl leading-7 text-gray-600">
        El envío de este formulario activará un pull request usando GitHub Actions,
        los pull request se mostrará en la pestaña
        <g-link
          to="/pending"
          class="underline text-indigo-600 hover:text-indigo-900 transition ease-in-out duration-150"
          >Envíos pendientes</g-link
        >. Una vez que se haya mergeado, podrá ver su envío en la lista de
        <g-link
          to="/submissions"
          class="underline text-indigo-600 hover:text-indigo-900 transition ease-in-out duration-150"
          >Envíos Aceptados</g-link
        >.
      </p>
    </div>
    <Alert v-if="success" theme="success">
      ¡Formulario enviado con éxito! 
      <ExternalLink
        href="https://github.com/gnuno/gnuno-talks/actions?query=workflow%3A%22Handle+Submission%22"
        >Compruebe cómo las acciones de GitHub están manejando su envío correctamente</ExternalLink
      >. En unos minutos, aparecerá en este sitio, listado como Enviós Pendientes.
    </Alert>
    <template v-else>
      <Field id="name" :error="nameError" :value.sync="name">
        Tu nombre
      </Field>
      <Field id="title" :error="titleError" :value.sync="title">
        Titulo de la charla
      </Field>
      <Field id="description" :value.sync="description" type="textarea">
        Descripción de la charla
      </Field>
      <label class="flex text-sm leading-5 text-gray-700 mt-5">
        <input type="checkbox" required class="mt-1 mr-2" />
        Entiendo que esta información se alojará en un repositorio público y no he incluido datos confidenciales en ninguno de los campos.
      </label>
      <Alert v-if="error" theme="error">
        Oops, esto es vergonzoso, pero algo salió mal al enviar el formulario.
      </Alert>
      <Btn :disabled="loading">
        Enviar
      </Btn>
    </template>
  </form>
</template>

<script>
import axios from "axios";

import Alert from "~/components/Alert";
import Btn from "~/components/Btn";
import ExternalLink from "~/components/ExternalLink";
import Field from "~/components/Field";

export default {
  data() {
    return {
      name: "",
      title: "",
      description: "",
      loading: false,
      error: false,
      success: false,
    };
  },
  components: {
    Alert,
    Btn,
    ExternalLink,
    Field,
  },
  computed: {
    nameError() {
      if (this.name && this.invalidString(this.name)) {
        return "Evite el uso de caracteres especiales";
      }
      return "";
    },
    titleError() {
      if (this.title && this.invalidString(this.title)) {
        return "Evite el uso de caracteres especiales";
      }
      return "";
    },
  },
  methods: {
    invalidString(str) {
      return !/^(?!.*(#|>))/.test(str);
    },
    handleSubmit() {
      this.loading = true;
      this.error = false;
      this.success = false;
      axios
        .post(process.env.GRIDSOME_LAMBDA, {
          name: this.name,
          title: this.title,
          description: this.description,
        })
        .then(() => {
          this.success = true;
          this.name = "";
          this.title = "";
          this.description = "";
          this.loading = false;
        })
        .catch(() => {
          this.loading = false;
          this.error = true;
        });
    },
  },
};
</script>
