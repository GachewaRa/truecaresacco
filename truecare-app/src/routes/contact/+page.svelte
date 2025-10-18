<script>
  import Hero from '$lib/components/Hero.svelte';
  import { showModal, modalMessage } from '$lib/stores/modal.js';
  
  function handleFormSubmit(e) {
    e.preventDefault();
    modalMessage.set('Thank you for your message! We will get back to you soon. This contact form functionality is coming soon.');
    showModal.set(true);
  }
</script>

<svelte:head>
  <title>Contact Us - 254TrueCare SACCO</title>
  <meta name="description" content="Get in touch with 254TrueCare SACCO. Visit our office, call us, or send us a message. We're here to help!" />
</svelte:head>

<Hero 
  title="Contact Us"
  subtitle="We're here to help and answer any questions you may have"
  showCTA={false}
/>

<!-- Contact Info & Form Section -->
<section class="py-20 bg-white">
  <div class="container mx-auto px-4">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
      <!-- Contact Information -->
      <div>
        <h2 class="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
        <p class="text-gray-600 mb-8">
          Have questions or need assistance? Our dedicated team is ready to help you with any inquiries about membership, products, or services.
        </p>
        
        <div class="space-y-6">
          <div class="flex items-start">
            <div class="bg-primary text-white rounded-lg p-3 mr-4">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
            </div>
            <div>
              <h3 class="font-semibold text-gray-900 mb-1">Office Location</h3>
              <p class="text-gray-600">254 TrueCare Plaza, Kimathi Street</p>
              <p class="text-gray-600">P.O. Box 12345-00100</p>
              <p class="text-gray-600">Nairobi, Kenya</p>
            </div>
          </div>
          
          <div class="flex items-start">
            <div class="bg-primary text-white rounded-lg p-3 mr-4">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
            </div>
            <div>
              <h3 class="font-semibold text-gray-900 mb-1">Phone Numbers</h3>
              <p class="text-gray-600">+254 700 000 000</p>
              <p class="text-gray-600">+254 720 000 000</p>
              <p class="text-gray-600">Toll Free: 0800 254 000</p>
            </div>
          </div>
          
          <div class="flex items-start">
            <div class="bg-primary text-white rounded-lg p-3 mr-4">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
            </div>
            <div>
              <h3 class="font-semibold text-gray-900 mb-1">Email Address</h3>
              <p class="text-gray-600">info@254truecare.co.ke</p>
              <p class="text-gray-600">support@254truecare.co.ke</p>
            </div>
          </div>
          
          <div class="flex items-start">
            <div class="bg-green-500 text-white rounded-lg p-3 mr-4">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
            </div>
            <div>
              <h3 class="font-semibold text-gray-900 mb-1">WhatsApp</h3>
              <p class="text-gray-600">+254 700 000 000</p>
              <a href="https://wa.me/254700000000" class="text-primary hover:text-primary-dark font-semibold">
                Chat with us
              </a>
            </div>
          </div>
          
          <div class="flex items-start">
            <div class="bg-primary text-white rounded-lg p-3 mr-4">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <div>
              <h3 class="font-semibold text-gray-900 mb-1">Working Hours</h3>
              <p class="text-gray-600">Monday - Friday: 8:00 AM - 5:00 PM</p>
              <p class="text-gray-600">Saturday: 9:00 AM - 1:00 PM</p>
              <p class="text-gray-600">Sunday: Closed</p>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Contact Form -->
      <div class="card p-8">
        <h2 class="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
        <form on:submit={handleFormSubmit} class="space-y-6">
          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
            <input type="text" required class="input-field" placeholder="John Doe" />
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-2">Email *</label>
              <input type="email" required class="input-field" placeholder="john@example.com" />
            </div>
            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-2">Phone *</label>
              <input type="tel" required class="input-field" placeholder="0700000000" />
            </div>
          </div>
          
          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-2">Subject *</label>
            <select required class="input-field">
              <option value="">Select a subject</option>
              <option value="membership">Membership Inquiry</option>
              <option value="loans">Loan Application</option>
              <option value="savings">Savings Account</option>
              <option value="complaint">Complaint</option>
              <option value="general">General Inquiry</option>
              <option value="other">Other</option>
            </select>
          </div>
          
          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-2">Message *</label>
            <textarea required class="input-field" rows="6" placeholder="How can we help you?"></textarea>
          </div>
          
          <button type="submit" class="btn-primary w-full text-lg py-4">
            Send Message
          </button>
        </form>
      </div>
    </div>
  </div>
</section>

<!-- Map Section -->
<section class="py-20 bg-gray-50">
  <div class="container mx-auto px-4">
    <h2 class="section-title text-center">Find Us</h2>
    <p class="section-subtitle text-center">Visit our office</p>
    
    <div class="card overflow-hidden max-w-5xl mx-auto">
      <div class="bg-gradient-to-br from-primary to-secondary h-96 flex items-center justify-center text-white">
        <div class="text-center">
          <div class="text-6xl mb-4">📍</div>
          <p class="text-xl font-semibold">Google Maps Integration</p>
          <p class="text-blue-100 mt-2">Map will be embedded here</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Quick Links Section -->
<section class="py-20 bg-white">
  <div class="container mx-auto px-4">
    <h2 class="section-title text-center">Quick Links</h2>
    <p class="section-subtitle text-center">Find what you're looking for</p>
    
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
      <a href="/membership" class="card p-8 text-center group">
        <div class="text-5xl mb-4 transform group-hover:scale-110 transition-transform">👥</div>
        <h3 class="text-xl font-bold text-gray-900 mb-2">Become a Member</h3>
        <p class="text-gray-600">Join our community today</p>
      </a>
      
      <a href="/products" class="card p-8 text-center group">
        <div class="text-5xl mb-4 transform group-hover:scale-110 transition-transform">💰</div>
        <h3 class="text-xl font-bold text-gray-900 mb-2">Our Products</h3>
        <p class="text-gray-600">Explore savings and loans</p>
      </a>
      
      <a href="/resources" class="card p-8 text-center group">
        <div class="text-5xl mb-4 transform group-hover:scale-110 transition-transform">📄</div>
        <h3 class="text-xl font-bold text-gray-900 mb-2">Resources</h3>
        <p class="text-gray-600">Download forms and guides</p>
      </a>
    </div>
  </div>
</section>