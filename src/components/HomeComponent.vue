<template>
  <v-container fluid>
    <div class="pills">
      <PillComponent v-for="word in groupedWords" :key="word.name" :name="word.name" :amount="word.amount"/>
    </div>
  </v-container>
</template>

<script>
import PillComponent from './PillComponent'

export default {  
  data: function() {
    return {
      groupedWords: [
        { name: 'you', amount: 900 },
        { name: 'he', amount: 600 },
        { name: 'i', amount: 700 },
      ]
    }
  },
  components: {
    PillComponent
  }
}
</script>

<style>

</style>