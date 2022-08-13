<template>
  <div class="stats">
    <table class="table is-fullwidth">
      <thead>
        <tr>
          <th>Stat</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Number of Notes</td>
          <td>{{ storeNotes.getTotalNoteCount }}</td>
        </tr>
        <tr>
          <td>Number of Characters (of all notes)</td>
          <td>{{ storeNotes.getTotalCharacterCount }}</td>
        </tr>
      </tbody>
    </table>
    <input
      class="input"
      type="text"
      placeholder="Do you like our app?"
      v-autofocus
    />
  </div>
</template>

<script setup>
import { useStoreNotes } from "@/stores/storeNotes.js";
import { vAutofocus } from "@/directives/vAutofocus.js";

const storeNotes = useStoreNotes();
</script>
