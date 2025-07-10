import AboutConatct from "./AboutConatct";
import ContactUsForm from "./ConatctMail";
import ContactBanner from "./ContactBanner";
import GoogleMapIframe from "./GoogleMapIframe";

export const Contact = () => {
  return (
    <>
      <ContactBanner />
      <div className=" md:flex justify-between container m-auto py-10 px-14   gap-5">
        <ContactUsForm />
        <AboutConatct />
      </div>
      <GoogleMapIframe />
    </>
  );
};
