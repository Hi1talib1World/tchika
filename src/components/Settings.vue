<template>
  <div class="settings-page">
    <header class="page-header">
      <h1>Account Settings</h1>
      <div class="header-right">
        <div class="user-pill">
          <span class="status-dot"></span>
          <span class="user-name">Marhaba, Amine</span>
          <img src="https://i.pravatar.cc/150?img=32" alt="Profile" class="avatar-pill" />
        </div>
      </div>
    </header>

    <!-- Top Section: Profile -->
    <div class="grid-2-col mb-4">
      <!-- Avatar Card -->
      <div class="card text-center flex-center-col">
        <div class="avatar-wrapper">
          <img src="https://i.pravatar.cc/150?img=32" alt="Amine El Arabi" class="avatar-large" />
          <button class="edit-badge"><i class="mdi mdi-pencil"></i></button>
        </div>
        <h2 class="user-title">Amine El Arabi</h2>
        <p class="user-subtitle">PREMIUM MEMBER</p>
        <button class="btn-warning w-100 mt-4">Change Photo</button>
      </div>

      <!-- Profile Details Card -->
      <div class="card">
        <h3 class="card-title text-danger mb-4">Profile Details</h3>
        
        <div class="form-group">
          <label>Display Name</label>
          <input type="text" class="form-control" value="Amine El Arabi" />
        </div>
        
        <div class="form-group">
          <label>Bio</label>
          <textarea class="form-control" rows="3">Architect with a passion for traditional Zellige and communal dining. I love sharing stories over a tagine and meeting travelers from across the globe.</textarea>
        </div>
        
        <div class="form-group mb-0">
          <label>Interests & Matching Tags</label>
          <div class="tags-container">
            <span class="tag-pill">Tagine <i class="mdi mdi-close"></i></span>
            <span class="tag-pill">Architecture <i class="mdi mdi-close"></i></span>
            <span class="tag-pill">Darija <i class="mdi mdi-close"></i></span>
            <span class="tag-pill">History <i class="mdi mdi-close"></i></span>
            <button class="tag-pill tag-add">+ Add New</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Middle Section: Account & Security -->
    <div class="card p-0 mb-4 overflow-hidden">
      <div class="card-header bg-light">
        <h3 class="m-0">Account & Security</h3>
        <i class="mdi mdi-shield-check-outline text-danger fs-4"></i>
      </div>
      <div class="card-body p-4">
        <div class="grid-2-col">
          <div class="form-group">
            <label>Email Address</label>
            <div class="input-with-action">
              <input type="email" class="form-control bg-light-grey border-0" value="amine.arabi@majlis.ma" disabled />
              <button class="text-btn text-danger">Change</button>
            </div>
          </div>
          
          <div class="form-group">
            <label>Preferred Language</label>
            <select class="form-control">
              <option>English (UK)</option>
              <option>Français</option>
              <option>العربية</option>
            </select>
          </div>
          
          <div class="form-group mb-0">
            <label>Account Password</label>
            <div class="input-with-action">
              <input type="password" class="form-control bg-light-grey border-0" value="•••••••••••••" disabled />
              <button class="text-btn text-danger">Reset</button>
            </div>
          </div>
          
          <div class="form-group mb-0">
            <label>Multi-Factor Authentication</label>
            <div class="mfa-box">
              <div class="mfa-info">
                <i class="mdi mdi-shield-check-outline text-danger"></i>
                <span>SMS Verification</span>
              </div>
              <label class="switch">
                <input type="checkbox" checked>
                <span class="slider round"></span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Lower Section: Notifications & Privacy -->
    <div class="grid-2-col mb-4">
      <!-- Notifications Card -->
      <div class="card">
        <h3 class="card-title mb-4">Notifications</h3>
        
        <div class="notification-item">
          <div class="notif-text">
            <h4>Dinner Matches</h4>
            <p>When a new table fits your interests</p>
          </div>
          <div class="notif-actions">
            <i class="mdi mdi-email-outline"></i>
            <i class="mdi mdi-bell-outline text-danger"></i>
          </div>
        </div>
        
        <div class="notification-item">
          <div class="notif-text">
            <h4>Messages</h4>
            <p>Direct messages from hosts or guests</p>
          </div>
          <div class="notif-actions">
            <i class="mdi mdi-email-outline text-danger"></i>
            <i class="mdi mdi-bell-outline text-danger"></i>
          </div>
        </div>
        
        <div class="notification-item border-0 pb-0 mb-0">
          <div class="notif-text">
            <h4>Reminders</h4>
            <p>24h before your booked dinner</p>
          </div>
          <div class="notif-actions">
            <i class="mdi mdi-email-outline"></i>
            <i class="mdi mdi-bell-outline text-danger"></i>
            <i class="mdi mdi-message-processing-outline"></i>
          </div>
        </div>
      </div>

      <!-- Privacy Card -->
      <div class="card">
        <h3 class="card-title mb-4">Privacy</h3>
        
        <div class="privacy-item">
          <span>Profile Visibility</span>
          <select class="form-control w-auto min-w-150 bg-light-grey border-0">
            <option>Public</option>
            <option>Connections Only</option>
            <option>Private</option>
          </select>
        </div>
        
        <div class="privacy-item">
          <span>Show Online Status</span>
          <input type="checkbox" class="custom-checkbox" checked />
        </div>
        
        <div class="privacy-item border-0">
          <span>Show Connection List</span>
          <input type="checkbox" class="custom-checkbox" />
        </div>
        
        <div class="mt-auto pt-4">
          <button class="text-btn text-danger fw-600">
            <i class="mdi mdi-cancel"></i> Manage Blocked Users
          </button>
        </div>
      </div>
    </div>

    <!-- Bottom Section: Subscription -->
    <div class="subscription-card mb-5">
      <div class="sub-content">
        <span class="badge-plan">CURRENT PLAN</span>
        <h2>Majlis Elite</h2>
        <p>Unlimited dining bookings and priority access to exclusive cultural workshops.</p>
      </div>
      <div class="sub-details">
        <p class="renew-date">Renews on Oct 24, 2024</p>
        <p class="price">249 MAD <span class="mo">/mo</span></p>
        <button class="btn-white mt-2">Manage Plan</button>
      </div>
      <!-- Background Logo Icon -->
      <i class="mdi mdi-star-four-points-outline bg-icon"></i>
    </div>

    <!-- Bottom Actions -->
    <div class="action-footer">
      <button class="btn-cancel">Cancel</button>
      <button class="btn-save" @click="showSuccessModal = true">Save All Changes</button>
    </div>

    <!-- Success Modal -->
    <transition name="fade-scale">
      <div class="modal-overlay" v-if="showSuccessModal" @click.self="showSuccessModal = false">
        <div class="modal-content text-center" style="max-width: 350px; padding: 2.5rem; background: #fff; border-radius: 20px; position: relative;">
          <div class="icon-bg mx-auto mb-4" style="width: 72px; height: 72px; background: #EAE6FC; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto;">
            <i class="mdi mdi-check-decagram text-danger" style="font-size: 2.5rem;"></i>
          </div>
          <h3 class="mb-2">Changes Saved</h3>
          <p class="text-muted mb-4" style="color: #666; font-size: 0.9rem;">Your account settings have been successfully updated.</p>
          <button class="btn btn-primary w-100" style="padding: 1rem; border-radius: 12px; border: none; background: #9C3311; color: white; cursor: pointer; font-weight: 600;" @click="showSuccessModal = false">Got it</button>
        </div>
      </div>
    </transition>
    
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: "Settings",
  setup() {
    const showSuccessModal = ref(false);
    return { showSuccessModal };
  }
};
</script>

