<template>
  <div class="mb-12">
    <v-row>
      <v-col md="7">
        <p class="font-weight-medium mb-1">How many rooms (bedroom)?</p>
        <v-select outlined :items="rooms" v-model="room" label="Select bedroom" />
        <p class="font-weight-medium mb-1">Number of Bathrooms?</p>
        <v-select outlined v-model="bathroom" :items="bathrooms" label="Select bathroom" />
        <p class="font-weight-medium mb-1">Average room size (optional)</p>
        <div class="d-flex">
          <v-text-field type="number" v-model="averageRoomSize" placeholder="0" outlined />
          <v-select outlined :items="sizes" v-model="size" />
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data: () => ({
    rooms: [
      'Single room',
      'Self contain',
      '1 bedroom',
      '2 bedrooms',
      '3 bedrooms',
      '4 bedrooms',
      '6 bedrooms',
      '7 bedrooms',
      '8 bedrooms',
      '9 bedrooms',
      '10 bedrooms',
      '11 bedrooms',
      '12 bedrooms',
      '13 bedrooms',
      '14 bedrooms',
      '15 bedrooms',
      '16 bedrooms',
      '17 bedrooms',
      '18 bedrooms',
      '19 bedrooms',
      '20 bedrooms',
    ],
    bathrooms: [
      '1 bathroom',
      '2 bathrooms',
      '3 bathrooms',
      '4 bathrooms',
      '5 bathrooms',
      '6 bathrooms',
      '7 bathrooms',
      '8 bathrooms',
      '9 bathrooms',
      '10 bathrooms',
      '11 bathrooms',
      '12 bathrooms',
      '13 bathrooms',
      '14 bathrooms',
      '15 bathrooms',
      '16 bathrooms',
      '17 bathrooms',
      '18 bathrooms',
      '19 bathrooms',
      '20 bathrooms',
    ],
    size: 'square feet',
    sizes: ['square meter', 'square feet'],
  }),
  computed: {
    room: {
      get() {
        return this.$store.state.post.list.room;
      },
      set(value) {
        this.$store.commit('updateRoom', value);
        sessionStorage.room = value;
      },
    },
    bathroom: {
      get() {
        return this.$store.state.post.list.bathroom;
      },
      set(value) {
        this.$store.commit('updateBathroom', value);
        sessionStorage.bathroom = value;
      },
    },
    averageRoomSize: {
      get() {
        return this.$store.state.post.list.averageRoomSize;
      },
      set(value) {
        this.$store.commit('updateAverageRoomSize', value);
        sessionStorage.averageRoomSize = value;
      },
    },
  },
};
</script>
