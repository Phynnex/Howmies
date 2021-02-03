<template>
  <v-container>
    <div style="max-width: 45em" class="secondary--text text--lighten-2">
      <h1
        class="headline secondary--text text--lighten-1 font-weight-bold"
        :class="{'text-center title': $vuetify.breakpoint.smAndDown}"
      >Add photo of property</h1>
      <v-alert type="info" :outlined="$vuetify.breakpoint.smAndDown" border="left" color="teal" class="my-3">
        Upload at least 1 photo
        <v-subheader class="pa-0">You will also be able to upload more photos after publishing</v-subheader>
      </v-alert>
      <UploadPhotoBtn />
    </div>
  </v-container>
</template>

<script>
const UploadPhotoBtn = () => import('@/components/UploadPhotoBtn.vue');

export default {
  components: { UploadPhotoBtn },
};
</script>
