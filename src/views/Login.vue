<template>
  <main class="form-signin m-auto w-100">
    <div class="col-12">
      <button @click="handleLogin" class="btn btn-primary">
        <i class="bi bi-google"></i>Ile Giris
      </button>
    </div>
  </main>
</template>

<script>
import { auth } from "../firebase/config";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useRouter } from "vue-router";

export default {
  setup() {
    const router = useRouter();
    const handleLogin = () => {
      const provider = new GoogleAuthProvider();
      signInWithPopup(auth, provider)
        .then((result) => {
          console.log(result);
          router.push({ name: "home" });
        })
        .catch((error) => {
          console.log(error);
        });
    };

    return {
      handleLogin,
    };
  },
};
</script>

<style scoped>
.form-signin {
  max-width: 330px;
  padding: 15px;
  margin: 0 auto;
}
.form-signin .btn {
  width: 100%;
}
.form-signin .btn i {
  margin-right: 10px;
}
</style>
