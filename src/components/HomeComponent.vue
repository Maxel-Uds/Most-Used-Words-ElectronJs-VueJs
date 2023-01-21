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
import { ipcRenderer } from 'electron'

export default {  
  data: function() {
    return {
      files: [],
      groupedWords: []
    }
  },
  components: {
    PillComponent
  },
  methods: {
    processSubtitles() {
      const paths = this.files.map(f => f.path)
      ipcRenderer.send('process-subtitles', paths)
      ipcRenderer.on('process-subtitles', (event, resp) => this.groupedWords = resp)
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