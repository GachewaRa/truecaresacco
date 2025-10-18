<script>
  export let title = "Empowering Your Financial Future";
  export let subtitle = "Accessible, reliable, and tailored savings solutions for your educational, business, and retirement goals.";
  export let showCTA = true;
</script>

<section class="relative bg-gradient-to-br from-primary via-primary-dark to-blue-900 text-white py-20 md:py-32 overflow-hidden">
  <!-- Background Pattern -->
  <div class="absolute inset-0 opacity-10">
    <div class="absolute top-0 left-0 w-64 h-64 bg-secondary rounded-full filter blur-3xl"></div>
    <div class="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full filter blur-3xl"></div>
  </div>
  
  <div class="container mx-auto px-4 relative z-10">
    <div class="max-w-4xl mx-auto text-center">
      <h1 class="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
        {title}
      </h1>
      <p class="text-xl md:text-2xl mb-8 text-blue-100 animate-fade-in">
        {subtitle}
      </p>
      
      {#if showCTA}
        <div class="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in">
          <a href="/membership" class="btn-secondary text-lg px-8 py-4">
            Become a Member
          </a>
          <a href="/products" class="btn-primary text-lg px-8 py-4">
            Explore Products
          </a>
        </div>
      {/if}
    </div>
  </div>
  
  <!-- Wave Bottom -->
  <div class="absolute bottom-0 left-0 right-0">
    <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
    </svg>
  </div>
</section>