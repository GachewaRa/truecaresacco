<script>
  export let service;
</script>

<a href={service.link} class="card p-8 block group">
  <div class="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
    {service.icon}
  </div>
  <h3 class="text-2xl font-bold text-gray-900 mb-3">
    {service.title}
  </h3>
  <p class="text-gray-600 leading-relaxed">
    {service.description}
  </p>
  <div class="mt-6 flex items-center text-primary font-semibold">
    Learn More
    <svg class="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
    </svg>
  </div>
</a>