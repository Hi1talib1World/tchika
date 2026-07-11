<template>
  <div class="event-detail-page">
    <header class="page-header">
      <div class="header-content">
        <div class="tag-row">
          <span class="badge badge-warning">UPCOMING DINNER</span>
          <span class="event-id">ID: #MZ-8821</span>
        </div>
        <h1>The Saffron Route</h1>
        <p class="subtitle">A spice-infused evening exploring the history of Trans-Saharan trade through seven courses of traditional Maghrebi cuisine.</p>
      </div>
      <div class="header-actions">
        <button class="icon-btn rounded"><i class="mdi mdi-share-variant"></i></button>
        <button class="icon-btn rounded"><i class="mdi mdi-calendar-plus"></i></button>
      </div>
    </header>

    <div class="hero-image-container">
      <img src="https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Authentic Riad Setting" class="hero-img" />
      <div class="hero-overlay">
        <h2>Authentic Riad Setting</h2>
        <p><i class="mdi mdi-map-marker-outline"></i> Marrakesh, Medina District</p>
      </div>
    </div>

    <div class="detail-grid">
      <!-- Main Content Column -->
      <div class="main-column">
        <div class="info-row">
          
          <!-- Venue Info -->
          <div class="info-card glass-panel">
            <div class="card-header-small">
              <span class="label-title">The Venue</span>
              <span class="badge badge-outlined">Private Garden</span>
            </div>
            
            <div class="venue-brief">
              <div class="venue-icon"><i class="mdi mdi-door-closed"></i></div>
              <div>
                <h4>Dar Al-Saada</h4>
                <p>Derb El Qadi, Kasbah District</p>
              </div>
            </div>
            
            <div class="map-placeholder">
              <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Map" class="map-img" style="opacity: 0.6; filter: sepia(0.5) hue-rotate(-30deg);" />
            </div>
          </div>

          <!-- Vibe Info -->
          <div class="info-card glass-panel">
            <div class="card-header-small">
              <span class="label-title">The Vibe</span>
            </div>
            
            <div class="vibe-tags">
              <span class="vibe-tag bg-blue">Intimate (8 guests)</span>
              <span class="vibe-tag bg-orange">Traditional Music</span>
              <span class="vibe-tag bg-pink">Dress Code: Kaftan/Linen</span>
            </div>
            
            <div class="quote-card">
              <p><i>"As the evening sun sets over the Atlas mountains, join us for a journey of aroma and ancestry. Expect deep conversation, hand-mixed spices, and the rhythm of the oud."</i></p>
            </div>
            
            <div class="curator">
              <div class="avatar-group">
                <img src="https://i.pravatar.cc/150?img=12" alt="Curator" class="avatar-small" />
                <img src="https://i.pravatar.cc/150?img=13" alt="Curator" class="avatar-small" />
                <img src="https://i.pravatar.cc/150?img=14" alt="Curator" class="avatar-small" />
              </div>
              <span class="curator-text">Curated by Majlis<br/>Concierge</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Right Sidebar Column -->
      <div class="side-column">
        <!-- Reservation Card -->
        <div class="reservation-card glass-panel">
          <div class="res-row">
            <div>
              <p class="res-label">DATE & TIME</p>
              <p class="res-value">Saturday, Oct 12<br/>19:30 - 23:00</p>
            </div>
            <div class="res-icon">
              <i class="mdi mdi-silverware-fork-knife"></i>
            </div>
          </div>
          
          <div class="res-row capacity-row">
            <p class="res-label">Table Capacity</p>
            <p class="res-value text-danger">5 / 8 Joined</p>
          </div>
          <div class="seat-dots mb-3">
            <span class="dot filled" v-for="i in 5" :key="'f'+i"></span>
            <span class="dot" v-for="i in 3" :key="'e'+i"></span>
          </div>
          
          <hr class="divider" />
          
          <div class="res-row">
            <p class="res-label">Price per seat</p>
            <p class="res-value bold">450 MAD</p>
          </div>
          
          <div class="res-row">
            <p class="res-label">Dietary<br/>options</p>
            <p class="res-value">Vegan, GF<br/>available</p>
          </div>
          
          <button class="btn btn-primary btn-block mt-3" @click="showConfirmModal = true">Reserve Seat</button>
          <p class="cancel-policy">Cancelation free up to 48h before</p>
        </div>

        <!-- Guest List Card -->
        <div class="guest-list-card glass-panel mt-3">
          <div class="card-header-small">
            <span class="label-title">Guest List</span>
            <i class="mdi mdi-eye-off-outline text-muted"></i>
          </div>
          
          <p class="guest-hint">Three guests are keeping their identity a mystery until the evening begins.</p>
          
          <div class="guest-list">
            <div class="guest-item">
              <img src="https://i.pravatar.cc/150?img=1" alt="Amira" class="avatar" />
              <div class="guest-info">
                <h4>Amira K.</h4>
                <p>Architecture Critic</p>
              </div>
              <i class="mdi mdi-check-decagram text-danger"></i>
            </div>
            
            <div class="guest-item">
              <img src="https://i.pravatar.cc/150?img=11" alt="Youssef" class="avatar" />
              <div class="guest-info">
                <h4>Youssef B.</h4>
                <p>Tea Sommelier</p>
              </div>
              <i class="mdi mdi-check-decagram text-danger"></i>
            </div>
            
            <div class="guest-item mystery">
              <div class="avatar mystery-avatar">?</div>
              <div class="guest-info">
                <h4>Mystery Guest</h4>
                <p>Revealing at dinner...</p>
              </div>
            </div>
            
            <div class="guest-item mystery">
              <div class="avatar mystery-avatar">?</div>
              <div class="guest-info">
                <h4>Mystery Guest</h4>
                <p>Revealing at dinner...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Confirm Your Seat Modal -->
    <transition name="fade-scale">
      <div class="modal-overlay" v-if="showConfirmModal" @click.self="showConfirmModal = false">
        <div class="modal-content confirm-modal">
          <div class="modal-header">
            <h3>Confirm Your Seat</h3>
            <button class="close-btn" @click="showConfirmModal = false"><i class="mdi mdi-close"></i></button>
          </div>
          
          <div class="modal-body">
            <div class="venue-summary">
              <img src="https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&w=150&q=80" alt="Dar Al-Saada" class="modal-venue-img" />
              <div class="modal-venue-info">
                <h4>Dar Al-Saada</h4>
                <p><i class="mdi mdi-map-marker-outline"></i> Medina District, Marrakesh</p>
                <span class="badge-seat"><i class="mdi mdi-ticket-confirmation-outline"></i> 1 Seat Reserved</span>
              </div>
            </div>

            <div class="receipt-details">
              <div class="receipt-row">
                <span>Date & Time</span>
                <span class="value">Saturday, Oct 12 at 19:30</span>
              </div>
              <div class="receipt-row">
                <span>Experience</span>
                <span class="value">Communal Dinner</span>
              </div>
              <div class="receipt-divider"></div>
              <div class="receipt-row">
                <span>Price per Seat</span>
                <span class="value">450 MAD</span>
              </div>
              <div class="receipt-row">
                <span>Service Fee</span>
                <span class="value">25 MAD</span>
              </div>
              <div class="receipt-divider"></div>
              <div class="receipt-row total">
                <span>Total Amount</span>
                <span class="value-total">475 MAD</span>
              </div>
            </div>

            <div class="info-alert">
              <i class="mdi mdi-information-outline"></i>
              <p>Free cancellation up to 24 hours before the event. Your payment is processed securely via Digital Majlis Pay.</p>
            </div>
          </div>

          <div class="modal-footer">
            <button class="btn-primary w-100" @click="showConfirmModal = false">
              Confirm & Pay <i class="mdi mdi-arrow-right"></i>
            </button>
            <button class="btn-cancel" @click="showConfirmModal = false">Cancel</button>
          </div>
        </div>
      </div>
    </transition>

  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: "EventDetail",
  setup() {
    const showConfirmModal = ref(false);

    return {
      showConfirmModal
    }
  }
};
</script>

