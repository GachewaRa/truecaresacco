<script>
  import Hero from '$lib/components/Hero.svelte';
  import ProductCard from '$lib/components/ProductCard.svelte';
  import { savingsAccounts, loanProducts, investments } from '$lib/data/products.js';
</script>

<svelte:head>
  <title>Products & Services - 254TrueCare SACCO</title>
  <meta name="description" content="Explore our savings accounts, loan products, and investment opportunities designed to help you achieve your financial goals." />
</svelte:head>

<Hero 
  title="Our Products & Services"
  subtitle="Comprehensive financial solutions designed for your success"
  showCTA={false}
/>

<!-- Savings Accounts Section -->
<section id="savings" class="py-20 bg-white">
  <div class="container mx-auto px-4">
    <h2 class="section-title text-center">Savings Accounts</h2>
    <p class="section-subtitle text-center">Build your wealth with our flexible savings options</p>
    
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      {#each savingsAccounts as account}
        <ProductCard product={account} />
      {/each}
    </div>
  </div>
</section>

<!-- Loan Products Section -->
<section id="loans" class="py-20 bg-gray-50">
  <div class="container mx-auto px-4">
    <h2 class="section-title text-center">Loan Products</h2>
    <p class="section-subtitle text-center">Access affordable credit to fulfill your dreams</p>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {#each loanProducts as loan}
        <ProductCard product={loan} />
      {/each}
    </div>
    
    <!-- Loan Info Box -->
    <div class="max-w-4xl mx-auto mt-12">
      <div class="bg-blue-50 border-l-4 border-primary p-6 rounded-lg">
        <h3 class="text-lg font-bold text-gray-900 mb-2">Loan Requirements</h3>
        <ul class="space-y-2 text-gray-700">
          <li class="flex items-start">
            <span class="mr-2">•</span>
            <span>Must be an active member for at least 3 months</span>
          </li>
          <li class="flex items-start">
            <span class="mr-2">•</span>
            <span>Regular savings contributions</span>
          </li>
          <li class="flex items-start">
            <span class="mr-2">•</span>
            <span>Sufficient share capital (3 times the loan amount)</span>
          </li>
          <li class="flex items-start">
            <span class="mr-2">•</span>
            <span>Guarantors for loans above KES 100,000</span>
          </li>
          <li class="flex items-start">
            <span class="mr-2">•</span>
            <span>Clear credit history with the SACCO</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>

<!-- Investments & Dividends Section -->
<section id="investments" class="py-20 bg-white">
  <div class="container mx-auto px-4">
    <h2 class="section-title text-center">Investments & Dividends</h2>
    <p class="section-subtitle text-center">Maximize returns on your capital</p>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
      {#each investments as investment}
        <ProductCard product={investment} />
      {/each}
    </div>
    
    <!-- Dividend Info -->
    <div class="max-w-4xl mx-auto">
      <div class="card p-8 bg-gradient-to-br from-primary to-primary-dark text-white">
        <h3 class="text-2xl font-bold mb-4">Annual Dividend Performance</h3>
        <p class="text-blue-100 mb-6">
          Our members enjoy competitive dividends based on the SACCO's annual performance. Dividends are calculated based on your share capital and declared at our Annual General Meeting.
        </p>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="bg-white bg-opacity-10 backdrop-blur-lg rounded-lg p-4 text-center">
            <div class="text-3xl font-bold mb-2">12%</div>
            <div class="text-sm text-blue-100">2024 Dividend Rate</div>
          </div>
          <div class="bg-white bg-opacity-10 backdrop-blur-lg rounded-lg p-4 text-center">
            <div class="text-3xl font-bold mb-2">11.5%</div>
            <div class="text-sm text-blue-100">2023 Dividend Rate</div>
          </div>
          <div class="bg-white bg-opacity-10 backdrop-blur-lg rounded-lg p-4 text-center">
            <div class="text-3xl font-bold mb-2">10.8%</div>
            <div class="text-sm text-blue-100">2022 Dividend Rate</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Digital Payments Section -->
<section class="py-20 bg-gray-50">
  <div class="container mx-auto px-4">
    <h2 class="section-title text-center">Digital Payment Options</h2>
    <p class="section-subtitle text-center">Convenient ways to transact with us</p>
    
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
      <div class="card p-8 text-center">
        <div class="text-5xl mb-4">📱</div>
        <h3 class="text-xl font-bold text-gray-900 mb-3">M-PESA</h3>
        <p class="text-gray-600 mb-4">Make deposits via M-PESA Paybill</p>
        <div class="bg-gray-50 p-4 rounded-lg">
          <p class="text-sm text-gray-600 mb-1">Paybill Number:</p>
          <p class="text-2xl font-bold text-primary">400200</p>
          <p class="text-xs text-gray-500 mt-2">Account: Your Member Number</p>
        </div>
      </div>
      
      <div class="card p-8 text-center">
        <div class="text-5xl mb-4">🏦</div>
        <h3 class="text-xl font-bold text-gray-900 mb-3">Bank Transfer</h3>
        <p class="text-gray-600 mb-4">Direct bank deposits</p>
        <div class="bg-gray-50 p-4 rounded-lg text-left">
          <p class="text-sm mb-2"><strong>Bank:</strong> KCB Bank</p>
          <p class="text-sm mb-2"><strong>Account:</strong> 1234567890</p>
          <p class="text-sm"><strong>Name:</strong> 254TrueCare SACCO</p>
        </div>
      </div>
      
      <div class="card p-8 text-center">
        <div class="text-5xl mb-4">💳</div>
        <h3 class="text-xl font-bold text-gray-900 mb-3">Mobile Banking</h3>
        <p class="text-gray-600 mb-4">USSD code for quick access</p>
        <div class="bg-gray-50 p-4 rounded-lg">
          <p class="text-sm text-gray-600 mb-1">Dial:</p>
          <p class="text-2xl font-bold text-primary">*384*96#</p>
          <p class="text-xs text-gray-500 mt-2">Follow prompts to transact</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- CTA Section -->
<section class="py-20 bg-white">
  <div class="container mx-auto px-4">
    <div class="bg-gradient-to-r from-primary to-primary-dark rounded-2xl p-12 text-center text-white">
      <h2 class="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
      <p class="text-xl mb-8 text-blue-100">Open an account or apply for a loan today</p>
      <div class="flex flex-col sm:flex-row justify-center gap-4">
        <a href="/membership" class="btn-secondary text-lg px-8 py-4">Become a Member</a>
        <a href="/contact" class="btn-outline border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4">
          Contact Us
        </a>
      </div>
    </div>
  </div>
</section>