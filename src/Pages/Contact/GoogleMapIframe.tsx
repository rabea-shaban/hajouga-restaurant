import React from "react";

const GoogleMap: React.FC = () => {
  return (
    <div
      className="container m-auto"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        width: "100%",
        height: "450px",
        padding: "20px",
      }}>
      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "1000px",
          height: "450px",
          borderRadius: "10px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          overflow: "hidden",
        }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3452.4663761637044!2d31.38392182458517!3d30.080826874905274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145817f6441278d1%3A0xfd3b9facdd09dce9!2z2K3YrNmI2KzYqQ!5e0!3m2!1sar!2seg!4v1752181389356!5m2!1sar!2seg"
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            border: "0",
          }}
          frameBorder="0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  );
};

export default GoogleMap;
