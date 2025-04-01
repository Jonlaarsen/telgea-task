import React from "react";

const Sidebar = () => {
  return (
    <aside className="w-52 h-212 left-8 flex flex-col absolute items-center justify-between ">
      <div>
        <nav className="flex flex-col h-full gap-3 ">
          <a href="#" className="hover:underline px-2 py-6">
            Overview
          </a>
          <a href="#" className="hover:underline px-2 py-6">
            Analytics
          </a>
        </nav>
      </div>
      <div className="flex flex-col gap-3">
        <div className="w-56 bg-background  rounded-2xl p-5">
          <p className="text-sm font-medium flex items-center gap-1 ">
            <span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.6668 7.08325V9.99992C14.6668 11.8489 11.672 13.3333 8.00016 13.3333C4.30225 13.3333 1.3335 11.8489 1.3335 9.99992V7.08325C1.3335 5.02596 4.30225 3.33325 8.00016 3.33325C11.672 3.33325 14.6668 5.02596 14.6668 7.08325ZM3.67725 9.01034C4.74495 9.60929 6.25537 9.99992 8.00016 9.99992C9.71891 9.99992 11.2293 9.60929 12.297 9.01034C13.3908 8.41138 13.8335 7.70825 13.8335 7.08325C13.8335 6.48429 13.3908 5.78117 12.297 5.18221C11.2293 4.58325 9.71891 4.16659 8.00016 4.16659C6.25537 4.16659 4.74495 4.58325 3.67725 5.18221C2.5835 5.78117 2.16683 6.48429 2.16683 7.08325C2.16683 7.70825 2.5835 8.41138 3.67725 9.01034ZM7.5835 10.8333C6.98454 10.8072 6.43766 10.7551 5.91683 10.651V12.3437C6.43766 12.4218 6.98454 12.4739 7.5835 12.4999V10.8333ZM3.8335 11.7187C4.19808 11.8749 4.61475 12.0312 5.0835 12.1614V10.4687C4.61475 10.3385 4.19808 10.2083 3.8335 10.026V11.7187ZM3.00016 9.58325C2.66162 9.37492 2.4012 9.14054 2.16683 8.90617V9.99992C2.16683 10.3385 2.37516 10.7812 3.00016 11.2239V9.58325ZM10.0835 12.3437V10.651C9.53662 10.7551 8.98975 10.8072 8.41683 10.8333V12.4999C8.98975 12.4739 9.53662 12.4218 10.0835 12.3437ZM13.0002 11.2239C13.5991 10.7812 13.8335 10.3385 13.8335 9.99992V8.90617C13.5731 9.14054 13.3127 9.37492 13.0002 9.58325V11.2239ZM12.1668 10.026C11.7762 10.2083 11.3595 10.3385 10.9168 10.4687V12.1614C11.3595 12.0312 11.7762 11.8749 12.1668 11.7187V10.026Z"
                  fill="black"
                />
              </svg>
            </span>
            <span className="font-medium text-xs">Monthly total</span>
          </p>
          <p className="text-2xl font-medium">
            €3,903.00{" "}
            <span className="text-xs font-medium text-foreground/50">EUR</span>
          </p>
          <div className="flex justify-between text-xs text-gray-500 mt-2">
            <span className="text-xs font-medium text-foreground/50">
              Next Payment
            </span>
            <span className="text-xs font-medium text-foreground/50">
              Jun 02
            </span>
          </div>
          <div className="h-1 bg-gray-300 rounded-full mt-2">
            <div className="h-1 bg-black rounded-full w-3/4"></div>
          </div>
        </div>

        {/* User Card */}
        <div className="w-56 bg-white shadow-md rounded-2xl p-5 flex items-center space-x-4">
          <div className="relative">
            <div className="w-8 h-8 text-xs font-normal flex items-center bg-[#F2F1ED] justify-center rounded-full ">
              JD
            </div>
            {/* Notification Badge */}
            <span className="absolute -top-1 -right-1 bg-[#C8FF00] text-black text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
              3
            </span>
          </div>
          <div>
            <p className="text-sm ">John Doe</p>
            <p className="text-xs text-foreground/50">john.doe@company.com</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
