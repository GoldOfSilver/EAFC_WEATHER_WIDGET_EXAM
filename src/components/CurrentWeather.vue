<script setup>
const props = defineProps({
  data: Object,
});
</script>

<template>
  <section
    class="bg-white bg-opacity-75 rounded-lg shadow p-5 mb-6 grow flex flex-col"
    style="flex-grow: 1"
  >
    <header class="mb-4">
      <h2 class="font-bold text-xl">Météo Instantanée</h2>
    </header>
    <article
      v-if="props.data"
      class="flex items-center justify-between grow"
      style="flex-grow: 1"
    >
      <div>
        <h3 class="text-lg font-semibold">
          {{ props.data.cityName }}
        </h3>
        <time v-if="props.data.currentDateTime" class="text-sm text-gray-600">
          {{ props.data.currentDateTime.hours }}:{{
            props.data.currentDateTime.minutes
          }}
          {{ props.data.currentDateTime.period }} <br />
          {{ props.data.currentDateTime.day }}
          {{ props.data.currentDateTime.month }}
          {{ props.data.currentDateTime.year }}
        </time>
      </div>
      <div class="flex">
        <div class="text-right">
          <p class="text-5xl">{{ props.data.temp }}°C</p>
          <p class="text-lg text-gray-600">
            {{ props.data.description }}
          </p>
        </div>
        <div
          class="w-10 h-10 bg-blue-300 rounded-full mx-auto my-2 ml-2 w-20 h-20"
          :style="{
            backgroundImage: `url('${props.data.iconUrl}')`,
            backgroundSize: 'cover',
          }"
        ></div>
      </div>
    </article>
  </section>
</template>