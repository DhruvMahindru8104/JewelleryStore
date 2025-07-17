'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function FounderMessageSection() {
  return (
    <section className="bg-[#fdf6f0] dark:bg-gray-900 py-4 md:py-20">
      <div className="max-w-6xl px-6  mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xl font-medium text-yellow-600">Message</p>
          <h1 className="mt-2 text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
            A Note from Our Founder
          </h1>
        </motion.div>

        {/* Message Card */}
        <motion.main
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative z-20 w-full mt-8 md:flex md:items-center xl:mt-12"
        >
          <div className="absolute w-full bg-[#e5c78b] -z-10 md:h-96 rounded-2xl"></div>

          <div className="w-full p-6 bg-[#e5c78b] md:flex md:items-center rounded-2xl md:bg-transparent md:p-0 lg:px-12 md:justify-evenly">
            <Image
              src="https://i.pinimg.com/736x/49/15/21/491521552605f3cc55fcae7b2d23e617.jpg"
              alt="Founder photo"
              width={400}
              height={500}
              className="h-24 w-24 md:mx-6 rounded-full object-cover object-top shadow-md md:h-[32rem] md:w-80 lg:h-[36rem] lg:w-[26rem] md:rounded-2xl"
            />

            <div className="mt-4 md:mx-6">
              <div>
                <p className="text-xl font-medium tracking-tight text-white">Prem Pal</p>
                <p className="text-yellow-100">Founder & Craftsman, Prem Pal Jewellers</p>
              </div>

              <p className="mt-4 text-lg leading-relaxed text-white md:text-xl">
                “Every ornament we craft carries the soul of tradition and the sparkle of innovation.
                I started this journey with a simple goal — to celebrate beauty, elegance, and legacy
                through timeless jewellery. Thank you for being a part of our story.”
              </p>
            </div>
          </div>
        </motion.main>
      </div>
    </section>
  );
}
