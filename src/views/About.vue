<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button v-on:click="api">test</button>
  </div>
</template>

<script>
export default {
  name: "about",
  methods: {
    api: function () {
      this.axios.get("/api/user").then((response) => {
          console.log(response, "success"); // 成功的返回
        })
        .catch((error) => console.log(error, "error")); // 失败的返回
    },
  },
};
</script>
