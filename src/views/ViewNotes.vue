<template>
  <div class="notes">
    <div class="card has-background-success-dark p-4 mb-5">
      <div class="field">
        <div class="control">
          <textarea
            v-model="newNote"
            class="textarea"
            placeholder="Add a new note"
            ref="newNoteRef"
          />
        </div>
      </div>

      <div class="field is-grouped is-grouped-right">
        <div class="control">
          <button
            @click="addNote"
            class="button is-link has-background-success"
            :disabled="!newNote"
          >
            Add New Note
          </button>
        </div>
      </div>
    </div>
    <div class="card mb-4" v-for="note in notes" :key="note.id">
      <div class="card-content">
        <div class="content">
          {{ note.content }}
        </div>
      </div>
      <footer class="card-footer">
        <a href="#" class="card-footer-item">Edit</a>
        <a href="#" class="card-footer-item">Delete</a>
      </footer>
    </div>
  </div>
</template>

<script setup>
//imports
import { ref } from "vue";

//notes

const newNote = ref("");
const newNoteRef = ref("");

const notes = ref([
  {
    id: "id1",
    content:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Animi nisi delectus, tempora id fugiat ex impedit, esse porro saepe necessitatibus blanditiis earum atque eius magnam facere consectetur aliquam voluptates mollitia.",
  },
  {
    id: "id2",
    content: "Shorter note",
  },
]);

const addNote = () => {
  let newDate = new Date().getTime();
  let id = newDate.toString();

  let note = {
    id,
    content: newNote.value,
  };

  notes.value.unshift(note);
  newNote.value = "";
  newNoteRef.value.focus();
};
</script>
