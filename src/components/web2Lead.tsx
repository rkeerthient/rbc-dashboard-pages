import * as React from "react";
import { useState } from "react";

const Web2Lead: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    city: "",
    provinceState: "",
    methodOfConsent: "",
    consentToContact: false,
    bio: "",
  });

  const handleChange = (event: any) => {
    const { name, value, type, checked } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert("Thank you for reaching out! An Advisor will be in touch shortly.");
  };

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:pt-32  lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <a href="https://www.rbcwealthmanagement.com">
              <img
                className="mx-auto h-12 w-auto"
                src="https://ca.rbcwealthmanagement.com/documents/1998763/1998822/Logo_WMDS_R_cmykPE.png/d889e364-53cf-4fd1-9817-d7cc349db0b3?t=1647904950260"
                alt="rbcwealthmanagement.com"
              />
            </a>
            <h2 className="text-3xl  leading-10 tracking-tight headColor">
              Contact us
            </h2>
          </div>
          <div
            className="mt-10 lg:col-span-7 lg:mt-0"
            style={{ height: "300px", overflow: "scroll" }}
          >
            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
              <div className="bg-white py-8 px-4 border sm:rounded-lg sm:px-10">
                <form
                  action="https://test.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8"
                  method="POST"
                  onSubmit={handleSubmit}
                >
                  <input
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full border h-10 sm:text-sm border-gray-300 rounded-md"
                    type="hidden"
                    name="oid"
                    value="00D3K0000008qvv"
                  />
                  <input
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full border h-10 sm:text-sm border-gray-300 rounded-md"
                    type="hidden"
                    name="retURL"
                    value="http://www.rbcwealthmanagement.com"
                  />
                  <input
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full border h-10 sm:text-sm border-gray-300 rounded-md"
                    id="lead_source"
                    name="lead_source"
                    type="hidden"
                    value="Direct Marketing"
                  />
                  <div className="space-y-5">
                    <div>
                      <label
                        className="block text-sm font-medium text-gray-700"
                        htmlFor="first_name"
                      >
                        First Name
                      </label>
                      <input
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full border h-10 sm:text-sm border-gray-300 rounded-md"
                        id="first_name"
                        maxLength={40}
                        name="firstName"
                        size={20}
                        type="text"
                        value={formData.firstName}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label
                        className="block text-sm font-medium text-gray-700"
                        htmlFor="last_name"
                      >
                        Last Name
                      </label>
                      <input
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full border h-10 sm:text-sm border-gray-300 rounded-md"
                        id="last_name"
                        maxLength={80}
                        name="lastName"
                        size={20}
                        type="text"
                        value={formData.lastName}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label
                        className="block text-sm font-medium text-gray-700"
                        htmlFor="email"
                      >
                        Email
                      </label>
                      <input
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full border h-10 sm:text-sm border-gray-300 rounded-md"
                        id="email"
                        maxLength={80}
                        name="email"
                        size={20}
                        type="text"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label
                        className="block text-sm font-medium text-gray-700"
                        htmlFor="company"
                      >
                        Company
                      </label>
                      <input
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full border h-10 sm:text-sm border-gray-300 rounded-md"
                        id="company"
                        maxLength={40}
                        name="company"
                        size={20}
                        type="text"
                        value={formData.company}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label
                        className="block text-sm font-medium text-gray-700"
                        htmlFor="city"
                      >
                        City
                      </label>
                      <input
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full border h-10 sm:text-sm border-gray-300 rounded-md"
                        id="city"
                        maxLength={40}
                        name="city"
                        size={20}
                        type="text"
                        value={formData.city}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Province/State:
                      </label>
                      <select
                        id="00N3C000006Ob5o"
                        name="provinceState"
                        title="Province/State"
                        value={formData.provinceState}
                        className="h-8  w-full border"
                        onChange={handleChange}
                      >
                        <option value="">--None--</option>
                        <option value="AB">AB</option>
                        <option value="BC">BC</option>
                        <option value="MB">MB</option>
                        <option value="NB">NB</option>
                        <option value="NL">NL</option>
                        <option value="NT">NT</option>
                        <option value="NS">NS</option>
                        <option value="NU">NU</option>
                        <option value="ON">ON</option>
                        <option value="PE">PE</option>
                        <option value="QC">QC</option>
                        <option value="SK">SK</option>
                        <option value="YT">YT</option>
                        <option value="AL">AL</option>
                        <option value="AK">AK</option>
                        <option value="AZ">AZ</option>
                        <option value="AR">AR</option>
                        <option value="CA">CA</option>
                        <option value="CO">CO</option>
                        <option value="CT">CT</option>
                        <option value="DE">DE</option>
                        <option value="DC">DC</option>
                        <option value="FL">FL</option>
                        <option value="GA">GA</option>
                        <option value="HI">HI</option>
                        <option value="ID">ID</option>
                        <option value="IL">IL</option>
                        <option value="IN">IN</option>
                        <option value="IA">IA</option>
                        <option value="KS">KS</option>
                        <option value="KY">KY</option>
                        <option value="LA">LA</option>
                        <option value="ME">ME</option>
                        <option value="MD">MD</option>
                        <option value="MA">MA</option>
                        <option value="MI">MI</option>
                        <option value="MN">MN</option>
                        <option value="MS">MS</option>
                        <option value="MO">MO</option>
                        <option value="MT">MT</option>
                        <option value="NE">NE</option>
                        <option value="NV">NV</option>
                        <option value="NH">NH</option>
                        <option value="NJ">NJ</option>
                        <option value="NM">NM</option>
                        <option value="NY">NY</option>
                        <option value="NC">NC</option>
                        <option value="ND">ND</option>
                        <option value="OH">OH</option>
                        <option value="OK">OK</option>
                        <option value="OR">OR</option>
                        <option value="PA">PA</option>
                        <option value="RI">RI</option>
                        <option value="SC">SC</option>
                        <option value="SD">SD</option>
                        <option value="TN">TN</option>
                        <option value="TX">TX</option>
                        <option value="UT">UT</option>
                        <option value="VT">VT</option>
                        <option value="VA">VA</option>
                        <option value="WA">WA</option>
                        <option value="WV">WV</option>
                        <option value="WI">WI</option>
                        <option value="WY">WY</option>
                        <option value="GU">GU</option>
                        <option value="PR">PR</option>
                        <option value="VI">VI</option>
                        <option value="OTHER">OTHER</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Method of Consent:
                      </label>
                      <select
                        id="00N3C000006H9YE"
                        name="methodOfConsent"
                        title="Method of Consent"
                        value={formData.methodOfConsent}
                        onChange={handleChange}
                        className="h-8  w-full border"
                      >
                        <option value="">--None--</option>
                        <option value="Electronic">Electronic</option>
                        <option value="Verbal">Verbal</option>
                        <option value="Written">Written</option>
                      </select>
                    </div>
                    <div className="items-center">
                      <label className="text-sm font-medium text-gray-700 flex items-center gap-x-2">
                        <div> Consent to Contact:</div>
                        <div>
                          <input
                            className="  focus:ring-indigo-500 focus:border-indigo-500 block  border h-10 sm:text-sm border-gray-300 rounded-md"
                            id="00N3C000005wR2x"
                            name="consentToContact"
                            type="checkbox"
                            checked={formData.consentToContact}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </label>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Bio:
                      </label>
                      <textarea
                        id="00N3C000005wR3MUAU"
                        name="bio"
                        rows={5}
                        wrap="soft"
                        value={formData.bio}
                        onChange={handleChange}
                        className="w-full border"
                      />
                    </div>
                  </div>
                  <input
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full border h-10 sm:text-sm border-gray-300 rounded-md"
                    type="submit"
                    name="submit"
                    value="Submit"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Web2Lead;
