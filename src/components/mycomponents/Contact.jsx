'use client'

import { motion } from 'framer-motion'
import { MdEmail, MdPhone } from 'react-icons/md'
import { FaWhatsapp, FaInstagram, FaFacebookF } from 'react-icons/fa'

const contactItems = [
  {
    icon: <MdEmail className="w-6 h-6" />,
    title: 'Email',
    description: 'Feel free to send us an email anytime.',
    value: 'dhruv.mahindru08@gmail.com',
    action: 'mailto:dhruv.mahindru08@gmail.com',
  },
  {
    icon: <MdPhone className="w-6 h-6" />,
    title: 'Phone',
    description: 'Available Mon–Sat, 10am–8pm.',
    value: '+91 62395 35324',
    action: 'tel:+916239535324',
    whatsapp: 'https://wa.me/916239535324',
  },
  {
    icon: <FaInstagram className="w-6 h-6" />,
    title: 'Instagram',
    description: 'Follow us for latest updates and designs.',
    value: '@prem_pal_jewellers',
    action: 'https://www.instagram.com/prem_pal_jewellers',
  },
  {
    icon: <FaFacebookF className="w-6 h-6" />,
    title: 'Facebook',
    description: 'Connect with us on Facebook.',
    value: 'facebook.com/prempaljewellers',
    action: 'https://www.facebook.com/prempaljewellers',
  },
]

export default function ContactSection() {
  return (
    <section className="bg-white dark:bg-gray-950 py-4 md:py-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-yellow-600 font-medium">Contact us</p>
          <h2 className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">
            Get in Touch
          </h2>
          <p className="mt-3 text-gray-600 dark:text-gray-400">
            We'd love to hear from you. Reach out via any of the methods below.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-3">
          <div className="grid gap-10">
            {contactItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="flex flex-col"
              >
                <div className="flex items-start space-x-3">
                  <div className="p-3 bg-yellow-100 text-yellow-700 rounded-full dark:bg-gray-800 dark:text-yellow-500">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{item.title}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{item.description}</p>
                    <p className="text-sm text-yellow-700 dark:text-yellow-500 mt-1 break-words">{item.value}</p>
                  </div>
                </div>

                {/* Action buttons */}
                <div className="mt-3 space-x-3">
                  {item.action && (
                    <a
                      href={item.action}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-4 py-1.5 text-sm bg-yellow-700 text-white rounded hover:bg-yellow-800 transition"
                    >
                      {item.title === 'Email'
                        ? 'Send Email'
                        : item.title === 'Phone'
                        ? 'Call'
                        : `Visit ${item.title}`}
                    </a>
                  )}
                  {item.whatsapp && (
                    <a
                      href={item.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-1.5 text-sm bg-green-600 text-white rounded hover:bg-green-700 transition"
                    >
                      <FaWhatsapp className="mr-1" />
                      WhatsApp
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Map Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2 h-[400px] rounded-lg overflow-hidden shadow-lg"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3396.541781151741!2d74.88572551112286!3d31.64639417404866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919639b8eeaa379%3A0x6e6acd2858aa800c!2sPrem%20Pal%20Jewellers!5e0!3m2!1sen!2sin!4v1752733869781!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
