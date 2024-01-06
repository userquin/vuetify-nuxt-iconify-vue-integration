<script setup lang="ts">
import { Icon } from '@iconify/vue';
</script>
<template>
  <div>
    <VContainer>
      <Icon icon="mdi:email" :inline="true"></Icon>
      <Icon icon="mdi:calendar" :inline="true"></Icon>
      <VIcon icon="radioOn"></VIcon>
      <VIcon icon="radioOff"></VIcon>
      <VBtn color="success" prepend-icon="email">email</VBtn>
      <VBtn color="success" prepend-icon="calendar">calendar</VBtn>
      <VBtn color="success" prepend-icon="close">close</VBtn>

      <v-select
        label="Select"
        :items="[
          'California',
          'Colorado',
          'Florida',
          'Georgia',
          'Texas',
          'Wyoming',
        ]"
      ></v-select>

      <VCheckbox label="Checkbox"></VCheckbox>

      <VRadioGroup>
        <VRadio label="Radio One" value="one"></VRadio>
        <VRadio label="Radio Two" value="two"></VRadio>
        <VRadio label="Radio Three" value="three"></VRadio>
      </VRadioGroup>
    </VContainer>
  </div>
</template>
