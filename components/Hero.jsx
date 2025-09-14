import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="pt-28 pb-16 px-4 max-w-7xl mx-auto text-center">
      <motion.h1
        className="text-4xl md:text-6xl font-extrabold leading-tight"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        We Take Care Of <br /> Your Brand
      </motion.h1>
      <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
        We care about our work and we care about our clients.
      </p>
      <div className="mt-6 flex justify-center">
        <input
          type="email"
          placeholder="Enter Your Email"
          className="border border-gray-300 rounded-l-full px-4 py-2 w-64"
        />
        <button className="bg-blue-600 text-white px-6 py-2 rounded-r-full hover:bg-blue-700">
          Let's Talk
        </button>
      </div>
    </section>
  )
}
