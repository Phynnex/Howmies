<template>
  <div class="text-center my-4">
    <template>
      <v-file-input
        v-model="imageUrl"
        color="teal"
        counter
        label="Add photos"
        multiple
        placeholder="Select photo"
        prepend-icon="mdi-paperclip"
        accept="image/*"
        outlined
        :show-size="1000"
      >
        <template v-slot:selection="{ index, text }">
          <v-chip v-if="index < 2" color="deep-purple accent-3" dark label small>{{ text }}</v-chip>
          <span
            v-else-if="index === 2"
            class="overline grey--text text--darken-3 mx-2"
          >+{{ imageUrl.length - 2 }} File(s)</span>
        </template>
      </v-file-input>
    </template>
    <!-- <v-img :src="imageUrl[0]" /> -->
  </div>
</template>

<script>
export default {
  computed: {
    imageUrl: {
      get() {
        return this.$store.state.post.imageUrl;
      },
      set(value) {
        this.$store.commit('updateImageUrl', value);
      },
    },
  },
};
</script>
