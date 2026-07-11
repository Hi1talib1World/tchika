<template>
  <div class="dashboard">
    <header class="page-header">
      <div class="header-content">
        <h1>Marhaba, Yassine</h1>
        <p class="subtitle">Your seat is waiting at the next table.</p>
      </div>
      <div class="header-actions">
        <button class="icon-btn"><i class="mdi mdi-bell-outline"></i></button>
        <button class="btn btn-primary" @click="showHostModal = true"><i class="mdi mdi-plus"></i> Host a Dinner</button>
      </div>
    </header>

    <div class="dashboard-grid">
      <!-- Main Content (Hero Card) -->
      <div class="main-column">
        <div class="hero-card">
          <div class="hero-image">
            <span class="badge badge-warning">Upcoming Event</span>
            <img src="https://images.unsplash.com/photo-1541518763669-27fef04b14ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Moroccan Feast" />
          </div>
          <div class="hero-info">
            <h2>Saffron & Song Night</h2>
            <p>A musical feast at Villa Al-Amira. Join fellow members for an evening of Andalusian rhythms and traditional Moroccan hospitality.</p>
            
            <div class="info-list">
              <div class="info-item">
                <i class="mdi mdi-calendar-outline text-danger"></i>
                <span>Friday, Oct 24 • 7:30 PM</span>
              </div>
              <div class="info-item">
                <i class="mdi mdi-map-marker-outline text-danger"></i>
                <span>Villa Al-Amira, Palmeraie</span>
              </div>
              <div class="info-item">
                <i class="mdi mdi-account-group-outline text-danger"></i>
                <div>
                  <span style="display:block; font-weight: 500;">8/12 Seats filled</span>
                  <div class="seat-dots">
                    <span class="dot filled" v-for="i in 8" :key="'f'+i"></span>
                    <span class="dot" v-for="i in 4" :key="'e'+i"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Right Sidebar (Connections) -->
      <div class="side-column">
        <div class="glass-panel connections-card">
          <div class="card-header">
            <h3>New Connections</h3>
            <a href="#" class="view-all">View All</a>
          </div>
          
          <div class="connection-list">
            <div class="connection-item">
              <img src="https://i.pravatar.cc/150?img=1" alt="Leila" class="avatar" />
              <div class="conn-info">
                <h4>Leila Mansouri</h4>
                <p>Met at 'Tagine & Tech'</p>
              </div>
              <button class="icon-btn"><i class="mdi mdi-message-outline"></i></button>
            </div>
            <div class="connection-item">
              <img src="https://i.pravatar.cc/150?img=11" alt="Omar" class="avatar" />
              <div class="conn-info">
                <h4>Omar Faridi</h4>
                <p>Met at 'The Sunset Majlis'</p>
              </div>
              <button class="icon-btn"><i class="mdi mdi-message-outline"></i></button>
            </div>
            <div class="connection-item">
              <img src="https://i.pravatar.cc/150?img=5" alt="Sofia" class="avatar" />
              <div class="conn-info">
                <h4>Sofia Bennani</h4>
                <p>Met at 'Riad Rooftop'</p>
              </div>
              <button class="icon-btn"><i class="mdi mdi-message-outline"></i></button>
            </div>
          </div>

          <div class="community-growth">
            <i class="mdi mdi-account-group"></i>
            <div>
              <p class="growth-title">Community Growth</p>
              <p class="growth-stat">12 New Friends</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="venues-section">
      <div class="section-header">
        <div>
          <h2>Discover Premier Venues</h2>
          <p>Exclusive spaces curated for your next gathering.</p>
        </div>
        <div class="nav-buttons">
          <button class="icon-btn rounded"><i class="mdi mdi-chevron-left"></i></button>
          <button class="icon-btn rounded"><i class="mdi mdi-chevron-right"></i></button>
        </div>
      </div>

      <div class="venues-grid">
        <!-- Venue 1 -->
        <div class="venue-card">
          <div class="venue-image">
            <div class="rating-badge"><i class="mdi mdi-star-outline"></i> 4.9</div>
            <img src="https://images.unsplash.com/photo-1539020140153-e479b8c22e70?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Dar Azrak Rooftop" />
          </div>
          <div class="venue-info">
            <h3>Dar Azrak Rooftop</h3>
            <p class="location">Medina, Marrakesh • Up to 15 Guests</p>
            <div class="tags">
              <span class="tag">ROOFTOP</span>
              <span class="tag">AUTHENTIC</span>
            </div>
          </div>
        </div>
        <!-- Venue 2 -->
        <div class="venue-card">
          <div class="venue-image">
            <div class="rating-badge"><i class="mdi mdi-star-outline"></i> 5.0</div>
            <img src="https://images.unsplash.com/photo-1563897539633-7374c276c212?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="The Secret Garden Riad" />
          </div>
          <div class="venue-info">
            <h3>The Secret Garden Riad</h3>
            <p class="location">Mouassine • Up to 8 Guests</p>
            <div class="tags">
              <span class="tag">INTIMATE</span>
              <span class="tag">GARDEN</span>
            </div>
          </div>
        </div>
        <!-- Venue 3 -->
        <div class="venue-card">
          <div class="venue-image">
            <div class="rating-badge"><i class="mdi mdi-star-outline"></i> 4.8</div>
            <img src="https://images.unsplash.com/photo-1542314831-c6a4d14faaf2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Sky Majlis Penthouse" />
          </div>
          <div class="venue-info">
            <h3>Sky Majlis Penthouse</h3>
            <p class="location">Gueliz • Up to 20 Guests</p>
            <div class="tags">
              <span class="tag">MODERN</span>
              <span class="tag">PANORAMIC</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Host a Dinner Modal -->
    <transition name="fade-scale">
      <div class="modal-overlay" v-if="showHostModal" @click.self="showHostModal = false">
        <div class="modal-content text-center" style="max-width: 400px; padding: 2rem; background: #fff; border-radius: 20px; text-align: center;">
          <div class="icon-bg mb-3" style="width: 64px; height: 64px; background: #F8D3B4; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto;">
            <i class="mdi mdi-silverware-fork-knife text-danger" style="font-size: 2rem;"></i>
          </div>
          <h3 class="mb-2">Create Your Majlis</h3>
          <p class="text-muted mb-4">Set up a new dining experience and invite members to join your table.</p>
          
          <button class="btn btn-primary w-100 mb-2" style="padding: 1rem; border-radius: 12px; border: none; background: #9C3311; color: white;" @click="showHostModal = false">Get Started</button>
          <button class="btn btn-outlined w-100" style="padding: 1rem; border-radius: 12px; border: 1px solid #9C3311; background: transparent; color: #9C3311;" @click="showHostModal = false">Cancel</button>
        </div>
      </div>
    </transition>
    
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: "Dashboard",
  setup() {
    const showHostModal = ref(false);
    return { showHostModal };
  }
};
</script>

