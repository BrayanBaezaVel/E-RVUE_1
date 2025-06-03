<template>
    <div class="container">
        <h1>Productos E&R Family Fashion Boutique</h1>
        <input v-model="searchTerm" placeholder="Buscar por nombre o ID" @input="searchProducts" />

        <div class="productos-grid">
            <div v-for="product in productos" :key="product.id" class="card">
                <h3>{{ product.nombre }}</h3>
                <p>Precio: ${{ product.precio }}</p>
                <p>ID: {{ product.id }}</p>
            </div>
        </div>

        <div class="pagination">
            <button @click="prevPage" :disabled="page === 1">Anterior</button>
            <span>Página {{ page }} de {{ totalPages }}</span>
            <button @click="nextPage" :disabled="page === totalPages">Siguiente</button>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const productos = ref([]);
const page = ref(1);
const totalPages = ref(1);
const searchTerm = ref('');
const newProduct = ref({ nombre: '', precio: 0 });

const API_URL = 'http://localhost:3000';

async function fetchProducts(p = 1) {
    try {
        const res = await fetch(`${API_URL}/productos?page=${p}`);
        const data = await res.json();
        productos.value = data.data;
        page.value = data.page;
        totalPages.value = data.totalPages;
    } catch (error) {
        alert('Error cargando productos');
    }
}

async function searchProducts() {
    if (!searchTerm.value.trim()) {
        fetchProducts(page.value);
        return;
    }
    try {
        const res = await fetch(`${API_URL}/productos/search?q=${searchTerm.value}`);
        const data = await res.json();
        productos.value = data;
        totalPages.value = 1;
        page.value = 1;
    } catch (error) {
        alert('Error en búsqueda');
    }
}

async function addProduct() {
    if (!newProduct.value.nombre || newProduct.value.precio <= 0) {
        alert('Datos inválidos');
        return;
    }
    try {
        const res = await fetch(`${API_URL}/productos`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newProduct.value),
        });
        const data = await res.json();
        alert(`Producto creado: ${data.nombre} (ID ${data.id})`);
        newProduct.value.nombre = '';
        newProduct.value.precio = 0;
        fetchProducts(page.value);
    } catch (error) {
        alert('Error creando producto');
    }
}

function nextPage() {
    if (page.value < totalPages.value) {
        page.value++;
        fetchProducts(page.value);
    }
}

function prevPage() {
    if (page.value > 1) {
        page.value--;
        fetchProducts(page.value);
    }
}

onMounted(() => {
    fetchProducts(page.value);
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700&display=swap');

.container {
  max-width: 900px;
  margin: 2rem auto;
  font-family: 'Outfit', sans-serif;
  color: #333;
}

h1 {
  font-size: 2.5rem;
  font-weight: 700;
  color: white;
  margin-bottom: 1.5rem;
  text-align: center;
}

input {
  padding: 0.75rem 1rem;
  margin-bottom: 2rem;
  width: 100%;
  max-width: 500px;
  border: 2px solid #facc15;
  border-radius: 8px;
  font-size: 1rem;
  display: block;
  margin-left: auto;
  margin-right: auto;
  outline: none;
}

input:focus {
  border-color: #fbbf24;
  box-shadow: 0 0 5px #fbbf24;
}

.productos-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1.5rem;
}

.card {
  background: white;
  border-radius: 12px;
  padding: 1.2rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  text-align: center;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
}

.card h3 {
  font-weight: 600;
  color: #111827;
  margin-bottom: 0.5rem;
}

.card p {
  margin: 0.25rem 0;
  color: #4b5563;
}

.pagination {
  margin-top: 2.5rem;
  text-align: center;
}

.pagination button {
  background-color: #fbbf24;
  color: black;
  border: none;
  padding: 0.6rem 1.2rem;
  margin: 0 0.5rem;
  cursor: pointer;
  border-radius: 6px;
  font-weight: bold;
  transition: background-color 0.2s ease;
}

.pagination button:hover:not(:disabled) {
  background-color: #facc15;
}

.pagination button:disabled {
  background-color: #fef08a;
  cursor: not-allowed;
}
</style>
