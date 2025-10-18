<script>
  export let member;

  $: initials = member.name
    .trim() 
    .split(/\s+/) 
    .map(n => n.charAt(0).toUpperCase())
    .join('');
</script>

<div class="card p-6 text-center">
  {#if member.image}
    <img 
      src={member.image} 
      alt={initials} 
      class="w-32 h-32 mx-auto mb-4 object-cover rounded-full shadow-lg"
    />
  {:else}
    <div class="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white text-4xl font-bold">
      {initials}
    </div>
  {/if}
  
  <h3 class="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
  <p class="text-primary font-semibold mb-3">{member.position}</p>
  <p class="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
</div>