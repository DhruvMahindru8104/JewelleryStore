'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="py-4 md:py-20">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
        {/* Left Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-end bg-zinc-100"
        >
          <Image
            src="https://i.pinimg.com/1200x/9f/04/f3/9f04f36ab336cc562381a07293611dfc.jpg"
            alt="jewellery hero"
            width={800}
            height={600}
            className="max-h-[600px] w-full rounded-md object-cover lg:max-h-[800px]"
          />
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="flex flex-col items-center text-center lg:max-w-3xl lg:items-start lg:text-left"
        >
          <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors border-transparent bg-yellow-100 text-yellow-800 hover:bg-yellow-200 scale-125">
            New Arrival
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-arrow-down-right ml-2 size-4"
            >
              <path d="m7 7 10 10" />
              <path d="M17 7v10H7" />
            </svg>
          </div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="my-6 text-pretty text-4xl font-bold text-zinc-800 lg:text-6xl xl:text-7xl"
          >
            Elegant Gold & Diamond Jewellery for Every Occasion
          </motion.h1>

          <p className="mb-8 max-w-xl text-zinc-600 lg:text-2xl">
            Discover handcrafted treasures designed to make you shine. From timeless classics to
            modern designs, explore pieces that reflect your unique style and grace.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start"
          >
            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium bg-yellow-600 text-white hover:bg-yellow-700 transition-colors h-10 px-4 py-2 w-full sm:w-auto">
              Shop Now
            </button>
            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium border border-yellow-600 text-yellow-700 hover:bg-yellow-100 transition-colors h-10 px-4 py-2 w-full sm:w-auto">
              View Collections
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-arrow-down-right ml-2 size-4"
              >
                <path d="m7 7 10 10" />
                <path d="M17 7v10H7" />
              </svg>
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
