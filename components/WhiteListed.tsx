"use client";
import { Bell, Plus, X } from "lucide-react";
import React, { useState } from "react";
import AddDomainModal from "./AddDomainModal";
import RemoveDomainModal from "./RemoveDomainModal";

const WhiteListed = () => {
  const [domains, setDomains] = useState<string[]>([]);
  const [modalType, setModalType] = useState<"add" | "remove" | null>(null);
  const [selectedDomain, setSelectedDomain] = useState<string | null>(null);

  const addDomains = (newDomains: string[]) => {
    setDomains([...domains, ...newDomains]);
  };

  const removeDomain = () => {
    if (selectedDomain) {
      setDomains(domains.filter((domain: any) => domain !== selectedDomain));
      setSelectedDomain(null);
      setModalType(null);
    }
  };
  return (
    <div className="min-h-screen w-full text-foreground p-6">
      <div className="max-w-199 mx-auto p-6 rounded-xl ">
        <div className="mb-4 w-6">
          <Plus />
        </div>
        <div className="flex flex-col gap-6 w-full h-auto bg-white  rounded-2xl p-6 ">
          <div className="flex flex-col gap-6">
            <div className="w-full h-[32px]">
              <div className="flex justify-between items-center mb-4">
                <h2 className=" font-[400]">Company Details</h2>
                <button className="bg-black text-white py-2 px-3.5 rounded-xl w-20">
                  Edit
                </button>
              </div>
            </div>
            <div className="grid grid-cols-2 items-center justify-center gap-4">
              <div className="flex items-center gap-4">
                <div className="flex justify-center items-center">
                  <div className="  bg-foreground rounded-xl h-16 w-16 flex justify-center items-center">
                    <svg
                      width="29"
                      height="36"
                      viewBox="0 0 29 36"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.36 35.512C6.168 35.512 0.792 31.416 0.536 24.504H6.936C7.192 27.576 9.752 30.136 14.872 30.136C18.968 30.136 21.784 28.088 21.784 25.272C21.784 22.456 19.1216 21.7904 14.872 20.92L12.312 20.408C7.192 19.384 1.048 18.104 1.048 11.192C1.048 4.536 6.168 0.696001 14.36 0.696001C22.04 0.696001 27.416 4.536 27.672 11.192H21.272C21.016 8.12 18.456 6.072 13.848 6.072C10.264 6.072 7.448 7.608 7.448 10.424C7.448 13.3424 10.4688 14.008 14.36 14.776L16.92 15.288C22.04 16.312 28.184 17.592 28.184 24.504C28.184 31.416 23.064 35.512 14.36 35.512Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                </div>
                <div className="text-left">
                  <p className="text-[12px] text-foreground/40">Company Name</p>
                  <p className="font-[400] text-2xl">Signifly</p>
                </div>
              </div>
              <div className="h-16 px-0.5 py-2 ">
                <p className="text-[12px] text-foreground/40">Website</p>
                <p className="font-[400] text-2xl">www.signifly.com</p>
              </div>
              <div className="h-16 px-0.5 py-2 ">
                <p className="text-[12px] text-foreground/40">Country</p>
                <p className="font-[400] text-2xl">Denmark</p>
              </div>
              <div className="h-16 px-0.5 py-2 ">
                <p className="text-[12px] text-foreground/40">City</p>
                <p className="font-[400] text-2xl">Copenhagen V</p>
              </div>
              <div className="h-16 px-0.5 py-2 ">
                <p className="text-[12px] text-foreground/40">Street</p>
                <p className="font-[400] text-2xl">Vesterbrogade 48</p>
              </div>
              <div className="h-16 px-0.5 py-2 ">
                <p className="text-[12px] text-foreground/40">Postal</p>
                <p className="font-[400] text-2xl">1620</p>
              </div>
              <div className="h-16 px-0.5 py-2 ">
                <p className="text-[12px] text-foreground/40">State</p>
                <p className="font-[400] text-2xl">Copenhagen</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 p-4 w-full rounded-lg bg-background flex justify-between items-center">
          <div>
            <h2 className="text-base">Company verification submitted</h2>
            <p className="text-sm text-foreground/50 w-131.75">
              Your company verification has been successfully submitted! We'll
              notify you as soon as it's approved, so you can begin creating
              mobile plans right away.
            </p>
          </div>

          <span className="px-3.5 py-2 bg-[#F1FBD0] w-33.25 text-center text-foreground rounded-lg text-base">
            Submitted
          </span>
        </div>

        <div className=" grid grid-cols-2  mt-6 p-4 bg-white w-full  rounded-lg">
          <div>
            <h3 className="text-base font-normal">Whitelisted Domains</h3>
            <p className="text-sm text-foreground/50">
              Specify trusted domains to validate employee requests. Requests
              from these domains will be automatically linked to your account
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <button onClick={() => setModalType("add")}>
                <Plus className="text-white bg-foreground rounded-full font-sm" />
              </button>
              <h2 className="text-base text-normal">
                Domains{" "}
                <span className="text-foreground/50">{domains.length}</span>
              </h2>
            </div>
            {domains.length > 0 ? (
              <div className="flex flex-wrap gap-2">
                {domains.map((domain) => (
                  <div
                    key={domain}
                    className="text-sm flex gap-1 pl-3 items-center bg-[#3F362F0F] text-foreground/40 py-1 px-1.5 rounded-2xl h-6"
                  >
                    <p>{domain}</p>
                    <button
                      className=""
                      onClick={() => {
                        setSelectedDomain(domain);
                        setModalType("remove");
                      }}
                    >
                      <X className="text-[#000000] h-4" />
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 text-center">No domains added yet</p>
            )}
          </div>
        </div>
        <div className="  mt-6 p-4 bg-white flex justify-between rounded-2xl">
          <h3 className="text-base font-normal">Administrators</h3>
          <button className="bg-black text-white py-2 px-3.5 rounded-xl w-20">
            Invite
          </button>
        </div>
      </div>
      <div className="flex items-center justify-center rounded-full fixed p-3 bottom-4 right-4 h-10 w-10 bg-[#3F362F0F]">
        <svg
          width="21"
          height="19"
          viewBox="0 0 21 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.9998 2C6.15604 2 2.24979 5.08594 2.24979 8.875C2.24979 10.3594 2.83573 11.7656 3.96854 12.9766C4.28104 13.3672 4.39823 13.8359 4.20291 14.2656C3.77323 15.3984 3.0701 16.4141 2.60135 17C4.35916 16.8047 5.76541 16.0625 6.62479 15.4375C6.93729 15.2031 7.36698 15.1641 7.71854 15.2812C8.77323 15.5938 9.86698 15.75 10.9998 15.75C15.8045 15.75 19.7107 12.6641 19.7107 8.875C19.7107 5.08594 15.8045 2 10.9998 2ZM10.9998 0.75C16.5076 0.75 20.9607 4.42188 20.9607 8.875C20.9607 13.3672 16.5076 17 10.9998 17C9.71073 17 8.49979 16.8047 7.36698 16.4531C6.1951 17.2734 4.3201 18.25 1.93729 18.25C1.54666 18.25 1.1951 18.0547 1.03885 17.7031C0.921663 17.3516 0.960726 16.9609 1.23416 16.6875C1.27323 16.6875 2.48416 15.3594 3.03104 13.8359C1.74198 12.4688 0.999788 10.75 0.999788 8.875C0.999788 4.42188 5.45291 0.75 10.9998 0.75Z"
            fill="black"
          />
        </svg>
      </div>
      {/* Modals */}
      {modalType === "add" && (
        <AddDomainModal onClose={() => setModalType(null)} onAdd={addDomains} />
      )}
      {modalType === "remove" && selectedDomain && (
        <RemoveDomainModal
          domain={selectedDomain}
          onClose={() => setModalType(null)}
          onRemove={removeDomain}
        />
      )}
    </div>
  );
};

export default WhiteListed;
