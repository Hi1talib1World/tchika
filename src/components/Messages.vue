<template>
  <div class="messages-page">
    <header class="page-header">
      <div class="header-left">
        <h1>Messages</h1>
        <span class="badge badge-warning">3 New</span>
      </div>
      <div class="header-right">
        <button class="icon-btn-ghost notification-btn">
          <i class="mdi mdi-bell-outline"></i>
          <span class="notification-dot"></span>
        </button>
        <div class="profile-dropdown">
          <img src="https://i.pravatar.cc/150?img=32" alt="Profile" class="avatar" />
          <i class="mdi mdi-chevron-down text-muted"></i>
        </div>
      </div>
    </header>

    <div class="messages-container glass-panel">
      <!-- Left Sidebar (Conversations) -->
      <div class="conversation-sidebar">
        <div class="search-container">
          <i class="mdi mdi-magnify search-icon"></i>
          <input type="text" placeholder="Search conversations..." class="search-input" />
        </div>
        
        <div class="conversation-list">
          <!-- Active Conversation -->
          <div class="conversation-item active">
            <div class="active-indicator"></div>
            <div class="avatar-container">
              <img src="https://i.pravatar.cc/150?img=11" alt="Omar L." class="avatar-list" />
              <span class="status-dot online"></span>
            </div>
            <div class="conversation-info">
              <div class="info-top">
                <h4>Omar L.</h4>
                <span class="time">2M AGO</span>
              </div>
              <p class="snippet">Loved the tagine last ni...</p>
            </div>
          </div>
          
          <!-- Conversation 2 -->
          <div class="conversation-item">
            <div class="avatar-container">
              <img src="https://i.pravatar.cc/150?img=1" alt="Amira K." class="avatar-list" />
            </div>
            <div class="conversation-info">
              <div class="info-top">
                <h4>Amira K.</h4>
                <span class="time">1H AGO</span>
              </div>
              <p class="snippet">Are you coming to the ne...</p>
            </div>
          </div>
          
          <!-- Conversation 3 (Group) -->
          <div class="conversation-item">
            <div class="avatar-container">
              <div class="group-avatar">
                <i class="mdi mdi-account-group"></i>
              </div>
            </div>
            <div class="conversation-info">
              <div class="info-top">
                <h4>Marrakech Foodies</h4>
                <span class="time">3H AGO</span>
              </div>
              <p class="snippet">Youssef: The mint tea wa...</p>
            </div>
          </div>
          
          <!-- Conversation 4 -->
          <div class="conversation-item">
            <div class="avatar-container">
              <img src="https://i.pravatar.cc/150?img=12" alt="Karim H." class="avatar-list" />
            </div>
            <div class="conversation-info">
              <div class="info-top">
                <h4>Karim H.</h4>
                <span class="time">YESTERDAY</span>
              </div>
              <p class="snippet">Sent a photo</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Right Area (Chat) -->
      <div class="chat-area">
        <!-- Chat Header -->
        <div class="chat-header">
          <div class="chat-user-info">
            <div class="avatar-container">
              <img src="https://i.pravatar.cc/150?img=11" alt="Omar L." class="avatar-chat" />
              <span class="status-dot online"></span>
            </div>
            <div>
              <h3>Omar L.</h3>
              <p class="status-text">ONLINE NOW</p>
            </div>
          </div>
          <div class="chat-actions">
            <button class="icon-btn-ghost" @click="showComingSoonModal = true"><i class="mdi mdi-phone-outline"></i></button>
            <button class="icon-btn-ghost" @click="showComingSoonModal = true"><i class="mdi mdi-video-outline"></i></button>
            <button class="icon-btn-ghost"><i class="mdi mdi-information-outline"></i></button>
          </div>
        </div>

        <!-- Chat History -->
        <div class="chat-history">
          <div class="divider-text">
            <span>YESTERDAY</span>
          </div>

          <!-- Received Message (Image) -->
          <div class="message-wrapper received">
            <div class="message-bubble received-bubble">
              <p>Check out this photo of the desert dunes from my trip last week. The light was incredible!</p>
              <img src="https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Desert dunes" class="chat-image" />
            </div>
            <span class="message-time">9:45 PM</span>
          </div>

          <!-- Sent Message -->
          <div class="message-wrapper sent">
            <div class="message-bubble sent-bubble">
              <p>I'm so glad you enjoyed it, Omar! The spice blend was a special gift from a local souk.</p>
            </div>
            <span class="message-time">9:43 PM <i class="mdi mdi-check-all text-danger"></i></span>
          </div>

          <!-- Received Message -->
          <div class="message-wrapper received">
            <div class="message-bubble received-bubble">
              <p>Loved the tagine last night! Truly authentic. Reminded me of my grandmother's cooking back in Fes.</p>
            </div>
            <span class="message-time">9:41 PM</span>
          </div>
        </div>

        <!-- Chat Input -->
        <div class="chat-input-area">
          <div class="input-bar">
            <button class="icon-btn-ghost"><i class="mdi mdi-plus-circle-outline"></i></button>
            <button class="icon-btn-ghost"><i class="mdi mdi-emoticon-outline"></i></button>
            <input type="text" placeholder="Type a message..." class="message-input" />
            <button class="send-btn"><i class="mdi mdi-send"></i></button>
          </div>
          <div class="input-actions">
            <button class="action-link"><i class="mdi mdi-microphone-outline"></i> Voice Note</button>
            <button class="action-link"><i class="mdi mdi-paperclip"></i> File</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Coming Soon Modal -->
    <transition name="fade-scale">
      <div class="modal-overlay" v-if="showComingSoonModal" @click.self="showComingSoonModal = false">
        <div class="modal-content text-center" style="max-width: 350px; padding: 2.5rem; background: #fff; border-radius: 20px; position: relative;">
          <div class="icon-bg mx-auto mb-4" style="width: 72px; height: 72px; background: #F8D3B4; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto;">
            <i class="mdi mdi-tools text-danger" style="font-size: 2.5rem;"></i>
          </div>
          <h3 class="mb-2">Coming Soon!</h3>
          <p class="text-muted mb-4" style="color: #666; font-size: 0.9rem;">Audio and Video calls are currently being developed by our team.</p>
          <button class="btn btn-primary w-100" style="padding: 1rem; border-radius: 12px; border: none; background: #9C3311; color: white; cursor: pointer; font-weight: 600;" @click="showComingSoonModal = false">Okay</button>
        </div>
      </div>
    </transition>

  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: "Messages",
  setup() {
    const showComingSoonModal = ref(false);
    return { showComingSoonModal };
  }
};
</script>

