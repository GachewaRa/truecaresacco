<script>
  import Hero from '$lib/components/Hero.svelte';
  import TeamMemberCard from '$lib/components/TeamMemberCard.svelte';
  import { boardMembers, management } from '$lib/data/team.js';
  
  const coreValues = [
    {
      icon: '🎯',
      title: 'Integrity',
      description: 'We uphold the highest ethical standards, ensuring transparency, accountability, and trust in all our dealings, building lasting relationships with our members.'
    },
    {
      icon: '💪',
      title: 'Empowerment',
      description: 'We are committed to empowering our members through financial education, tailored saving products, and guidance, enabling them to make informed decisions and take control of their financial futures.'
    },
    {
      icon: '💡',
      title: 'Innovation',
      description: 'We embrace innovative solutions and continuously improve our services to meet the evolving needs of our members, using technology to create more efficient, accessible, and convenient saving options.'
    },
    {
      icon: '🤝',
      title: 'Community',
      description: 'We believe in the power of community and collaboration. Our SACCO is built on the strength of collective growth, where each member\'s success contributes to the greater good of all.'
    },
    {
      icon: '🌱',
      title: 'Sustainability',
      description: 'We are committed to responsible growth and sustainability, ensuring that our services contribute to both individual and societal well-being, with a focus on long-term financial health for our members and the communities we serve.'
    }
  ];
</script>

<svelte:head>
  <title>About Us - 254TrueCare SACCO</title>
  <meta name="description" content="Learn about 254TrueCare SACCO's mission, vision, and the team dedicated to empowering your financial future." />
</svelte:head>

<Hero 
  title="About 254TrueCare SACCO"
  subtitle="Building financial independence and security for a brighter future"
  showCTA={false}
/>

<!-- Mission & Vision Section -->
<section class="py-20 bg-white">
  <div class="container mx-auto px-4">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
      <div class="card p-8 bg-gradient-to-br from-primary to-primary-dark text-white">
        <div class="text-5xl mb-4">🎯</div>
        <h2 class="text-3xl font-bold mb-4 text-gray-900">Our Mission</h2>
        <p class="text-lg leading-relaxed text-gray-700">
          To empower individuals and families in Kenya by providing accessible, reliable, and tailored savings solutions that enable them to achieve their educational, land acquisition, business, and retirement goals, fostering financial independence and security for a brighter future.
        </p>
      </div>
      
      <div class="card p-8 bg-gradient-to-br from-secondary to-secondary-dark">
        <div class="text-5xl mb-4">🔭</div>
        <h2 class="text-3xl font-bold mb-4 text-gray-900">Our Vision</h2>
        <p class="text-lg leading-relaxed text-gray-700">
          To be the leading SACCO in Kenya, known for transforming lives through innovative and sustainable savings programs, supporting the aspirations of our members, and contributing to the growth of a financially inclusive Community.
        </p>
      </div>
    </div>
  </div>
</section>

<!-- Our Story Section -->
<section class="py-20 bg-gray-50">
  <div class="container mx-auto px-4">
    <div class="max-w-4xl mx-auto">
      <h2 class="section-title text-center">Our Story</h2>
      <p class="section-subtitle text-center">A journey of growth and empowerment</p>
      
      <div class="prose prose-lg mx-auto text-gray-700">
        <p class="mb-6">
          254TrueCare SACCO was founded with a simple yet powerful vision: to create a financial institution that truly cares about the aspirations and dreams of everyday Kenyans. Starting as a small cooperative society, we have grown into a trusted financial partner for thousands of members across the country.
        </p>
        <p class="mb-6">
          Over the years, we have remained committed to our founding principles of transparency, member empowerment, and community development. Our growth reflects the trust our members have placed in us, and we continue to innovate and expand our services to meet their evolving needs.
        </p>
        <p>
          Today, 254TrueCare SACCO stands as a beacon of financial inclusion, helping members achieve their goals through tailored savings products, accessible loans, and competitive returns on investments. We are proud to be regulated by SASRA, ensuring that our operations meet the highest standards of governance and financial management.
        </p>
      </div>
    </div>
  </div>
</section>

<!-- Core Values Section -->
<section class="py-20 bg-white">
  <div class="container mx-auto px-4">
    <h2 class="section-title text-center">Our Core Values</h2>
    <p class="section-subtitle text-center">The principles that guide everything we do</p>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {#each coreValues as value}
        <div class="card p-8 text-center">
          <div class="text-5xl mb-4">{value.icon}</div>
          <h3 class="text-2xl font-bold text-gray-900 mb-3">{value.title}</h3>
          <p class="text-gray-600 leading-relaxed">{value.description}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Board of Directors Section -->
<section class="py-20 bg-gray-50">
  <div class="container mx-auto px-4">
    <h2 class="section-title text-center">Board of Directors</h2>
    <p class="section-subtitle text-center">Experienced leaders guiding our vision</p>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {#each boardMembers as member}
        <TeamMemberCard {member} />
      {/each}
    </div>
  </div>
</section>

<!-- Management Team Section -->
<section class="py-20 bg-white">
  <div class="container mx-auto px-4">
    <h2 class="section-title text-center">Management Team</h2>
    <p class="section-subtitle text-center">Professionals dedicated to your success</p>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {#each management as member}
        <TeamMemberCard {member} />
      {/each}
    </div>
  </div>
</section>

<!-- Regulatory Compliance Section -->
<section class="py-20 bg-gradient-to-br from-primary to-primary-dark text-white">
  <div class="container mx-auto px-4">
    <div class="max-w-3xl mx-auto text-center">
      <div class="text-6xl mb-6 text-gray-600">✓</div>
      <h2 class="text-3xl md:text-4xl font-bold mb-4 text-gray-600">Licensed & Regulated</h2>
      <p class="text-xl text-gray-500 mb-8">
        254TrueCare SACCO is licensed and regulated by the SACCO Societies Regulatory Authority (SASRA), ensuring the highest standards of governance, financial management, and member protection.
      </p>
      <div class="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 inline-block">
        <p class="text-sm">SASRA Registration Number: <span class="font-bold">CS/XXXX/XXXX</span></p>
      </div>
    </div>
  </div>
</section>