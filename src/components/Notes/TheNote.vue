<template>
  <div class="card mb-4">
    <div class="card-content">
      <div class="content">
        {{ note.content }}
      </div>
      <div class="characters has-text-right">
        <small>
          {{ characterLength }}
          {{ characterLength - 1 ? "characters" : "character" }}
        </small>
      </div>
    </div>
    <footer class="card-footer">
      <!-- :to="`/editNote/${note.id}`" -->
      <RouterLink
        :to="{ name: 'edit-note', params: { id: note.id } }"
        @click.prevent=""
        href="#"
        class="card-footer-item"
        >Edit</RouterLink
      >
      <a
        @click.prevent="storeNotes.deleteNote(note.id)"
        href="#"
        class="card-footer-item"
        >Delete</a
      >
    </footer>
  </div>
</template>

<script setup>
import { defineProps, computed } from "vue";
import { useStoreNotes } from "@/stores/storeNotes";

//store

const storeNotes = useStoreNotes();

const props = defineProps({
  note: {
    type: Object,
    required: true,
  },
});

// const emits = defineEmits(["deleteClicked"]);

//character length

const characterLength = computed(() => {
  return props.note.content.length;
});
</script>
