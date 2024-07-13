import SectionTitle from "@/components/sectionTitle/SectionTitle";
import about from "../../assets/about.jpg";
import about2 from "../../assets/about-2.jpg";
import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
const About = () => {
  return (
    <section className="mx-auto container m-10 space-y-10">
      <div className="flex justify-center gap-5 items-center">
        <motion.div
         initial={{ scale: 0, borderRadius: "80px" }}
         whileInView={{ scale: 1, borderRadius: "0.75rem" }}
         transition={{ ease: "easeInOut", duration: 0.75}}
         className="overflow-hidden rounded-xl group hover:scale-90 duration-700">
          <img src={about} alt="" className="w-full h-full object-cover group-hover:scale-125 duration-1000" />
        </motion.div>
        <div>
          <SectionTitle title="About Us"></SectionTitle>
          <motion.div
            initial={{ y: "-10%" }}
            whileInView={{ y: 0 }}
            transition={{ ease: "easeInOut", duration: 0.35 }}
            className="w-full h-[25rem] overflow-hidden rounded-xl group hover:scale-90 duration-700"
          >
            <p className="text-xl text-justify font-semibold">
              Welcome to Thrive, your ultimate destination for top-quality
              fitness gear. At Thrive, we believe that achieving your fitness
              goals should be an enjoyable and rewarding journey. That's why
              we're committed to providing you with the best equipment and
              accessories to help you thrive in your fitness endeavors.
            </p>
          </motion.div>
        </div>
      </div>
      <div className="flex justify-center gap-5 items-center">
      <div>
          <SectionTitle title="Our Products"></SectionTitle>
          <motion.div
            initial={{ y: "-20%" }}
            whileInView={{ y: 0 }}
            transition={{ ease: "easeInOut", duration: 0.35}}
            className="w-full h-[25rem] overflow-hidden rounded-xl group hover:scale-90 duration-700"
          >
            <p className="text-xl text-justify font-semibold">
          At Thrive, we offer a diverse selection of fitness equipment designed to meet the needs of every fitness level and interest. From state-of-the-art treadmills and exercise bikes to versatile dumbbells and yoga mats, we have everything you need to create a comprehensive home gym or enhance your workout routine. Our products are carefully selected for their quality, durability, and performance, ensuring that you get the best value for your investment.
            </p>
          </motion.div>
        </div>
        <motion.div
         initial={{ scale: 0, borderRadius: "80px" }}
         whileInView={{ scale: 1, borderRadius: "0.75rem" }}
         transition={{ ease: "easeInOut", duration: 0.75}}
         className=" overflow-hidden rounded-xl group hover:scale-90 duration-700">
          <img src={about2} alt="" className="w-full h-full object-cover group-hover:scale-125 duration-1000" />
        </motion.div>
      </div>

      <section className="mx-auto my-10 rounded-md">
        <SectionTitle title="Why Choose Us"></SectionTitle>
      <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Quality Assurance:</AccordionTrigger>
        <AccordionContent>
        We only stock products from reputable brands known for their excellence and reliability.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Expert Advice: </AccordionTrigger>
        <AccordionContent>
        Our team of fitness experts is always ready to provide you with personalized advice and recommendations to help you find the right gear for your needs.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Customer Satisfaction:</AccordionTrigger>
        <AccordionContent>
        Your satisfaction is our top priority. We are dedicated to providing exceptional customer service and support to ensure a seamless shopping experience.
        

        </AccordionContent>
      </AccordionItem>
    </Accordion>
      </section>
    </section>
  );
};

export default About;
