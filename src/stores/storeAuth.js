// stores/counter.js
import { defineStore } from "pinia";
import { auth } from "@/js/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import { useStoreNotes } from "@/stores/storeNotes";

export const useStoreAuth = defineStore("storeAuth", {
  state: () => {
    return {
      user: {},
    };
  },
  actions: {
    init() {
      const storeNotes = useStoreNotes();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          this.user.id = user.uid;
          this.user.email = user.email;
          this.router.push("/");
          storeNotes.init();
        } else {
          this.user = {};
          this.router.replace("/auth");
        }
      });
    },
    registerUser(credentials) {
      createUserWithEmailAndPassword(
        auth,
        credentials.email,
        credentials.password
      )
        .then((userCredential) => {
          // eslint-disable-next-line no-unused-vars
          const user = userCredential.user;
          // console.log("user: ", user);
        })
        .catch((error) => {
          console.log(error.message);
        });
    },
    logoutUser() {
      signOut(auth)
        .then(() => {
          // console.log("user signed out");
        })
        .catch((error) => {
          console.log(error.message);
        });
    },
    loginUser(credentials) {
      // console.log(credentials);
      signInWithEmailAndPassword(auth, credentials.email, credentials.password)
        .then((userCredential) => {
          // eslint-disable-next-line no-unused-vars
          const user = userCredential.user;
          // console.log("user: ", user);
        })
        .catch((error) => {
          console.log(error.message);
        });
    },
  },
});
