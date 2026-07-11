<template>
  <div class="connections-page">
    <header class="page-header">
      <div class="header-content">
        <h1>Your Connections</h1>
        <p class="subtitle">Relive moments with the people you've shared a table with.</p>
      </div>
      <div class="header-actions search-wrapper">
        <i class="mdi mdi-magnify"></i>
        <input type="text" placeholder="Search by name, profession..." class="input search-input" />
        <button class="icon-btn rounded ml-2"><i class="mdi mdi-filter-variant"></i></button>
      </div>
    </header>

    <div class="connections-grid">
      <!-- Connection 1 -->
      <div class="connection-card glass-panel">
        <div class="card-top-bg bg-orange"></div>
        <div class="card-content">
          <div class="avatar-row">
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" alt="Omar El-Amrani" class="avatar-large" />
            <div class="dots-indicator">
              <span class="dot active"></span>
              <span class="dot active"></span>
              <span class="dot active"></span>
              <span class="dot"></span>
            </div>
          </div>
          <h2>Omar El-Amrani</h2>
          <p class="profession">Architect & Design Lead</p>
          
          <div class="meta-info">
            <p><i class="mdi mdi-silverware-fork-knife text-danger"></i> Met at: The Grand Riad Dinner</p>
            <p><i class="mdi mdi-calendar-outline text-danger"></i> Joined on: Oct 14, 2023</p>
          </div>
          
          <div class="card-actions">
            <button class="btn btn-primary flex-1">Message</button>
            <button class="btn btn-outlined flex-1" @click="showConnectionModal = true">Follow</button>
          </div>
        </div>
      </div>

      <!-- Connection 2 -->
      <div class="connection-card glass-panel">
        <div class="card-top-bg bg-pink"></div>
        <div class="card-content">
          <div class="avatar-row">
            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" alt="Layla Bensouda" class="avatar-large" />
            <div class="dots-indicator">
              <span class="dot active"></span>
              <span class="dot active"></span>
              <span class="dot active"></span>
              <span class="dot"></span>
            </div>
          </div>
          <h2>Layla Bensouda</h2>
          <p class="profession">Tech Entrepreneur</p>
          
          <div class="meta-info">
            <p><i class="mdi mdi-silverware-fork-knife text-danger"></i> Met at: Innovation Majlis</p>
            <p><i class="mdi mdi-calendar-outline text-danger"></i> Joined on: Nov 02, 2023</p>
          </div>
          
          <div class="card-actions">
            <button class="btn btn-primary flex-1">Message</button>
            <button class="btn btn-outlined flex-1" @click="showConnectionModal = true">Follow</button>
          </div>
        </div>
      </div>

      <!-- Connection 3 -->
      <div class="connection-card glass-panel">
        <div class="card-top-bg bg-purple"></div>
        <div class="card-content">
          <div class="avatar-row">
            <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" alt="Yassine Mansour" class="avatar-large" />
            <div class="dots-indicator">
              <span class="dot active"></span>
              <span class="dot active"></span>
              <span class="dot active"></span>
              <span class="dot active"></span>
            </div>
          </div>
          <h2>Yassine Mansour</h2>
          <p class="profession">Cultural Curator</p>
          
          <div class="meta-info">
            <p><i class="mdi mdi-silverware-fork-knife text-danger"></i> Met at: Art & Couscous Night</p>
            <p><i class="mdi mdi-calendar-outline text-danger"></i> Joined on: Aug 28, 2023</p>
          </div>
          
          <div class="card-actions">
            <button class="btn btn-primary flex-1">Message</button>
            <button class="btn btn-outlined flex-1" @click="showConnectionModal = true">Follow</button>
          </div>
        </div>
      </div>

      <!-- Connection 4 -->
      <div class="connection-card glass-panel">
        <div class="card-top-bg bg-yellow"></div>
        <div class="card-content">
          <div class="avatar-row">
            <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" alt="Fatima Zahra" class="avatar-large" />
            <div class="dots-indicator">
              <span class="dot active"></span>
              <span class="dot active"></span>
              <span class="dot active"></span>
              <span class="dot"></span>
            </div>
          </div>
          <h2>Fatima Zahra</h2>
          <p class="profession">Visual Artist</p>
          
          <div class="meta-info">
            <p><i class="mdi mdi-silverware-fork-knife text-danger"></i> Met at: The Artisan Collective</p>
            <p><i class="mdi mdi-calendar-outline text-danger"></i> Joined on: Dec 12, 2023</p>
          </div>
          
          <div class="card-actions">
            <button class="btn btn-primary flex-1">Message</button>
            <button class="btn btn-outlined flex-1" @click="showConnectionModal = true">Follow</button>
          </div>
        </div>
      </div>

      <!-- Connection 5 -->
      <div class="connection-card glass-panel">
        <div class="card-top-bg bg-grey"></div>
        <div class="card-content">
          <div class="avatar-row">
            <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" alt="Karim Bennani" class="avatar-large" />
            <div class="dots-indicator">
              <span class="dot active"></span>
              <span class="dot active"></span>
              <span class="dot active"></span>
              <span class="dot"></span>
            </div>
          </div>
          <h2>Karim Bennani</h2>
          <p class="profession">Impact Investor</p>
          
          <div class="meta-info">
            <p><i class="mdi mdi-silverware-fork-knife text-danger"></i> Met at: Saffron & Strategy</p>
            <p><i class="mdi mdi-calendar-outline text-danger"></i> Joined on: Jan 05, 2024</p>
          </div>
          
          <div class="card-actions">
            <button class="btn btn-primary flex-1">Message</button>
            <button class="btn btn-outlined flex-1" @click="showConnectionModal = true">Follow</button>
          </div>
        </div>
      </div>

      <!-- CTA Card -->
      <div class="connection-card cta-card">
        <div class="cta-content">
          <div class="cta-icon">
            <i class="mdi mdi-silverware-fork-knife"></i>
          </div>
          <h2>Host a Dinner?</h2>
          <p>Expand your circle by hosting your own Majlis table.</p>
          <button class="btn btn-warning mt-4">Create Table</button>
        </div>
      </div>

    </div>

    <!-- New Connection Modal -->
    <transition name="fade-scale">
      <div class="modal-overlay" v-if="showConnectionModal" @click.self="showConnectionModal = false">
        <div class="modal-content connection-modal">
          <button class="close-btn-abs" @click="showConnectionModal = false"><i class="mdi mdi-close"></i></button>
          
          <div class="modal-body text-center">
            <div class="handshake-icon-bg">
              <i class="mdi mdi-heart-outline"></i>
            </div>
            
            <h3 class="text-danger mt-3">New Connection!</h3>
            <p class="connection-text">You and <strong>Omar</strong> have both followed each other.</p>
            
            <div class="connected-avatars mt-4 mb-4">
              <div class="avatar-wrapper">
                <img src="https://i.pravatar.cc/150?img=32" alt="You" />
                <span class="badge-you">YOU</span>
              </div>
              
              <div class="connection-link">
                <div class="line"></div>
                <div class="handshake-circle"><i class="mdi mdi-handshake-outline"></i></div>
                <div class="line"></div>
              </div>
              
              <div class="avatar-wrapper">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" alt="Omar" />
              </div>
            </div>

            <div class="modal-actions">
              <button class="btn-primary w-100 mb-3" @click="showConnectionModal = false">
                <i class="mdi mdi-send-outline"></i> Message Omar
              </button>
              <button class="btn-outlined w-100" @click="showConnectionModal = false">Keep Exploring</button>
            </div>
          </div>
          
          <div class="modal-footer text-center">
            <p class="small-text"><i class="mdi mdi-star-four-points-outline"></i> A new seat at the table</p>
          </div>
        </div>
      </div>
    </transition>

  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: "Connections",
  setup() {
    const showConnectionModal = ref(false);

    return {
      showConnectionModal
    }
  }
};
</script>