<style scoped>
.settings-page {
  padding-bottom: 2rem;
}

.page-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2.5rem;
}

.page-header h1 {
  font-size: 2rem;
  margin: 0;
  color: #111;
}

.user-pill {
  display: flex;
  align-items: center;
  background-color: #EAE6DB; /* Slightly darker beige */
  padding: 0.25rem 0.25rem 0.25rem 1rem;
  border-radius: 30px;
  gap: 0.75rem;
}

.status-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #9C3311;
}

.user-name {
  font-size: 0.85rem;
  font-weight: 600;
  color: #555;
}

.avatar-pill {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
}

.mb-4 { margin-bottom: 2rem; }
.mb-5 { margin-bottom: 3rem; }
.mb-0 { margin-bottom: 0 !important; }
.mt-4 { margin-top: 2rem; }
.mt-2 { margin-top: 1rem; }
.p-0 { padding: 0 !important; }
.p-4 { padding: 2rem !important; }
.pb-0 { padding-bottom: 0 !important; }
.pt-4 { padding-top: 2rem !important; }
.w-100 { width: 100%; }
.w-auto { width: auto; }
.min-w-150 { min-width: 150px; }
.m-0 { margin: 0 !important; }
.fw-600 { font-weight: 600; }
.fs-4 { font-size: 1.5rem; }
.overflow-hidden { overflow: hidden; }

.grid-2-col {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 2rem;
}

