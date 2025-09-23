<script>
import Step from '../components/Step.svelte';
import 'animate.css'
let videoHidden = true;
let showButton = true;
const handleButton = () =>{
    showButton = false;
    document.getElementById("video").play();
}
const handleVideoEnded = () =>{
    const Video = document.getElementById("video");
    Video.classList.add("animate__animated", "animate__fadeOut", "--animate__duration", "2s");
    setTimeout(()=>{
        videoHidden = false;
    }, 2000)
}

let steps = [
    {name:'Secred Mobile Application', icon: 'fa-solid fa-lock',  href:'#'},
    {name:'My Movies Mobile Application', icon: 'fa-solid fa-film',  href:'https://github.com/AntonNageh/MyMovies-React-native-app'},
    {name:'Warehouse Management System', icon: 'fa-solid fa-warehouse',  href:'https://egwarehouse.vercel.app'},
    {name:'Burger App', icon: 'fa-solid fa-hamburger',  href:'https://burgerclerkapp.netlify.app'},
    {name:'Perfumes App', icon: 'fa-solid fa-heart',  href:'https://perfumesapp.vercel.app'},
    {name:'Graduation Project', icon: 'fa-solid fa-user-astronaut'  ,href:'https://iaetsatellite.vercel.app/'},
    {name:'Books App Store', icon: 'fa-solid fa-basket-shopping',  href:'https://anton-mybookstore.vercel.app/'},
    {name:'Recent Portfolio (Slower)', icon: 'fa-solid fa-user',  href:'https://portfoliootemplate.vercel.app/'},
    {name:'Hotels Reservation App', icon: 'fa-solid fa-hotel', href:'#bla1'},
    {name:'Dashboard App', icon: 'fa-solid fa-chart-line', href:'http://dashboardsync.netlify.app/'},
    {name:'3D Portfolio', icon: 'fa-solid fa-user-tie', href:'https://3dportfolioanton.netlify.app/'},
    {name:'2D Portfolio' ,icon:'fa-solid fa-user' ,href:'https://2dportfoliokaboom.netlify.app/'},
]

let benefits = [
    {name:"a self taught developer", description:"As a self-taught developer, I bring a relentless commitment to mastering my craft. I am dedicated to crafting innovative solutions and constantly enhancing my technical prowess to conquer even the most intricate challenges."},
    {name:"a product design and UX finatic", description:"My passion for product design and obsession with user experience drive me to create exceptional, user-centric solutions. I'm dedicated to crafting designs that not only captivate but also seamlessly engage your audience."},
    {name:"an excellent communicator", description:"Communication is at the heart of success. I possess the art of conveying complex ideas with eloquence and precision. Your vision will not only be understood but articulated effectively, ensuring the seamless realization of your projects. Let's embark on a journey of innovation and excellence together."},
]
</script>

