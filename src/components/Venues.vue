<template>
  <div class="venues-page">
    <header class="page-header">
      <div class="header-content">
        <h1>Venues</h1>
        <p class="subtitle">Curated Moroccan dining experiences.</p>
      </div>
      <div class="header-actions">
        <button class="btn btn-primary"><i class="mdi mdi-plus"></i> Suggest a Venue</button>
      </div>
    </header>

    <div class="search-bar-container">
      <div class="search-input-wrapper">
        <i class="mdi mdi-magnify search-icon"></i>
        <input type="text" placeholder="Search by name or flavor..." class="search-input" />
      </div>
      <div class="filters">
        <div class="filter-dropdown">
          <select class="filter-select">
            <option>All Cities</option>
            <option>Marrakesh</option>
            <option>Fez</option>
            <option>Casablanca</option>
            <option>Rabat</option>
          </select>
          <i class="mdi mdi-chevron-down dropdown-icon"></i>
        </div>
        <div class="filter-dropdown">
          <select class="filter-select">
            <option>Atmosphere</option>
            <option>Traditional</option>
            <option>Modern</option>
            <option>Coastal</option>
          </select>
          <i class="mdi mdi-chevron-down dropdown-icon"></i>
        </div>
        <button class="icon-btn rounded filter-btn"><i class="mdi mdi-tune-vertical"></i></button>
      </div>
    </div>

    <div class="venues-grid">
      <!-- Venue 1 -->
      <div class="venue-card full-card">
        <div class="venue-image">
          <span class="badge badge-warning">Traditional Fassi</span>
          <div class="rating-badge"><i class="mdi mdi-star"></i> 4.9</div>
          <img src="https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="The Saffron Courtyard" />
        </div>
        <div class="venue-content">
          <div class="venue-header">
            <h2>The Saffron Courtyard</h2>
            <p class="location"><i class="mdi mdi-map-marker-outline"></i> Fez Medina</p>
          </div>
          <p class="description">A traditional three-course Tagine experience set in a restored 17th century courtyard.</p>
          <div class="venue-footer">
            <div class="atmosphere">
              <span class="label">ATMOSPHERE</span>
              <span class="value">Imperial Riad</span>
            </div>
            <button class="btn btn-secondary-light" @click="showFullModal = true">View Details</button>
          </div>
        </div>
      </div>

      <!-- Venue 2 -->
      <div class="venue-card full-card">
        <div class="venue-image">
          <span class="badge badge-warning">Modern Marrakchi</span>
          <div class="rating-badge"><i class="mdi mdi-star"></i> 4.7</div>
          <img src="https://images.unsplash.com/photo-1539020140153-e479b8c22e70?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Sky Majlis" />
        </div>
        <div class="venue-content">
          <div class="venue-header">
            <h2>Sky Majlis</h2>
            <p class="location"><i class="mdi mdi-map-marker-outline"></i> Gueliz, Marrakesh</p>
          </div>
          <p class="description">Where tradition meets the stars. Elevated fusion flavors served with panoramic views...</p>
          <div class="venue-footer">
            <div class="atmosphere">
              <span class="label">ATMOSPHERE</span>
              <span class="value">Urban Rooftop</span>
            </div>
            <button class="btn btn-secondary-light" @click="showFullModal = true">View Details</button>
          </div>
        </div>
      </div>

      <!-- Venue 3 -->
      <div class="venue-card full-card">
        <div class="venue-image">
          <span class="badge badge-warning">Coastal Fusion</span>
          <div class="rating-badge"><i class="mdi mdi-star"></i> 4.8</div>
          <img src="https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Le Phare Bleu" />
        </div>
        <div class="venue-content">
          <div class="venue-header">
            <h2>Le Phare Bleu</h2>
            <p class="location"><i class="mdi mdi-map-marker-outline"></i> La Corniche, Casa</p>
          </div>
          <p class="description">Fresh Atlantic catches redefined. A minimalist seaside escape offering...</p>
          <div class="venue-footer">
            <div class="atmosphere">
              <span class="label">ATMOSPHERE</span>
              <span class="value">Oceanic Breeze</span>
            </div>
            <button class="btn btn-secondary-light" @click="showFullModal = true">View Details</button>
          </div>
        </div>
      </div>

      <!-- Venue 4 -->
      <div class="venue-card full-card">
        <div class="venue-image">
          <span class="badge badge-warning">Home Hospitality</span>
          <div class="rating-badge"><i class="mdi mdi-star"></i> 5.0</div>
          <img src="https://images.unsplash.com/photo-1542314831-c6a4d14faaf2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="L'Majlis Oudaya" />
        </div>
        <div class="venue-content">
          <div class="venue-header">
            <h2>L'Majlis Oudaya</h2>
            <p class="location"><i class="mdi mdi-map-marker-outline"></i> Kasbah, Rabat</p>
          </div>
          <p class="description">The heart of Moroccan hospitality. Shared tagines served in a secret garden within...</p>
          <div class="venue-footer">
            <div class="atmosphere">
              <span class="label">ATMOSPHERE</span>
              <span class="value">Intimate Majlis</span>
            </div>
            <button class="btn btn-secondary-light" @click="showFullModal = true">View Details</button>
          </div>
        </div>
      </div>
    </div>
    
    <div class="pagination">
      <div class="dots">
        <span class="dot active"></span>
        <span class="dot"></span>
        <span class="dot"></span>
      </div>
      <a href="#" class="show-more">Show 12 more venues</a>
    </div>
    
    <!-- Table is Full Modal -->
    <transition name="fade-scale">
      <div class="modal-overlay" v-if="showFullModal" @click.self="showFullModal = false">
        <div class="modal-content full-modal">
          
          <div class="modal-top">
            <div class="badge-capacity"><i class="mdi mdi-account-group"></i> At Capacity</div>
            <div class="modal-image-wrapper">
              <img src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&w=400&q=80" alt="Full Table" class="modal-img" />
            </div>
          </div>
          
          <div class="modal-body text-center">
            <h3>Table is Full</h3>
            <p class="modal-text">The Saffron Courtyard is currently hosting a full house. Don't worry—you can join the waitlist or find another gathering nearby.</p>
            
            <div class="modal-actions mt-4">
              <button class="btn-primary w-100 mb-3" @click="showFullModal = false">
                <i class="mdi mdi-clipboard-list-outline"></i> Join the Waitlist
              </button>
              <button class="btn-outlined w-100" @click="showFullModal = false">Browse Other Tables</button>
            </div>
          </div>
          
        </div>
      </div>
    </transition>

  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: "Venues",
  setup() {
    const showFullModal = ref(false);

    return {
      showFullModal
    }
  }
};
</script>

