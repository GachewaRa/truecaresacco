<script>
  export let testimonial;
</script>

<div class="card p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
  <!-- Rating Stars -->
  <div class="flex mb-4">
    {#each Array(testimonial.rating) as _}
      <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
      </svg>
    {/each}
  </div>

  <!-- Testimonial Text -->
  <p class="text-gray-700 mb-6 leading-relaxed">
    "{testimonial.text}"
  </p>

  <!-- Customer Info -->
  <div class="flex items-center">
    <div class="flex-shrink-0">
      <!-- Initials Avatar as fallback -->
      <div class="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">
        {testimonial.name.split(' ').map(n => n[0]).join('')}
      </div>
    </div>
    <div class="ml-4">
      <h4 class="font-semibold text-gray-900">{testimonial.name}</h4>
      <p class="text-gray-600 text-sm">{testimonial.location}</p>
    </div>
  </div>
</div>

<style>
  .card {
    border: 1px solid #e5e7eb;
  }
</style>