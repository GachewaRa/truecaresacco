<script>
  import Hero from '$lib/components/Hero.svelte';
  import NewsCard from '$lib/components/NewsCard.svelte';
  import { news } from '$lib/data/news.js';
  
  let selectedCategory = 'All';
  
  const categories = ['All', 'Events', 'Announcements', 'Financial Literacy', 'Technology', 'Products'];
  
  $: filteredNews = selectedCategory === 'All' 
    ? news 
    : news.filter(article => article.category === selectedCategory);
</script>

<svelte:head>
  <title>News & Updates - 254TrueCare SACCO</title>
  <meta name="description" content="Stay updated with the latest news, events, and financial literacy articles from 254TrueCare SACCO." />
</svelte:head>

<Hero 
  title="News & Updates"
  subtitle="Stay informed with our latest announcements and insights"
  showCTA={false}
/>

<!-- Category Filter -->
<section class="py-8 bg-white sticky top-16 z-30 shadow-sm">
  <div class="container mx-auto px-4">
    <div class="flex flex-wrap justify-center gap-3">
      {#each categories as category}
        <button
          on:click={() => selectedCategory = category}
          class="px-6 py-2 rounded-full font-semibold transition-all duration-300"
          class:bg-primary={selectedCategory === category}
          class:text-white={selectedCategory === category}
          class:bg-gray-100={selectedCategory !== category}
          class:text-gray-700={selectedCategory !== category}
          class:hover:bg-gray-200={selectedCategory !== category}
        >
          {category}
        </button>
      {/each}
    </div>
  </div>
</section>

<!-- Featured Article -->
<section class="py-12 bg-gray-50">
  <div class="container mx-auto px-4">
    <div class="card overflow-hidden max-w-5xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-0">
        <div class="h-64 md:h-auto bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-8xl">
          🎉
        </div>
        <div class="p-8 flex flex-col justify-center">
          <span class="text-xs font-semibold text-primary bg-blue-50 px-3 py-1 rounded-full inline-block mb-4 w-fit">
            Featured
          </span>
          <h2 class="text-3xl font-bold text-gray-900 mb-4">Record Dividend Declaration for 2024</h2>
          <p class="text-gray-600 mb-6">
            We are thrilled to announce a historic 12% dividend payout for the financial year 2024. This achievement reflects our strong performance and commitment to delivering value to our members. Thank you for your continued trust and support!
          </p>
          <button class="btn-primary w-fit">Read Full Article</button>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- News Grid -->
<section class="py-20 bg-white">
  <div class="container mx-auto px-4">
    <h2 class="section-title text-center">Latest Articles</h2>
    <p class="section-subtitle text-center">
      {selectedCategory === 'All' ? 'All news and updates' : `${selectedCategory} articles`}
    </p>
    
    {#if filteredNews.length > 0}
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {#each filteredNews as article}
          <NewsCard {article} />
        {/each}
      </div>
    {:else}
      <div class="text-center py-12">
        <div class="text-6xl mb-4">📭</div>
        <p class="text-gray-600 text-lg">No articles found in this category.</p>
      </div>
    {/if}
  </div>
</section>

<!-- Upcoming Events -->
<section class="py-20 bg-gray-50">
  <div class="container mx-auto px-4">
    <h2 class="section-title text-center">Upcoming Events</h2>
    <p class="section-subtitle text-center">Mark your calendar</p>
    
    <div class="max-w-4xl mx-auto space-y-6">
      <div class="card p-6">
        <div class="flex items-start">
          <div class="bg-primary text-gray-900 rounded-lg p-4 text-center mr-6 flex-shrink-0">
            <div class="text-3xl font-bold">15</div>
            <div class="text-sm">MAR</div>
          </div>
          <div class="flex-1">
            <h3 class="text-xl font-bold text-gray-900 mb-2">Annual General Meeting 2025</h3>
            <p class="text-gray-600 mb-3">
              Join us for our AGM where we will discuss the SACCO's performance, financial statements, and future plans. All members are encouraged to attend and participate in decision-making.
            </p>
            <div class="flex flex-wrap gap-4 text-sm text-gray-600">
              <div class="flex items-center">
                <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                9:00 AM - 2:00 PM
              </div>
              <div class="flex items-center">
                <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                Nairobi Convention Centre
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="card p-6">
        <div class="flex items-start">
          <div class="bg-secondary text-gray-900 rounded-lg p-4 text-center mr-6 flex-shrink-0">
            <div class="text-3xl font-bold">22</div>
            <div class="text-sm">MAR</div>
          </div>
          <div class="flex-1">
            <h3 class="text-xl font-bold text-gray-900 mb-2">Financial Literacy Workshop</h3>
            <p class="text-gray-600 mb-3">
              Free workshop on investment strategies and retirement planning. Learn how to maximize your savings and secure your financial future. Open to all members and their families.
            </p>
            <div class="flex flex-wrap gap-4 text-sm text-gray-600">
              <div class="flex items-center">
                <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                2:00 PM - 5:00 PM
              </div>
              <div class="flex items-center">
                <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                SACCO Head Office
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Newsletter CTA -->
<section class="py-20 bg-gradient-to-br from-primary to-primary-dark text-white">
  <div class="container mx-auto px-4">
    <div class="max-w-3xl mx-auto text-center">
      <div class="text-6xl mb-6">📧</div>
      <h2 class="text-3xl md:text-4xl font-bold mb-4">Never Miss an Update</h2>
      <p class="text-xl text-[#106EBE] mb-8">
        Subscribe to our newsletter and get the latest news, tips, and exclusive offers delivered to your inbox.
      </p>
      <div class="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
        <input 
          type="email" 
          placeholder="Enter your email" 
          class="flex-1 px-6 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-secondary"
        />
        <button class="btn-secondary text-lg px-8 py-4 whitespace-nowrap">
          Subscribe
        </button>
      </div>
    </div>
  </div>
</section>