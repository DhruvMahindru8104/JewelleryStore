'use client';
import { useEffect, useRef, useState } from 'react';
import { useInView, useMotionValue, useSpring } from 'framer-motion';

// Counter Component
function AnimatedCounter({ from = 0, to }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const motionValue = useMotionValue(from);
  const spring = useSpring(motionValue, {
    stiffness: 50, // slow and smooth
    damping: 20,
  });
  const [displayValue, setDisplayValue] = useState(from);

  useEffect(() => {
    if (isInView) {
      motionValue.set(to);
    }

    const unsubscribe = spring.on('change', (latest) => {
      setDisplayValue(Math.floor(latest));
    });

    return () => unsubscribe();
  }, [isInView, motionValue, spring, to]);

  return <span ref={ref}>{displayValue.toLocaleString()}</span>;
}

// Main Component
export default function MetricsSection() {
  return (
    <section className="py-8 md:py-20   dark:bg-gray-900">
      <div className="container px-4 mx-auto">
        {/* Heading */}
        <h1 className="text-center text-4xl font-semibold lg:text-6xl text-[#D4AF37]">
          Celebrating Milestones in Jewellery Excellence
        </h1>

        {/* Metrics */}
        <div className="grid gap-10 pt-16 md:grid-cols-3 lg:gap-0">
          {/* Stores */}
          <div className="text-center">
            <p className="text-sm font-medium text-zinc-600">Exclusive Stores Across India</p>
            <p className="pt-4 text-7xl font-semibold text-[#D4AF37] lg:pt-10">
              <AnimatedCounter to={25} />
            </p>
            <p className="text-2xl font-semibold text-zinc-600">stores</p>
          </div>

          {/* Customers */}
          <div className="text-center">
            <p className="text-sm font-medium text-zinc-600">Happy Customers Served</p>
            <p className="pt-4 text-7xl font-semibold text-[#D4AF37] lg:pt-10">
              <AnimatedCounter to={15000} /> +
            </p>
            <p className="text-2xl font-semibold text-zinc-600">customers</p>
          </div>

          {/* Daily Footfall */}
          <div className="text-center">
            <p className="text-sm font-medium text-zinc-600">Average Daily Footfall</p>
            <p className="pt-4 text-7xl font-semibold text-[#D4AF37] lg:pt-10">
              <AnimatedCounter to={1200} /> +
            </p>
            <p className="text-2xl font-semibold text-zinc-600">visits/day</p>
          </div>
        </div>
      </div>
    </section>
  );
}
