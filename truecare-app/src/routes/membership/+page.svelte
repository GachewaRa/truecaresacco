<script>
  import Hero from '$lib/components/Hero.svelte';
  import { showModal, modalMessage } from '$lib/stores/modal.js';
  
  function handleFormSubmit(e) {
    e.preventDefault();
    modalMessage.set('Thank you for your interest! Online registration is coming soon. Please download the membership form below and submit it to our office.');
    showModal.set(true);
  }
  
  function handleDownload() {
    modalMessage.set('Downloadable forms are coming soon! Please visit our office or contact us for membership forms.');
    showModal.set(true);
  }
  
  const benefits = [
    {
      icon: '💰',
      title: 'Attractive Dividends',
      description: 'Earn competitive annual dividends based on your share capital and the SACCO\'s performance.'
    },
    {
      icon: '🏦',
      title: 'Affordable Loans',
      description: 'Access various loan products with favorable interest rates and flexible repayment terms.'
    },
    {
      icon: '📈',
      title: 'Investment Opportunities',
      description: 'Grow your wealth through our investment products and share capital appreciation.'
    },
    {
      icon: '🎓',
      title: 'Financial Education',
      description: 'Benefit from our financial literacy programs and training workshops.'
    },
    {
      icon: '🤝',
      title: 'Democratic Participation',
      description: 'Vote in AGMs and participate in key decisions affecting the SACCO.'
    },
    {
      icon: '🔒',
      title: 'Secure Savings',
      description: 'Your deposits are safe and protected under SASRA regulations.'
    }
  ];
  
  const steps = [
    {
      number: '01',
      title: 'Check Eligibility',
      description: 'Ensure you meet our membership requirements'
    },
    {
      number: '02',
      title: 'Get Forms',
      description: 'Download or collect membership application forms'
    },
    {
      number: '03',
      title: 'Submit Documents',
      description: 'Fill out forms and provide required documents'
    },
    {
      number: '04',
      title: 'Pay Fees',
      description: 'Pay the registration fee and initial share capital'
    },
    {
      number: '05',
      title: 'Approval',
      description: 'Wait for application review and approval'
    },
    {
      number: '06',
      title: 'Start Saving',
      description: 'Begin your journey to financial independence'
    }
  ];
</script>

<svelte:head>
  <title>Membership - Join 254TrueCare SACCO</title>
  <meta name="description" content="Become a member of 254TrueCare SACCO and enjoy exclusive benefits including attractive dividends, affordable loans, and investment opportunities." />
</svelte:head>

<Hero 
  title="Join 254TrueCare SACCO"
  subtitle="Become part of a community committed to your financial success"
  showCTA={false}
/>

