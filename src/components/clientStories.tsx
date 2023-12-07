import * as React from "react";
import FinancialProfessional from "../types/financial_professionals";
import { Image } from "@yext/sites-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function ClientStories(inpData: any) {
  let data = inpData.inpData;
  let clData = data.c_associatedClientStories;
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="relative isolate bg-white pt-16 pb-32 sm:pt-32">
      <div className="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl">
        <svg
          viewBox="0 0 1313 771"
          aria-hidden="true"
          className="ml-[max(50%,38rem)] w-[82.0625rem]"
        >
          <path
            id="bc169a03-3518-42d4-ab1e-d3eadac65edc"
            fill="url(#85a0eca5-25f1-4ab9-af84-4e2d8d9cdbf3)"
            d="M360.508 589.796 231.671 770.522 0 498.159l360.508 91.637 232.034-325.485c1.485 150.396 51.235 393.965 238.354 165.069C1064.79 143.261 1002.42-107.094 1171.72 46.97c135.44 123.252 148.51 335.641 138.11 426.428L971.677 339.803l24.062 411.461-635.231-161.468Z"
          />
          <defs>
            <linearGradient
              id="85a0eca5-25f1-4ab9-af84-4e2d8d9cdbf3"
              x1="1313.17"
              x2="-88.881"
              y1=".201"
              y2="539.417"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#9089FC" />
              <stop offset={1} stopColor="#FF80B5" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute inset-x-0 top-0 -z-10 flex transform-gpu overflow-hidden pt-32 opacity-25 blur-3xl sm:pt-40 xl:justify-end">
        <svg
          viewBox="0 0 1313 771"
          aria-hidden="true"
          className="ml-[-22rem] w-[82.0625rem] flex-none origin-top-right rotate-[30deg] xl:ml-0 xl:mr-[calc(50%-12rem)]"
        >
          <use href="#bc169a03-3518-42d4-ab1e-d3eadac65edc" />
        </svg>
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl tracking-tight headColor sm:text-4xl">
            Testimonials
          </h2>
          <p className="mt-2 text-lg  text-gray-600">
            We have worked with thousands of amazing people
          </p>
        </div>
        <Slider {...settings}>
          {clData &&
            clData.map((testimonial: any) => (
              <div className="pt-8 sm:inline-block sm:w-full sm:px-4">
                <figure className="rounded-2xl bg-gray-50 p-8 text-sm leading-6">
                  <blockquote className="text-gray-900">
                    <p className="font-bold mb-2">{`“${testimonial.title}”`}</p>
                    <p>{`“${testimonial.description}”`}</p>
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-x-4">
                    {testimonial.photoGallery && (
                      <Image
                        className="h-10 !w-10 rounded-full bg-gray-50"
                        image={testimonial.photoGallery[0]}
                      ></Image>
                    )}
                    <div>
                      <div className="font-semibold text-gray-900">
                        {testimonial.name}
                      </div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            ))}
        </Slider>
      </div>
    </div>
  );
}
