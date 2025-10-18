<script>
  import Hero from '$lib/components/Hero.svelte';
  import { showModal, modalMessage } from '$lib/stores/modal.js';
  
  function handleDownload(documentName) {
    modalMessage.set(`${documentName} download coming soon! Please visit our office or contact us for this document.`);
    showModal.set(true);
  }
  
  const documents = [
    {
      category: 'Membership Forms',
      items: [
        { name: 'Membership Application Form', icon: '📝', size: '245 KB' },
        { name: 'Member Registration Form', icon: '📋', size: '189 KB' },
        { name: 'Next of Kin Form', icon: '👥', size: '156 KB' }
      ]
    },
    {
      category: 'Loan Application Forms',
      items: [
        { name: 'Personal Loan Application', icon: '💰', size: '298 KB' },
        { name: 'Business Loan Application', icon: '💼', size: '312 KB' },
        { name: 'Emergency Loan Application', icon: '🚨', size: '201 KB' },
        { name: 'Asset Purchase Loan Application', icon: '🏡', size: '345 KB' }
      ]
    },
    {
      category: 'Annual Reports',
      items: [
        { name: 'Annual Report 2024', icon: '📊', size: '2.5 MB' },
        { name: 'Annual Report 2023', icon: '📊', size: '2.3 MB' },
        { name: 'Annual Report 2022', icon: '📊', size: '2.1 MB' }
      ]
    },
    {
      category: 'AGM Notices',
      items: [
        { name: 'AGM Notice 2025', icon: '📢', size: '178 KB' },
        { name: 'AGM Minutes 2024', icon: '📄', size: '456 KB' },
        { name: 'AGM Minutes 2023', icon: '📄', size: '423 KB' }
      ]
    },
    {
      category: 'Policies & Bylaws',
      items: [
        { name: 'SACCO Bylaws', icon: '⚖️', size: '678 KB' },
        { name: 'Credit Policy', icon: '📜', size: '234 KB' },
        { name: 'Dividend Policy', icon: '💎', size: '189 KB' },
        { name: 'Investment Policy', icon: '📈', size: '256 KB' }
      ]
    }
  ];
  
  const financialLiteracy = [
    {
      title: 'Understanding Savings',
      description: 'Learn the importance of saving and how to build a solid savings habit',
      icon: '💰'
    },
    {
      title: 'Smart Borrowing',
      description: 'Tips on responsible borrowing and managing loan repayments',
      icon: '🎯'
    },
    {
      title: 'Investment Basics',
      description: 'Introduction to investment options and risk management',
      icon: '📊'
    },
    {
      title: 'Budgeting Skills',
      description: 'How to create and stick to a personal or family budget',
      icon: '📝'
    },
    {
      title: 'Retirement Planning',
      description: 'Planning for your financial security in retirement',
      icon: '🌅'
    },
    {
      title: 'Financial Goal Setting',
      description: 'Setting and achieving your short and long-term financial goals',
      icon: '🎯'
    }
  ];
</script>

<svelte:head>
  <title>Resources & Downloads - 254TrueCare SACCO</title>
  <meta name="description" content="Access membership forms, loan applications, annual reports, and financial literacy resources from 254TrueCare SACCO." />
</svelte:head>

<Hero 
  title="Resources & Downloads"
  subtitle="Access important documents and financial education materials"
  showCTA={false}
/>