<style scoped>
.page-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 2.5rem;
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

.header-actions {
  display: flex;
  gap: 1rem;
}

.icon-btn {
  background: #EAE6DB;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #333;
  transition: all 0.2s;
}

.icon-btn.rounded {
  background: transparent;
  border: 1px solid #D5D0C5;
}

.icon-btn:hover {
  background: #D5D0C5;
}

.dashboard-grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;
  margin-bottom: 3rem;
}

.hero-card {
  display: flex;
  background: #FFFFFF;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0,0,0,0.03);
  height: 100%;
}

.hero-image {
  flex: 1;
  position: relative;
  min-height: 300px;
}

.hero-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.badge {
  position: absolute;
  top: 1.5rem;
  left: 1.5rem;
  padding: 0.5rem 1.25rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 700;
  z-index: 10;
}

.badge-warning {
  background-color: #F4A41C;
  color: #111;
}

.hero-info {
  flex: 1;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
}

.hero-info h2 {
  font-size: 1.75rem;
  margin-bottom: 1rem;
  color: #111;
}

.hero-info p {
  color: #555;
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 2rem;
}

.info-list {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  margin-top: auto;
}

.info-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
}

.info-item i {
  font-size: 1.25rem;
  color: #9C3311;
}

.info-item span {
  font-size: 0.9rem;
  color: #333;
}

.seat-dots {
  display: flex;
  gap: 4px;
  margin-top: 6px;
}

.dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: #E0E0E0;
}

.dot.filled {
  background-color: #F4A41C;
}

.connections-card {
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #FFFFFF;
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 4px 15px rgba(0,0,0,0.03);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 2rem;
}

.card-header h3 {
  font-size: 1.25rem;
  margin: 0;
  color: #111;
}

.view-all {
  color: #9C3311;
  font-size: 0.85rem;
  text-decoration: none;
  font-weight: 600;
}

.connection-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  flex: 1;
}

.connection-item {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.connection-item .avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
}

.conn-info {
  flex: 1;
}

.conn-info h4 {
  margin: 0 0 0.25rem 0;
  font-size: 0.95rem;
  color: #111;
}

.conn-info p {
  margin: 0;
  font-size: 0.75rem;
  color: #666;
}

.connection-item .icon-btn {
  background: transparent;
  border: 1px solid #333;
  width: 32px;
  height: 32px;
  border-radius: 4px;
}
.connection-item .icon-btn i {
  color: #333;
  font-size: 1rem;
}

.community-growth {
  margin-top: 2rem;
  background-color: #EAE6FC;
  border-radius: 12px;
  padding: 1.25rem;
  display: flex;
  align-items: center;
  gap: 1.25rem;
}

.community-growth i {
  font-size: 1.75rem;
  color: #1E2A5E;
}

.growth-title {
  margin: 0 0 0.25rem 0;
  font-size: 0.85rem;
  color: #1E2A5E;
}

.growth-stat {
  margin: 0;
  font-size: 1.1rem;
  font-weight: 700;
  color: #1E2A5E;
}

.venues-section {
  margin-top: 4rem;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 2rem;
}

.section-header h2 {
  font-size: 1.5rem;
  margin-bottom: 0.25rem;
  color: #111;
}

.section-header p {
  color: #666;
  margin: 0;
  font-size: 0.95rem;
}

.nav-buttons {
  display: flex;
  gap: 0.75rem;
}
.nav-buttons .icon-btn.rounded {
  border-radius: 50%;
  width: 44px;
  height: 44px;
  border: 1px solid #D5D0C5;
  background: white;
}

.venues-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.venue-card {
  background: transparent;
}

.venue-image {
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  height: 220px;
  margin-bottom: 1.25rem;
}

.venue-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.rating-badge {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: white;
  padding: 0.35rem 0.75rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 4px;
}

.rating-badge i {
  color: #F4A41C;
}

.venue-info h3 {
  font-size: 1.25rem;
  margin: 0 0 0.5rem 0;
  color: #111;
}

.location {
  font-size: 0.85rem;
  color: #666;
  margin: 0 0 1rem 0;
}

.tags {
  display: flex;
  gap: 0.5rem;
}

.tag {
  background: #EAE6DB;
  padding: 0.3rem 0.75rem;
  border-radius: 20px;
  font-size: 0.7rem;
  font-weight: 700;
  color: #333;
  letter-spacing: 0.5px;
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
