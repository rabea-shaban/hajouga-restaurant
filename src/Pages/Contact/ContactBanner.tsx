const ContactBanner = () => {
  return (
    <div className="banner AboutBanner relative m-0 p-0">
      <div className="ovrlay"></div>

      <div className="absolute inset-0 z-10 flex justify-center items-center text-white text-center">
        <div>
          <h3 className="text-4xl  text-orange-400 font-bold mb-2">
            تواصل معنا
          </h3>
          <p className="text-lg sm:text-xl max-w-xl mb-6">
            استمتع بتناول الطعام البيتي والفلاحي في أجواء رمضان
          </p>
          <div className="slide-sub-title">
            <span className="lineRight w-full"></span>
            <span className="lineLeft w-full"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactBanner;