<style scoped>
.page-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 2.5rem;
}

.tag-row {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.badge-warning {
  background-color: #F4A41C;
  color: #111;
  padding: 0.35rem 0.85rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.5px;
}

.event-id {
  color: #666;
  font-size: 0.85rem;
  font-weight: 600;
}

.page-header h1 {
  font-size: 2.5rem;
  margin-bottom: 0.75rem;
  color: #111;
}

.page-header .subtitle {
  color: #555;
  font-size: 1.05rem;
  max-width: 700px;
  line-height: 1.6;
  margin: 0;
}

.header-actions {
  display: flex;
  gap: 0.75rem;
}

.icon-btn.rounded {
  background: #FFFFFF;
  border: 1px solid #E5E0D8;
  border-radius: 50%;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #333;
  font-size: 1.25rem;
  transition: all 0.2s;
}
.icon-btn.rounded:hover {
  background: #F8F5EF;
}

.hero-image-container {
  position: relative;
  width: 100%;
  height: 450px;
  border-radius: 24px;
  overflow: hidden;
  margin-bottom: 3rem;
}

.hero-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 4rem 2.5rem 2.5rem 2.5rem;
  background: linear-gradient(to top, rgba(0,0,0,0.85), transparent);
  color: white;
}

.hero-overlay h2 {
  font-size: 2.25rem;
  margin: 0 0 0.5rem 0;
}

