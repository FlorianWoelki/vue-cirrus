<template>
  <section class="toasts">
    <InputFields />

    <v-space xlarge />

    <TextAreas />

    <v-space xlarge />

    <h6>API (props)</h6>
    <API :data=props />

    <v-space
      xlarge
      v-for="i in 2"
      :key=i
    />
  </section>
</template>

<script>
import InputFields from './VInputFields.vue';
import TextAreas from './VTextAreas.vue';
import API from '@/views/Components/API.vue';

export default {
  components: {
    API,
    InputFields,
    TextAreas,
  },
  data() {
    return {
      props: {
        noControl: ['noControl', 'false', 'Boolean', '(InputField) NoControl for this input field'],
        select: ['select', 'false', 'Boolean', '(InputField) Selectable input field'],
        type: ['type', 'text', 'String', '(InputField) Type of the input field'],
        placeholder: ['placeholder', 'empty', 'String', '(InputField/TextArea) Placeholder'],
        title: ['title', 'empty', 'String', '(InputField) Title for the input field'],
        subtitle: ['subtitle', 'empty', 'String', '(InputField) Subtitle for the input field'],
        subtitleInline: ['subtitleInline', 'false', 'Boolean', '(InputField) Subtitle is inline with the input field'],
        infoText: ['infoText', 'empty', 'String', '(InputField) Information text for the input field'],
        focused: ['focused', 'false', 'Boolean', '(InputField) Input field is focused'],
        success: ['success', 'false', 'Boolean', '(InputField) Success colored input field'],
        error: ['error', 'false', 'Boolean', '(InputField) Error colored input field'],
        xsmall: ['xsmall', 'false', 'Boolean', '(InputField) xsmall size'],
        small: ['small', 'false', 'Boolean', '(InputField) small size'],
        large: ['large', 'false', 'Boolean', '(InputField) large size'],
        xlarge: ['xlarge', 'false', 'Boolean', '(InputField) xlarge size'],
      },
    };
  },
};
</script>
