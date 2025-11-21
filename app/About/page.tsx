"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const page = () => {
  return (
    <div className="bg-stone-50 text-gray-800 pb-20">
      {/* Hero */}
      <div className="relative h-[80vh] w-full overflow-hidden">
        <video
          src="/videos/hdd.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-serif text-white italic text-center max-w-4xl leading-tight px-4"
          >
            full of flavor, free of <br /> cruelty
          </motion.h1>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 py-24">
        {/* Intro Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-serif leading-tight text-center md:text-left mb-24 "
        >
          I m heer, the proud owner of just falafel vegan cafe, where we are
          serving up delicious, cruelty-free cuisine in the heart of river oaks,
          houston.
        </motion.h2>
        {/* Owner Section */}
        <div className="flex flex-col md:flex-row gap-12 items-center mb-32">
          <motion.div
            className="flex-1 order-2 md:order-1 font-sans text-xl leading-loose text-gray-600 space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <p>
              my journey to veganism began over a decade ago when i made the
              switch for ethical reasons. little did i know that this decision
              would not only change my life but inspire hundreds of others,
              including my entire immediate family, to embrace a compassionate
              lifestyle.
            </p>
          </motion.div>
          <motion.div
            className="flex-1 order-1 md:order-2 relative w-full flex justify-center md:justify-end"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-80 h-96 relative">
              {/* Decorative arch border */}
              <div className="absolute inset-0 rounded-t-full rounded-b-[10rem] border border-[#e2d5c5] transform translate-x-4 translate-y-4 -z-0"></div>
              {/* Stars/Sparkles Decoration (Simplified with absolute divs) */}
              <div className="absolute -top-4 -right-4 text-2xl text-[#e2d5c5]">
                ✦
              </div>
              <div className="absolute bottom-10 -left-6 text-xl text-[#e2d5c5]">
                ✦
              </div>

              <Image
                width={2000}
                height={1200}
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80"
                alt="Heer - Owner"
                className="w-full h-full object-cover rounded-t-full rounded-b-[10rem] relative z-10 shadow-xl"
              />
            </div>
          </motion.div>
        </div>

        {/* Quote Section */}
        <motion.div
          className="max-w-2xl mx-auto text-center mb-32"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-serif text-2xl md:text-3xl leading-relaxed text-gray-800">
            an animal rights advocate, vegan hospitality consultant, and health
            coach, i have always dreamed of opening a vegan restaurant that
            would make a difference.
          </p>
        </motion.div>

        {/* Chef/History Section */}
        <div className="flex flex-col md:flex-row gap-16 items-center mb-32">
          <motion.div
            className="flex-1 w-full"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Image
              width={2000}
              height={1200}
              src="https://images.unsplash.com/photo-1583394293214-28ded15ee548?auto=format&fit=crop&w=800&q=80"
              alt="Chef in kitchen"
              className="w-full md:w-[90%] h-[500px] object-cover rounded-sm shadow-md grayscale-[20%] hover:grayscale-0 transition-all duration-700"
            />
          </motion.div>
          <motion.div
            className="flex-1 font-sans text-xs md:text-xl leading-loose text-gray-600 space-y-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <p>
              after nearly three years of hard work and dedication, just falafel
              vegan cafe was born! my husband shah and i are thrilled to share
              our passion for delicious, plant-based food with our community.
            </p>
            <p>
              at just falafel, we are all about respect – respect for animals,
              the environment, and our planet. our 100% vegan menu is carefully
              crafted to appeal to everyone, from die-hard vegans to curious
              foodies looking to try something new. we believe that by serving
              up tasty, innovative dishes, we are not only satisfying appetites
              but also supporting a more sustainable earth.
            </p>
          </motion.div>
        </div>

        {/* What Sets Us Apart */}
        <div className="relative py-12 md:py-24 mb-20">
          {/* Decorative background circles (CSS only) */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] border border-stone-200 rounded-full -z-10 opacity-60"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] md:w-[500px] md:h-[500px] border border-stone-200 rounded-full -z-10 opacity-60"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] md:w-[400px] md:h-[400px] border border-stone-200 rounded-full -z-10 opacity-60"></div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-12 relative">
            {/* Floating Image Left */}
            <motion.div
              className="hidden md:block absolute left-0 lg:left-10 top-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Image
                width={2000}
                height={1200}
                src="https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=200&q=80"
                className="w-24 h-24 object-cover rounded-full shadow-lg border-2 border-white"
                alt="Fresh ingredient"
              />
            </motion.div>

            {/* Floating Image Right */}
            <motion.div
              className="hidden md:block absolute right-0 lg:right-10 bottom-0"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <Image
                width={2000}
                height={1200}
                src="https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?auto=format&fit=crop&w=200&q=80"
                className="w-28 h-28 object-cover rounded-full shadow-lg border-2 border-white"
                alt="Fresh ingredient"
              />
            </motion.div>

            <div className="text-center max-w-lg mx-auto z-10 bg-stone-50/80 md:bg-transparent p-4 rounded-xl backdrop-blur-sm md:backdrop-blur-none">
              <motion.h2
                className="text-4xl md:text-5xl font-serif mb-8 text-gray-900"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                What sets us apart?
              </motion.h2>
              <motion.p
                className="font-sans text-xs leading-loose text-gray-600"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                for starters, we prep all our ingredients fresh daily, ensuring
                that every bite is bursting with flavor. our menu features both
                innovative and familiar dishes, all with a vegan twist that will
                keep you coming back for more. plus, we only use premium
                ingredients because we believe that quality matters.
              </motion.p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mb-16 mt-32">
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-serif leading-tight mb-8 max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            so come on down to just falafel, a women-owned vegan cafe, and
            experience the difference for yourself!
          </motion.h2>

          <motion.p
            className="font-sans text-xs text-gray-500 mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            we can not wait to share our love of vegan cuisine with you{" "}
            <br className="hidden md:block" /> and show you just how delicious
            compassion can be.
          </motion.p>

          <motion.div
            className="w-full h-64 md:h-96 rounded-[3rem] md:rounded-[100px] overflow-hidden relative shadow-2xl"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <Image
              width={2000}
              height={1200}
              src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=2000&q=80"
              alt="Just Falafel Interior Panoramic"
              className="w-full h-full object-cover"
            />
            {/* Decorative elements on image edges if needed */}
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 text-[#e2d5c5] text-4xl">
              ✦
            </div>
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 text-[#e2d5c5] text-4xl">
              ✦
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default page;
