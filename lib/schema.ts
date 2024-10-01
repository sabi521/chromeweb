// lib/schema.ts
export const generateSchema = (type: string, data: any) => {
  switch (type) {
    case "LocalBusiness":
      return {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: "Chrome Double Glazing",
        url: "https://www.chromedoubleglazing.com",
        telephone: "07508443393",
        address: {
          "@type": "PostalAddress",
          streetAddress: "3 Winterbourne Road",
          addressLocality: "Dagenham",
          postalCode: "RM8 2JZ",
          addressCountry: "GB",
        },
        openingHours: "Mon-Sat 08:00-20:00",
        geo: {
          "@type": "GeoCoordinates",
          latitude: 51.560637151465976,
          longitude: -0.11982422591251347,
        },
        areaServed: [
          { "@type": "Place", name: "London" },
          { "@type": "Place", name: "Ilford" },
          { "@type": "Place", name: "Dagenham" },
        ],
      };
    case "Service":
      return {
        "@context": "https://schema.org",
        "@type": "Service",
        name: data.name,
        description: data.description,
        provider: {
          "@type": "LocalBusiness",
          name: "Chrome Double Glazing",
          url: "https://www.chromedoubleglazing.com",
          telephone: "07508443393",
          address: {
            "@type": "PostalAddress",
            streetAddress: "3 Winterbourne Road",
            addressLocality: "Dagenham",
            postalCode: "RM8 2JZ",
            addressCountry: "GB",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: 51.560637151465976,
            longitude: -0.11982422591251347,
          },
        },
        areaServed: [
          { "@type": "Place", name: "London" },
          { "@type": "Place", name: "Ilford" },
          { "@type": "Place", name: "Dagenham" },
        ],
      };
    default:
      return {};
  }
};