<style scoped>
.page-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 2rem;
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

.btn-primary {
  background-color: #9C3311; /* Dark Red/Brown matching mockup */
  color: white;
  border-radius: 8px;
  padding: 0.85rem 1.5rem;
}

.btn-primary:hover {
  background-color: #7A280D;
}

.search-bar-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 1.5rem;
  margin-bottom: 3rem;
  background-color: #F8F5EF;
  border-radius: 12px;
}

.search-input-wrapper {
  display: flex;
  align-items: center;
  flex: 1;
}

.search-icon {
  font-size: 1.25rem;
  color: #666;
  margin-right: 0.75rem;
}

.search-input {
  border: none;
  background: transparent;
  width: 100%;
  font-size: 1rem;
  outline: none;
  font-family: var(--font-main);
  color: #333;
}

.filters {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.filter-dropdown {
  position: relative;
  display: flex;
  align-items: center;
}

.filter-select {
  border: none;
  background: transparent;
  font-size: 0.95rem;
  font-family: var(--font-main);
  color: #333;
  outline: none;
  cursor: pointer;
  padding-right: 1.5rem;
  appearance: none;
  font-weight: 500;
}

.dropdown-icon {
  position: absolute;
  right: 0;
  pointer-events: none;
  color: #666;
}

.icon-btn.rounded {
  background: #FFFFFF;
  border: 1px solid #E5E0D8;
  border-radius: 8px;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.venues-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-bottom: 3rem;
}

.full-card {
  padding: 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background-color: #FFFFFF;
  border-radius: 20px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.03);
}

