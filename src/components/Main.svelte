<script>
import Step from '../components/Step.svelte';

let steps = [
    {name:'Hotels Reservation App', icon: 'fa-solid fa-cart-shopping', href:'#bla1'},
    {name:'Graduation Project', icon: 'fa-solid fa-list-check'  ,href:'#bla2'},
    {name:'Perfumes App', icon: 'fa-solid fa-diagram-project',  href:'#bla3'},
]

let benefits = [
    {name:"a self taught developer", description:"Bla1"},
    {name:"a product design and UX finatic", description:"Bla2"},
    {name:"an excellent communicator", description:"Bla3"},
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
            href="#"
            target="_blank"
            >
                <div class="absolute top-0 right-full w-full h-full bg-violet-400 opacity-20
                group-hover:translate-x-full z-0 duration-200"/>
                <h4 class="relative z-9">Get in Touch! &rarr;</h4>
            </a>
        </div>
        <div class="relative shadow-2xl grid place-items-center"> 
            <img src={"images/profile.png"} alt="Profile image" 
            class="object-cover z-[2] md:max-h-[80vh] rounded-[1.7rem] max-h-[60vh]"/>
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
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-10">
            <Step step={steps[0]}>
                <p class="mt-3">
                    Embark on a journey of <strong class="text-violet-400">seamless</strong> 
                    travel planning with our bespoke <strong class="text-violet-400">Booking App</strong>.<br/>
                    From luxurious getaways to budget-friendly stays, 
                    we craft <strong class="text-violet-400"> solutions </strong>for every traveler.
                </p>
            </Step>
            <Step step={steps[1]}>
                <p>Hotels app is</p>
            </Step>
            <Step step={steps[2]}>
                <p class="mt-3">Immerse yourself in a <strong class="text-violet-400">seamless</strong> 
                    browsing experience powered by <b>Advanced search algorithms.</b><br/>
                    <strong class="text-violet-400">Discover</strong> your signature scent today!" </p>
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