<!-- Documents Section -->
<section class="py-20 bg-white">
  <div class="container mx-auto px-4">
    <h2 class="section-title text-center">Downloadable Documents</h2>
    <p class="section-subtitle text-center">Get the forms and reports you need</p>
    
    <div class="space-y-12">
      {#each documents as docCategory}
        <div>
          <h3 class="text-2xl font-bold text-gray-900 mb-6">{docCategory.category}</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {#each docCategory.items as doc}
              <button 
                on:click={() => handleDownload(doc.name)}
                class="card p-6 text-left hover:shadow-2xl transition-all duration-300 group"
              >
                <div class="flex items-start justify-between">
                  <div class="flex items-start flex-1">
                    <div class="text-4xl mr-4">{doc.icon}</div>
                    <div class="flex-1">
                      <h4 class="font-semibold text-gray-900 mb-1 group-hover:text-primary transition-colors">
                        {doc.name}
                      </h4>
                      <p class="text-sm text-gray-500">{doc.size}</p>
                    </div>
                  </div>
                  <svg class="w-5 h-5 text-primary transform group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                  </svg>
                </div>
              </button>
            {/each}
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Financial Literacy Section -->
<section class="py-20 bg-gray-50">
  <div class="container mx-auto px-4">
    <h2 class="section-title text-center">Financial Literacy</h2>
    <p class="section-subtitle text-center">Empowering you with financial knowledge</p>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {#each financialLiteracy as topic}
        <div class="card p-8">
          <div class="text-5xl mb-4">{topic.icon}</div>
          <h3 class="text-xl font-bold text-gray-900 mb-3">{topic.title}</h3>
          <p class="text-gray-600 mb-6">{topic.description}</p>
          <button 
            on:click={() => handleDownload(topic.title + ' Guide')}
            class="text-primary font-semibold hover:text-primary-dark transition-colors flex items-center"
          >
            Read More
            <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- FAQs Section -->
<section class="py-20 bg-white">
  <div class="container mx-auto px-4">
    <h2 class="section-title text-center">Frequently Asked Questions</h2>
    <p class="section-subtitle text-center">Quick answers to common questions</p>
    
    <div class="max-w-4xl mx-auto space-y-4">
      <details class="card p-6 group">
        <summary class="font-semibold text-gray-900 cursor-pointer flex justify-between items-center">
          How do I become a member?
          <svg class="w-5 h-5 text-primary transform group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
          </svg>
        </summary>
        <p class="text-gray-600 mt-4">
          To become a member, you need to fill out a membership application form, provide required documents (ID, KRA PIN, passport photos), pay a registration fee of KES 500, and make an initial share capital contribution of KES 1,000. Visit our membership page for more details.
        </p>
      </details>
      
      <details class="card p-6 group">
        <summary class="font-semibold text-gray-900 cursor-pointer flex justify-between items-center">
          What are the loan interest rates?
          <svg class="w-5 h-5 text-primary transform group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
          </svg>
        </summary>
        <p class="text-gray-600 mt-4">
          Our loan interest rates are competitive and vary depending on the loan product. Personal loans start at 12% per annum, while business loans have rates starting at 10% per annum. Emergency loans have slightly higher rates due to their quick processing nature. Contact us for specific rate information.
        </p>
      </details>
      
      <details class="card p-6 group">
        <summary class="font-semibold text-gray-900 cursor-pointer flex justify-between items-center">
          How are dividends calculated?
          <svg class="w-5 h-5 text-primary transform group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
          </svg>
        </summary>
        <p class="text-gray-600 mt-4">
          Dividends are calculated based on your share capital contribution and the SACCO's annual performance. The dividend rate is determined at the Annual General Meeting based on our financial results. For 2024, we declared a 12% dividend rate.
        </p>
      </details>
      
      <details class="card p-6 group">
        <summary class="font-semibold text-gray-900 cursor-pointer flex justify-between items-center">
          Can I withdraw my savings anytime?
          <svg class="w-5 h-5 text-primary transform group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
          </svg>
        </summary>
        <p class="text-gray-600 mt-4">
          Yes, you can withdraw from your ordinary savings account at any time. However, fixed deposits have specified maturity periods. Share capital can only be withdrawn upon exit from the SACCO or as per the bylaws. Some restrictions may apply to ensure the SACCO maintains adequate liquidity.
        </p>
      </details>
      
      <details class="card p-6 group">
        <summary class="font-semibold text-gray-900 cursor-pointer flex justify-between items-center">
          How long does loan approval take?
          <svg class="w-5 h-5 text-primary transform group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
          </svg>
        </summary>
        <p class="text-gray-600 mt-4">
          Loan processing time varies by loan type. Emergency loans can be approved within 24-48 hours. Personal and business loans typically take 3-5 working days. Asset purchase loans may take 7-10 working days due to additional verification requirements.
        </p>
      </details>
      
      <details class="card p-6 group">
        <summary class="font-semibold text-gray-900 cursor-pointer flex justify-between items-center">
          Is my money safe with 254TrueCare SACCO?
          <svg class="w-5 h-5 text-primary transform group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
          </svg>
        </summary>
        <p class="text-gray-600 mt-4">
          Absolutely! We are licensed and regulated by the SACCO Societies Regulatory Authority (SASRA), which ensures we maintain high standards of governance and financial management. Your deposits are secure and protected under regulatory frameworks.
        </p>
      </details>
    </div>
  </div>
</section>

<!-- CTA Section -->
<section class="py-20 bg-gradient-to-br from-primary to-primary-dark text-white">
  <div class="container mx-auto px-4">
    <div class="max-w-3xl mx-auto text-center">
      <h2 class="text-3xl md:text-4xl font-bold mb-4">Need More Information?</h2>
      <p class="text-xl text-blue-100 mb-8">
        Can't find what you're looking for? Our team is ready to help!
      </p>
      <div class="flex flex-col sm:flex-row justify-center gap-4">
        <a href="/contact" class="btn-secondary text-lg px-8 py-4">Contact Us</a>
        <a href="/news" class="btn-outline border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4">
          Latest News
        </a>
      </div>
    </div>
  </div>
</section>