.venue-image {
  position: relative;
  height: 250px;
}

.venue-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.badge {
  position: absolute;
  top: 1.25rem;
  left: 1.25rem;
  background-color: #F4A41C;
  color: #111;
  padding: 0.4rem 1rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 700;
}

.rating-badge {
  position: absolute;
  top: 1.25rem;
  right: 1.25rem;
  background: white;
  padding: 0.4rem 0.75rem;
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

.venue-content {
  padding: 2rem;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.venue-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 1rem;
}

.venue-header h2 {
  font-size: 1.5rem;
  margin: 0;
  color: #9C3311;
}

.location {
  color: #666;
  font-size: 0.85rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 4px;
  margin: 0;
}

.description {
  color: #555;
  line-height: 1.6;
  margin-bottom: 2rem;
  font-size: 0.95rem;
}

.venue-footer {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: auto;
}

.atmosphere {
  display: flex;
  flex-direction: column;
}

.atmosphere .label {
  font-size: 0.7rem;
  font-weight: 700;
  color: #666;
  letter-spacing: 0.5px;
  margin-bottom: 4px;
}

.atmosphere .value {
  font-size: 0.95rem;
  font-weight: 600;
  color: #111;
}

.btn-secondary-light {
  background-color: #F8EFEA; /* Light pink/beige */
  color: #9C3311;
  border: none;
  font-weight: 600;
  padding: 0.6rem 1.25rem;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-secondary-light:hover {
  background-color: #F0E0D6;
}

.pagination {
  text-align: center;
  margin-top: 2rem;
}

.dots {
  display: flex;
  justify-content: center;
  gap: 6px;
  margin-bottom: 1rem;
}

.dots .dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #E0E0E0;
}

.dots .dot.active {
  background-color: #F4A41C;
}

.show-more {
  color: #9C3311;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 600;
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
  max-width: 420px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.15);
  overflow: hidden;
}

.modal-top {
  position: relative;
  background-color: #F8D7D3; /* Peach color from mockup */
  padding: 2.5rem 0;
  display: flex;
  justify-content: center;
}

.badge-capacity {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background-color: #C62828;
  color: white;
  padding: 0.35rem 0.85rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 4px;
}

.modal-image-wrapper {
  width: 200px;
  border-radius: 8px;
  overflow: hidden;
  border: 4px solid white;
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
}

.modal-img {
  width: 100%;
  height: auto;
  display: block;
}

.modal-body {
  padding: 2rem 2.5rem 2.5rem 2.5rem;
}

.text-center { text-align: center; }

.modal-body h3 {
  font-size: 1.5rem;
  margin: 0 0 0.75rem 0;
  color: #111;
}

.modal-text {
  font-size: 0.95rem;
  color: #555;
  line-height: 1.5;
  margin: 0;
}

.mt-4 { margin-top: 2rem; }
.mb-3 { margin-bottom: 1rem; }

.btn-primary {
  padding: 1rem;
  border-radius: 12px;
  background-color: #9C3311;
  color: white;
  border: none;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
}

.btn-primary:hover { background-color: #7A280D; }

.btn-outlined {
  padding: 1rem;
  border-radius: 12px;
  background-color: white;
  color: #9C3311;
  border: 1px solid #9C3311;
  font-weight: 600;
  cursor: pointer;
}

.btn-outlined:hover { background-color: #FDF9F7; }

.w-100 { width: 100%; }

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
