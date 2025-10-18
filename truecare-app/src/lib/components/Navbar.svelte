<script>
  import { page } from '$app/stores';
  import { showModal, modalMessage } from '$lib/stores/modal.js';
  
  let mobileMenuOpen = false;
  
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Membership', path: '/membership' },
    { name: 'Products & Services', path: '/products' },
    { name: 'Resources', path: '/resources' },
    { name: 'News', path: '/news' },
    { name: 'Contact', path: '/contact' }
  ];
  
  function toggleMobileMenu() {
    mobileMenuOpen = !mobileMenuOpen;
  }
  
  function handlePortalClick() {
    modalMessage.set('Member portal login functionality coming soon!');
    showModal.set(true);
  }
</script>

<nav class="bg-white shadow-lg sticky top-0 z-40">
  <div class="container mx-auto px-4">
    <div class="flex justify-between items-center py-4">
      <!-- Logo -->
      <a href="/" class="flex items-center space-x-3">
        <div class="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center text-white font-bold text-xl">
          254
        </div>
        <div class="hidden md:block">
          <div class="text-xl font-bold text-gray-900">254TrueCare</div>
          <div class="text-xs text-primary">SACCO Society</div>
        </div>
      </a>
      
      <!-- Desktop Navigation -->
      <div class="hidden lg:flex items-center space-x-8">
        {#each navLinks as link}
          <a 
            href={link.path}
            class="text-gray-700 hover:text-primary font-medium transition-colors duration-200 relative group"
            class:text-primary={$page.url.pathname === link.path}
          >
            {link.name}
            <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full"></span>
          </a>
        {/each}
      </div>
      
      <!-- CTA Buttons -->
      <div class="hidden lg:flex items-center space-x-4">
        <a href="/membership" class="btn-outline text-sm py-2">Join Now</a>
        <button on:click={handlePortalClick} class="btn-primary text-sm py-2">Member Portal</button>
      </div>
      
      <!-- Mobile Menu Button -->
      <button 
        class="lg:hidden text-gray-700 focus:outline-none"
        on:click={toggleMobileMenu}
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {#if mobileMenuOpen}
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          {:else}
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          {/if}
        </svg>
      </button>
    </div>
  </div>
  
  <!-- Mobile Menu -->
  {#if mobileMenuOpen}
    <div class="lg:hidden bg-white border-t border-gray-200 animate-fade-in">
      <div class="container mx-auto px-4 py-4 space-y-3">
        {#each navLinks as link}
          <a 
            href={link.path}
            class="block py-2 text-gray-700 hover:text-primary font-medium transition-colors"
            class:text-primary={$page.url.pathname === link.path}
            on:click={() => mobileMenuOpen = false}
          >
            {link.name}
          </a>
        {/each}
        <div class="pt-4 space-y-2">
          <a href="/membership" class="btn-outline block text-center" on:click={() => mobileMenuOpen = false}>Join Now</a>
          <button on:click={() => { handlePortalClick(); mobileMenuOpen = false; }} class="btn-primary block w-full">Member Portal</button>
        </div>
      </div>
    </div>
  {/if}
</nav>