<style scoped>
.page-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 3rem;
}

.page-header h1 {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  color: #111;
}

.page-header .subtitle {
  color: #555;
  font-size: 1rem;
  margin: 0;
}

.search-wrapper {
  display: flex;
  align-items: center;
  position: relative;
}

.search-wrapper i.mdi-magnify {
  position: absolute;
  left: 1.25rem;
  color: #666;
  font-size: 1.25rem;
}

.search-input {
  padding-left: 3rem;
  width: 320px;
  background: #FFFFFF;
  border: 1px solid #E5E0D8;
  border-radius: 8px;
  height: 48px;
  font-family: var(--font-main);
  outline: none;
}

.icon-btn.rounded {
  background: #FFFFFF;
  border: 1px solid #E5E0D8;
  border-radius: 8px;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #333;
}

.ml-2 {
  margin-left: 1rem;
}

.connections-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-bottom: 3rem;
}

.connection-card {
  padding: 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background-color: #FFFFFF;
  border-radius: 20px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.03);
}

.card-top-bg {
  height: 120px;
  width: 100%;
}

.bg-orange { background-color: #F8D3B4; }
.bg-pink { background-color: #F8D7D3; }
.bg-purple { background-color: #D9E0FF; }
.bg-yellow { background-color: #F9C365; }
.bg-grey { background-color: #E2E2E2; }

.card-content {
  padding: 0 1.5rem 1.5rem 1.5rem;
  position: relative;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.avatar-row {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: -35px;
  margin-bottom: 1rem;
}

.avatar-large {
  width: 70px;
  height: 70px;
  border-radius: 12px;
  border: 3px solid #FFFFFF;
  object-fit: cover;
  background: white;
}

.dots-indicator {
  display: flex;
  gap: 4px;
  margin-bottom: 0.5rem;
}

.dots-indicator .dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: #E0E0E0;
}

.dots-indicator .dot.active {
  background-color: #F4A41C;
}

.card-content h2 {
  font-size: 1.25rem;
  margin: 0 0 0.25rem 0;
  color: #111;
}

.profession {
  font-size: 0.85rem;
  color: #9C3311;
  font-weight: 600;
  margin: 0 0 1.5rem 0;
}

.meta-info {
  margin-bottom: 2rem;
}

.meta-info p {
  font-size: 0.85rem;
  color: #333;
  font-weight: 500;
  margin: 0 0 0.75rem 0;
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.text-danger {
  color: #9C3311;
  font-size: 1.1rem;
}

.card-actions {
  display: flex;
  gap: 0.75rem;
  margin-top: auto;
}

.flex-1 {
  flex: 1;
  margin: 0;
  padding: 0.75rem;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
}

.btn-primary {
  background-color: #9C3311;
  color: white;
  border: none;
}
.btn-primary:hover { background-color: #7A280D; }

.btn-outlined {
  background-color: #FFFFFF;
  border: 1px solid #D5D0C5;
  color: #333;
}
.btn-outlined:hover { background-color: #F8F5EF; }

.cta-card {
  background-color: #2D2C28; /* Darker charcoal */
  color: #FFFFFF;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem 2rem;
}

.cta-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.cta-icon {
  background-color: #9C3311;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
}

.cta-icon i {
  font-size: 1.75rem;
  color: white;
}

.cta-card h2 {
  font-size: 1.5rem;
  margin: 0 0 0.5rem 0;
  color: #FFFFFF;
}

.cta-card p {
  color: #B5B2A8;
  font-size: 0.95rem;
  line-height: 1.5;
  margin: 0;
}

.btn-warning {
  background-color: #F4A41C;
  color: #111;
  border: none;
  font-weight: 700;
  padding: 0.75rem 2rem;
  border-radius: 8px;
  cursor: pointer;
}
.btn-warning:hover { background-color: #DE9516; }

.mt-4 {
  margin-top: 2rem;
}

/* Modal Styles */
.modal-overlay {
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background-color: rgba(0,0,0,0.4);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal-content {
  background-color: #FAF8F2; /* creamy background like mockup */
  border-radius: 20px;
  width: 90%;
  max-width: 450px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.15);
  position: relative;
  overflow: hidden;
}

.close-btn-abs {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  background: none;
  border: none;
  font-size: 1.25rem;
  color: #666;
  cursor: pointer;
  z-index: 10;
}

.modal-body {
  padding: 3rem 2.5rem 1.5rem 2.5rem;
}

.text-center { text-align: center; }
.mt-3 { margin-top: 1.5rem; }
.mb-3 { margin-bottom: 1.5rem; }
.mb-4 { margin-bottom: 2rem; }

.handshake-icon-bg {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: radial-gradient(circle, #F4A41C 0%, #F8D3B4 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  box-shadow: 0 4px 15px rgba(244, 164, 28, 0.3);
}

.handshake-icon-bg i {
  font-size: 2rem;
  color: #9C3311;
}

.connection-text {
  color: #333;
  font-size: 1.05rem;
  margin: 0.5rem 0 0 0;
}

.connected-avatars {
  display: flex;
  align-items: center;
  justify-content: center;
}

.avatar-wrapper {
  position: relative;
}

.avatar-wrapper img {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid #FFFFFF;
  box-shadow: 0 4px 10px rgba(0,0,0,0.08);
}

.badge-you {
  position: absolute;
  bottom: -5px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #9C3311;
  color: white;
  font-size: 0.6rem;
  font-weight: 700;
  padding: 2px 8px;
  border-radius: 10px;
  border: 2px solid white;
}

.connection-link {
  display: flex;
  align-items: center;
  margin: 0 -10px;
  z-index: 2;
}

.connection-link .line {
  width: 20px;
  height: 1px;
  background-color: #D5D0C5;
}

.handshake-circle {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: white;
  border: 1px solid #EAE6DB;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #9C3311;
  font-size: 1rem;
}

.w-100 { width: 100%; justify-content: center; display: flex; align-items: center; gap: 0.5rem;}
.w-100 i { font-size: 1.2rem; }

.modal-actions {
  padding: 0 1rem;
}

.btn-primary {
  padding: 1rem;
  border-radius: 12px;
}

.btn-outlined {
  padding: 1rem;
  border-radius: 12px;
  font-weight: 600;
}

.modal-footer {
  padding: 1rem;
  background-color: transparent;
}

.small-text {
  font-size: 0.75rem;
  color: #999;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
}

/* Transitions */
.fade-scale-enter-active,
.fade-scale-leave-active {
  transition: opacity 0.3s, transform 0.3s;
}
.fade-scale-enter-from,
.fade-scale-leave-to {
  opacity: 0;
}
.fade-scale-enter-from .modal-content,
.fade-scale-leave-to .modal-content {
  transform: scale(0.95) translateY(20px);
}
</style>
