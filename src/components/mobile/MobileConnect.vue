<template>
  <div class="mobile-connect">
    
    <div class="morning-header">
      <span class="morning-badge">Morning After Gathering</span>
      <h2 class="feedback-title">How was your dinner?</h2>
      <p class="feedback-desc">Reflect on last night's meal at <span class="text-danger">Le Jardin de Marrakesh</span>.</p>
      
      <div class="star-rating">
        <i class="mdi mdi-star-outline text-warning"></i>
        <i class="mdi mdi-star-outline text-warning"></i>
        <i class="mdi mdi-star-outline text-warning"></i>
        <i class="mdi mdi-star-outline text-warning"></i>
        <i class="mdi mdi-star-outline text-dark"></i>
      </div>
    </div>

    <div class="guests-header">
      <h3>The Table Guests</h3>
      <span class="new-faces">3 NEW FACES</span>
    </div>

    <div class="guest-list">
      <!-- Guest 1 -->
      <div class="guest-card">
        <div class="guest-avatar-wrapper">
          <img src="https://i.pravatar.cc/150?img=47" alt="Amira" class="g-avatar" />
          <span class="status-dot"></span>
        </div>
        <div class="guest-info">
          <h4>Amira K.</h4>
          <p>Interior<br>Designer</p>
        </div>
        <button class="btn-icon-close"><i class="mdi mdi-close"></i></button>
        <button class="btn-connect">Connect</button>
      </div>

      <!-- Guest 2 -->
      <div class="guest-card">
        <div class="guest-avatar-wrapper">
          <img src="https://i.pravatar.cc/150?img=12" alt="Omar" class="g-avatar" />
        </div>
        <div class="guest-info">
          <h4>Omar L.</h4>
          <p>Tech<br>Entrepreneur</p>
        </div>
        <button class="btn-icon-close"><i class="mdi mdi-close"></i></button>
        <button class="btn-connect">Connect</button>
      </div>

      <!-- Guest 3 -->
      <div class="guest-card">
        <div class="guest-avatar-wrapper">
          <img src="https://i.pravatar.cc/150?img=34" alt="Zahra" class="g-avatar" />
        </div>
        <div class="guest-info">
          <h4>Zahra B.</h4>
          <p>Cultural<br>Archivist</p>
        </div>
        <button class="btn-icon-close"><i class="mdi mdi-close"></i></button>
        <button class="btn-connect">Connect</button>
      </div>
    </div>

    <h3 class="section-title"><i class="mdi mdi-silverware-fork-knife text-danger mr-2"></i> Note to the Host</h3>

    <div class="feedback-form">
      <label class="form-label">HOW WAS THE HOSPITALITY?</label>
      <textarea class="form-textarea" placeholder="The Tagine was exquisite, and the atmosphere felt like a true majlis..."></textarea>
      
      <div class="form-footer">
        <p class="anonymous-text">Optional: Your feedback is shared anonymously.</p>
        <button class="btn-send">Send Note</button>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "MobileConnect",
};
</script>

<style scoped>
.mobile-connect {
  display: flex;
  flex-direction: column;
  padding-bottom: 2rem;
}

.text-danger { color: #9C3311; font-weight: 600; }
.text-warning { color: #F4A41C; }
.text-dark { color: #111; }
.mr-2 { margin-right: 0.5rem; }

/* Morning Header */
.morning-header {
  text-align: center;
  margin-top: 1rem;
  margin-bottom: 2.5rem;
}

.morning-badge {
  display: inline-block;
  background-color: #F5EAD4; /* Light beige/yellow */
  color: #9C3311;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
}

.feedback-title {
  font-size: 1.25rem;
  color: #111;
  margin: 0 0 0.5rem 0;
}

.feedback-desc {
  font-size: 0.95rem;
  color: #444;
  margin: 0 0 1.5rem 0;
  line-height: 1.4;
}

.star-rating {
  font-size: 2rem;
  display: flex;
  justify-content: center;
  gap: 0.5rem;
}

/* Guests Section */
.guests-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 1rem;
}

.guests-header h3 {
  font-size: 1.1rem;
  color: #111;
  margin: 0;
}

.new-faces {
  font-size: 0.7rem;
  color: #888;
  font-weight: 700;
  letter-spacing: 1px;
}

.guest-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2.5rem;
}

.guest-card {
  background: white;
  padding: 1rem;
  border-radius: 16px;
  display: flex;
  align-items: center;
  gap: 1rem;
  box-shadow: 0 2px 10px rgba(0,0,0,0.02);
}

.guest-avatar-wrapper {
  position: relative;
}

.g-avatar {
  width: 50px;
  height: 50px;
  border-radius: 12px;
  object-fit: cover;
}

.status-dot {
  position: absolute;
  bottom: -2px;
  right: -2px;
  width: 12px;
  height: 12px;
  background-color: #9C3311;
  border: 2px solid white;
  border-radius: 50%;
}

.guest-info {
  flex: 1;
}

.guest-info h4 {
  margin: 0 0 0.15rem 0;
  font-size: 0.95rem;
  color: #111;
}

.guest-info p {
  margin: 0;
  font-size: 0.75rem;
  color: #666;
  line-height: 1.2;
}

.btn-icon-close {
  background-color: #F5F3ED;
  border: none;
  width: 36px;
  height: 36px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  color: #555;
  cursor: pointer;
}

.btn-connect {
  background-color: #F4A41C;
  color: #111;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 10px;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
}

/* Note Form */
.section-title {
  font-size: 1.1rem;
  color: #111;
  margin: 0 0 1rem 0;
  display: flex;
  align-items: center;
}

.feedback-form {
  background: white;
  padding: 1.5rem;
  border-radius: 16px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.02);
}

.form-label {
  display: block;
  font-size: 0.75rem;
  color: #666;
  font-weight: 700;
  letter-spacing: 1px;
  margin-bottom: 0.75rem;
}

.form-textarea {
  width: 100%;
  background-color: #F5F3ED;
  border: none;
  border-radius: 12px;
  padding: 1rem;
  font-size: 0.9rem;
  color: #333;
  min-height: 100px;
  resize: none;
  margin-bottom: 1rem;
  font-family: inherit;
}

.form-textarea::placeholder {
  color: #999;
}

.form-textarea:focus {
  outline: 1px solid #D5D0C5;
}

.form-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.anonymous-text {
  font-size: 0.75rem;
  color: #888;
  margin: 0;
  max-width: 60%;
  line-height: 1.3;
}

.btn-send {
  background: transparent;
  color: #9C3311;
  border: none;
  font-weight: 700;
  font-size: 0.95rem;
  padding: 0;
  cursor: pointer;
}
</style>
