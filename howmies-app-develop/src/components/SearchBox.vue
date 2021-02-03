<template>
    <v-card flat class="mt-3">
        <v-container>
            <v-row wrap>
              <v-col cols="12" xs="12">
                <v-card-title class="pb-0">
                  <h2 class="headline font-weight-medium">
                    Let's help you find a <em>home</em>
                  </h2>
                </v-card-title>
              </v-col>
              <v-col cols="12" xs="12">
                <v-card-text class="pt-2">
                  <SearchForm />
                </v-card-text>
              </v-col>
            </v-row>
        </v-container>
    </v-card>
</template>

<script>

import SearchForm from '@/components/SearchForm.vue';

export default {
  components: { SearchForm },
};
</script>

<style scoped>

</style>
