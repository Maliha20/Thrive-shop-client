import { motion } from "framer-motion";
import SectionTitle from "../sectionTitle/SectionTitle";
import ben1 from "../../assets/ben-1.jpg";
import ben2 from "../../assets/ben-2.jpg";
const Benefits = () => {
  return (
    <section className="mx-auto container m-10 space-y-10">
      <SectionTitle title="Benefits Of Using Our Products"></SectionTitle>
      <div className="flex justify-center gap-5 items-center">
        <motion.div
         initial={{ scale: 0, borderRadius: "80px" }}
         whileInView={{ scale: 1, borderRadius: "0.75rem" }}
         transition={{ ease: "easeInOut", duration: 0.75}}
         className="overflow-hidden rounded-xl group hover:scale-90 duration-700">
          <img src={ben1} alt="" className="w-full h-full object-cover group-hover:scale-125 duration-1000" />
        </motion.div>
        <div>
          <SectionTitle title="Enhanced Performance"></SectionTitle>
          <motion.div
            initial={{ y: "-10%" }}
            whileInView={{ y: 0 }}
            transition={{ ease: "easeInOut", duration: 0.35 }}
            className="w-full h-[25rem] overflow-hidden rounded-xl group hover:scale-90 duration-700"
          >
            <p className="text-xl text-center font-semibold">
            Our fitness equipment is designed to help you achieve your peak performance, whether you're a beginner or a seasoned athlete.
            </p>
          </motion.div>
        </div>
      </div>
      <div className="flex justify-center gap-5 items-center">
      <div>
          <SectionTitle title="Durability and Quality"></SectionTitle>
          <motion.div
            initial={{ y: "-20%" }}
            whileInView={{ y: 0 }}
            transition={{ ease: "easeInOut", duration: 0.35}}
            className="w-full h-[25rem] overflow-hidden rounded-xl group hover:scale-90 duration-700"
          >
            <p className="text-xl text-center font-semibold">
            Built with high-quality materials, our products are durable and long-lasting, ensuring you get the best value for your money.
            </p>
          </motion.div>
        </div>
        <motion.div
         initial={{ scale: 0, borderRadius: "80px" }}
         whileInView={{ scale: 1, borderRadius: "0.75rem" }}
         transition={{ ease: "easeInOut", duration: 0.75}}
         className=" overflow-hidden rounded-xl group hover:scale-90 duration-700">
          <img src={ben2} alt="" className="w-full h-full object-cover group-hover:scale-125 duration-1000" />
        </motion.div>
      </div>

      <section className="mx-auto my-10 rounded-md">
      </section>
    </section>
  );
};

export default Benefits;