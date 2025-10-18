<script>
  import Hero from '$lib/components/Hero.svelte';
  import ServiceCard from '$lib/components/ServiceCard.svelte';
  import TestimonialCard from '$lib/components/TestimonialCard.svelte';
  import AnnouncementCard from '$lib/components/AnnouncementCard.svelte';
  import { services } from '$lib/data/services.js';
  import { testimonials } from '$lib/data/testimonials.js';
  
  const announcements = [
    {
      title: 'Annual General Meeting 2025',
      description: 'Join us on March 15, 2025 for our AGM. All members welcome!',
      date: 'March 15, 2025'
    },
    {
      title: '12% Dividend Declaration',
      description: 'We are pleased to announce a 12% dividend payout for FY 2024.',
      date: 'February 20, 2025'
    }
  ];
  
  const stats = [
    { value: '10,000+', label: 'Active Members' },
    { value: 'KES 500M+', label: 'Total Assets' },
    { value: '12%', label: 'Annual Dividend' },
    { value: '15+', label: 'Years of Service' }
  ];
</script>

<svelte:head>
  <title>254TrueCare SACCO - Empowering Your Financial Future</title>
  <meta name="description" content="Join 254TrueCare SACCO for accessible, reliable savings solutions. Achieve your educational, business, and retirement goals with us." />
</svelte:head>

<Hero />

<!-- Stats Section -->
<section class="py-16 bg-white">
  <div class="container mx-auto px-4">
    <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
      {#each stats as stat}
        <div class="text-center animate-fade-in">
          <div class="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</div>
          <div class="text-gray-600 font-medium">{stat.label}</div>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Services Section -->
<section class="py-20 bg-gray-50">
  <div class="container mx-auto px-4">
    <div class="text-center mb-16">
      <h2 class="section-title">Our Services</h2>
      <p class="section-subtitle">Comprehensive financial solutions tailored to your needs</p>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      {#each services as service}
        <ServiceCard {service} />
      {/each}
    </div>
  </div>
</section>

<!-- Announcements Section -->
<section class="py-20 bg-white">
  <div class="container mx-auto px-4">
    <div class="text-center mb-16">
      <h2 class="section-title">Latest Announcements</h2>
      <p class="section-subtitle">Stay updated with our latest news and events</p>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
      {#each announcements as announcement}
        <AnnouncementCard {announcement} />
      {/each}
    </div>
    
    <div class="text-center mt-12">
      <a href="/news" class="btn-primary">View All News</a>
    </div>
  </div>
</section>

<!-- Why Choose Us Section -->
<section class="py-20 bg-gradient-to-br from-primary to-primary-dark text-white">
  <div class="container mx-auto px-4">
    <div class="text-center mb-16">
      <h2 class="text-4xl md:text-5xl font-bold mb-4">Why Choose 254TrueCare SACCO?</h2>
      <p class="text-xl text-blue-100">Building financial independence together</p>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div class="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6">
        <div class="text-4xl mb-4">🔒</div>
        <h3 class="text-xl font-bold mb-2">Secure & Regulated</h3>
        <p class="text-blue-100">Licensed and regulated by SASRA for your peace of mind</p>
      </div>
      
      <div class="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6">
        <div class="text-4xl mb-4">💎</div>
        <h3 class="text-xl font-bold mb-2">Competitive Returns</h3>
        <p class="text-blue-100">Enjoy attractive dividends and interest rates on your savings</p>
      </div>
      
      <div class="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6">
        <div class="text-4xl mb-4">🤝</div>
        <h3 class="text-xl font-bold mb-2">Member-Focused</h3>
        <p class="text-blue-100">Your success is our priority with personalized service</p>
      </div>
      
      <div class="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6">
        <div class="text-4xl mb-4">📱</div>
        <h3 class="text-xl font-bold mb-2">Digital Convenience</h3>
        <p class="text-blue-100">Access your account anytime with our digital platforms</p>
      </div>
      
      <div class="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6">
        <div class="text-4xl mb-4">📚</div>
        <h3 class="text-xl font-bold mb-2">Financial Education</h3>
        <p class="text-blue-100">Continuous learning resources to improve your financial literacy</p>
      </div>
      
      <div class="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6">
        <div class="text-4xl mb-4">⚡</div>
        <h3 class="text-xl font-bold mb-2">Quick Processing</h3>
        <p class="text-blue-100">Fast loan approvals and efficient service delivery</p>
      </div>
    </div>
  </div>
</section>

<!-- Testimonials Section -->
<section class="py-20 bg-gray-50">
  <div class="container mx-auto px-4">
    <div class="text-center mb-16">
      <h2 class="section-title">What Our Members Say</h2>
      <p class="section-subtitle">Real stories from real members</p>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {#each testimonials as testimonial}
        <TestimonialCard {testimonial} />
      {/each}
    </div>
  </div>
</section>

<!-- CTA Section -->
<section class="py-20 bg-white">
  <div class="container mx-auto px-4">
    <div class="bg-gradient-to-r from-primary to-primary-dark rounded-2xl p-12 text-center text-white">
      <h2 class="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Journey?</h2>
      <p class="text-xl mb-8 text-blue-100">Join thousands of members building their financial future with us</p>
      <div class="flex flex-col sm:flex-row justify-center gap-4">
        <a href="/membership" class="btn-secondary text-lg px-8 py-4">Become a Member</a>
        <a href="/contact" class="btn-outline border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4">Contact Us</a>
      </div>
    </div>
  </div>
</section>