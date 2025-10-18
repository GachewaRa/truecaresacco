<script>
  import { showModal, modalMessage } from '$lib/stores/modal.js';
  
  function closeModal() {
    showModal.set(false);
  }
</script>

{#if $showModal}
  <div class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 animate-fade-in" on:click={closeModal}>
    <div class="bg-white rounded-2xl shadow-2xl p-8 max-w-md mx-4 transform transition-all" on:click|stopPropagation>
      <div class="text-center">
        <div class="mb-4">
          <span class="text-6xl">🚀</span>
        </div>
        <h3 class="text-2xl font-bold text-gray-900 mb-3">Coming Soon!</h3>
        <p class="text-gray-600 mb-6">{$modalMessage}</p>
        <button 
          class="btn-primary w-full"
          on:click={closeModal}
        >
          Got it!
        </button>
      </div>
    </div>
  </div>
{/if}