<style scoped>
.messages-page {
  display: flex;
  flex-direction: column;
  height: calc(100vh - 4rem); /* Full height minus some padding */
  max-height: 900px;
}

.page-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}

.header-left {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.header-left h1 {
  font-size: 1.75rem;
  margin: 0;
  color: #111;
}

.badge-warning {
  background-color: #F4A41C;
  color: #111;
  padding: 0.35rem 0.85rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 700;
}

.header-right {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.notification-btn {
  position: relative;
  font-size: 1.5rem;
  color: #333;
}

.notification-dot {
  position: absolute;
  top: 2px;
  right: 2px;
  width: 8px;
  height: 8px;
  background-color: #9C3311;
  border-radius: 50%;
  border: 2px solid #F4F0EA; /* background color */
}

.profile-dropdown {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
}

.profile-dropdown .avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
}

.text-muted {
  color: #999;
}

.icon-btn-ghost {
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #555;
  font-size: 1.25rem;
  transition: color 0.2s;
}

.icon-btn-ghost:hover {
  color: #111;
}

.messages-container {
  display: flex;
  background-color: #FFFFFF;
  border-radius: 24px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.03);
  overflow: hidden;
  flex: 1;
}

/* Left Sidebar */
.conversation-sidebar {
  width: 320px;
  border-right: 1px solid #F0F0F0;
  display: flex;
  flex-direction: column;
}

.search-container {
  padding: 1.5rem;
  position: relative;
}

.search-icon {
  position: absolute;
  left: 2.25rem;
  top: 50%;
  transform: translateY(-50%);
  color: #666;
  font-size: 1.25rem;
}

.search-input {
  width: 100%;
  background-color: #F0F0F0;
  border: none;
  border-radius: 12px;
  padding: 0.85rem 1rem 0.85rem 2.5rem;
  font-size: 0.95rem;
  outline: none;
  font-family: var(--font-main);
}

