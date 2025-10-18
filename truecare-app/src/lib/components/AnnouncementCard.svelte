<script>
  export let announcement;
</script>

<div class="bg-gradient-to-r from-primary to-primary-dark text-white p-6 rounded-xl shadow-lg">
  <div class="flex items-start">
    <div class="text-3xl mr-4">📢</div>
    <div class="flex-1">
      <h4 class="font-bold text-lg mb-2 text-gray-600">{announcement.title}</h4>
      <p class="text-blue-100 text-sm mb-3 text-gray-500">{announcement.description}</p>
      <div class="flex items-center text-xs text-[#106EBE]">
        <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
        </svg>
        {announcement.date}
      </div>
    </div>
  </div>
</div>