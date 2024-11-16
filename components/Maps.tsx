import React from "react";

const Maps = () => {
  return (
    <section className="w-full">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4960.838525777751!2d0.11723321215177816!3d51.56054710670189!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a44a43eb91fd%3A0x634953bb899f3524!2s3%20Winterbourne%20Rd%2C%20Dagenham%20RM8%202JZ%2C%20UK!5e0!3m2!1sen!2sca!4v1731783259875!5m2!1sen!2sca"
        width="600"
        height="450"
        className="w-full"
        allowFullScreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>
  );
};

export default Maps;
