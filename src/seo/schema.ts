export const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "PlumbingService",
    "name": "Plombier David - plombier professionnel en urgence",
    "alternateName": "Plombier David",
    "description": "Service de plomberie professionnel disponible 24h/7j dans toute la Belgique. Intervention rapide pour tous vos problèmes de tuyauterie, débouchage, chauffage et sanitaire.",
    "url": "https://plombier-david.be",
    "image": "/favicon.svg",
    "telephone": "+32476232323",
    "email": "contact@plombier-david.be",
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
      "geoRadius": "50000" // Radius in meters (50km)
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "85"
    },
    "keywords": [ // <-- Added missing comma
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