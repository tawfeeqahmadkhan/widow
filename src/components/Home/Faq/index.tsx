"use client"
import Image from "next/image";
import { Disclosure } from '@headlessui/react';
import { Icon } from "@iconify/react/dist/iconify.js";

const Faq = () => {
 const Faqdata = [
        {
            heading: "What is Widow AI Coin?",
            subheading: "Widow AI Coin is a transformative platform that combines AI and blockchain technology to improve web development, application programming, and information delivery."
        },
        {
            heading: "How does Widow AI Coin address challenges in traditional web development?",
            subheading: "Widow AI Coin offers AI-powered web development tools, smart application programming support, and a blockchain-based knowledge verification system to streamline processes and ensure data accuracy."
        },
        {
            heading: "What is the AI ecosystem in Widow AI Coin?",
            subheading: "The ecosystem includes AI-powered web development tools, smart application programming support, and blockchain-based systems for knowledge verification, enabling more efficient and reliable digital services."
        },
        {
            heading: "What are the core use cases of Widow AI Coin?",
            subheading: "Core use cases include automated website creation, AI-powered application programming, accurate AI-driven information delivery, and advanced services like image recognition and predictive analytics."
        },
        
    ];
    return (
        <section>
            <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4 relative z-10" id="faq-section">
                <h3 className="text-center text-3xl lg:text-5xl font-bold text-white mb-3">Frequently Asked Questions</h3>
                <p className="text-center lg:text-lg font-normal text-white/40">Widow AI Coin offers an innovative solution that merges AI and blockchain. Below are some common questions answered about the platform and its features.</p>
                <div className="mx-auto max-w-7xl">
                    <div className="grid lg:grid-cols-2">
                        <div>
                            <div className="w-full px-4 pt-16">
                                {Faqdata.map((items, i) => (
                                    <div className="mx-auto w-full max-w-5xl rounded-2xl bg-darkmode py-8 px-6 mb-5" key={i}>
                                        <Disclosure>
                                            {({ open }) => (
                                                <>
                                                    <Disclosure.Button className="flex w-full justify-between rounded-lg text-white/80 sm:px-4 sm:py-2 text-left md:text-2xl font-medium">
                                                        <span>{items.heading}</span>
                                                        <Icon icon="tabler:chevron-up" className={`${open ? 'rotate-180 transform' : ''} text-2xl text-purple-500`} />
                                                    </Disclosure.Button>
                                                    <Disclosure.Panel className="px-4 pt-4 pb-2 md:text-lg text-white/40 font-normal">{items.subheading}</Disclosure.Panel>
                                                </>
                                            )}
                                        </Disclosure>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="mt-32">
                            <Image src={'/images/faq/faq.svg'} alt="faq-image" width={941} height={379} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Faq;
