import * as React from "react";
import { Image } from "@yext/sites-components";

export default function Insights(inpData: any) {
  let data = inpData.inpData;
  let clData = data.c_associatedInsights;

  return (
    <div className="bg-white ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl tracking-tight headColor sm:text-4xl">
              Insights
            </h2>
          </div>
          <div
            className="mt-8 space-y-20 lg:mt-8 lg:space-y-20"
            style={{ height: "500px", overflow: "scroll" }}
          >
            {clData &&
              clData.map((post: any) => (
                <article
                  key={post.entityId}
                  className="relative isolate flex flex-col gap-8 lg:flex-row"
                >
                  <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
                    {post.photoGallery && (
                      <Image
                        className="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover"
                        image={post.photoGallery[0]}
                      />
                    )}
                    <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                  <div>
                    <div className="flex items-center gap-x-4 text-xs">
                      <time
                        dateTime={post.externalArticlePostDate}
                        className="text-gray-500"
                      >
                        {post.externalArticlePostDate}
                      </time>
                      <span className="relative z-10 rounded-full bg-gray-50 py-1.5 px-3 font-medium text-gray-600 hover:bg-gray-100">
                        {post.c_category}
                      </span>
                    </div>
                    <div className="group relative max-w-xl">
                      <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                        <a href={post.landingPageUrl}>
                          <span className="absolute inset-0" />
                          {post.title}
                        </a>
                      </h3>
                      <p className="mt-5 text-sm leading-6 text-gray-600">
                        {post.description}
                      </p>
                    </div>
                    <div className="mt-6 flex border-t border-gray-900/5 pt-6">
                      <div className="relative flex items-center gap-x-4">
                        {data.photoGallery && (
                          <Image
                            className="h-10 !w-10 rounded-full bg-gray-50"
                            image={data.photoGallery[0]}
                          />
                        )}
                        <div className="text-sm leading-6">
                          <p className="font-semibold text-gray-900">
                            <a href={data.landingPageUrl}>
                              <span className="absolute inset-0" />
                              {data.name.split("-")[0]}
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
