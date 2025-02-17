"use client"
import Image from 'next/image';

const workdata = [
    {
        heading: "Phase 1: Concept & Research",
        subheading: `
        - Identify the core problem Widow AI solves.
        - Conduct market research to understand competitors and user needs.
        - Define the AI model's capabilities and required datasets.
        `,
        imgSrc: '/images/icons/phase1-icon.svg',
    },
    {
        heading: "Phase 2: Development & Prototyping",
        subheading: `
        - Choose the tech stack (AI framework, backend, frontend).
        - Build an MVP (minimum viable product) with key features.
        - Train initial AI models and test for accuracy and efficiency.
        `,
        imgSrc: '/images/icons/phase2-icon.svg',
    },
    {
        heading: "Phase 3: Testing & Refinement",
        subheading: `
        - Conduct internal testing for bugs and AI performance.
        - Gather user feedback through beta testing.
        - Optimize AI performance based on feedback and real-world use.
        `,
        imgSrc: '/images/icons/phase3-icon.svg',
    },
    {
        heading: "Phase 4: Launch & Marketing",
        subheading: `
        - Develop branding and create a website or landing page.
        - Launch on relevant platforms (web, mobile, API, etc.).
        - Promote through Twitter, SEO, content marketing, and partnerships.
        `,
        imgSrc: '/images/icons/phase4-icon.svg',
    },
    {
        heading: "Phase 5: Growth & Scaling",
        subheading: `
        - Gather analytics and iterate on features.
        - Improve AI models based on data.
        - Explore additional monetization strategies (subscriptions, API access, etc.).
        - Expand to new markets or use cases.
        `,
        imgSrc: '/images/icons/phase5-icon.svg',
    },
    {
        heading: "Phase 6: Long-Term Innovation",
        subheading: `
        - Regular updates with new features.
        - Integration with other AI tools or platforms.
        - Community engagement and user-driven enhancements.
        `,
        imgSrc: '/images/icons/phase6-icon.svg',
    },
];

const Work = () => {
    return (
        <section>
            <div className='container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4 relative' id='roadMap'>
                <div className="bg-banner-image hidden lg:block absolute w-full h-full top-1/2 -right-1/4 blur-390"></div>
                <div className='text-center mb-14'>
                    <h3 className='text-white/80 text-3xl md:text-5xl font-bold mb-3'>Road Map</h3>
                </div>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-5 mt-32'>
                    {workdata.map((items, i) => (
                        <div className='bg-darkmode border border-darkmode group hover:border-primary hover:scale-105 duration-300 p-8 relative rounded-2xl' key={i}>
                           
                           
                            <h3 className='text-2xl text-white/80 font-semibold text-center mt-8'>{items.heading}</h3>
                            <p className='text-base font-normal text-white/60 text-center mt-2 overflow-hidden line-clamp-3 group-hover:h-auto group-hover:line-clamp-none transition-all duration-300'>
                                {items.subheading}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Work;
