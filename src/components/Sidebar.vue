<template>
  <aside class="sidebar">
    <div class="sidebar-header">
      <div class="logo">
        <div class="logo-icon">
          <i class="mdi mdi-home-variant"></i>
        </div>
        <div>
          <h2 class="logo-title">Digital Majlis</h2>
          <p class="logo-subtitle">Member Portal</p>
        </div>
      </div>
      
      <div class="user-profile">
        <img src="https://i.pravatar.cc/150?img=32" alt="Yassine" class="avatar" />
        <div class="user-info">
          <p class="greeting">Marhaba,</p>
          <p class="name">Yassine</p>
          <a href="#" class="view-profile">View Profile</a>
        </div>
      </div>
    </div>

    <nav class="sidebar-nav">
      <router-link to="/" class="nav-item">
        <i class="mdi mdi-view-dashboard-outline"></i>
        <span>Dashboard</span>
      </router-link>
      <router-link to="/reservations" class="nav-item">
        <i class="mdi mdi-calendar-blank-outline"></i>
        <span>Reservations</span>
      </router-link>
      <router-link to="/connections" class="nav-item">
        <i class="mdi mdi-account-group-outline"></i>
        <span>Connections</span>
      </router-link>
      <router-link to="/venues" class="nav-item">
        <i class="mdi mdi-silverware-fork-knife"></i>
        <span>Venues</span>
      </router-link>
      <router-link to="/messages" class="nav-item">
        <i class="mdi mdi-email-outline"></i>
        <span>Messages</span>
      </router-link>
      <router-link to="/settings" class="nav-item mt-auto">
        <i class="mdi mdi-cog-outline"></i>
        <span>Settings</span>
      </router-link>
    </nav>

    <div class="sidebar-footer">
      <a href="#" class="nav-item">
        <i class="mdi mdi-help-circle-outline"></i>
        <span>Help Center</span>
      </a>
      <a href="#" class="nav-item text-danger">
        <i class="mdi mdi-logout-variant"></i>
        <span>Logout</span>
      </a>
    </div>
  </aside>
</template>

<style scoped>
.sidebar {
  width: 250px;
  background-color: #F4F0EA; /* Light beige matching mockups */
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  z-index: 100;
  font-family: var(--font-main);
}

.sidebar-header {
  padding: 2.5rem 2rem 2rem 2rem;
}

.logo {
  display: flex;
  align-items: center;
  margin-bottom: 2.5rem;
  gap: 0.75rem;
}

.logo-icon {
  width: 32px;
  height: 32px;
  background-color: #9C3311;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.25rem;
}

.logo-title {
  color: #9C3311; /* Dark Red/Brown */
  font-family: var(--font-heading);
  font-size: 1.25rem;
  font-weight: 700;
  margin: 0;
  letter-spacing: -0.5px;
}

.logo-subtitle {
  color: #666;
  font-size: 0.75rem;
  margin: 0;
  font-weight: 500;
}

.user-profile {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.avatar {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  object-fit: cover;
}

.user-info .greeting {
  font-size: 0.85rem;
  color: #333;
  margin: 0;
}

.user-info .name {
  font-size: 0.85rem;
  font-weight: 600;
  color: #111;
  margin: 0 0 0.2rem 0;
}

.view-profile {
  font-size: 0.75rem;
  color: #9C3311;
  text-decoration: none;
  font-weight: 500;
}

.sidebar-nav {
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 0 1.5rem;
}

.nav-item {
  display: flex;
  align-items: center;
  padding: 0.85rem 1rem;
  color: #555;
  text-decoration: none;
  border-radius: 8px;
  margin-bottom: 0.5rem;
  font-size: 0.95rem;
  font-weight: 500;
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.nav-item i {
  margin-right: 1rem;
  font-size: 1.25rem;
  color: #555;
  transition: transform 0.3s ease;
}

.nav-item:hover {
  background-color: rgba(244, 164, 28, 0.1);
  transform: translateX(5px);
}

.nav-item.router-link-active {
  background-color: #F4A41C; /* Yellow/Orange */
  color: #111; /* Dark Text */
  font-weight: 600;
  transform: translateX(5px);
  box-shadow: 0 4px 10px rgba(244, 164, 28, 0.2);
}

.nav-item.router-link-active i {
  color: #111;
  transform: scale(1.1);
}

.mt-auto {
  margin-top: auto;
}

.sidebar-footer {
  padding: 1rem 1.5rem 2rem 1.5rem;
}

.text-danger {
  color: #9C3311;
}

.text-danger i {
  color: #9C3311;
}
</style>
