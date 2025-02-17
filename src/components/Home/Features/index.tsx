import Image from "next/image";


const Features = () => {
 const Featuresdata = [
        {
            imgSrc: '/images/icons/icon1.svg',
            heading: 'Abstract',
            subheading: 'A concise overview of the Widow AI Coin platform, highlighting its purpose, use cases, and potential impact.',
        },
        {
            imgSrc: '/images/icons/icon2.svg',
            heading: 'Introduction',
            subheading: 'A background on the advancements in AI and blockchain technology, and challenges in traditional web development.',
        },
        {
            imgSrc: '/images/icons/icon3.svg',
            heading: 'Widow AI Ecosystem',
            subheading: 'AI-Powered Web Development Tools, Smart Application Programming Support, Blockchain-Based Knowledge Verification System.',
        },
        // Add more entries for the remaining sections...
    ];
    
    return (
        <section>
            <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4 relative" id="features-section">
                <div className="bg-gradient-to-r from-primary to-secondary hidden lg:block absolute w-full h-full top-0 -left-1/4 blur-390"></div>
                <div className="grid lg:grid-cols-1 gap-x-4 gap-y-4 relative z-10">
                    {/* Column-1 */}
                    <div>
                        <h3 className="text-primary text-lg font-semibold mb-4 text-center md:text-start">Widow AI Coin White Paper</h3>
                        <h2 className="text-white text-3xl lg:text-5xl font-semibold leading-snug mb-6 text-center md:text-start">Transforming the Digital Landscape with AI and Blockchain</h2>
                        <p className="lg:text-lg font-normal text-white/60 text-center md:text-start">
                            Widow AI Coin represents a revolutionary solution in the intersection of AI and blockchain. This white paper outlines the technical aspects, use cases, and potential benefits of the platform.
                        </p>
                    </div>
                    {/* Column-2 */}
                    <div>
                        <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-2">
                            {Featuresdata.map((items, i) => (
                                <div className="bg-darkmode py-10 pr-12 pl-6 rounded-lg" key={i}>
                                    
                                    <h5 className="text-white/80 text-lg font-medium mb-4">{items.heading}</h5>
                                    <p className="text-white/40 text-sm font-normal">{items.subheading}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features;
