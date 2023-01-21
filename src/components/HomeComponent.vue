<template>
  <v-container fluid>
    <v-form>
      <v-file-input multiple chips v-model="files" label="Selecione as legendas..." prepend-icon="mdi-message-text" outlined append-icon="mdi-send" @click:append="processSubtitles"/>
    </v-form>

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
      files: [],
      groupedWords: [
        { name: 'you', amount: 900 },
        { name: 'he', amount: 600 },
        { name: 'i', amount: 700 },
      ]
    }
  },
  components: {
    PillComponent
  },
  methods: {
    processSubtitles() {
      alert(this.files)
    }
  }
}
</script>

<style>
  .pills {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
</style>