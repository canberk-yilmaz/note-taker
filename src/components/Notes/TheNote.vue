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
      <a @click.prevent="" href="#" class="card-footer-item">Edit</a>
      <a @click.prevent="handleDeleteClicked" href="#" class="card-footer-item"
        >Delete</a
      >
    </footer>
  </div>
</template>

<script setup>
import { defineProps, computed } from "vue";

const props = defineProps({
  note: {
    type: Object,
    required: true,
  },
});

const emits = defineEmits(["deleteClicked"]);

//character length

const characterLength = computed(() => {
  return props.note.content.length;
});

const handleDeleteClicked = () => {
  emits("deleteClicked", props.note.id);
};
</script>
