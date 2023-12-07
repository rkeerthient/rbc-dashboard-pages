import * as React from "react";
import { JsonLd } from "react-schemaorg";
import { Person, FAQPage, Place, Blog } from "schema-dts";
const Schema = (props: any) => {
  const { document } = props;
  const name = `${
    document.name.includes("-") ? document.name.split("-")[0] : document.name
  }`;
  const jobTitle = `${
    document.name.includes("-") ? document.name.split("-")[1] : ""
  }`;
  const address = document.address;
  const telephone = document.mainPhone;
  const description = document.decription;
  const faqsList: any = [];
  const blogPosts: any = [];
  if (document.c_associatedFAQs) {
    document.c_associatedFAQs.map((item: any) => {
      faqsList.push({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      });
    });
  }
  if (document.c_associatedBlogs) {
    document.c_associatedBlogs.map((item: any) => {
      blogPosts.push({
        "@type": "BlogPosting",
        "@id": item.entityId,
        mainEntityOfPage: document.landingPageUrl,
        headline: item.name,
        name: item.name,
        description: item.description,
        datePublished: "2019-05-14",
        dateModified: "2019-05-14",
        author: {
          "@type": "Person",
          "@id": document.entityId,
          name: document.name.includes("-")
            ? document.name.split("-")[0]
            : document.name,
        },
        image: {
          "@type": "ImageObject",
          "@id": item.photoGallery[0].image.url,
          url: item.photoGallery[0].image.url,
          height: "362",
          width: "388",
        },
        url: item.landingPageUrl,
        keywords: [item.c_category],
      });
    });
  }
  return (
    <>
      <JsonLd<Person>
        item={{
          "@context": "https://schema.org",
          "@type": "Person",
          name,
          address: {
            "@type": "PostalAddress",
            streetAddress: address.line1,
            addressLocality: address.city,
            addressRegion: address.region,
            postalCode: address.postalCode,
            addressCountry: address.countryCode,
          },
          description: description,
          telephone: telephone,
          image: document.photoGallery
            ? document.photoGallery[0].image.url
            : "",
          jobTitle,
        }}
      />

      <JsonLd<FAQPage>
        item={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqsList,
        }}
      />
      <JsonLd<Blog>
        item={{
          "@context": "https://schema.org",
          "@type": "Blog",
          "@id": document.landingPageUrl,
          mainEntityOfPage: document.landingPageUrl,
          name: `${
            document.name.includes("-")
              ? document.name.split("-")[0]
              : document.name
          } blogs`,
          blogPost: blogPosts,
        }}
      />
      {document.geocodedCoordinate && (
        <JsonLd<Place>
          item={{
            "@context": "https://schema.org",
            "@type": "Place",
            geo: {
              "@type": "GeoCoordinates",
              latitude: document.geocodedCoordinate.latitude,
              longitude: document.geocodedCoordinate.longitude,
            },
            openingHoursSpecification: document.hours
              ? buildHoursSchema(document.hours)
              : "Mo,Tu,We,Th 09:00-12:00",
          }}
        />
      )}
    </>
  );
};

const buildHoursSchema = (hoursData: any) => {
  const nHrs: any = [];
  Object.keys(hoursData).forEach((item) =>
    nHrs.push(
      hoursData[item].openIntervals && {
        "@type": "OpeningHoursSpecification",
        closes: hoursData[item].openIntervals[0].end,
        dayOfWeek: `https://schema.org/${item
          .substring(0, 2)
          .replace(/./, (c) => c.toUpperCase())}`,
        opens: hoursData[item].openIntervals[0].start,
      }
    )
  );
  return nHrs;
};

export default Schema;
