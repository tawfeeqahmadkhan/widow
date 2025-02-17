"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from 'next/link';
const Banner = () => {
  const [isOpen, setOpen] = useState(false)

  const openModal = () => {
    setOpen(true);
  }

  const closeModal = () => {
    setOpen(false);
  }

  return (
    <section className='relative' id="home-section">
      <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md pt-10 px-4 relative">
        <div className='bg-banner-image hidden lg:block absolute w-full h-full top-0 blur-390'></div>
        <div className='relative z-10'>
          <div className='grid grid-cols-1 lg:grid-cols-12 my-16 gap-2'>
            <div className='col-span-7'>
              <h1 className="text-4xl lg:text-4xl font-bold mb-5 text-white md:4px md:text-start text-center">
              Widow AI The Next<br />-Generation  AI Application Creator 
              </h1>
              <p className='text-white md:text-sm font-normal mb-10 md:text-start text-center'>Widow AI is a revolutionary artificial intelligence platform designed to automate and streamline the creation of applications, generate accurate answers, produce high-quality videos, design graphics, and much more. With the ability to process and analyze up to 100,000 words, Widow AI is poised to transform industries by providing unparalleled efficiency, creativity, and precision. This white paper outlines the core functionalities, phases of development, and the transformative potential of Widow AI.</p>
              <div className='flex align-middle justify-center md:justify-start'>
                <Link href={'https://t.me/WidowAI'}>
                <button className='text-xl font-semibold text-white py-4 px-6 lg:px-12 bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary rounded-xl mr-6'>Join Telegram</button>
                </Link>
              </div>
            </div>
            <div className='col-span-5'>
              <Image src="/aiImage.png" alt="nothing" width={700} height={760} className='rounded-lg' />
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-gradient-to-br from-primary/60 to-secondary/60 rounded-lg sm:m-0 m-4">
            <div className="overlay flex items-center justify-between border-b border-solid border-border p-5 z-50 backdrop-blur-sm">
              <h3 className="text-white">How It Works</h3>
              <button
                onClick={closeModal}
                className="inline-block dark:invert"
              >
                <Icon icon="tabler:circle-x" className="text-2xl text-white" />
              </button>
            </div>
            <iframe
              height="400"
              className="p-4 md:w-[50rem] w-full"
              src="https://www.youtube.com/embed/xAAEiykov1w?si=7Keuu5t0oJzZ67Q-"
              title="How Our Product Works"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
}

export default Banner;