<!-- Benefits Section -->
<section class="py-20 bg-white">
  <div class="container mx-auto px-4">
    <h2 class="section-title text-center">Membership Benefits</h2>
    <p class="section-subtitle text-center">Enjoy exclusive advantages as a valued member</p>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {#each benefits as benefit}
        <div class="card p-8 text-center">
          <div class="text-5xl mb-4">{benefit.icon}</div>
          <h3 class="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
          <p class="text-gray-600">{benefit.description}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Eligibility Section -->
<section class="py-20 bg-gray-50">
  <div class="container mx-auto px-4">
    <div class="max-w-4xl mx-auto">
      <h2 class="section-title text-center">Eligibility Criteria</h2>
      <p class="section-subtitle text-center">Who can join?</p>
      
      <div class="card p-8">
        <ul class="space-y-4">
          <li class="flex items-start">
            <svg class="w-6 h-6 text-secondary mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
            </svg>
            <span class="text-gray-700"><strong>Age:</strong> Must be 18 years or older</span>
          </li>
          <li class="flex items-start">
            <svg class="w-6 h-6 text-secondary mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
            </svg>
            <span class="text-gray-700"><strong>Identification:</strong> Valid national ID or passport</span>
          </li>
          <li class="flex items-start">
            <svg class="w-6 h-6 text-secondary mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
            </svg>
            <span class="text-gray-700"><strong>Registration Fee:</strong> One-time non-refundable fee of KES 500</span>
          </li>
          <li class="flex items-start">
            <svg class="w-6 h-6 text-secondary mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
            </svg>
            <span class="text-gray-700"><strong>Share Capital:</strong> Minimum initial share capital contribution of KES 1,000</span>
          </li>
          <li class="flex items-start">
            <svg class="w-6 h-6 text-secondary mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
            </svg>
            <span class="text-gray-700"><strong>Documents:</strong> Passport photos, proof of residence, and KRA PIN certificate</span>
          </li>
          <li class="flex items-start">
            <svg class="w-6 h-6 text-secondary mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
            </svg>
            <span class="text-gray-700"><strong>Common Bond:</strong> Open to all Kenyan citizens and residents</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>

<!-- Steps to Join Section -->
<section class="py-20 bg-white">
  <div class="container mx-auto px-4">
    <h2 class="section-title text-center">How to Become a Member</h2>
    <p class="section-subtitle text-center">Simple steps to get started</p>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {#each steps as step}
        <div class="relative">
          <div class="card p-6">
            <div class="text-5xl font-bold text-primary mb-4 opacity-20">{step.number}</div>
            <h3 class="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
            <p class="text-gray-600">{step.description}</p>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Application Forms Section -->
<section class="py-20 bg-gray-50">
  <div class="container mx-auto px-4">
    <div class="max-w-4xl mx-auto">
      <h2 class="section-title text-center">Get Started Today</h2>
      <p class="section-subtitle text-center">Download forms or apply online</p>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <div class="card p-8 text-center">
          <div class="text-5xl mb-4">📄</div>
          <h3 class="text-xl font-bold text-gray-900 mb-3">Download Forms</h3>
          <p class="text-gray-600 mb-6">Get our membership application forms and submit them to our office</p>
          <button on:click={handleDownload} class="btn-primary">
            Download Forms
          </button>
        </div>
        
        <div class="card p-8 text-center">
          <div class="text-5xl mb-4">💻</div>
          <h3 class="text-xl font-bold text-gray-900 mb-3">Apply Online</h3>
          <p class="text-gray-600 mb-6">Fill out our online application form for faster processing</p>
          <a href="#online-form" class="btn-secondary">
            Apply Online
          </a>
        </div>
      </div>
      
      <!-- Online Application Form -->
      <div id="online-form" class="card p-8">
        <h3 class="text-2xl font-bold text-gray-900 mb-6">Online Membership Application</h3>
        <form on:submit={handleFormSubmit} class="space-y-6">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-2">First Name *</label>
              <input type="text" required class="input-field" placeholder="John" />
            </div>
            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-2">Last Name *</label>
              <input type="text" required class="input-field" placeholder="Doe" />
            </div>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
              <input type="email" required class="input-field" placeholder="john.doe@example.com" />
            </div>
            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-2">Phone Number *</label>
              <input type="tel" required class="input-field" placeholder="0700000000" />
            </div>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-2">National ID Number *</label>
              <input type="text" required class="input-field" placeholder="12345678" />
            </div>
            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-2">KRA PIN *</label>
              <input type="text" required class="input-field" placeholder="A000000000X" />
            </div>
          </div>
          
          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-2">Residential Address *</label>
            <textarea required class="input-field" rows="3" placeholder="Enter your full address"></textarea>
          </div>
          
          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-2">Occupation *</label>
            <input type="text" required class="input-field" placeholder="Your occupation" />
          </div>
          
          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-2">Monthly Income Range *</label>
            <select required class="input-field">
              <option value="">Select range</option>
              <option value="below-30k">Below KES 30,000</option>
              <option value="30k-50k">KES 30,000 - 50,000</option>
              <option value="50k-100k">KES 50,000 - 100,000</option>
              <option value="above-100k">Above KES 100,000</option>
            </select>
          </div>
          
          <div class="flex items-start">
            <input type="checkbox" required class="mt-1 mr-3" />
            <label class="text-sm text-gray-600">
              I agree to the terms and conditions and confirm that the information provided is accurate.
            </label>
          </div>
          
          <button type="submit" class="btn-primary w-full text-lg py-4">
            Submit Application
          </button>
        </form>
      </div>
    </div>
  </div>
</section>

<!-- Contact CTA Section -->
<section class="py-20 bg-gradient-to-br from-primary to-primary-dark text-white">
  <div class="container mx-auto px-4">
    <div class="max-w-3xl mx-auto text-center">
      <h2 class="text-3xl md:text-4xl font-bold mb-4">Need Help?</h2>
      <p class="text-xl text-blue-100 mb-8">
        Our team is here to assist you with your membership application. Contact us today!
      </p>
      <div class="flex flex-col sm:flex-row justify-center gap-4">
        <a href="/contact" class="btn-secondary text-lg px-8 py-4">Contact Us</a>
        <a href="tel:+254700000000" class="btn-outline border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4">
          Call Us
        </a>
      </div>
    </div>
  </div>
</section>