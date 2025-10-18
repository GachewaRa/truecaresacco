<script>
  export let article;
  
  function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  }
</script>

<div class="card overflow-hidden">
  <div class="h-48 bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-6xl">
    📰
  </div>
  <div class="p-6">
    <div class="flex items-center justify-between mb-3">
      <span class="text-xs font-semibold text-primary bg-blue-50 px-3 py-1 rounded-full">
        {article.category}
      </span>
      <span class="text-xs text-gray-500">{formatDate(article.date)}</span>
    </div>
    <h3 class="text-xl font-bold text-gray-900 mb-2">{article.title}</h3>
    <p class="text-gray-600 mb-4">{article.excerpt}</p>
    <button class="text-primary font-semibold hover:text-primary-dark transition-colors flex items-center">
      Read More
      <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
      </svg>
    </button>
  </div>
</div>