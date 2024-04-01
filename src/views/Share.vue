<template>
  <main class="form-signin m-auto w-100">
    <div class="col-12">
      <button @click="handleShare" class="btn btn-primary">
        <i class="bi bi-google"></i>Paylas
      </button>
    </div>
    <div class="container">
      <h1>Yorum Yap</h1>
      <form id="comment-form">
        <label for="name">İsim:</label><br />
        <input type="text" id="name" name="name" required /><br />
        <label for="comment">Yorumunuz:</label><br />
        <textarea id="comment" name="comment" rows="4" required></textarea><br />
        <button type="submit">Gönder</button>
      </form>
    </div>

    <div id="comments" class="container">
      <h2>Yorumlar</h2>
      <ul id="comment-list">
        <li class="comment">
          <strong>Ahmet:</strong>
          <p>Harika bir yazı, teşekkürler!</p>
        </li>
        <li class="comment">
          <strong>Ayşe:</strong>
          <p>Çok ilginç bir konu, ben de katılıyorum.</p>
        </li>
        <li class="comment">
          <strong>Mehmet:</strong>
          <p>Yazıyı çok beğendim, ellerinize sağlık.</p>
        </li>
      </ul>
    </div>
  </main>
</template>

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
