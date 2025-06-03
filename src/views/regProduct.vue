<template>
  <div class="container">
    <h1>Registrar Producto</h1>
    <form @submit.prevent="addProduct" class="formulario">
      <input
        v-model="newProduct.nombre"
        type="text"
        placeholder="Nombre del producto"
        required
      />
      <input
        v-model.number="newProduct.precio"
        type="number"
        placeholder="Precio"
        required
        min="1"
      />
      <button type="submit">Guardar Producto</button>
    </form>

    <p v-if="mensaje" class="mensaje">{{ mensaje }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const API_URL = 'http://localhost:3000';

const newProduct = ref({
  nombre: '',
  precio: 0
});

const mensaje = ref('');

async function addProduct() {
  if (!newProduct.value.nombre || newProduct.value.precio <= 0) {
    mensaje.value = 'Datos inválidos';
    return;
  }

  try {
    const res = await fetch(`${API_URL}/productos`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newProduct.value)
    });
    const data = await res.json();

    mensaje.value = `✅ Producto registrado: ${data.nombre} (ID: ${data.id})`;
    newProduct.value.nombre = '';
    newProduct.value.precio = 0;
  } catch (error) {
    mensaje.value = '❌ Error al registrar el producto';
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700&display=swap');

.container {
  max-width: 500px;
  margin: 3rem auto;
  padding: 2rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
  font-family: 'Outfit', sans-serif;
}

h1 {
  text-align: center;
  color: #111827;
  margin-bottom: 1.5rem;
  font-size: 2rem;
  font-weight: 700;
}

.formulario {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

input {
  padding: 0.75rem;
  border: 2px solid #facc15;
  border-radius: 8px;
  font-size: 1rem;
  outline: none;
}

input:focus {
  border-color: #fbbf24;
  box-shadow: 0 0 5px #fbbf24;
}

button {
  background-color: #fbbf24;
  border: none;
  padding: 0.75rem;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

button:hover {
  background-color: #facc15;
}

.mensaje {
  text-align: center;
  margin-top: 1rem;
  font-weight: bold;
}
</style>
