/**
 * This is an example of how to create a template that makes use of streams data.
 * The stream data originates from Yext's Knowledge Graph. When a template in
 * concert with a stream is built by the Yext Sites system, a static html page
 * is generated for every corresponding (based on the filter) stream document.
 *
 * Another way to think about it is that a page will be generated using this
 * template for every eligible entity in your Knowledge Graph.
 */

import {
  GetHeadConfig,
  GetPath,
  GetRedirects,
  HeadConfig,
  Template,
  TemplateConfig,
  TemplateProps,
  TemplateRenderProps,
} from "@yext/pages";
import * as React from "react";
import Hours from "../components/hours";
import StaticMap from "../components/static-map";
import "../index.css";
import { Image } from "@yext/sites-components";
import BlogPosts from "../components/relatedBlogs";
import ClientStories from "../components/clientStories";
import FAQs from "../components/faqs";
import Solutions from "../components/solutions";
import Insights from "../components/relatedInsights";
import Schema from "../components/Schema";
import Web2Lead from "../components/web2Lead";
import { useEffect, useState } from "react";
import { LexicalRichText } from "@yext/react-components";
/**
 * Required when Knowledge Graph data is used for a template.
 */
export const config: TemplateConfig = {
  stream: {
    $id: "my-stream-id-1",
    // Specifies the exact data that each generated document will contain. This data is passed in
    // directly as props to the default exported function.
    fields: [
      "id",
      "uid",
      "meta",
      "name",
      "address",
      "mainPhone",
      "hours",
      "description",
      "slug",
      "geocodedCoordinate",
      "services",
      "photoGallery",
      "c_advisorBio",
      "c_associatedBlogs.landingPageUrl",
      "c_associatedBlogs.description",
      "c_associatedBlogs.name",
      "c_associatedBlogs.c_category",
      "c_associatedBlogs.c_datePublished",
      "c_associatedBlogs.photoGallery",
      "c_associatedClientStories.landingPageUrl",
      "c_associatedClientStories.title",
      "c_associatedClientStories.description",
      "c_associatedClientStories.name",
      "c_associatedClientStories.photoGallery",
      "c_associatedFAQs.answer",
      "c_associatedFAQs.question",
      "c_associatedInsights.title",
      "c_associatedInsights.description",
      "c_associatedInsights.name",
      "c_associatedInsights.externalArticlePostDate",
      "c_associatedInsights.c_category",
      "c_associatedInsights.photoGallery",
      "c_associatedSolutions.landingPageUrl",
      "c_associatedSolutions.title",
      "c_associatedSolutions.description",
      "c_associatedSolutions.name",
      "c_associatedSolutions.c_category",
      "c_associatedSolutions.photoGallery",
      /**Dashboard fields */
      "c_aboutAdvisorShortDescription",
      "c_clientFocuses",
      "c_hobbiesAndInterests",
      "c_volunteeringDisplay",
      "c_expertiseCommentsRTv2",
      "c_fAQs.question",
      "c_fAQs.answer",
      "c_awardsDashboard",
      "c_industryLevelOfExperience",
      "c_educationDisplay.school",
      "c_educationDisplay.degree",
      "c_photoGallery",
      "c_matchFinderPhoto",
      "c_assetRanges",
      "c_preferredFirstName",
      "c_recognitionTitle",
      "c_languagesV2",
      "c_jobTitle",
    ],
    // Defines the scope of entities that qualify for this stream.
    filter: {
      entityTypes: ["financialProfessional"],
      savedFilterIds: ["1306250257"],
    },
    // The entity language profiles that documents will be generated for.
    localization: {
      locales: ["en"],
      primary: false,
    },
  },
};

/**
 * Defines the path that the generated file will live at for production.
 *
 * NOTE: This currently has no impact on the local dev path. Local dev urls currently
 * take on the form: featureName/entityId
 */
export const getPath: GetPath<TemplateProps> = ({ document }) => {
  return document.slug
    ? document.slug
    : `${document.locale}/${document.address.region}/${document.address.city}/${
        document.address.line1
      }-${document.id.toString()}`;
};