<main class="flex flex-col flex-1 p-4">
    <section id="introPage" class="grid grid-cols-1 lg:grid-cols-2 gap-10 py-8 sm:py-14">
        <div class="flex flex-col lg:justify-center text-center lg:text-left gap-6 md:gap-8 lg:gap-10">
            <h2 class="font-semibold text-4xl sm:text-5xl md:text-6xl">
                Hi! <br/> I'm <span class="poppins text-violet-400">Anton</span> Nageh<br/>
                Front-end <span class="poppins text-violet-400">developer.</span>
            </h2>
            <p class="text-base sm:text-lg md:text-xl">
                My <span class="text-violet-400">favorite tech</span> includes Javascript 
                (React/vite.js or SvelteKit), Tailwindcss, Bootstrap, Material UI, R3F (React Three Fiber);
            </p>
            <a class="blueShadow mx-auto lg:mr-auto lg:ml-0 text-base sm:text-lg md:text-xl
            poppins relative overflow-hidden px-6 py-3 group rounded-full bg-white text-slate-950 cursor-pointer" 
            href="https://www.linkedin.com/in/anton-nageh-772852169"
            target="_blank"
            >
                <div class="absolute top-0 right-full w-full h-full bg-violet-400 opacity-20
                group-hover:translate-x-full z-0 duration-200"/>
                <h4 class="relative z-9">Get in Touch! &rarr;</h4>
            </a>
        </div>
        <div class="relative shadow-2xl grid place-items-center"> 
            <!-- svelte-ignore a11y-img-redundant-alt -->
            <img src={"images/profile.png"} alt="Profile image"
            class="object-cover z-[2] md:max-h-[80vh] md:h-[80vh] h-[60vh] rounded-[5rem] max-h-[60vh]"/>
            <div class="z-50 lg:mr-3 mr-10 mb-[1em] lg:mb-[15%] fixed hidden lg:flex justify-center items-center w-[35%] right-0 lg:w-[10%] rounded-full lg:right-0 lg:h-[30%] lg:bottom-0">
                {#if showButton}
                <button on:click={()=>handleButton()} class="absolute z-50 text-2xl w-full h-[10vw] rounded-full bg-[rgba(0,0,0,0.5)]">Play</button>
                {/if}
                {#if videoHidden}
                 <video id="video" on:ended={()=>handleVideoEnded()} 
                    class="z-[49] rounded-full" 
                    src={"images/profile1.mp4"} ><track kind="captions"></video>
                {/if}
            </div>
        </div>
    </section>



    <section id="projects" class="py-20 lg:py-32 flex flex-col gap-24">
        <div class="flex flex-col gap-2 text-center">
            <h6 class="text-lg sm:text-xl md:text-2xl">
                A few of my creatives endeavors.
            </h6>
            <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
                Curious to <span class="poppins text-violet-400">see</span> my work?
            </h3>
        </div>
        <a href="/assets/CV.pdf" id="download-btn" sandbox="allow-downloads" 
        target="_blank" class="mx-auto px-4 py-2 rounded-md border border-solid border-white 
        flex items-center gap-2 -mb-4 sm:-mb-0 -mt-14 hover:border-violet-700 duration-200">
            <i class="fa-regular fa-circle-play"/>
            <p>My CV</p>
        </a>
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-10 lg:gap-y-16">
<Step step={steps[2]}>
  <p class="mt-3">
    Embark on smarter logistics with our <strong class="text-violet-400">Warehouse Management System</strong>!<br/>
    Track products from <strong class="text-violet-400">arrival</strong> to 
    <strong class="text-violet-400">delivery</strong>, while clients monitor only their 
    own stock and create <strong class="text-violet-400">orders</strong> with ease.<br/>
    Handlers <strong class="text-violet-400">scan QR codes</strong> to update statuses 
    across every stage effortlessly!
  </p>
</Step>

<Step step={steps[0]}>
  <p class="mt-5">
    Embark on a journey of <strong class="text-violet-400">Secured Logistics</strong> 
    with our mobile app built using <strong class="text-violet-400">React Native</strong> 
    and <strong class="text-violet-400">Supabase</strong>!<br/><br/>
    Companies can have their products <strong class="text-violet-400">transported</strong> from Dubai Airport 
    straight to our <strong class="text-violet-400">Secured Warehouse</strong>
    and create <strong class="text-violet-400">Orders</strong> that deliver safely to real clients!
  </p>
</Step>

<Step step={steps[9]}>
  <p class="mt-3">
    Embark on a <strong class="text-violet-400">journey</strong> of innovation with our cutting-edge dashboard. <br/>
    Immerse yourself in a world of visual delight! Tailor your <strong class="text-violet-400">dashboard</strong> to match your style with our Theme Editing feature. <br/>
    Experience hassle-free and secure sign-ins, sign-ups, and sign-outs with <strong class="text-violet-400">Clerk JS</strong>.
    Efficiently <strong class="text-violet-400">manage</strong> your product offerings and customer interactions on dedicated pages. 
  </p>
</Step>

<Step step={steps[1]}>
  <p class="mt-3">
    Embark on a <strong class="text-violet-400">cinematic journey</strong> with our 
    immersive <strong class="text-violet-400">Movies App</strong>!<br/>
    Discover trending <strong class="text-violet-400">films</strong>, explore detailed 
    <strong class="text-violet-400">movie info</strong>, and enjoy a seamless browsing 
    experience that brings the magic of cinema to your fingertips!
  </p>
</Step>

<Step step={steps[3]}>
  <p class="mt-8">
    Discover a world of <strong class="text-violet-400">flavor</strong> with our interactive 
    <strong class="text-violet-400">Burger App</strong>!<br/>
    Immerse yourself in a menu of <strong class="text-violet-400">diverse sandwiches</strong>, 
    add them to your <strong class="text-violet-400">cart</strong> with a demo payment, 
    or unleash your creativity by <strong class="text-violet-400">customizing</strong> 
    every detail to craft your own masterpiece!
  </p>
</Step>

<Step step={steps[4]}>
  <p class="mt-3">
    Immerse yourself in a <strong class="text-violet-400">seamless</strong> 
    browsing experience powered by <b>Advanced search algorithms.</b><br/>
    <strong class="text-violet-400">Discover</strong> your signature scent today!
  </p>
</Step>

<Step step={steps[8]}>
  <p class="mt-3">
    Embark on a journey of <strong class="text-violet-400">seamless</strong> 
    travel planning with our bespoke <strong class="text-violet-400">Booking App</strong>.<br/>
    From luxurious getaways to budget-friendly stays, 
    we craft <strong class="text-violet-400">solutions</strong> for every traveler.<br/>
    <b><strong class="text-violet-400">Please note:</strong> This project is not yet deployed.</b>
  </p>
</Step>

<Step step={steps[10]}>
  <p class="mt-3">
    Embark on a journey through a <strong class="text-violet-400">unique 3D experience</strong>.
    <strong class="text-violet-400">Explore</strong> dedicated sections providing insights into my story, projects, and ways to connect with me.<br/>
    Fully <strong class="text-violet-400">Responsive</strong> and <strong class="text-violet-400">PWA Ready!</strong>
  </p>
</Step>

<Step step={steps[11]}>
  <p class="mt-3">
    Embark on a journey through a <strong class="text-violet-400">unique 2D experience</strong>.
    <strong class="text-violet-400">Explore</strong> dedicated sections providing insights into my story, projects, and ways to connect with me.<br/>
    Fully <strong class="text-violet-400">Responsive</strong> and <strong class="text-violet-400">PWA Ready!</strong>
  </p>
</Step>

<Step step={steps[6]}>
  <p class="mt-3">
    The magic of reading is at your <strong class="text-violet-400">fingertips</strong>.<br/>
    <strong class="text-violet-400">Immerse</strong> yourself in stories that transport you to far-off lands, <br/>
    Unleash your inner <strong class="text-violet-400">bookworm</strong> today!
  </p>
</Step>

<Step step={steps[5]}>
  <p class="mt-3">
    Imagine a world where you can <strong class="text-violet-400">explore</strong> distant planets, <br/>
    their secrets unveiled by a <strong class="text-violet-400">Satellite</strong> and <strong class="text-violet-400">Rover</strong>. <br/>
    My graduation project takes you to the <strong class="text-violet-400">stars</strong>.
  </p>
</Step>

<Step step={steps[7]}>
  <p class="mt-3 leading-6">
    A React-vite built project using Tailwindcss, R3F with Splinejs, AI generated Video and GSAP.
  </p>
</Step>

        </div>
    </section>
    <section id="about" class="py-20 pt-10 lg:pt-16 lg:py-32 flex flex-col 
    gap-16 sm:gap-20 md:gap-24 relative">
        <div class="flex flex-col gap-2 text-center relative before:absolute before:top-0 py-4
        before:left-0 before:w-2/3 before:h-1.5 before:bg-violet-700 after:absolute after:bottom-0
        after:right-0 after:w-2/3 after:h-1.5 after:bg-violet-700">
        <h6 class="text-lg sm:text-xl md:text-2xl">Want to know more?</h6>
        <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">A bit <span class="poppins text-violet-400">about </span>me.</h3>
        </div>
        <p class="mx-auto poppins font-semibold text-lg sm:text-xl md:text-2xl">I am . . .</p>
        <div class="flex flex-col mx-auto gap-20 max-w-[800px]">
            {#each benefits as  benefit, index}
            <div class="gap-6 sm:gap-8 flex">
                <p class="poppins text-4xl sm:text-5xl md:text-6xl text-slate-500 
                font-semibold">0{index+1}</p>
                <div class="flex flex-col gap-6 sm:gap-8">
                    <h3 class="text-2xl sm:text-3xl md:text-5xl">
                        {benefit.name}
                    </h3>
                    <p>{benefit.description}</p>
                </div>
            </div>
            {/each}
        </div>
    </section>
</main>