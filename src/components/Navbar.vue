<template>
  <nav class="navbar navbar-expand-lg bg-light">
    <a class="navbar-brand" href="#">Navbar</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <router-link to="/" class="nav-link">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/about" class="nav-link">About</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/share" class="nav-link">Share</router-link>
        </li>
      </ul>
    </div>
    <div class="d-flex">
      <router-link to="/login" v-show="!user" class="btn btn-outline-success" type="submit"
        >Giris</router-link
      >
      <router-link
        to="/logout"
        @click="handleLogut"
        v-show="user"
        class="btn btn-outline-danger"
        type="submit"
        >cikis</router-link
      >
    </div>
  </nav>
</template>

<script>
import getUser from "../composables/getUser";
import { auth } from "../firebase/config";
import { signOut } from "firebase/auth";
import { useRouter } from "vue-router";

export default {
  setup() {
    const { user } = getUser();
    const router = useRouter();
    const handleLogut = async () => {
      await signOut(auth)
        .then(() => {
          router.push({ name: "Login" });
        })
        .catch((error) => {
          console.log(error);
        });
    };
    return { user, handleLogut };
  },
};
</script>