/**
 * Defines a list of paths which will redirect to the path created by getPath.
 *
 * NOTE: This currently has no impact on the local dev path. Redirects will be setup on
 * a new deploy.
 */
export const getRedirects: GetRedirects<TemplateProps> = ({ document }) => {
  return [`index-old/${document.id.toString()}`];
};

/**
 * This allows the user to define a function which will take in their template
 * data and procude a HeadConfig object. When the site is generated, the HeadConfig
 * will be used to generate the inner contents of the HTML document's <head> tag.
 * This can include the title, meta tags, script tags, etc.
 */
export const getHeadConfig: GetHeadConfig<TemplateRenderProps> = ({
  relativePrefixToRoot,
  path,
  document,
}): HeadConfig => {
  return {
    title: document.name,
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
    tags: [
      {
        type: "meta",
        attributes: {
          name: "description",
          content: document.description,
        },
      },
    ],
  };
};

/**
 * This is the main template. It can have any name as long as it's the default export.
 * The props passed in here are the direct stream document defined by `config`.
 *
 * There are a bunch of custom components being used from the src/components folder. These are
 * an example of how you could create your own. You can set up your folder structure for custom
 * components any way you'd like as long as it lives in the src folder (though you should not put
 * them in the src/templates folder as this is specific for true template files).
 */
