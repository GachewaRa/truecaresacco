<script>
  import { showModal, modalMessage } from '$lib/stores/modal.js';
  
  export let product;
  
  function handleApply() {
    modalMessage.set(`Application for ${product.name} coming soon!`);
    showModal.set(true);
  }
</script>

<div class="card p-8">
  <div class="text-5xl mb-4">{product.icon}</div>
  <h3 class="text-2xl font-bold text-gray-900 mb-3">{product.name}</h3>
  <p class="text-gray-600 mb-6">{product.description}</p>
  
  <ul class="space-y-3 mb-6">
    {#each product.features as feature}
      <li class="flex items-start">
        <svg class="w-5 h-5 text-secondary mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
        </svg>
        <span class="text-gray-700">{feature}</span>
      </li>
    {/each}
  </ul>
  
  <button on:click={handleApply} class="btn-primary w-full">
    Apply Now
  </button>
</div>