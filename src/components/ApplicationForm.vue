<template>
  <form @submit.prevent="handleSubmit">
    <h2
      class="text-3xl leading-9 tracking-tight font-extrabold text-gray-900 sm:text-4xl sm:leading-10"
    >
      Envío
    </h2>
    <div class="mt-3 sm:mt-4">
      <p class="text-xl leading-7 text-gray-600">
        El envío de este formulario activará un Issue usando GitHub
        Actions, los Issues se mostrará en la pestaña
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
        >Compruebe cómo las acciones de GitHub están manejando su envío
        correctamente</ExternalLink
      >. En unos minutos, aparecerá en este sitio, listado como Enviós
      Pendientes.
    </Alert>
    <template v-else>
      <Field id="speaker" :error="nameError" :value.sync="speaker">
        Tu nombre
      </Field>
      <Field id="title" :error="titleError" :value.sync="title">
        Titulo de la charla
      </Field>
      <Field id="description" :value.sync="description" type="textarea">
        Descripción de la charla
      </Field>
      <Field id="bio" :value.sync="bio" type="textarea">
        Mini descripción sobre quién sos, que hacés, cuáles son tus gustos,
        profesión, etc. Lo que quieras contar, ¡dale creatividad!
      </Field>
      <Field id="twitter" :value.sync="twitter"  :optional="true">
        Usuario de Twitter (Si tenés)
      </Field>
      <Field id="instagram" :value.sync="instagram"  :optional="true">
        Usuario de Instagram (Si tenés)
      </Field>
      <Field id="slides" :value.sync="slides" :optional="true">
        URL de la presentación (Si tenés).
      </Field>
      <Field id="repo" :value.sync="repo"  :optional="true">
        URL del repositorio con el código de la charla (Si tenés)
      </Field>
      <Field id="ready" :value.sync="ready">
        ¿Tenés la charla preparada? (Sí, No todavía, Necesito ayuda para
        prepararla porque solo es una idea
      </Field>
      <Field id="when" :value.sync="when">
        ¿A partir de qué mes la podrías dar?
      </Field>
      <label class="flex text-sm leading-5 text-gray-700 mt-5">
        <input type="checkbox" required class="mt-1 mr-2" />
        Entiendo que esta información se alojará en un repositorio público y no
        he incluido datos confidenciales en ninguno de los campos.
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
      speaker: "",
      title: "",
      description: "",
      bio: "",
      twitter: "",
      instagram: "",
      slides: "",
      repo: "",
      ready: "",
      when: "",
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
      if (this.speaker && this.invalidString(this.speaker)) {
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
          speaker: this.speaker,
          title: this.title,
          description: this.description,
          bio: this.bio,
          twitter: this.twitter,
          instagram: this.instagram,
          slides: this.slides,
          repo: this.repo,
          ready: this.ready,
          when: this.when,
        })
        .then(() => {
          this.success = true;
          this.speaker = "";
          this.title = "";
          this.description = "";
          this.bio = "";
          this.twitter = "";
          this.instagram = "";
          this.slides = "";
          this.repo = "";
          this.ready = "";
          this.when = "";
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
