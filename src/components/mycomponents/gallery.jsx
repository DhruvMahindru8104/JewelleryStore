'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

const images = [
  [
    'https://i.pinimg.com/736x/16/c8/2d/16c82dfe45ea4b9a33483b5973792069.jpg',
    'https://i.pinimg.com/736x/3a/bb/b3/3abbb3a98559149a7e04bc9c52c14428.jpg',
    'https://i.pinimg.com/1200x/7f/30/86/7f3086cdc80cd467a4da667db546539b.jpg',
  ],
  [
    'https://i.pinimg.com/736x/0c/30/20/0c30205665a9bfdc19ff54c78e86e8d6.jpg',
    'https://i.pinimg.com/1200x/c8/54/38/c85438e8a593e79b035670ca0f2a16a8.jpg',
    'https://i.pinimg.com/1200x/fd/07/5e/fd075e250395ad14077458c4b693d5ad.jpg',
  ],
  [
    'https://i.pinimg.com/736x/bb/1f/75/bb1f7570f198abdd7f2b1ace0cdc20c5.jpg',
    'https://i.pinimg.com/1200x/c1/4b/86/c14b865c0539a20adfa3cc14fec21f29.jpg',
    'https://i.pinimg.com/1200x/a6/5e/88/a65e88477a5383e220b0d3fb1011e151.jpg',
  ],
  [
    'https://i.pinimg.com/736x/14/b8/99/14b899bb231e7234288bd9bc908a7557.jpg',
    'https://i.pinimg.com/736x/f6/d9/3c/f6d93ce3faedfbe1dff14905652361a5.jpg',
    'https://i.pinimg.com/1200x/5b/f6/d3/5bf6d30b279083e229aa9681c4399ef1.jpg',
  ],
];

export default function Gallery() {
  return (
    <section className="py-4 md:py-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-yellow-500 mb-4">Explore Our Latest Designs</h2>
        <p className="text-zinc-600 max-w-2xl mx-auto">
          A curated collection of our best jewellery and box designs captured with elegance and detail.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((col, colIndex) => (
          <div className="grid gap-4" key={colIndex}>
            {col.map((src, imgIndex) => (
              <motion.div
                key={imgIndex}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: imgIndex * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="overflow-hidden rounded-lg"
              >
                <Image
                  src={src}
                  alt={`Gallery Image ${colIndex}-${imgIndex}`}
                  width={600}
                  height={800}
                  className="h-auto max-w-full rounded-lg object-cover transition-transform duration-300"
                />
              </motion.div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
