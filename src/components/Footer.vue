<template>
  <footer class="app-footer">
    <div class="footer-content">
      <div class="footer-left">
        <h3 class="footer-title">Digital Majlis</h3>
        <p class="footer-copy">&copy; 2024 Digital Majlis. Crafted with Moroccan hospitality.</p>
      </div>
      <div class="footer-links">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
        <a href="#">Host Guidelines</a>
        <a href="#">Contact Support</a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "AppFooter",
};
</script>

<style scoped>
.app-footer {
  background-color: #3A3935; /* Dark footer from mockups */
  color: #F4F0E6;
  padding: 2rem 3rem;
  margin-top: 3rem;
  font-family: var(--font-main);
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
}

.footer-title {
  font-family: var(--font-heading);
  font-size: 1.25rem;
  margin: 0 0 0.5rem 0;
  color: #FFFFFF;
}

.footer-copy {
  margin: 0;
  font-size: 0.85rem;
  color: #B5B2A8;
}

.footer-links {
  display: flex;
  gap: 2rem;
}

.footer-links a {
  color: #F4F0E6;
  text-decoration: none;
  font-size: 0.85rem;
  font-weight: 500;
  transition: color 0.2s;
}

.footer-links a:hover {
  color: #F4A41C;
}
</style>