.conversation-list {
  overflow-y: auto;
  flex: 1;
}

.conversation-item {
  display: flex;
  align-items: center;
  padding: 1.25rem 1.5rem;
  gap: 1rem;
  cursor: pointer;
  position: relative;
  transition: background-color 0.2s;
}

.conversation-item:hover {
  background-color: #FAFAFA;
}

.conversation-item.active {
  background-color: #F8F5EF;
}

.active-indicator {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 4px;
  background-color: #9C3311;
}

.avatar-container {
  position: relative;
}

.avatar-list {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
}

.group-avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: #EAE6DB;
  color: #333;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
}

.status-dot {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 2px solid white;
}

.status-dot.online {
  background-color: #10B981; /* Green */
}

.conversation-info {
  flex: 1;
  min-width: 0; /* for text ellipsis */
}

.info-top {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 0.25rem;
}

.info-top h4 {
  margin: 0;
  font-size: 1rem;
  color: #111;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.info-top .time {
  font-size: 0.7rem;
  color: #666;
  font-weight: 600;
  letter-spacing: 0.5px;
}

.snippet {
  margin: 0;
  font-size: 0.85rem;
  color: #555;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.conversation-item.active .snippet {
  color: #111;
  font-weight: 600;
}

/* Right Chat Area */
.chat-area {
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: #FFFFFF;
}

.chat-header {
  padding: 1.5rem 2rem;
  border-bottom: 1px solid #F0F0F0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.chat-user-info {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.avatar-chat {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  object-fit: cover;
}

.chat-user-info h3 {
  margin: 0 0 0.25rem 0;
  font-size: 1.1rem;
  color: #111;
}

.status-text {
  margin: 0;
  font-size: 0.7rem;
  color: #10B981;
  font-weight: 700;
  letter-spacing: 0.5px;
}

.chat-actions {
  display: flex;
  gap: 1.25rem;
}

.chat-actions .icon-btn-ghost {
  font-size: 1.5rem;
}

.chat-history {
  flex: 1;
  padding: 2rem;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.divider-text {
  text-align: center;
  margin-bottom: 1rem;
}

.divider-text span {
  background-color: transparent;
  color: #666;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 1px;
}

.message-wrapper {
  display: flex;
  flex-direction: column;
  max-width: 70%;
}

.message-wrapper.received {
  align-self: flex-start;
}

.message-wrapper.sent {
  align-self: flex-end;
  align-items: flex-end;
}

.message-bubble {
  padding: 1rem 1.25rem;
  border-radius: 16px;
  font-size: 0.95rem;
  line-height: 1.5;
  margin-bottom: 0.5rem;
}

.message-bubble p {
  margin: 0;
}

.received-bubble {
  background-color: #F0EEE9; /* Light beige/grey */
  color: #111;
  border-bottom-left-radius: 4px;
}

.sent-bubble {
  background-color: #9C3311;
  color: white;
  border-bottom-right-radius: 4px;
}

.chat-image {
  margin-top: 1rem;
  max-width: 100%;
  border-radius: 12px;
}

.message-time {
  font-size: 0.7rem;
  color: #666;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 4px;
}

.text-danger {
  color: #9C3311;
  font-size: 1rem;
}

.chat-input-area {
  padding: 1.5rem 2rem;
  border-top: 1px solid #F0F0F0;
}

.input-bar {
  display: flex;
  align-items: center;
  background-color: #F5F3ED; /* Light beige matching mockup */
  border-radius: 30px;
  padding: 0.5rem 0.5rem 0.5rem 1rem;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.input-bar .icon-btn-ghost {
  font-size: 1.5rem;
  color: #555;
  padding: 0.25rem;
}

.message-input {
  flex: 1;
  border: none;
  background: transparent;
  padding: 0.5rem;
  font-size: 1rem;
  outline: none;
  font-family: var(--font-main);
}

.send-btn {
  background-color: #9C3311;
  color: white;
  border: none;
  border-radius: 50%;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1.25rem;
}

.input-actions {
  display: flex;
  gap: 1.5rem;
  padding-left: 1rem;
}

.action-link {
  background: transparent;
  border: none;
  color: #9C3311;
  font-size: 0.85rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  font-family: var(--font-main);
}

.action-link i {
  font-size: 1.1rem;
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
