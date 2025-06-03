<template>
  <div class="registro-container">
    <div class="registro-card shadow-lg">
      <div class="registro-header">
        <h2 class="text-white text-center">Registrar Usuario</h2>
      </div>

      <div class="registro-body">
        <form @submit.prevent="registrarUsuario">
          <div class="mb-3">
            <label for="nombre" class="form-label text-white">Nombre</label>
            <input
              v-model="nombre"
              type="text"
              class="form-control"
              id="nombre"
              placeholder="Ingresa tu nombre"
              required
            >
          </div>

          <div class="mb-3">
            <label for="email" class="form-label text-white">Correo Electrónico</label>
            <input
              v-model="email"
              type="email"
              class="form-control"
              id="email"
              placeholder="ejemplo@correo.com"
              required
            >
          </div>

          <button type="submit" class="btn btn-success w-100">Registrar</button>
        </form>

        <div v-if="respuesta" class="alert alert-success mt-4" role="alert">
          ✅ Usuario registrado con ID: <strong>{{ respuesta.id }}</strong>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nombre: '',
      email: '',
      respuesta: null
    }
  },
  methods: {
    async registrarUsuario() {
      const nuevoUsuario = {
        name: this.nombre,
        email: this.email
      }

      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(nuevoUsuario)
        })
        const data = await res.json()
        this.respuesta = data
        this.nombre = ''
        this.email = ''
      } catch (error) {
        console.error('Error:', error)
      }
    }
  }
}
</script>

<style scoped>
.registro-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  padding-top: 30px;
}

.registro-card {
  width: 100%;
  max-width: 600px;
  background-color: rgba(0, 0, 0, 0.65); 
  border-radius: 15px;
  overflow: hidden;
  backdrop-filter: blur(8px);
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.6);
}

.registro-header {
    background-color: rgba(59, 57, 57, 0.65);
  padding: 20px;
}

.registro-body {
  padding: 30px;
}

.form-label {
  font-weight: 500;
}

input.form-control {
  background-color: rgba(255, 255, 255, 0.95);
  border-radius: 10px;
}
</style>
