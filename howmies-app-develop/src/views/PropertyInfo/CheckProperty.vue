<template>
  <v-container class="mb-12" :text-center="$vuetify.breakpoint.smAndDown">
    <div class="text-center" style="max-width: 47em">
      <h2
        class="secondary--text text--lighten-1 mt-3"
        :class="{'title font-weight-bold': $vuetify.breakpoint.smAndDown}"
      >Does this sound like your property?</h2>
    </div>
    <v-row>
      <v-col xs="12" md="6" offset-md="1">
        <v-card flat class="text-center">
          <v-card-text>
            <v-img :src="require('@/assets/svg/for_sale.svg')" alt="house for sale" />
            <p
              v-if="$store.state.post.list.propertyType === 'Apartment'"
              class="title mt-6 secondary--text text--lighten-2 mx-auto"
            >
              An <span class="teal--text">apartment</span> for
              <strong class="teal--text">{{$store.state.post.list.statusType}}</strong>, is a housing unit (flat or self contain) that occupies only part of a larger building.
            </p>
            <p
              v-if="$store.state.post.list.propertyType === 'Hotel'"
              class="title mt-6 secondary--text text--lighten-2 mx-auto"
            >
              A <span class="teal--text">hotel</span> is an establishment that provides paid lodging on a short-term basis.
            </p>
            <p
              v-if="$store.state.post.list.propertyType === 'House'"
              class="title mt-6 secondary--text text--lighten-2 mx-auto"
            >
              A
              <span class="teal--text">house</span> (<strong class="teal--text">{{$store.state.post.list.statusType}}</strong>
              ),is a building that functions as a home, it is a stand alone living space (entire building) used as {{$store.state.post.list.statusType==='sale'?'a permament':''}} residence for an individual, family, household.
            </p>
            <p
              v-if="$store.state.post.list.propertyType === 'Land'"
              class="title mt-6 secondary--text text--lighten-2 mx-auto"
            >A piece of landed property</p>
            <p
              v-if="$store.state.post.list.propertyType === 'Venue'"
              class="title mt-6 secondary--text text--lighten-2 mx-auto"
            >
              A
              <span class="teal--text">venue</span> is the location at which an event takes place
            </p>
            <!-- <p
              v-if="$store.state.post.list.propertyType === 'Store'"
              class="title mt-6 secondary--text text--lighten-2 mx-auto"
            >
              A
              <span class="teal--text">store</span> may refer to a shop or ware house where merchandise is sold or stored.
            </p>
            <p
              v-if="$store.state.post.list.propertyType === 'Office'"
              class="title mt-6 secondary--text text--lighten-2 mx-auto"
            >
              An
              <span class="teal--text">Office</span> is a building where an organization's staffs perform administrative work.
            </p> -->
          </v-card-text>
          <v-card-actions>
            <v-row>
              <v-col class="py-0 mt-1" cols="12">
                <v-btn
                  class="text-none white--text"
                  color="teal"
                  min-width="250"
                  large
                  @click="$router.push('contact-details')"
                >Continue</v-btn>
              </v-col>
              <v-col cols="12">
                <v-btn
                  class="text-none"
                  color="teal"
                  large
                  outlined
                  min-width="250"
                  @click="$router.go(-1)"
                >No, i need to make a change</v-btn>
              </v-col>
            </v-row>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
