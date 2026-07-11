<template>
  <div class="mobile-home">
    
    <!-- Next Gathering Card -->
    <div class="card-dark countdown-card">
      <h3 class="card-subtitle">NEXT GATHERING</h3>
      <div class="countdown">
        <div class="time-block">
          <span class="number text-warning">02</span>
          <span class="label">DAYS</span>
        </div>
        <span class="colon text-warning">:</span>
        <div class="time-block">
          <span class="number text-warning">14</span>
          <span class="label">HOURS</span>
        </div>
        <span class="colon text-warning">:</span>
        <div class="time-block">
          <span class="number text-warning">45</span>
          <span class="label">MINS</span>
        </div>
      </div>
      <p class="gathering-date">Wednesday at 8:00 PM</p>
      <!-- Bottom stripe decoration -->
      <div class="stripe-decoration"></div>
    </div>

    <!-- Matching Status -->
    <div class="card-white matching-status">
      <div class="icon-box bg-warning">
        <i class="mdi mdi-head-lightbulb-outline"></i>
      </div>
      <div class="status-info">
        <h4>Your matching status</h4>
        <p>Algorithm is busy...</p>
        <div class="progress-bar-container">
          <div class="progress-segment fill"></div>
          <div class="progress-segment dot-1"></div>
          <div class="progress-segment dot-2"></div>
          <div class="progress-segment empty"></div>
        </div>
      </div>
    </div>

    <h3 class="section-title">Last week's stats</h3>

    <div class="stats-grid">
      <!-- Strangers Met Card -->
      <div class="card-grey stat-card">
        <i class="mdi mdi-account-group text-danger stat-icon"></i>
        <div class="stat-content">
          <h2 class="text-danger">150</h2>
          <p>strangers met</p>
        </div>
      </div>

      <!-- Trending Location Card -->
      <div class="card-blue stat-card">
        <i class="mdi mdi-fire text-white stat-icon"></i>
        <div class="stat-content">
          <h3 class="text-white">Casablanca</h3>
          <p class="text-light">Trending #1 in Morocco</p>
        </div>
      </div>
    </div>

    <!-- Match Quality Card -->
    <div class="card-white match-quality-card">
      <div class="avatars-group">
        <img src="https://i.pravatar.cc/150?img=11" alt="Avatar" class="av-overlap" />
        <img src="https://i.pravatar.cc/150?img=3" alt="Avatar" class="av-overlap" />
        <img src="https://i.pravatar.cc/150?img=5" alt="Avatar" class="av-overlap" />
      </div>
      <div class="mq-info">
        <h4>98% Match Quality</h4>
        <p>Based on 452 reviews</p>
      </div>
      <i class="mdi mdi-star text-warning mq-star"></i>
      
      <!-- Floating Action Button inside card -->
      <button class="fab-suggest">
        <i class="mdi mdi-map-marker-plus-outline"></i> Suggest Venue
      </button>
    </div>

  </div>
</template>

<script>
export default {
  name: "MobileHome",
};
</script>

<style scoped>
.mobile-home {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding-bottom: 2rem;
}

/* Cards Base */
.card-dark {
  background-color: #0A194E; /* Deep dark blue */
  border-radius: 16px;
  color: white;
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
}

.card-white {
  background-color: #FFFFFF;
  border-radius: 16px;
  padding: 1.25rem;
  box-shadow: 0 2px 10px rgba(0,0,0,0.03);
}

.card-grey {
  background-color: #F5F3ED; /* Beige/grey */
  border-radius: 16px;
  padding: 1.25rem;
}

.card-blue {
  background-color: #6A7BBA; /* Muted purple/blue */
  border-radius: 16px;
  padding: 1.25rem;
}

