import { Plus, X } from "lucide-react";
import React, { useState } from "react";

interface AddDomainModalProps {
  onClose: () => void;
  onAdd: (domains: string[]) => void;
}

const AddDomainModal: React.FC<AddDomainModalProps> = ({ onClose, onAdd }) => {
  const [newDomain, setNewDomain] = useState("");
  const [domains, setDomains] = useState<string[]>([]);

  const handleAddDomain = () => {
    if (newDomain.trim() && !domains.includes(newDomain)) {
      setDomains([...domains, newDomain.trim()]);
      setNewDomain("");
    }
  };

  const handleRemoveDomain = (domainToRemove: string) => {
    setDomains(domains.filter((domain) => domain !== domainToRemove));
  };

  const handleSubmit = () => {
    if (domains.length > 0) {
      onAdd(domains);
      setDomains([]);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 backdrop-blur-lg flex items-center justify-center">
      <div className="bg-white  w-109 h-auto rounded-2xl pt-8 p-4">
        <div className="flex flex-col px-4 gap-4 ">
          <h3 className="text-xl font-medium">Add domain</h3>
          <p className="text-sm text-[#151515B2] w-93 ">
            Specify trusted domains to validate employee requests. For example,
            requests made when employees transfer numbers to Telgea will be
            automatically associated with your account.
          </p>
        </div>
        <div className="w-full h-8"></div>

        {/* Input for adding domains */}
        <div className="flex flex-col gap-3 px-4">
          <div className="flex items-center justify-between ">
            <div className="flex gap-4">
              <p className="text-xs text-foreground/40">Domain</p>
              <input
                name="domain"
                id="domain"
                type="text"
                placeholder="www.telgea.com"
                className=" text-2xl font-normal text-foreground border-b-1"
                value={newDomain}
                onChange={(e) => setNewDomain(e.target.value)}
              />
            </div>
            <div>
              <button
                className="bg-foreground text-white flex items-center justify-center w-16 h-16 rounded-full"
                onClick={handleAddDomain}
              >
                <Plus />
              </button>
            </div>
          </div>
          {domains.length > 0 && (
            <div className="flex flex-wrap">
              {domains.map((domain) => (
                <div
                  key={domain}
                  className="text-sm flex gap-1 pl-3 items-center bg-[#3F362F0F] text-foreground/40 py-1 px-1.5 rounded-2xl h-6"
                >
                  <p>{domain}</p>
                  <button
                    className=""
                    onClick={() => handleRemoveDomain(domain)}
                  >
                    <X className="text-[#000000] h-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="flex justify-evenly w-full  items-center gap-2 pt-12">
          <button
            className=" px-4 py-3 w-full border-[#3F362F0F] border rounded-lg"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className=" px-4 py-3 rounded-lg w-full bg-foreground text-white"
            onClick={handleSubmit}
          >
            Add domain
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddDomainModal;
