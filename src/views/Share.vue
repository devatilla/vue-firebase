<template>
  <main class="form-signin m-auto w-100">
    <div class="col-12">
      <button class="btn btn-primary"><i class="bi bi-google"></i>Paylas</button>
    </div>
    <div class="container">
      <h1>Yorum Yap</h1>

      <label for="comment">Yorumunuz:</label><br />
      <textarea v-model="post" id="comment" name="comment" rows="4" required></textarea><br />
      <button @click="handleClick">Gönder</button>
    </div>

    <div id="comments" class="container">
      <h2>Yorumlar</h2>
      <ul id="comment-list">
        <li v-for="p in posts" :key="p.id" class="comment">
          <strong>{{ p.gUser }}:</strong>
          <p>{{ p.content }}</p>
          <strong>{{ p.createdAt }}</strong>
          <span>{{ p.posts.length }}</span>
          <span @click="handleDelete(p.id)" class="badge bg-danger mx-2"
            ><i class="bi bi-x"></i
          ></span>
        </li>
      </ul>
    </div>
  </main>
</template>

<script>
import { ref, onMounted } from "vue";
import getUser from "../composables/getUser";
import {
  addDoc,
  collection,
  serverTimestamp,
  onSnapshot,
  query,
  where,
  deleteDoc,
  DocumentChangeType,
  doc,
} from "firebase/firestore";
import { db } from "../firebase/config";
import moment from "moment";

export default {
  setup() {
    const { user } = getUser();
    const post = ref("");
    const posts = ref([]);
    moment.locale("tr");

    const handleClick = async () => {
      if (post.value) {
        await addDoc(collection(db, "comments"), {
          content: post.value,
          gUser: user.value.displayName,
          userId: user.value.uid,
          createdAt: serverTimestamp(),
          posts: [],
        });
        post.value = "";
      }
    };

    const handleDelete = async (id) => {
      await deleteDoc(doc(db, "comments", id));
      console.log(id);
    };

    onMounted(() => {
      const q = query(collection(db, "comments"), where("gUser", "==", user.value.displayName));
      onSnapshot(q, (querySnapshot) => {
        let dizi = [];
        querySnapshot.forEach((doc) => {
          const createdAt = doc.data().createdAt;
          if (createdAt) {
            dizi.push({
              id: doc.id,
              ...doc.data(),
              createdAt: moment(createdAt.toDate()).format("LLL"),
            });
          }
        });
        posts.value = dizi;
      });
    });

    return {
      post,
      handleClick,
      posts,
      handleDelete,
    };
  },
};
</script>

<style scoped>
.container {
  width: 80%;
  margin: 0 auto;
  padding: 20px;
}

form {
  margin-bottom: 20px;
}

label {
  font-weight: bold;
}

textarea {
  width: 100%;
  resize: vertical;
}

button {
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

#comment-list {
  list-style-type: none;
  padding: 0;
}

.comment {
  border-bottom: 1px solid #ccc;
  padding: 10px 0;
}

.comment strong {
  font-weight: bold;
}

.comment p {
  margin: 5px 0;
}
</style>
