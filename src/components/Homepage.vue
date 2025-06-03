<template>
    <div id="carouselExampleDark" class="carousel carousel-dark slide mx-auto">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active"
                aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1"
                aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2"
                aria-label="Slide 3"></button>
        </div>

        <div class="carousel-inner">
            <div class="carousel-item active" data-bs-interval="10000">
                <img src="../components/images/1.JPG" class="d-block mx-auto" alt="...">
                <div class="carousel-caption d-none d-md-block">
                    <h5>Drew House Biebs</h5>
                </div>
            </div>
            <div class="carousel-item" data-bs-interval="2000">
                <img src="../components/images/10.JPG" class="d-block mx-auto" alt="...">
                <div class="carousel-caption d-none d-md-block">
                    <h5>Drew House Biebs</h5>
                </div>
            </div>
            <div class="carousel-item">
                <img src="../components/images/13.JPG" class="d-block mx-auto" alt="...">
                <div class="carousel-caption d-none d-md-block">
                    <h5>Drew House Biebs</h5>
                </div>
            </div>
        </div>

        <button class="carousel-control-prev custom-control" type="button" data-bs-target="#carouselExampleDark"
            data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next custom-control" type="button" data-bs-target="#carouselExampleDark"
            data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
    <div class="info">
        <H1>Bienvenidos!!!</H1>
        <p>Esta pagina tiene como objetivo presentar el proyecto final para 
            la clase de FullStack
        </p>
    </div>
</template>

<style scoped>
H1,p{
    color: #facc15;
    font-weight: bold;
}
.info{
    text-align: center;
}
.carousel {
  padding: 10px;  
  max-width: 800px;
  width: 100%;
  height: auto;
  margin: auto;
  position: relative;
  background-image: url('./images/6.JPG');
  overflow: hidden;
}

.carousel-inner {
  width: 100%;
  height: 100%;
}

.carousel-item {
  justify-content: center;
  align-items: center;
}

.carousel-item img {
  width: 100%;
  height: auto;
  max-height: 600px;
  object-fit: contain;
}

.carousel-control-prev,
.carousel-control-next {
  width: 40px;
  height: 40px;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 50%;
}

.carousel-control-prev {
  left: 10px;
}

.carousel-control-next {
  right: 10px;
}

@media (max-width: 768px) {
  .carousel {
    height: auto;
  }

  .carousel-item img {
    max-height: 400px;
  }

  .carousel-control-prev,
  .carousel-control-next {
    width: 30px;
    height: 30px;
  }
}
</style>
