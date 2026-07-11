<template>
  <div class="mobile-table">
    
    <!-- Venue Card -->
    <div class="venue-card">
      <div class="img-container">
        <img src="https://images.unsplash.com/photo-1542314831-c6a4d14eff50?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Le Jardin" class="venue-img" />
        <span class="badge-reveal">Revealed Venue</span>
        <div class="venue-overlay">
          <h2>Le Jardin</h2>
          <p><i class="mdi mdi-map-marker-outline"></i> 32 Souk el Jeld, Sidi Abdelaziz, Marrakech</p>
        </div>
      </div>
      
      <div class="venue-details">
        <h4 class="time-label text-danger">TONIGHT AT 20:30</h4>
        <p class="venue-desc">A hidden gem within the Medina, offering a rhythmic fusion of organic Moroccan cuisine under the stars.</p>
        
        <!-- Divider dashes -->
        <div class="dashed-divider"></div>

        <button class="btn-primary w-100 mb-3">
          <i class="mdi mdi-directions"></i> Get Directions
        </button>

        <div class="going-toggle">
          <span>Going?</span>
          <label class="switch">
            <input type="checkbox" checked>
            <span class="slider round"></span>
          </label>
        </div>
      </div>
    </div>

    <!-- Your Table's Vibe -->
    <h3 class="section-title">Your Table's Vibe</h3>
    
    <div class="vibe-grid">
      <div class="vibe-card">
        <i class="mdi mdi-compass-drafting text-danger vibe-icon"></i>
        <p>Architecture<br>Lovers</p>
      </div>
      <div class="vibe-card">
        <i class="mdi mdi-silverware-fork-knife text-gold vibe-icon"></i>
        <p>Gourmet Foodies</p>
      </div>
      <div class="vibe-card">
        <i class="mdi mdi-monitor-cellphone text-blue vibe-icon"></i>
        <p>Tech Visionaries</p>
      </div>
    </div>

    <!-- The Mystery Circle -->
    <div class="mystery-header">
      <h3 class="section-title m-0">The Mystery Circle</h3>
      <span class="join-count text-danger">5 others joining</span>
    </div>

    <div class="mystery-avatars">
      <div class="mystery-user">
        <div class="blur-avatar"></div>
        <div class="skeleton-name"></div>
      </div>
      <div class="mystery-user">
        <div class="blur-avatar"></div>
        <div class="skeleton-name"></div>
      </div>
      <div class="mystery-user">
        <div class="blur-avatar"></div>
        <div class="skeleton-name"></div>
      </div>
    </div>

    <!-- Reveal Note -->
    <div class="reveal-card">
      <i class="mdi mdi-lock-outline text-warning reveal-icon"></i>
      <div class="reveal-text">
        <h4>Mystery Reveal at Table</h4>
        <p>Identities are revealed once the first conversation starts over appetizers.</p>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "MobileTheTable",
};
</script>

<style scoped>
.mobile-table {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding-bottom: 2rem;
}

.text-danger { color: #9C3311; }
.text-warning { color: #F4A41C; }
.text-gold { color: #BFA15F; }
.text-blue { color: #4A568C; }
.m-0 { margin: 0 !important; }
.mb-3 { margin-bottom: 1rem; }
.w-100 { width: 100%; }

.section-title {
  font-size: 1.25rem;
  color: #111;
  font-weight: 500;
  margin: 0;
}

/* Venue Card */
.venue-card {
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 2px 15px rgba(0,0,0,0.03);
}

.img-container {
  position: relative;
  height: 220px;
}

.venue-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.badge-reveal {
  position: absolute;
  top: 1rem;
  left: 1rem;
  background-color: #F4A41C;
  color: #111;
  padding: 0.35rem 0.85rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 700;
}

.venue-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 2rem 1.25rem 1rem 1.25rem;
  background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
  color: white;
}

.venue-overlay h2 {
  font-size: 1.75rem;
  margin: 0 0 0.25rem 0;
}

.venue-overlay p {
  font-size: 0.85rem;
  margin: 0;
  display: flex;
  align-items: flex-start;
  gap: 0.25rem;
}

.venue-details {
  padding: 1.5rem;
}

.time-label {
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 1px;
  margin: 0 0 0.5rem 0;
}

.venue-desc {
  font-size: 0.95rem;
  color: #444;
  line-height: 1.5;
  margin: 0 0 1.5rem 0;
}

.dashed-divider {
  height: 4px;
  background-image: linear-gradient(to right, #D5D0C5 50%, transparent 50%);
  background-size: 20px 1px;
  background-repeat: repeat-x;
  background-position: center;
  margin-bottom: 1.5rem;
}

.btn-primary {
  background-color: #9C3311;
  color: white;
  border: none;
  padding: 1rem;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  cursor: pointer;
}

.going-toggle {
  background-color: #F5F3ED;
  padding: 0.75rem 1.25rem;
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.going-toggle span {
  font-size: 0.95rem;
  font-weight: 500;
  color: #111;
}

/* Switch */
.switch {
  position: relative;
  display: inline-block;
  width: 44px;
  height: 24px;
}
.switch input { opacity: 0; width: 0; height: 0; }
.slider {
  position: absolute;
  cursor: pointer;
  top: 0; left: 0; right: 0; bottom: 0;
  background-color: #ccc;
  transition: .4s;
}
.slider:before {
  position: absolute;
  content: "";
  height: 18px;
  width: 18px;
  left: 3px;
  bottom: 3px;
  background-color: white;
  transition: .4s;
}
input:checked + .slider { background-color: #9C3311; }
input:checked + .slider:before { transform: translateX(20px); }
.slider.round { border-radius: 24px; }
.slider.round:before { border-radius: 50%; }


/* Vibe Grid */
.vibe-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.vibe-grid .vibe-card:nth-child(3) {
  grid-column: span 2; /* Make 3rd item full width or centered if desired, mockup shows it as a regular card but we have 3 total */
  width: calc(50% - 0.5rem);
}

.vibe-card {
  background: white;
  padding: 1.25rem;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  box-shadow: 0 2px 10px rgba(0,0,0,0.02);
}

.vibe-icon {
  font-size: 1.75rem;
  margin-bottom: 0.5rem;
}

.vibe-card p {
  margin: 0;
  font-size: 0.85rem;
  font-weight: 600;
  color: #333;
  line-height: 1.2;
}


/* Mystery Circle */
.mystery-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
}

.join-count {
  font-size: 0.75rem;
  font-weight: 700;
}

.mystery-avatars {
  display: flex;
  gap: 1rem;
  justify-content: space-between;
}

.mystery-user {
  flex: 1;
  background: white;
  border-radius: 16px;
  padding: 1.25rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  box-shadow: 0 2px 10px rgba(0,0,0,0.02);
}

.blur-avatar {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(45deg, #aaa, #666);
  filter: blur(2px);
  border: 2px solid white;
}

.skeleton-name {
  width: 40px;
  height: 8px;
  background-color: #F0F0F0;
  border-radius: 4px;
}

.reveal-card {
  background-color: #0A194E;
  border-radius: 16px;
  padding: 1.5rem;
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  color: white;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
}

.reveal-icon {
  font-size: 1.5rem;
  margin-top: 2px;
}

.reveal-text h4 {
  margin: 0 0 0.25rem 0;
  font-size: 0.95rem;
}

.reveal-text p {
  margin: 0;
  font-size: 0.75rem;
  color: rgba(255,255,255,0.7);
  line-height: 1.4;
}
</style>
