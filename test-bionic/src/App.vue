<script setup>

</script>

<template>

  <div class="pertama">1</div>
  <div class="kedua">
    <div class="kedua-2">2</div>
    <div class="kedua-3">3</div>
  </div>
  <div class="ketiga">
    <div class="ketiga-pertama">
      <div class="wrapping-ketiga-4">
        <div class="ketiga-4">4</div>
      </div>
      <div class="ketiga-5">
        <div class="ketiga-6">5</div>
        <div class="ketiga-6">6</div>
        <div class="ketiga-6">7</div>
      </div>
    </div>
    <div class="ketiga-kedua">
      <div class="ketiga-7">8</div>
      <div class="ketiga-7">9</div>
      <div class="ketiga-7">10</div>
    </div>
  </div>

</template>

<style scoped>
.pertama {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: blue;
  color: white;
  border: 5px solid black;
  padding: 10px 0;
}
.kedua {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: black;
  color: white;
}
.kedua-2 {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: blue;
  width: 50%;
  border: 5px solid black;
  padding: 10px 0;
}

.kedua-3 {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: blue;
  width: 50%;
  padding: 10px 0;
  border: 5px solid black;
}

.ketiga {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: black;
  color: white;
  width: 100%;
}

.ketiga-pertama {
  width: 55%;
}

.ketiga-kedua {
  width: 45%;
}

.wrapping-ketiga-4 {
  padding: 10px;
  background-color: blue;
  border: 5px solid black;
}

.ketiga-4 {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: red;
  padding: 50px 0;
  border: 8px solid black;
}

.ketiga-5 {
  display: flex;
}

.ketiga-6 {
  background-color: blue;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 5px solid black;
}


.ketiga-kedua {
  display: flex;
  flex-direction: column;
  background-color: blue;
  border: 5px solid black;
  padding: 10px;
  gap: 5px;
}

.ketiga-7 {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 98%;
  padding: 10px 0;
  background-color: red;
  border: 8px solid black;
}

@media (min-width: 1024px) {
}
</style>
