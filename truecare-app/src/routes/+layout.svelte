<script>
  import '../app.css';
  import Navbar from '$lib/components/Navbar.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import ComingSoonModal from '$lib/components/ComingSoonModal.svelte';
  import ChatbotWidget from '$lib/components/ChatbotWidget.svelte';
  import WhatsAppButton from '$lib/components/WhatsAppButton.svelte';
</script>

<div class="flex flex-col min-h-screen">
  <Navbar />
  <main class="flex-grow">
    <slot />
  </main>
  <Footer />
  <ComingSoonModal />
  <ChatbotWidget />
  <WhatsAppButton />
</div>