.hero-overlay p {
  margin: 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.05rem;
}

.detail-grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;
  margin-bottom: 3rem;
}

.info-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.info-card {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  background-color: #FFFFFF;
  border-radius: 20px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.03);
}

.card-header-small {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}

.label-title {
  color: #111;
  font-size: 1.1rem;
  font-weight: 700;
}

.badge-outlined {
  border: 1px solid #9C3311;
  color: #9C3311;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
}

.venue-brief {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.venue-icon {
  width: 56px;
  height: 56px;
  background-color: #F8EFEA; /* Light pink background */
  color: #9C3311;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.75rem;
}

.venue-brief h4 {
  margin: 0 0 0.25rem 0;
  font-size: 1.1rem;
  color: #111;
}

.venue-brief p {
  margin: 0;
  font-size: 0.85rem;
  color: #666;
}

.map-placeholder {
  flex: 1;
  border-radius: 12px;
  overflow: hidden;
  background-color: #EAE6DB;
  min-height: 180px;
}

.map-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.vibe-tags {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 2rem;
}

.vibe-tag {
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
  display: inline-block;
  align-self: flex-start;
}

.bg-blue { background-color: #D9E0FF; color: #1E2A5E; }
.bg-orange { background-color: #F8D3B4; color: #9C3311; }
.bg-pink { background-color: #F8D7D3; color: #9C3311; }

.quote-card {
  border-left: 3px solid #F4A41C;
  padding-left: 1.25rem;
  margin-bottom: 2rem;
}

.quote-card p {
  margin: 0;
  font-size: 1rem;
  line-height: 1.6;
  color: #444;
  font-style: italic;
}

.curator {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: auto;
}

.avatar-group {
  display: flex;
}

.avatar-small {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 2px solid white;
  margin-left: -10px;
}

.avatar-small:first-child {
  margin-left: 0;
}

.curator-text {
  font-size: 0.8rem;
  color: #666;
  line-height: 1.3;
  font-weight: 500;
}

.reservation-card {
  padding: 2rem;
  background-color: #FFFFFF;
  border-radius: 20px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.03);
}

.res-row {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1.5rem;
}

.capacity-row {
  margin-bottom: 0.75rem;
  align-items: center;
}

.res-label {
  font-size: 0.85rem;
  color: #666;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin: 0;
}

.res-value {
  font-size: 1rem;
  color: #111;
  margin: 0;
  text-align: right;
  line-height: 1.4;
}

.res-value.bold {
  font-weight: 700;
  font-size: 1.25rem;
}

.res-icon {
  width: 48px;
  height: 48px;
  background-color: #F8EFEA; /* Light pink background */
  color: #9C3311;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
}

.seat-dots {
  display: flex;
  gap: 4px;
}

.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #E0E0E0;
}

.dot.filled {
  background-color: #F4A41C;
}

.divider {
  border: none;
  border-top: 1px solid #E5E0D8;
  margin: 1.5rem 0;
}

.btn-block {
  width: 100%;
  padding: 1.25rem;
  font-size: 1rem;
  background-color: #9C3311;
  color: white;
  border: none;
  border-radius: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-block:hover {
  background-color: #7A280D;
}

.cancel-policy {
  text-align: center;
  font-size: 0.75rem;
  color: #666;
  margin: 1.25rem 0 0 0;
}

.guest-list-card {
  padding: 2rem;
  background-color: #FFFFFF;
  border-radius: 20px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.03);
}

.guest-hint {
  font-size: 0.85rem;
  color: #666;
  line-height: 1.5;
  margin-bottom: 2rem;
}

.guest-list {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.guest-item {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.guest-item .avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
}

.mystery-avatar {
  background-color: #EAE6DB;
  color: #999;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1.2rem;
}

.guest-info {
  flex: 1;
}

.guest-info h4 {
  margin: 0 0 0.25rem 0;
  font-size: 0.95rem;
  color: #111;
}

.guest-info p {
  margin: 0;
  font-size: 0.75rem;
  color: #666;
}

.mystery .guest-info h4, .mystery .guest-info p {
  color: #999;
}

.text-danger {
  color: #9C3311;
  font-size: 1.25rem;
}
.text-muted {
  color: #999;
  font-size: 1.25rem;
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
  background-color: #FFFFFF;
  border-radius: 20px;
  width: 90%;
  max-width: 500px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.15);
  overflow: hidden;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
  border-bottom: 1px solid #EAE6DB;
}

.modal-header h3 {
  margin: 0;
  font-size: 1.25rem;
  color: #111;
}

.close-btn {
  background: none;
  border: none;
  font-size: 1.25rem;
  color: #666;
  cursor: pointer;
}

.modal-body {
  padding: 2rem;
  /* subtle geometric pattern background similar to the mockup */
  background-image: url('data:image/svg+xml;utf8,<svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M20 0l20 10v20L20 40 0 30V10z" fill="none" stroke="rgba(0,0,0,0.02)" stroke-width="1"/></svg>');
}

.venue-summary {
  display: flex;
  gap: 1.25rem;
  margin-bottom: 2rem;
}

.modal-venue-img {
  width: 80px;
  height: 80px;
  border-radius: 12px;
  object-fit: cover;
}

.modal-venue-info h4 {
  margin: 0 0 0.25rem 0;
  font-size: 1.1rem;
  color: #111;
}

.modal-venue-info p {
  margin: 0 0 0.5rem 0;
  font-size: 0.85rem;
  color: #666;
}

.badge-seat {
  background-color: #F4A41C;
  color: #111;
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 700;
  display: inline-flex;
  align-items: center;
  gap: 4px;
}

.receipt-details {
  background: rgba(255, 255, 255, 0.8);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  border: 1px solid #EAE6DB;
}

.receipt-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.75rem;
  font-size: 0.95rem;
  color: #555;
}

.receipt-row:last-child { margin-bottom: 0; }

.receipt-row .value {
  color: #111;
  font-weight: 600;
}

.receipt-divider {
  border-top: 1px dashed #D5D0C5;
  margin: 1rem 0;
}

.receipt-row.total {
  font-size: 1.1rem;
}

.receipt-row.total .value-total {
  color: #9C3311;
  font-weight: 700;
  font-size: 1.25rem;
}

.info-alert {
  display: flex;
  gap: 0.75rem;
  background-color: #F8F9FA;
  padding: 1rem;
  border-radius: 8px;
  border-left: 3px solid #2A3B69;
}

.info-alert i {
  color: #2A3B69;
  font-size: 1.1rem;
}

.info-alert p {
  margin: 0;
  font-size: 0.8rem;
  color: #444;
  line-height: 1.4;
}

.modal-footer {
  padding: 1.5rem 2rem 2rem 2rem;
  background: white;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.w-100 { width: 100%; justify-content: center; }

.btn-cancel {
  background: none;
  border: none;
  color: #111;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  padding: 0.5rem;
}
.btn-cancel:hover { text-decoration: underline; }

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
