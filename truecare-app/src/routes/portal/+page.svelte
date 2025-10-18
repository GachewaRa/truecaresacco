<script>
  import { showModal, modalMessage } from '$lib/stores/modal.js';
  
  function handleLogin(e) {
    e.preventDefault();
    modalMessage.set('Member portal login functionality is coming soon! Stay tuned for secure access to your account.');
    showModal.set(true);
  }
  
  function handleForgotPassword() {
    modalMessage.set('Password reset functionality coming soon!');
    showModal.set(true);
  }
  
  function handleRegister() {
    modalMessage.set('Member portal registration coming soon!');
    showModal.set(true);
  }
</script>

<svelte:head>
  <title>Member Portal - 254TrueCare SACCO</title>
  <meta name="description" content="Access your 254TrueCare SACCO account. Check balances, loan status, and manage your savings securely." />
</svelte:head>

<div class="min-h-screen bg-gradient-to-br from-primary via-primary-dark to-blue-900 flex items-center justify-center py-12 px-4">
  <div class="max-w-md w-full">
    <!-- Logo and Header -->
    <div class="text-center mb-8">
      <div class="inline-flex items-center space-x-3 mb-4">
        <div class="w-16 h-16 bg-gradient-to-br from-secondary to-white rounded-xl flex items-center justify-center text-primary font-bold text-2xl shadow-xl">
          254
        </div>
      </div>
      <h1 class="text-3xl font-bold text-white mb-2">Member Portal</h1>
      <p class="text-blue-100">Sign in to access your account</p>
    </div>
    
    <!-- Login Card -->
    <div class="bg-white rounded-2xl shadow-2xl p-8 mb-6">
      <form on:submit={handleLogin} class="space-y-6">
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-2">Member Number or Email</label>
          <div class="relative">
            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
              </svg>
            </div>
            <input 
              type="text" 
              required 
              class="input-field pl-10" 
              placeholder="Enter your member number or email"
            />
          </div>
        </div>
        
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-2">Password</label>
          <div class="relative">
            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
              </svg>
            </div>
            <input 
              type="password" 
              required 
              class="input-field pl-10" 
              placeholder="Enter your password"
            />
          </div>
        </div>
        
        <div class="flex items-center justify-between">
          <label class="flex items-center">
            <input type="checkbox" class="mr-2" />
            <span class="text-sm text-gray-600">Remember me</span>
          </label>
          <button 
            type="button" 
            on:click={handleForgotPassword}
            class="text-sm text-primary hover:text-primary-dark font-semibold"
          >
            Forgot password?
          </button>
        </div>
        
        <button type="submit" class="btn-primary w-full text-lg py-4">
          Sign In
        </button>
      </form>
      
      <!-- Two-Factor Authentication Info -->
      <div class="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
        <div class="flex items-start">
          <svg class="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"/>
          </svg>
          <div>
            <p class="text-sm font-semibold text-gray-900 mb-1">Secure Login</p>
            <p class="text-xs text-gray-600">Your account is protected with two-factor authentication for enhanced security.</p>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Register Link -->
    <div class="text-center">
      <p class="text-blue-100 mb-2">Don't have an account?</p>
      <button 
        on:click={handleRegister}
        class="text-secondary hover:text-white font-semibold transition-colors"
      >
        Register for Member Portal
      </button>
    </div>
    
    <!-- Features -->
    <div class="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
      <div class="bg-white bg-opacity-10 backdrop-blur-lg rounded-lg p-4 text-center">
        <div class="text-3xl mb-2">💰</div>
        <p class="text-sm text-white font-semibold mb-1">Check Balances</p>
        <p class="text-xs text-blue-100">View your savings and shares</p>
      </div>
      
      <div class="bg-white bg-opacity-10 backdrop-blur-lg rounded-lg p-4 text-center">
        <div class="text-3xl mb-2">📊</div>
        <p class="text-sm text-white font-semibold mb-1">Loan Status</p>
        <p class="text-xs text-blue-100">Track loan applications</p>
      </div>
      
      <div class="bg-white bg-opacity-10 backdrop-blur-lg rounded-lg p-4 text-center">
        <div class="text-3xl mb-2">📈</div>
        <p class="text-sm text-white font-semibold mb-1">Dividends</p>
        <p class="text-xs text-blue-100">View dividend earnings</p>
      </div>
    </div>
    
    <!-- Back to Home -->
    <div class="mt-8 text-center">
      <a href="/" class="text-blue-100 hover:text-white transition-colors inline-flex items-center">
        <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
        </svg>
        Back to Home
      </a>
    </div>
  </div>
</div>