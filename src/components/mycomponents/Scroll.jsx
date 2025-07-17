'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function OverviewSection() {
  return (
    <section className="py-4 md:py-20">
      <div className="container">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto flex max-w-screen-md flex-col items-center gap-6 text-center"
        >
          <div className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold  bg-yellow-100 text-yellow-800 hover:bg-yellow-200 scale-125">
            Our Craftsmanship
          </div>
          <h2 className="text-3xl font-bold lg:text-4xl">
            Handcrafted Jewellery for Every Occasion
          </h2>
          <p className="text-zinc-600 lg:text-lg">
            Discover the magic of timeless jewellery designs — crafted with love, tradition, and elegance.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="mt-20 grid gap-10 md:grid-cols-2">
          {/* Feature 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="https://i.pinimg.com/736x/a3/20/28/a3202811c33d318c55dbfd2fd7c8c8ec.jpg"
              alt="Responsive Design"
              width={800}
              height={500}
              className="rounded-lg border w-full h-auto"
            />
            <div className="px-4 pt-6">
              <h3 className="font-semibold text-lg">Timeless Designs</h3>
              <p className="text-zinc-600">
                From antique styles to contemporary cuts — our collections are always in fashion.
              </p>
            </div>
          </motion.div>

          {/* Feature 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Image
              src="https://i.pinimg.com/1200x/e0/88/90/e0889098f8ef845c60111356ed96a0a8.jpg"
              alt="Beautiful Layouts"
              width={800}
              height={500}
              className="rounded-lg border w-full h-auto"
            />
            <div className="px-4 pt-6">
              <h3 className="font-semibold text-lg">Elegant Finishes</h3>
              <p className="text-zinc-600">
                Each piece is polished to perfection, enhancing the brilliance and charm of your look.
              </p>
            </div>
          </motion.div>

          {/* Full Width Feature */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-2"
          >
            <Image
              src="https://i.pinimg.com/1200x/a2/23/62/a22362754cfe909612ea0221ed180320.jpg"
              alt="Custom Designs"
              width={1200}
              height={600}
              className="aspect-video max-h-[480px] w-full rounded-lg border bg-zinc-100 object-cover"
            />
            <div className="px-4 pt-6">
              <h3 className="font-semibold text-lg">Customized for You</h3>
              <p className="text-zinc-600">
                Get jewellery made just for you. Personalize designs, engrave memories, and wear your story.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
