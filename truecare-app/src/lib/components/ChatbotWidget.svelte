<script>
  import { showModal, modalMessage } from '$lib/stores/modal.js';
  
  function handleClick() {
    modalMessage.set('Live chat feature coming soon! For immediate assistance, please contact us via WhatsApp or email.');
    showModal.set(true);
  }
</script>

<button 
  on:click={handleClick}
  class="fixed bottom-6 right-6 z-50 bg-primary hover:bg-primary-dark text-white rounded-full p-4 shadow-2xl hover:shadow-xl transition-all duration-300 transform hover:scale-110 group"
  aria-label="Chat with us"
>
  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
  </svg>
  <span class="absolute -top-1 -right-1 w-3 h-3 bg-secondary rounded-full animate-pulse"></span>
</button>