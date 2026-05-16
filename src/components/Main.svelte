<script>
    import Step from './Step.svelte';
    import { onMount } from 'svelte';
    import gsap from 'gsap';
    import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
    
    let scrollY = 0;
    let heroRef;
    let profileRef;
    let textRef;
    let skillsRef;
    let pinnedSectionRef;
    
    // Only standout projects - no duplicates
    let projects = [
        { 
            name: 'Warehouse Management System', 
            icon: 'fa-solid fa-warehouse', 
            href: 'https://egwarehouse.vercel.app',
            description: 'Full-stack logistics platform with QR code tracking, real-time inventory management, and role-based access control. Built with modern web technologies.',
            tags: ['React', 'Node.js', 'PostgreSQL', 'QR Tracking']
        },
        { 
            name: 'Dashboard Analytics Platform', 
            icon: 'fa-solid fa-chart-line', 
            href: 'http://dashboardsync.netlify.app/',
            description: 'Enterprise dashboard with theme customization, real-time data visualization, and secure authentication using Clerk JS.',
            tags: ['React', 'Clerk', 'Charts', 'Tailwind']
        },
        { 
            name: 'Secured Mobile App', 
            icon: 'fa-solid fa-shield-halved', 
            href: 'https://github.com/AntonNageh/Secured-App',
            description: 'Cross-platform mobile application for secure logistics management with real-time tracking and order processing.',
            tags: ['React Native', 'Supabase', 'Mobile']
        },
        { 
            name: '3D Interactive Portfolio', 
            icon: 'fa-solid fa-cube', 
            href: 'https://3dportfolioanton.netlify.app/',
            description: 'Immersive 3D portfolio experience built with React Three Fiber, featuring interactive 3D models and smooth animations.',
            tags: ['React', 'Three.js', 'R3F', 'GSAP']
        },
        { 
            name: 'Movies Discovery App', 
            icon: 'fa-solid fa-film', 
            href: 'https://github.com/AntonNageh/MyMovies-React-native-app',
            description: 'Mobile app for discovering trending films with detailed information, built with React Native and modern UI patterns.',
            tags: ['React Native', 'API', 'Mobile UI']
        },
        { 
            name: 'Satellite Tracking System', 
            icon: 'fa-solid fa-satellite', 
            href: 'https://iaetsatellite.vercel.app/',
            description: 'Graduation project: Interactive platform for exploring planetary data through satellite and rover simulations.',
            tags: ['React', 'WebGL', 'Data Viz']
        }
    ];

    let skills = [
        { name: 'React', icon: 'fa-brands fa-react' },
        { name: 'SvelteKit', icon: 'fa-solid fa-bolt' },
        { name: 'TypeScript', icon: 'fa-brands fa-js' },
        { name: 'Tailwind CSS', icon: 'fa-solid fa-wind' },
        { name: 'React Native', icon: 'fa-brands fa-react' },
        { name: 'Three.js', icon: 'fa-solid fa-cube' },
        { name: 'Node.js', icon: 'fa-brands fa-node' },
        { name: 'PostgreSQL', icon: 'fa-solid fa-database' }
    ];

    // Pinned section content
    let pinnedSlides = [
        {
            title: "Building Modern Web Apps",
            description: "I specialize in creating fast, responsive, and accessible web applications using the latest technologies and best practices.",
            icon: "fa-solid fa-rocket",
            color: "from-violet-600 to-purple-600"
        },
        {
            title: "Performance Matters",
            description: "Every millisecond counts. I optimize for speed, ensuring your users get the best experience possible with lazy loading, code splitting, and efficient rendering.",
            icon: "fa-solid fa-gauge-high",
            color: "from-purple-600 to-pink-600"
        },
        {
            title: "Design & User Experience",
            description: "Beautiful interfaces that users love. I combine aesthetics with functionality to create intuitive, engaging experiences.",
            icon: "fa-solid fa-palette",
            color: "from-pink-600 to-rose-600"
        },
        {
            title: "Clean, Maintainable Code",
            description: "Writing code that's easy to understand and maintain. Following best practices, design patterns, and keeping things simple.",
            icon: "fa-solid fa-code",
            color: "from-blue-600 to-cyan-600"
        }
    ];

    onMount(() => {
        // Register GSAP plugins
        if (typeof window !== 'undefined') {
            gsap.registerPlugin(ScrollTrigger);

            // Hero entrance animations
            const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
            
            tl.from(textRef.querySelectorAll('.animate-text'), {
                y: 60,
                opacity: 0,
                duration: 1,
                stagger: 0.2
            });

            tl.from(profileRef, {
                scale: 0.8,
                opacity: 0,
                duration: 1,
                ease: 'back.out(1.7)'
            }, '-=0.5');

            // Profile image parallax on scroll
            gsap.to(profileRef, {
                y: -80,
                scrollTrigger: {
                    trigger: heroRef,
                    start: 'top top',
                    end: 'bottom top',
                    scrub: 1
                }
            });

            // Text fade out on scroll (parallax effect)
            gsap.to(textRef, {
                opacity: 0.3,
                y: 100,
                scrollTrigger: {
                    trigger: heroRef,
                    start: 'top top',
                    end: 'bottom top',
                    scrub: 1
                }
            });

            // Skills cards animation - FIX: Make them visible
            const skillCards = gsap.utils.toArray('.skill-card');
            skillCards.forEach((card, i) => {
                gsap.fromTo(card, 
                    {
                        opacity: 0,
                        y: 50,
                        scale: 0.8
                    },
                    {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        duration: 0.6,
                        delay: i * 0.08,
                        ease: 'back.out(1.7)',
                        scrollTrigger: {
                            trigger: skillsRef,
                            start: 'top 70%',
                            toggleActions: 'play none none none'
                        }
                    }
                );
            });

            // PINNED SCROLL SECTION - The effect you want!
            const slides = gsap.utils.toArray('.pinned-slide');
            
            // Create a timeline for the pinned section with more scroll space
            const pinnedTimeline = gsap.timeline({
                scrollTrigger: {
                    trigger: pinnedSectionRef,
                    start: 'top top',
                    end: () => `+=${window.innerHeight * (slides.length + 1)}`, // Extra space for last slide
                    pin: true,
                    scrub: 1,
                    anticipatePin: 1,
                    pinSpacing: true
                }
            });

            // Animate each slide in sequence
            slides.forEach((slide, i) => {
                if (i === 0) {
                    // First slide starts visible
                    pinnedTimeline.fromTo(slide,
                        { opacity: 1, scale: 1, zIndex: slides.length - i },
                        { opacity: 0, scale: 0.8, zIndex: slides.length - i, duration: 1 },
                        0
                    );
                } else {
                    // Subsequent slides fade in
                    pinnedTimeline.fromTo(slide,
                        { opacity: 0, scale: 1.2, zIndex: slides.length - i },
                        { opacity: 1, scale: 1, zIndex: slides.length - i, duration: 0.5 },
                        i - 0.5
                    );
                    
                    // Then fade out (except last slide)
                    if (i < slides.length - 1) {
                        pinnedTimeline.to(slide,
                            { opacity: 0, scale: 0.8, duration: 0.5 },
                            i + 0.5
                        );
                    } else {
                        // Last slide stays visible longer
                        pinnedTimeline.to(slide,
                            { opacity: 1, scale: 1, duration: 0.5 },
                            i + 0.5
                        );
                    }
                }
            });

            // Section titles parallax
            gsap.utils.toArray('.section-title').forEach(title => {
                gsap.from(title, {
                    scrollTrigger: {
                        trigger: title,
                        start: 'top 80%',
                        end: 'top 30%',
                        scrub: 1
                    },
                    y: 50,
                    opacity: 0
                });
            });

            // Projects parallax
            gsap.utils.toArray('.project-card').forEach((card, i) => {
                gsap.from(card, {
                    scrollTrigger: {
                        trigger: card,
                        start: 'top 85%',
                        end: 'top 50%',
                        scrub: 1
                    },
                    y: 100,
                    opacity: 0,
                    rotation: i % 2 === 0 ? -5 : 5
                });
            });

            // About cards parallax
            gsap.utils.toArray('.about-card').forEach((card, i) => {
                gsap.from(card, {
                    scrollTrigger: {
                        trigger: card,
                        start: 'top 85%',
                        end: 'top 50%',
                        scrub: 1
                    },
                    y: 80,
                    opacity: 0,
                    x: i % 2 === 0 ? -50 : 50
                });
            });
        }
    });
