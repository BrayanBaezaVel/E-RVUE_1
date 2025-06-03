<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-section brand">
        <h2>E&R FAMILY</h2>
        <p>Moda urbana con actitud. Exprésate con estilo.</p>
      </div>
      <div class="footer-section">
        <h3>Contáctanos</h3>
        <p>Email: erfamilyboutique@gmail.com</p>
        <p>Tel: +57 314 811 0143</p>
        <p>Pereira, Colombia</p>
      </div>
      <div class="footer-section">
        <h3>Síguenos</h3>
        <div class="social-icons">
          <a href="#"><i class="fab fa-instagram"></i></a>
          <a href="#"><i class="fab fa-tiktok"></i></a>
          <a href="#"><i class="fab fa-whatsapp"></i></a>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      © 2025 E&R FAMILY. Todos los derechos reservados.
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: linear-gradient(135deg, #53524f, #826a82);
  color: #facc15;
  padding: 40px 20px;
  font-family: 'Segoe UI', sans-serif;
  box-shadow: 0 -4px 10px rgba(0, 0, 0, 0.1);
}
.footer-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 30px;
}
.footer-section {
  flex: 1 1 220px;
}
.footer-section h2 {
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 15px;
}
.footer-section h3 {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 10px;
}
.footer-section p {
  margin: 5px 0;
}
.social-icons a {
  font-size: 20px;
  margin-right: 15px;
  color: #facc15;
  transition: color 0.3s ease;
}
.social-icons a:hover {
  color: #7c3aed;
}
.footer-bottom {
  text-align: center;
  margin-top: 30px;
  font-size: 14px;
  opacity: 0.85;
}
</style>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />
