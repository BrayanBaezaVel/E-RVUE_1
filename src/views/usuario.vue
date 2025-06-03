<template>
    <h2 class="title">Usuarios</h2>

    <div class="container">
        <ul class="list-group">
            <li v-for="user in users" :key="user.id" class="list-group-item d-flex flex-column align-items-start">
                <strong class="mb-2 fs-5">Nombre: {{ user.name }}</strong>
                <small class="text">Correo: {{ user.email }}</small>
            </li>
        </ul>


    </div>
</template>

<script>
export default {
    data() {
        return {
            users: []
        }
    },
    mounted() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => {
                this.users = data
            })
            .catch(error => {
                console.error('Error al obtener usuarios:', error)
            })
    }
}
</script>
<style scoped>
h2 {
    padding: 1px;
    font-weight: bold;
    color: azure;
    text-align: center;
}

.container {
    margin: auto;
    margin-bottom: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.list-group,
.list-group-item {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 600px;
    background-color: rgba(0, 0, 0, 0.65);
    border-radius: 15px;
    overflow: hidden;
    backdrop-filter: blur(8px);
    box-shadow: 0 0 15px rgba(55, 55, 55, 0.6);
    color: aliceblue;
}
strong{
    color: #facc15;
}
</style>
