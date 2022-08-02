// stores/counter.js
import { defineStore } from "pinia";

export const useStoreNotes = defineStore("storeNotes", {
  state: () => {
    return {
      notes: [
        {
          id: "id1",
          content:
            "lorem ipsum dolor sit amet consectetur adipisicing elit. Animi nisi delectus, tempora id fugiat ex impedit, esse porro saepe necessitatibus blanditiis earum atque eius magnam facere consectetur aliquam voluptates mollitia.",
        },
        {
          id: "id2",
          content: "Shorter note",
        },
      ],
    };
  },
  actions: {
    addNote(newNoteContent) {
      let newDate = new Date().getTime();
      let id = newDate.toString();

      let note = {
        id,
        content: newNoteContent,
      };

      this.notes.unshift(note);
    },

    deleteNote(idToDelete) {
      this.notes = this.notes.filter((note) => note.id !== idToDelete);
    },
  },
});
