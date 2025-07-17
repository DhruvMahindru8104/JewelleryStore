'use client';

import Image from 'next/image';
import { FaStar } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function TestimonialSection() {
  const testimonials = [
    {
      text: "I recently purchased a velvet LED jewellery box from Prem Pal Jewellers. The quality and presentation are unmatched. Truly luxurious!",
      name: "Ritika Sharma",
      avatar: "https://i.pinimg.com/1200x/62/82/f8/6282f87e06df4a0d4fd36050a8a8dcd5.jpg",
    },
    {
      text: "Their jewellery packaging is stunning. It adds a premium touch to my gifts and personal collection. Highly recommend!",
      name: "Manoj Gupta",
      avatar: "https://i.pinimg.com/1200x/57/a5/e1/57a5e1037e18275250bc2081b13ae0f0.jpg",
    },
    {
      text: "Exceptional craftsmanship and attention to detail. Prem Pal Jewellers never disappoints when it comes to elegance.",
      name: "Simran Kaur",
      avatar: "https://i.pinimg.com/736x/ba/33/63/ba3363a19ffc9b1dd0ea3d230a879747.jpg",
    },
    {
      text: "Elegant, premium, and thoughtfully crafted boxes. My clients always compliment the packaging from Prem Pal.",
      name: "Ankita Verma",
      avatar: "https://i.pinimg.com/736x/ad/e1/3f/ade13f300d8bb900795ff24c0644e017.jpg",
    },
    {
      text: "Customer service is top-notch. They truly care about delivering the best, both in quality and presentation.",
      name: "Rajeev Bansal",
      avatar: "https://i.pinimg.com/1200x/90/15/2f/90152f3aeed98bc8bf19a3fd938a1909.jpg",
    },
    {
      text: "A luxurious experience from start to finish. Their velvet LED jewellery boxes are a masterpiece.",
      name: "Priya Malhotra",
      avatar: "https://i.pinimg.com/1200x/db/04/b2/db04b21700e54e52a7344f5b0ff9102c.jpg",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.5,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <section className="px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto md:py-20 py-4 ">
        <motion.h2
          className="text-center text-3xl font-bold text-[#D4AF37] mb-12 uppercase tracking-wider"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          What Our Customers Say
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              className="flex flex-col justify-between bg-white p-6 rounded-2xl shadow-md border border-[#e6e6e6] hover:shadow-lg transition duration-300 ease-in-out"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={index}
              variants={cardVariants}
            >
              <div>
                <div className="flex items-center gap-3">
                  <Image
                    alt={item.name}
                    src={item.avatar}
                    width={60}
                    height={60}
                    className="rounded-full object-cover object-top border-2 w-18 h-18 border-[#bfa26d]"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                    <p className="text-xs uppercase text-[#D4AF37]">Verified Customer</p>
                  </div>
                </div>
                <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                  “{item.text}”
                </p>
              </div>
              <div className="flex items-center gap-1 mt-6 text-[#D4AF37]">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <FaStar key={i} className="w-4 h-4" />
                  ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
