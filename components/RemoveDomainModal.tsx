import { X } from "lucide-react";
import React from "react";

interface RemoveDomainModalProps {
  domain: string;
  onClose: () => void;
  onRemove: () => void;
}

const RemoveDomainModal: React.FC<RemoveDomainModalProps> = ({
  domain,
  onClose,
  onRemove,
}) => {
  return (
    <div className="fixed inset-0 backdrop-blur-lg flex items-center justify-center">
      <div className="bg-white p-4 pt-8 rounded-lg min-w-109 ">
        <div className="flex flex-col gap-4 px-4">
          <h3 className="text-xl font-normal">Remove domain</h3>
          <p className="text-sm text-[#151515B2] ">
            Remove {domain} from your whitelisted domains?
          </p>
          <div className="flex flex-wrap gap-2">
            <div
              key={domain}
              className="text-sm flex gap-1 pl-3 items-center bg-[#3F362F0F] text-foreground/40 py-1 px-1.5 rounded-2xl h-6"
            >
              <p>{domain}</p>
              <button className="">
                <X className="text-[#000000] h-4" />
              </button>
            </div>
          </div>
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
            onClick={onRemove}
          >
            Remove domain
          </button>
        </div>
      </div>
    </div>
  );
};

export default RemoveDomainModal;
