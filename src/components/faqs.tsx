import * as React from "react";
import MarkdownView from "react-showdown";
import { Image } from "@yext/sites-components";

export default function FAQs(inpData: any) {
  let data = inpData.inpData;
  let clData = data.c_associatedFAQs;
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:pt-32  lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <h2 className="text-3xl  leading-10 tracking-tight headColor">
              Frequently asked questions
            </h2>
            <p className="mt-4 text-base leading-7 text-gray-600">
              Can’t find the answer you’re looking for? Reach out to our&nbsp;
              <a
                href="#"
                className="font-semibold text-indigo-600 hover:text-indigo-500"
              >
                customer support&nbsp;
              </a>
              team.
            </p>
          </div>
          <div
            className="mt-10 lg:col-span-7 lg:mt-0"
            style={{ height: "300px", overflow: "scroll" }}
          >
            <dl className="space-y-10">
              {clData &&
                clData.map((faq: any) => (
                  <div key={faq.question}>
                    <dt className="text-base font-semibold leading-7 text-gray-900">
                      {faq.question}
                    </dt>
                    <dd className="mt-2 text-base leading-7 text-gray-600">
                      <MarkdownView
                        markdown={faq.answer}
                        options={{ tables: true, emoji: true }}
                      />
                    </dd>
                  </div>
                ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
