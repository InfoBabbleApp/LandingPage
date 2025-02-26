import { IconType } from "react-icons";
import { FiCheckCircle, FiMic, FiUsers, FiSmartphone } from "react-icons/fi"; // Replaced FiMobile with FiSmartphone

const WhyUs = () => {
  return (
    <div className="p-4">
      <p className="mt-10 mb-10 text-3xl text-center font-semibold tracking-tight text-balance text-gray-900 sm:text-6xl">Why Choose Babble</p>
      <div className="grid gap-4 grid-cols-2 lg:grid-cols-4 mb-8">
        <Card
          title="Personalized Learning"
          subtitle="Custom flashcards and learning activities based on your child's progress."
          Icon={FiCheckCircle}
        />
        <Card 
          title="Speech and Language Support" 
          subtitle="Built-in speech-to-text and text-to-speech to support pronunciation and communication." 
         
          Icon={FiMic} 
        />
        <Card 
          title="Comprehensive Resources" 
          subtitle="From flashcards to interactive scenarios, we provide everything to support your child’s development." 
          Icon={FiUsers} 
        />
        <Card
          title="Easy to Use"
          subtitle="A simple, intuitive interface designed for children with communication challenges."
          Icon={FiSmartphone} // Updated to FiSmartphone
        />
      </div>
    </div>
  );
};

interface CardType {
  title: string;
  subtitle: string;
  Icon: IconType;
}

const Card = ({ title, subtitle, Icon }: CardType) => {
  return (
    <a
       className="w-full p-4 rounded-lg border-[1px] border-slate-300 relative overflow-hidden group bg-white shadow-2xl hover:shadow-3xl transition-shadow duration-300 mb-3"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-pink-500 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300" />

      <Icon className="absolute z-10 -top-12 -right-12 text-9xl text-slate-100 group-hover:text-pink-200 group-hover:rotate-12 transition-transform duration-300" />
      <Icon className="mb-2 text-2xl text-pink-600 group-hover:text-white transition-colors relative z-10 duration-300" />
      <h3 className="font-medium text-lg text-slate-950 group-hover:text-white relative z-10 duration-300 mb-4">
        {title}
      </h3>
      <p className="text-slate-400 group-hover:text-violet-200 relative z-10 duration-300">
        {subtitle}
      </p>
    </a>
  );
};

export default WhyUs;
