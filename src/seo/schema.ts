export function createSchema(location: string) {
  let schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "PlumbingService",
    "name": `Assur Plombier - plombier professionnel en urgence - Belgique `,
    "alternateName": "Assur plombier",
    "description": `Service de plomberie professionnel disponible 24h/7j dans toute Belgique. Intervention rapide pour tous vos problèmes de tuyauterie, débouchage, chauffage et sanitaire.`,
    "url": "https://assur-plombier.be",
    "image": "/favicon.svg",
    "telephone": "+32476232323",
    "email": "contact@assur-plombier.be",
    "priceRange": "€",
    "currenciesAccepted": "EUR",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Rue St Laurent 39, 4000 Liège",
      "addressLocality": "Liège",
      "postalCode": "4000",
      "addressRegion": "Liège",
      "addressCountry": "BE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "50.6426",
      "longitude": "5.5610"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "00:00",
        "closes": "23:59"
      }
    ],
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "50.6426",
        "longitude": "5.5610"
      },
      "geoRadius": "50000"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "9.9",
      "reviewCount": "10",
      "bestRating": "10",
      "worstRating": "1",
    },
    "keywords": [
      "plombier bruxelles",
      "Plombier Liège",
      "débouchage canalisation belgique",
      "installation sanitaire",
      "réparation fuite eau",
      "plombier urgence",
      "chauffagiste",
      "plombier 24/7",
      "installation chauffage"
    ]
  };

  return schemaMarkup;
}