/* Specific grid overrides for sections */
.grid-2-col:nth-of-type(3) {
  grid-template-columns: 1fr 1fr;
}
.card-body .grid-2-col {
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.card {
  background: #FFFFFF;
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 4px 15px rgba(0,0,0,0.03);
  display: flex;
  flex-direction: column;
}

.flex-center-col {
  align-items: center;
  justify-content: center;
}

.card-title {
  font-size: 1.25rem;
  margin: 0;
}

.text-danger { color: #9C3311; }

.avatar-wrapper {
  position: relative;
  margin-bottom: 1.5rem;
}

.avatar-large {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid #F8D3B4; /* Orange/pink border */
}

.edit-badge {
  position: absolute;
  bottom: 5px;
  right: 5px;
  width: 32px;
  height: 32px;
  background-color: #9C3311;
  color: white;
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.user-title {
  font-size: 1.25rem;
  margin: 0 0 0.5rem 0;
  color: #111;
}

.user-subtitle {
  font-size: 0.75rem;
  color: #666;
  letter-spacing: 1px;
  margin: 0;
}

.btn-warning {
  background-color: #F8D3B4;
  color: #9C3311;
  border: none;
  padding: 0.85rem;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-warning:hover {
  background-color: #F4A41C;
  color: #111;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  font-size: 0.75rem;
  color: #111;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.form-control {
  width: 100%;
  padding: 0.85rem 1rem;
  border: 1px solid #E5E0D8;
  border-radius: 8px;
  font-size: 0.95rem;
  font-family: var(--font-main);
  outline: none;
  background-color: #FFFFFF;
}

.form-control:focus {
  border-color: #9C3311;
}

textarea.form-control {
  resize: vertical;
  line-height: 1.5;
}

.bg-light-grey {
  background-color: #F5F3ED;
}
.border-0 {
  border: none !important;
}

.tags-container {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.tag-pill {
  background-color: #F8EFEA;
  color: #9C3311;
  padding: 0.4rem 1rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.tag-pill i {
  font-size: 1rem;
  cursor: pointer;
}

.tag-add {
  background-color: #FFFFFF;
  border: 1px dashed #D5D0C5;
  color: #666;
  cursor: pointer;
}

.card-header {
  padding: 1.5rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #E5E0D8;
}

.bg-light {
  background-color: #F8F5EF;
}

.input-with-action {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.text-btn {
  background: transparent;
  border: none;
  font-weight: 600;
  cursor: pointer;
  padding: 0;
}

.mfa-box {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #F5F3ED;
  padding: 0.75rem 1rem;
  border-radius: 8px;
}

.mfa-info {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.95rem;
  font-weight: 500;
  color: #111;
}

.mfa-info i {
  font-size: 1.25rem;
}

/* Switch toggle */
.switch {
  position: relative;
  display: inline-block;
  width: 44px;
  height: 24px;
}
.switch input { 
  opacity: 0;
  width: 0;
  height: 0;
}
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
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
input:checked + .slider {
  background-color: #9C3311;
}
input:checked + .slider:before {
  transform: translateX(20px);
}
.slider.round {
  border-radius: 24px;
}
.slider.round:before {
  border-radius: 50%;
}

.notification-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 1.25rem;
  margin-bottom: 1.25rem;
  border-bottom: 1px solid #F0F0F0;
}

.notif-text h4 {
  margin: 0 0 0.25rem 0;
  font-size: 0.95rem;
  color: #111;
}

.notif-text p {
  margin: 0;
  font-size: 0.8rem;
  color: #666;
}

.notif-actions {
  display: flex;
  gap: 0.75rem;
}

.notif-actions i {
  font-size: 1.25rem;
  color: #999;
  cursor: pointer;
}
.notif-actions i.text-danger {
  color: #9C3311;
}

.privacy-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 1.25rem;
  margin-bottom: 1.25rem;
  border-bottom: 1px solid #F0F0F0;
}

.privacy-item span {
  font-size: 0.95rem;
  color: #111;
}

.custom-checkbox {
  width: 20px;
  height: 20px;
  cursor: pointer;
  accent-color: #3B82F6; /* Blue for the checkbox in mockup */
}

/* Subscription Card */
.subscription-card {
  background: linear-gradient(135deg, #6A7BBA, #4A568C);
  border-radius: 20px;
  padding: 2.5rem 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  position: relative;
  overflow: hidden;
}

.sub-content {
  position: relative;
  z-index: 2;
  max-width: 60%;
}

.badge-plan {
  background-color: rgba(255,255,255,0.2);
  padding: 0.25rem 1rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 1px;
  display: inline-block;
  margin-bottom: 1rem;
}

.sub-content h2 {
  font-size: 2rem;
  margin: 0 0 0.5rem 0;
}

.sub-content p {
  margin: 0;
  font-size: 1rem;
  opacity: 0.9;
  line-height: 1.5;
}

.sub-details {
  position: relative;
  z-index: 2;
  text-align: right;
  background: rgba(255,255,255,0.1);
  padding: 1.5rem;
  border-radius: 12px;
  min-width: 250px;
}

.renew-date {
  margin: 0 0 0.25rem 0;
  font-size: 0.85rem;
  opacity: 0.9;
}

.price {
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0 0 1rem 0;
}

.price .mo {
  font-size: 1rem;
  font-weight: 400;
  opacity: 0.8;
}

.btn-white {
  background-color: #FFFFFF;
  color: #4A568C;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  width: 100%;
  cursor: pointer;
}

.bg-icon {
  position: absolute;
  right: 5%;
  top: -20%;
  font-size: 250px;
  opacity: 0.05;
  z-index: 1;
}

/* Bottom Actions */
.action-footer {
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
}

.btn-cancel {
  background: #FFFFFF;
  border: 1px solid #9C3311;
  color: #9C3311;
  padding: 0.85rem 2rem;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
}

.btn-save {
  background: #9C3311;
  border: 1px solid #9C3311;
  color: white;
  padding: 0.85rem 2.5rem;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
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
