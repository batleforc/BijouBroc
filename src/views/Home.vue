<template>
  <div class="home">
    {{ data?.accueille.Slogan }}
  </div>
</template>

<script lang="ts">
import { useQuery } from "villus";
import { defineComponent } from "vue";
import {getAccueille} from '../query/Accueille'
export default defineComponent({
  name: "Home",
  setup(){
    const {data} = useQuery({
      query:getAccueille
    })
    return {data}
  },
  updated(){
    document.title = document.title!== this.data?.accueille.Titre ?this.data.accueille.Titre:""
  },
  data(){
    return{
      test : String(process.env.VUE_APP_TEST),
      hello:""

    }
  }
});
</script>
