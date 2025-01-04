import { EDUCATION } from "../constants";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <section className="text-[#FE5000] tracking-wide" id="education">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mb-4 text-center text-4xl font-bold"
      >
        Education
      </motion.h2>
      {EDUCATION.map((edu, index) => (
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: index * 0.5 }}
          key={index}
          className="p-6 mb-9 max-w-4xl rounded-2xl space-y-2 bg-gray-300/10 border">
        
          <h3 className="text-xl font-semibold">{edu.degree}</h3>
          <p className="text-lg">{edu.institution}</p>
          <p className="text-sm text-black">{edu.duration}</p>
          <p className="mt-2">{edu.description}</p>
        </motion.div>
      ))}
    </section>
  );
};

export default Education;
