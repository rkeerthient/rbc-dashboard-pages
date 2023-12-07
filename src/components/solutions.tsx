import * as React from "react";
import { Image } from "@yext/sites-components";
export default function solutions(inpData: any) {
  let data = inpData.inpData;
  let clData = data.c_associatedSolutions;
  return (
    <div className="bg-white mt-4 ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-4">
          <h2 className="text-3xl tracking-tight headColor sm:text-4xl">
            Solutions
          </h2>
        </div>
        <div className="mx-auto  grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 border-t border-gray-200 sm:mt-4 sm:pt-4 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {clData &&
            clData.map((post: any) => (
              <article
                key={post.entityId}
                className="flex max-w-xl flex-col items-start justify-between"
              >
                <div className="relative mt-8 flex items-center gap-x-4">
                  {post.photoGallery && (
                    <Image
                      className="h-10 !w-10 rounded-full bg-gray-50"
                      image={post.photoGallery[0]}
                    ></Image>
                  )}
                  <div className="text-sm leading-6">
                    <p className="text-gray-600">{post.name}</p>
                    <span className=" rounded-full bg-gray-50 py-1.5  font-medium text-gray-600 hover:bg-gray-100">
                      {post.c_category}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-x-4 text-xs"></div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <a href={post.landingPageUrl}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-5 text-sm leading-6 text-gray-600 line-clamp-3">
                    {post.description}
                  </p>
                </div>
              </article>
            ))}
        </div>
      </div>
    </div>
  );
}