const Professional: Template<TemplateRenderProps> = ({
  relativePrefixToRoot,
  path,
  document,
}) => {
  const cpy = document;
  const {
    _site,
    name,
    address,
    hours,
    mainPhone,
    geocodedCoordinate,
    description,
    c_advisorBio,
    photoGallery,
    c_aboutAdvisorShortDescription,
    c_clientFocuses,
    c_hobbiesAndInterests,
    c_volunteeringDisplay,
    c_expertiseCommentsRTv2,
    c_fAQs,
    c_awardsDashboard,
    c_industryLevelOfExperience,
    c_educationDisplay,
    c_photoGallery,
    c_matchFinderPhoto,
    c_assetRanges,
    c_preferredFirstName,
    c_recognitionTitle,
    c_languagesV2,
    c_jobTitle,
    uid,
  } = document;
  const [pathLink, setPathLink] = useState<string>();
  useEffect(() => {
    if (typeof window === "object") {
      setPathLink(window.location.href);
    }
  }, []);

  return (
    <>
      <Schema document={cpy}></Schema>
      <span className="hidden md:block">
        <Image image={_site.c_deskHeader}></Image>
      </span>
      <span className="block md:hidden">
        <Image image={_site.c_mobHeader}></Image>
      </span>

      <div>
        <div className="bg-white w-full mb-4">
          <div>
            <div className="relative text-center w-full">
              {_site.primaryPhoto && (
                <Image
                  layout="fill"
                  image={_site.primaryPhoto}
                  style={{ maxHeight: "470px" }}
                ></Image>
              )}
              <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2	">
                <div className="text-4xl headColor font-light h-64">
                  <div className="flex gap-6">
                    <div>
                      {photoGallery && (
                        <Image
                          className="inline-block h-32 !w-32 rounded-full"
                          image={photoGallery[0]}
                        />
                      )}
                    </div>
                    <div className="flex flex-col gap-3">
                      <div>
                        {name.includes("-") ? name.split("-")[0] : name}
                      </div>
                      <div className="text-3xl">
                        {name.includes("-")
                          ? name
                              .split("-")[1]
                              .replace("RBC Wealth Management ", "")
                          : ""}
                      </div>
                      <div className="text-2xl">
                        {mainPhone &&
                          mainPhone
                            .replace("+1", "")
                            .replace(/\D+/g, "")
                            .replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3")}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full flex flex-col md:flex-row  mt-4 centered-container gap-4">
              <div className="w-full md:w-2/3 ">
                {c_aboutAdvisorShortDescription && (
                  <>
                    <div className="text-lg font-bold text-[#003168] mb-4">
                      About me
                    </div>
                    <div className="px-2">
                      {c_aboutAdvisorShortDescription
                        ? c_aboutAdvisorShortDescription
                        : ``}
                    </div>
                  </>
                )}
                <div className="grid grid-cols-2 w-full mt-8">
                  <div className="flex flex-col gap-2 text-lg font-light">
                    {c_industryLevelOfExperience && (
                      <div className=" flex flex-col">
                        <div className="text-lg font-bold text-[#003168]">
                          Experience
                        </div>
                        <div>{c_industryLevelOfExperience}</div>
                      </div>
                    )}
                    {c_educationDisplay && (
                      <div className=" flex flex-col">
                        <div className="text-lg font-bold text-[#003168]">
                          Education
                        </div>
                        <div className="flex flex-col">
                          {c_educationDisplay.map((item: any, index: any) => (
                            <div key={index}>
                              {item.degree} - {item.school}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    {(c_recognitionTitle || c_jobTitle) && (
                      <div className=" flex flex-col">
                        <div className="text-lg font-bold text-[#003168]">
                          Titles
                        </div>
                        {c_recognitionTitle && (
                          <div>Recognition - {c_recognitionTitle}</div>
                        )}
                        {c_jobTitle && <div>Functional - {c_jobTitle}</div>}
                      </div>
                    )}
                  </div>
                  <div className="flex flex-col gap-2">
                    {c_languagesV2 && (
                      <div className="flex flex-col">
                        <div className="font-bold text-[#003168]">
                          Languages
                        </div>
                        <div className="flex flex-col">
                          {c_languagesV2.map((item: any, index: any) => (
                            <div key={index}>{item}</div>
                          ))}
                        </div>
                      </div>
                    )}
                    {c_clientFocuses && (
                      <div className="flex flex-col">
                        <div className="text-lg font-bold text-[#003168]">
                          Client Focused
                        </div>
                        <div className="flex flex-col">
                          {c_clientFocuses.map((item: any, index: any) => (
                            <div key={index}>{item}</div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/3">
                <span className=" hidden md:block">
                  <div className="  gap-y-5">
                    <div className="text-xl font-semibold mb-4">Address</div>

                    <div className="  gap-y-3">
                      <div>{address.line1}</div>
                      {address.line2 && <div>{address.line2}</div>}
                      <div>
                        {address.city}, {address.region} {address.postalCode}
                      </div>
                    </div>
                  </div>
                </span>
                <div className="mt-8">
                  {hours && <Hours title={"I'm available on"} hours={hours} />}
                </div>
              </div>
            </div>
            {c_expertiseCommentsRTv2 && (
              <div className="bg-gray-100 p-4 mt-4 ">
                <div className="w-full flex flex-col centered-container gap-4 ">
                  <div className="text-lg font-bold text-[#003168]">
                    More about me
                  </div>
                  <div>
                    <LexicalRichText
                      serializedAST={JSON.stringify(
                        c_expertiseCommentsRTv2.json
                      )}
                    ></LexicalRichText>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        {/* {c_associatedBlogs && <BlogPosts inpData={cpy}></BlogPosts>}
        {c_associatedClientStories && (
          <ClientStories inpData={cpy}></ClientStories>
        )}
        {c_associatedInsights && <Insights inpData={cpy} />}
        {c_associatedFAQs && <FAQs inpData={cpy}></FAQs>}
        {c_associatedSolutions && <Solutions inpData={cpy}></Solutions>}
        <div className="my-6">
          <Web2Lead></Web2Lead>
        </div> */}
      </div>
      <span className="hidden md:block mt-8">
        <Image image={_site.c_deskFooter}></Image>
      </span>
      <span className="block md:hidden">
        <Image image={_site.c_mobFooter}></Image>
      </span>
      {pathLink?.includes("preview") && (
        <a
          href={`https://sandbox.yext.com/s/3194448/entity/edit3?entityIds=${uid}`}
          className="border bg-gray-200 px-4 py-2 fixed bottom-10 right-10"
        >
          Edit
        </a>
      )}
    </>
  );
};

export default Professional;