.text-warning { color: #F4A41C; }
.text-danger { color: #9C3311; }
.text-white { color: #FFFFFF; }
.text-light { color: rgba(255,255,255,0.8); }

/* Next Gathering Card */
.countdown-card {
  padding: 2.5rem 1.5rem;
  text-align: center;
}

.card-subtitle {
  font-size: 0.85rem;
  font-weight: 500;
  letter-spacing: 1.5px;
  margin: 0 0 1.5rem 0;
  color: rgba(255,255,255,0.9);
}

.countdown {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 0.75rem;
  margin-bottom: 2rem;
}

.time-block {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.number {
  font-size: 2.25rem;
  font-weight: 300;
  line-height: 1;
}

.label {
  font-size: 0.65rem;
  font-weight: 700;
  margin-top: 0.5rem;
  color: white;
}

.colon {
  font-size: 2rem;
  font-weight: 300;
  line-height: 1;
  margin-top: -2px;
}

.gathering-date {
  font-size: 1.1rem;
  font-weight: 500;
  margin: 0;
}

.stripe-decoration {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 6px;
  background: repeating-linear-gradient(
    45deg,
    #F4A41C,
    #F4A41C 10px,
    #9C3311 10px,
    #9C3311 20px
  );
}

/* Matching Status */
.matching-status {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.icon-box {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  flex-shrink: 0;
}

.bg-warning {
  background-color: #F4A41C;
  color: #111;
}

.status-info {
  flex: 1;
}

.status-info h4 {
  margin: 0 0 0.25rem 0;
  font-size: 1rem;
  color: #111;
}

.status-info p {
  margin: 0 0 0.5rem 0;
  font-size: 0.9rem;
  color: #666;
  font-style: italic;
}

.progress-bar-container {
  display: flex;
  gap: 4px;
  align-items: center;
}

.progress-segment {
  height: 6px;
  border-radius: 4px;
  background-color: #E0E0E0;
}

.progress-segment.fill {
  width: 60%;
  background-color: #9C3311;
}

.progress-segment.dot-1 {
  width: 6px;
  background-color: #D5D0C5;
}

.progress-segment.dot-2 {
  width: 6px;
  background-color: #E0E0E0;
}

.progress-segment.empty {
  flex: 1;
  background-color: #EAE6DB;
}

/* Stats Section */
.section-title {
  font-size: 1.1rem;
  color: #333;
  font-weight: 500;
  margin: 0.5rem 0 0 0;
}

.stats-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.stat-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 140px;
}

.stat-icon {
  font-size: 2rem;
  margin-bottom: auto;
}

.stat-content h2 {
  font-size: 2rem;
  margin: 0 0 0.25rem 0;
  font-weight: 300;
}

.stat-content h3 {
  font-size: 1.25rem;
  margin: 0 0 0.25rem 0;
  font-weight: 500;
}

.stat-content p {
  margin: 0;
  font-size: 0.85rem;
  line-height: 1.2;
}

/* Match Quality Card */
.match-quality-card {
  display: flex;
  align-items: center;
  padding: 1.5rem 1.25rem 3rem 1.25rem; /* extra bottom padding for FAB */
  position: relative;
  gap: 1rem;
  margin-top: 0.5rem;
}

.avatars-group {
  display: flex;
  flex-shrink: 0;
}

.av-overlap {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 2px solid white;
  margin-left: -12px;
  object-fit: cover;
}

.av-overlap:first-child {
  margin-left: 0;
}

.mq-info {
  flex: 1;
}

.mq-info h4 {
  margin: 0 0 0.25rem 0;
  font-size: 1.05rem;
  color: #111;
}

.mq-info p {
  margin: 0;
  font-size: 0.8rem;
  color: #666;
  font-weight: 600;
}

.mq-star {
  font-size: 1.5rem;
}

.fab-suggest {
  position: absolute;
  bottom: -15px; /* stick out bottom */
  right: 15px;
  background-color: #9C3311;
  color: white;
  border: none;
  padding: 0.75rem 1.25rem;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  box-shadow: 0 4px 10px rgba(156,51,17,0.3);
  cursor: pointer;
}

.fab-suggest i {
  font-size: 1.2rem;
}
</style>
