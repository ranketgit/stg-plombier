export function generateSchema(
    title: string,
    description: string,
    ratingCount: number = 17,
  ) {
    return {
      "@context": "http://schema.org",
      "@type": "Product",
      name: `${title}`,
      brand: "Assur Plombier",
      image: "https://assur-plombier.be/plombier-samuel-debouchage-vidange.webp",
      description: `${description}`,
      sku: "0476232323",
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "9.9",
        ratingCount: `${ratingCount}`,
        bestRating: "10",
        worstRating: "1",
      },
      offers: {
        "@type": "aggregateOffer",
        availability: "http://schema.org/InStock",
        priceCurrency: "EUR",
        lowPrice: "159",
        offerCount: "130",
        highPrice: "318",
      },
    };
  }