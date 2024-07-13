import { motion } from "framer-motion";

type TSectionTitleProps = {
        title: string,
      }
      
const SectionTitle: React.FC<TSectionTitleProps> = ({ title }) => {
  return (
    <div className="overflow-hidden">
      <motion.h2
        initial={{ y: "-100%" }}
        whileInView={{ y: 0 }}
        transition={{ ease: "easeInOut", duration: 0.75 }}
        className="text-2xl md:text-4xl font-bold text-center uppercase m-10"
      >
        {title}
      </motion.h2>
    </div>
  );
};



export default SectionTitle;