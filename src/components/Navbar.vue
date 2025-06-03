<template>
    <nav class="navbar navbar-expand-lg custom-navbar">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
                <i class="bi bi-bag"></i> E&R FAMILY
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                <ul class="navbar-nav mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link to="/" class="nav-link active" aria-current="page">Inicio</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/usuario" class="nav-link"><i class="bi bi-person"></i> Usuarios</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/productos" class="nav-link"><i class="bi bi-person"></i> Productos</router-link>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            Registrar
                        </a>
                        <ul class="dropdown-menu dropdown-menu-end">
                            <li>
                                <router-link class="dropdown-item" to="/reg-user">Usuario</router-link>
                            </li>
                            <li>
                                <router-link class="dropdown-item" to="/reg-product">Producto</router-link>
                            </li>
                        </ul>
                    </li>

                </ul>
            </div>
        </div>
    </nav>
</template>

<style scoped>
.custom-navbar {
    background-image: url(./images/6.JPG);
    padding: 0.5rem 1rem;
    position: relative;
    z-index: 1000;
}

.navbar-brand {
    
    font-weight: bold;
    font-size: 28px;
    color: white;
}
.navbar-brand,.navbar-nav .nav-link:hover,
.navbar-nav .dropdown-item:hover {
    color: #facc15 !important;
}

.navbar-nav .nav-link {
    font-weight: 300;
    font-size: 20px;
    color: white !important;
}

.main-content {
    margin-top: 70px;
    padding: 1rem;
}

@media (max-width: 991px) {
    .navbar-collapse {
        background-color: blueviolet;
        padding: 1rem;
    }

    .navbar-nav .nav-link {
        font-size: 18px;
        padding: 0.5rem 0;
    }

    .main-content {
        margin-top: 150px;
    }
}
</style>