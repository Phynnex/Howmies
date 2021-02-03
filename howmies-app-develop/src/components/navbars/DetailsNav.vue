<template>
  <v-app-bar app color="white" flat>
    <v-btn icon @click="$router.go(-1)">
      <v-icon>mdi-arrow-left</v-icon>
    </v-btn>

    <v-spacer></v-spacer>

    <v-btn icon>
      <v-icon>mdi-heart-outline</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>mdi-share-outline</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>mdi-dots-vertical</v-icon>
    </v-btn>
  </v-app-bar>
</template>
