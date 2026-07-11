<template>
  <nav class="navbar glass-panel animate-fade-in">
    <div class="navbar-container">
      <!-- Logo -->
      <router-link to="/" class="logo-link">
        <div class="logo">
          <img src="../assets/img/tchika-border.png" alt="Tchika Logo" />
          <span class="logo-text">tchika</span>
        </div>
      </router-link>

      <!-- Navigation Links -->
      <ul class="nav-links">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/news">News</router-link></li>
        <li><router-link to="/dashboard">Dashboard</router-link></li>
        <li><router-link to="/media">Media</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
      </ul>

      <!-- User Profile -->
      <div class="user-profile">
        <div class="user-info">
          <span class="user-name">{{ userName }}</span>
        </div>
        <div class="avatar-container">
          <img src="../assets/img/user.png" alt="User Avatar" class="avatar" />
          <div class="online-indicator"></div>
        </div>
        <button class="settings-btn">
          <i class="mdi mdi-cog"></i>
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      userName: "Hicham Outaleb",
    };
  },
};
</script>

<style scoped>
.navbar {
  position: sticky;
  top: 1rem;
  z-index: 100;
  margin: 0 auto 2rem auto;
  max-width: 1200px;
  padding: 0.5rem 1.5rem;
  border-radius: 12px;
  display: flex;
  align-items: center;
  background-color: var(--bg-secondary);
}

.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.logo-link {
  text-decoration: none;
  color: inherit;
}

.logo {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.logo img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid var(--accent-primary);
  padding: 2px;
  transition: transform var(--transition-normal);
}

.logo:hover img {
  transform: rotate(15deg);
}

.logo-text {
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 1.5rem;
  color: var(--text-primary);
}

.nav-links {
  display: flex;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-links a {
  text-decoration: none;
  color: var(--text-secondary);
  font-weight: 500;
  font-size: 1rem;
  transition: all var(--transition-fast);
  position: relative;
  padding-bottom: 4px;
}

.nav-links a::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: var(--accent-primary);
  transition: width var(--transition-fast);
  border-radius: 2px;
}

.nav-links a:hover, .nav-links a.router-link-exact-active {
  color: var(--text-primary);
}

.nav-links a:hover::after, .nav-links a.router-link-exact-active::after {
  width: 100%;
}

.user-profile {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.user-info {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.user-name {
  font-weight: 600;
  font-size: 0.9rem;
  color: var(--text-primary);
}

.avatar-container {
  position: relative;
}

.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid var(--border-color);
  transition: border-color var(--transition-fast);
}

.avatar:hover {
  border-color: var(--accent-primary);
}

.online-indicator {
  position: absolute;
  bottom: 2px;
  right: 2px;
  width: 10px;
  height: 10px;
  background-color: #00e676; /* Green */
  border-radius: 50%;
  border: 2px solid var(--bg-secondary);
}

.settings-btn {
  background: none;
  border: none;
  color: var(--text-secondary);
  font-size: 1.25rem;
  cursor: pointer;
  transition: color var(--transition-fast), transform var(--transition-fast);
  display: flex;
  align-items: center;
  justify-content: center;
}

.settings-btn:hover {
  color: var(--accent-primary);
  transform: rotate(90deg);
}
</style>
