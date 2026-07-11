<template>
  <div class="mobile-icebreakers">
    
    <div class="question-card">
      <div class="q-badge">
        <i class="mdi mdi-creation text-gold"></i> QUESTION OF THE ROUND
      </div>
      
      <h2 class="q-english">What's the best hidden gem in your city?</h2>
      
      <div class="divider"></div>
      
      <p class="q-darija">"Shnou hia l-blassa l-mkhbiya l-wa3ra f mdintek?"</p>
      
      <div class="q-footer">
        <span class="round-text">ROUND 2/12</span>
        <div class="dots">
          <span class="dot-red"></span>
          <span class="dot-grey"></span>
          <span class="dot-grey"></span>
          <span class="dot-grey"></span>
        </div>
      </div>
    </div>

    <div class="action-buttons">
      <button class="btn-primary w-100 mb-3">
        Next Question <i class="mdi mdi-arrow-right"></i>
      </button>
      
      <button class="btn-outline w-100">
        <i class="mdi mdi-dice-5-outline"></i> Group Game
      </button>
    </div>
    
    <p class="tip-text">Tip: Share a story instead of just a name.</p>
    
  </div>
</template>

<script>
export default {
  name: "MobileIcebreakers",
};
</script>

<style scoped>
.mobile-icebreakers {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding-bottom: 2rem;
  /* Dark theme is handled by wrapper, but we need specific text colors */
  color: white;
}

.text-gold { color: #F4A41C; }
.w-100 { width: 100%; }
.mb-3 { margin-bottom: 1rem; }

/* Question Card */
.question-card {
  background-color: #4A4A48; /* Slightly lighter grey than background */
  border-radius: 16px;
  padding: 2rem 1.5rem;
  text-align: center;
  margin-top: 1rem;
  margin-bottom: 2.5rem;
  box-shadow: 0 4px 15px rgba(0,0,0,0.2);
}

.q-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background-color: rgba(244, 164, 28, 0.15);
  color: #F4A41C;
  padding: 0.4rem 1rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 1px;
  margin-bottom: 2rem;
}

.q-english {
  font-size: 1.75rem;
  font-weight: 600;
  margin: 0 0 1.5rem 0;
  line-height: 1.3;
}

.divider {
  width: 40px;
  height: 2px;
  background-color: #9C3311;
  margin: 0 auto 1.5rem auto;
}

.q-darija {
  font-size: 1.1rem;
  font-style: italic;
  color: #E29E87; /* Light salmon/peach color */
  margin: 0 0 3rem 0;
  line-height: 1.4;
}

.q-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.round-text {
  font-size: 0.75rem;
  color: rgba(255,255,255,0.5);
  font-weight: 600;
  letter-spacing: 1px;
}

.dots {
  display: flex;
  gap: 4px;
}

.dot-red {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: #9C3311;
}

.dot-grey {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: rgba(255,255,255,0.2);
}

/* Action Buttons */
.btn-primary {
  background-color: #9C3311;
  color: white;
  border: none;
  padding: 1.25rem;
  border-radius: 12px;
  font-size: 1.1rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  cursor: pointer;
}

.btn-outline {
  background-color: transparent;
  color: #F0A58F; /* Peach color matching mockup */
  border: 1px solid rgba(255,255,255,0.15);
  padding: 1.25rem;
  border-radius: 12px;
  font-size: 1.1rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  cursor: pointer;
}

/* Tip */
.tip-text {
  text-align: center;
  color: rgba(255,255,255,0.3);
  font-size: 0.85rem;
  font-weight: 600;
  margin-top: auto;
  padding-top: 2rem;
}
</style>