</script>

<svelte:window bind:scrollY />

<main class="flex flex-col flex-1 overflow-y-hidden">
    <!-- Hero Section -->
    <section 
        bind:this={heroRef}
        id="introPage" 
        class="min-h-screen flex items-center justify-center px-4 md:px-8 py-20 relative overflow-hidden"
    >
        <div class="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            <!-- Text Content -->
            <div bind:this={textRef} class="flex flex-col gap-8 text-center scale-[80%] md:-mt-20 lg:text-left">
                <div class="animate-text inline-flex items-center gap-2 px-4 py-2 glass rounded-full w-fit mx-auto lg:mx-0">
                    <div class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span class="text-sm">Available for Freelance</span>
                </div>

                <h1 class="animate-text text-nowrap font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-tight">
                    Hi, <br/> I'm <span class="gradient-text">Anton Nageh</span>
                </h1>

                <p class="animate-text text-xl md:text-2xl lg:text-3xl text-gray-300 font-medium">
                    Front-end Developer specializing in React, SvelteKit, and modern web technologies.
                </p>

                <p class="animate-text text-lg md:text-xl text-gray-400 leading-relaxed">
                    I build performant, accessible web applications with clean code and attention to detail. 
                    Passionate about creating seamless user experiences.
                </p>

                <div class="animate-text flex flex-col sm:flex-row gap-4 mx-auto lg:mx-0">
                    <a 
                        href="#projects"
                        class="px-8 py-4 btn-primary rounded-lg font-semibold cursor-pointer text-center text-lg"
                    >
                        View Projects
                    </a>
                    <a 
                        href="/assets/CV.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="px-8 py-4 btn-secondary rounded-lg font-semibold cursor-pointer text-center text-lg"
                    >
                        Download CV
                    </a>
                </div>
            </div>

            <!-- Profile Image - Enhanced -->
            <div bind:this={profileRef} class="relative w-full scale-75 md:-mt-10 max-w-lg mx-auto">
                <!-- Glow effects -->
                <div class="absolute inset-0 bg-gradient-to-r from-violet-600/30 to-purple-600/30 rounded-full blur-3xl animate-pulse"></div>
                
                <!-- Main container -->
                <div class="relative glass-card rounded-[3rem] p-6 shadow-glow">
                    <!-- Image wrapper with gradient border -->
                    <div class="relative rounded-[2.5rem] overflow-hidden">
                        <!-- Gradient border effect -->
                        <div class="absolute inset-0 bg-gradient-to-br from-violet-500 via-purple-500 to-pink-500 opacity-50 blur-sm"></div>
                        
                        <!-- Image -->
                        <div class="relative bg-slate-900 rounded-[2.5rem] p-1">
                            <img 
                                src="images/profile.png" 
                                alt="Anton Nageh - Front-end Developer"
                                class="w-full h-full object-cover rounded-[2.3rem]"
                                loading="eager"
                            />
                        </div>
                    </div>
                    
                    <!-- Floating badges -->
                    <div class="absolute -top-4 -right-4 glass-card px-4 py-3 rounded-2xl shadow-glow">
                        <div class="flex items-center gap-2">
                            <i class="fa-solid fa-code text-violet-400 text-xl"></i>
                            <span class="font-semibold text-sm">Developer</span>
                        </div>
                    </div>
                    
                    <div class="absolute -bottom-4 -left-4 glass-card px-4 py-3 rounded-2xl shadow-glow">
                        <div class="flex items-center gap-2">
                            <i class="fa-solid fa-palette text-purple-400 text-xl"></i>
                            <span class="font-semibold text-sm">Designer</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Skills Section -->
    <section bind:this={skillsRef} class="skills-section py-20 px-4 md:px-8 border-t border-violet-950/30">
        <div class="w-full max-w-7xl mx-auto">
            <div class="text-center mb-12">
                <h2 class="section-title text-3xl md:text-4xl lg:text-5xl font-bold mb-3">
                    Tech Stack
                </h2>
                <p class="text-gray-400 text-lg">Technologies I work with</p>
            </div>

            <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 md:gap-6">
                {#each skills as skill}
                    <div class="skill-card glass-card p-6 rounded-xl hover:shadow-glow-hover transition-smooth cursor-pointer">
                        <div class="flex flex-col items-center gap-3">
                            <i class="{skill.icon} text-3xl md:text-4xl text-violet-400"></i>
                            <span class="text-sm font-medium text-gray-300">{skill.name}</span>
                        </div>
                    </div>
                {/each}
            </div>
        </div>
    </section>

    <!-- PINNED SCROLL SECTION - The Amazing Effect! -->
    <section bind:this={pinnedSectionRef} class="relative h-screen overflow-hidden bg-slate-950 z-10">
        <div class="absolute inset-0 flex items-center justify-center z-20">
            {#each pinnedSlides as slide, i}
                <div class="pinned-slide absolute inset-0 flex items-center justify-center px-4 md:px-8" style="opacity: {i === 0 ? 1 : 0}; z-index: {pinnedSlides.length - i};">
                    <div class="w-full max-w-4xl mx-auto text-center">
                        <div class="glass-card p-12 md:p-16 rounded-3xl shadow-glow">
                            <!-- Icon -->
                            <div class="w-24 h-24 mx-auto mb-8 bg-gradient-to-br {slide.color} rounded-3xl flex items-center justify-center shadow-glow">
                                <i class="{slide.icon} text-5xl text-white"></i>
                            </div>
                            
                            <!-- Title -->
                            <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 gradient-text">
                                {slide.title}
                            </h2>
                            
                            <!-- Description -->
                            <p class="text-xl md:text-2xl text-gray-300 leading-relaxed">
                                {slide.description}
                            </p>
                            
                            <!-- Progress indicator -->
                            <div class="mt-12 flex justify-center gap-2">
                                {#each pinnedSlides as _, idx}
                                    <div class="w-2 h-2 rounded-full bg-gray-600 transition-all duration-300"></div>
                                {/each}
                            </div>
                        </div>
                    </div>
                </div>
            {/each}
        </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="py-20 px-4 md:px-8 border-t border-violet-950/30">
        <div class="w-full max-w-7xl mx-auto">
            <div class="text-center mb-16">
                <h2 class="section-title text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                    Featured Projects
                </h2>
                <p class="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
                    A selection of projects that showcase my skills in building modern, scalable web applications
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {#each projects as project, i}
                    <div class="project-card">
                        <Step {project} delay={i * 0.1} />
                    </div>
                {/each}
            </div>
        </div>
    </section>

    <!-- About Section -->
    <section id="about" class="py-20 px-4 md:px-8 border-t border-violet-950/30">
        <div class="w-full max-w-5xl mx-auto">
            <div class="text-center mb-16">
                <h2 class="section-title text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                    About Me
                </h2>
                <p class="text-gray-400 text-lg md:text-xl">
                    Passionate about building great software
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div class="about-card glass-card p-8 rounded-2xl hover:shadow-glow-hover transition-smooth">
                    <div class="w-12 h-12 mb-4 bg-violet-600/20 rounded-xl flex items-center justify-center">
                        <i class="fa-solid fa-code text-2xl text-violet-400"></i>
                    </div>
                    <h3 class="text-xl font-bold mb-3">Self-Taught Developer</h3>
                    <p class="text-gray-400 leading-relaxed">
                        Committed to continuous learning and mastering modern web technologies through hands-on projects and best practices.
                    </p>
                </div>

                <div class="about-card glass-card p-8 rounded-2xl hover:shadow-glow-hover transition-smooth">
                    <div class="w-12 h-12 mb-4 bg-violet-600/20 rounded-xl flex items-center justify-center">
                        <i class="fa-solid fa-palette text-2xl text-violet-400"></i>
                    </div>
                    <h3 class="text-xl font-bold mb-3">Design-Focused</h3>
                    <p class="text-gray-400 leading-relaxed">
                        Strong eye for design and user experience. I create interfaces that are both beautiful and functional.
                    </p>
                </div>

                <div class="about-card glass-card p-8 rounded-2xl hover:shadow-glow-hover transition-smooth">
                    <div class="w-12 h-12 mb-4 bg-violet-600/20 rounded-xl flex items-center justify-center">
                        <i class="fa-solid fa-comments text-2xl text-violet-400"></i>
                    </div>
                    <h3 class="text-xl font-bold mb-3">Clear Communicator</h3>
                    <p class="text-gray-400 leading-relaxed">
                        Effective communication and collaboration skills. I translate complex technical concepts into clear solutions.
                    </p>
                </div>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section class="py-20 px-4 md:px-8 border-t border-violet-950/30">
        <div class="w-full max-w-4xl mx-auto text-center">
            <div class="glass-card p-12 rounded-3xl shadow-glow">
                <h2 class="section-title text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                    Let's Work Together
                </h2>
                <p class="text-xl md:text-2xl text-gray-300 mb-10">
                    I'm currently available for freelance projects and full-time opportunities.
                </p>
                <div class="flex flex-col sm:flex-row gap-4 justify-center">
                    <a 
                        href="https://www.linkedin.com/in/anton-nageh-772852169"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="inline-flex items-center justify-center gap-2 px-8 py-4 btn-primary rounded-lg font-semibold cursor-pointer"
                    >
                        <i class="fa-brands fa-linkedin"></i>
                        <span>LinkedIn</span>
                    </a>
                    <a 
                        href="mailto:anton.nageh20@gmail.com"
                        class="inline-flex items-center justify-center gap-2 px-8 py-4 btn-secondary rounded-lg font-semibold cursor-pointer"
                    >
                        <i class="fa-solid fa-envelope"></i>
                        <span>Email Me</span>
                    </a>
                    <a 
                        href="https://github.com/AntonNageh"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="inline-flex items-center justify-center gap-2 px-8 py-4 btn-secondary rounded-lg font-semibold cursor-pointer"
                    >
                        <i class="fa-brands fa-github"></i>
                        <span>GitHub</span>
                    </a>
                </div>
            </div>
        </div>
    </section>
</main>
