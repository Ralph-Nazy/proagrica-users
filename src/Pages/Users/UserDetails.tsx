import React from "react";
import { useLocation } from "react-router-dom";
import { User } from "../../types";

const UserDetails: React.FC<{}> = () => {
  const location = useLocation();
  const { user } = location.state as { user: User };

  return (
    <div className="my-10">
      <div className="container mx-auto px-10">
        <div className="">
          <div className="grid lg:grid-cols-12 gap-4">
            <div className="lg:col-span-4 bg-white rounded-[15px] p-10 ">
              <div className="flex flex-col text-center">
                <img
                  src={user.image}
                  alt={user.firstName}
                  className="rounded-full mb-2 bg-[#f2f2f2] h-24 w-24 mx-auto"
                />
                <h2 className="font-bold text-[16px] leading-[26px] lg:text-[20px] lg:leading-[32px]">
                  {user.firstName} {user.lastName}
                </h2>
                <p className="font-[400] text-[14px] leading-[22px]">
                  {user.company.title}
                </p>
              </div>
              <dl className="max-w-md text-gray-900 divide-y divide-gray-200">
                <div className="flex flex-col pb-3">
                  <dt className="mb-1 text-gray-500 md:text-md">Email</dt>
                  <dd className="text-md font-semibold">{user.email}</dd>
                </div>
                <div className="flex flex-col py-3">
                  <dt className="mb-1 text-gray-500 md:text-md">
                    Home Address
                  </dt>
                  <dd className="text-md font-semibold">
                    {user.address.address} {", "}
                    {user.address.city} {", "}
                    {user.address.postalCode} {", "}
                    {user.address.state}
                  </dd>
                </div>
                <div className="flex flex-col pt-3">
                  <dt className="mb-1 text-gray-500 md:text-md">Phone</dt>
                  <dd className="text-md font-semibold">{user.phone}</dd>
                </div>
                <div className="flex flex-col pt-3">
                  <dt className="mb-1 text-gray-500 md:text-md">Date of Birth</dt>
                  <dd className="text-md font-semibold">{user.birthDate}</dd>
                </div>
              </dl>
            </div>
            <div className="lg:col-span-8 bg-white rounded-[15px] p-10">
              <div className="grid grid-cols-1">
                <div>
                    <h2 className="font-bold 
                    text-[16px] leading-[26px]
                     lg:text-[20px] 
                     pb-[10px]
                     border-b-[1px]
                    lg:leading-[32px] mb-8" >Company Details</h2>
                    <h6 className="mb-2 text-gray-500 md:text-md ">Company Name</h6>
                    <p className="text-md font-semibold mb-4">{user.company.name}</p>
                    <h6 className="mb-2 text-gray-500 md:text-md">Department</h6>
                    <p className="text-md font-semibold mb-4">{user.company.department}</p>
                    <h6 className="mb-2 text-gray-500 md:text-md">Address</h6>
                    <p>{user?.company?.address.address}</p>                    
                    <p>{user?.company?.address.city}</p>
                    <p>{user?.company?.address.postalCode}</p>
                    <p>{user?.company?.address.state}</p>
                </div> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UserDetails;
