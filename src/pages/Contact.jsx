import ContactHero from "../components/contact/ContactHero";
import ContactInfo from "../components/contact/ContactInfo";
import ContactForm from "../components/contact/ContactForm";
import BusinessHours from "../components/contact/BusinessHours";
import GoogleMap from "../components/contact/GoogleMap";
const Contact = () => {
  return (
    <div className="min-h-screen bg-black">
      <ContactHero /><br/>
      <ContactInfo /><br/>
      <BusinessHours /><br/>
      <ContactForm /><br/>
         <GoogleMap />
    </div>
  );
};

export default Contact;