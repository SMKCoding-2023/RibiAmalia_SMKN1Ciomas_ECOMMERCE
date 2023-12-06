<template>
  <container>
    <div class="text">
    <h1>Healthy Food 
      <br>& Organic Market</h1>
    <h4>All Natural Product</h4>
    <div class="mb-6 my-6 flex gap-6">
          <NuxtLink
            to="/product"
            class="bg-green-500 text-white flex justify-center items-center px-3 py-2 rounded-lg"
          >
            Lihat Selengkapnya
    </NuxtLink>
         
        </div>
    </div>

    <div class="image">
    <img src="../public/images/buah.jpg" alt="">
    </div>
  </container>
</template>

<style>


container .text h1 {
  font-size: 7vh;
  margin-top: auto;
  margin-top: 20%;
  font-weight: bold;
}

container .image {
  align-items: end;
  align-content: flex-end;
  float: right;
}

container {
  display: flex;
  height: 100%;
  padding: 5%;
  flex-wrap: wrap;
  justify-content: space-between;
  
}

@media (max-width:900px) {
  container .text h1 {
  margin-top: 10%;
  }
  
}

</style>