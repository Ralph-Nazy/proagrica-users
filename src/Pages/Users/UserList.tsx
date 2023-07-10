import React, { useEffect, useState } from "react";
import { RiArrowRightSLine, RiArrowLeftSLine } from "react-icons/ri";
import { Users, Loader, Alert, UserForm } from "../../components";
import { getUsers } from "../../services";
import { UserLisResponseData } from "../../types";
import { useNavigate } from "react-router-dom";

const UserList: React.FC<{}> = () => {
  const [users, setUsers] = useState<UserLisResponseData | null>(null);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const fetchUserData = async (page: number) => {
    setLoading(true);
    try {
      setError(false);
      setErrorMessage("");

      const response = await getUsers(page);

      setUsers(response);
    } catch (error: any) {
      setError(true);
      setErrorMessage(`${error}`);
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  //since we loading the users on page load so we calling fetch data function
  useEffect(() => {
    fetchUserData(currentPage);
  }, [currentPage]);

  useEffect(() => {
    //because the API doesn't return total count on its response headers and already know how many users the API returns
    const totalCount = 100;
    //Dividing the total count with the total users we getting per page
    const totalPages = Math.ceil(totalCount / 20);
    setTotalPages(totalPages);
  }, []);

  //Building pagintion
  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const previousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const goToPage = (page: number) => {
    setCurrentPage(page);
  };

  //function to render total pages
  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button
          className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
          key={i}
          onClick={() => goToPage(i)}
          disabled={i === currentPage}
        >
          {i}
        </button>
      );
    }
    return pageNumbers;
  };

  // handling selected user by passing user id as parameter
  const handleSelectedUser = (id: number) => {
    fetch(`https://dummyjson.com/users/${id}`)
      .then((response) => response.json())
      .then((data) => {
        //we're constructing a slug to create a user friendly url since we the response data we store it in a state the response data can also be store React context API
        const firstName = data.firstName;
        const lastName = data.lastName;
        const slug = (firstName + "-" + lastName).toLowerCase();
        console.log(slug);
        navigate(`/user-details/${slug}`, { state: { user: data } });
      })
      .catch((error: any) => {
        console.log("Error fetching user details:", error);
      });
  };

  return (
    <div className="my-10">
      {/* Add uder Modal */}
      <UserForm isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* Loader */}
      {loading && <Loader />}

      <div className="container mx-auto px-10">
        <div className="grid grid-cols-1 bg-white rounded-[15px] px-10 py-10 gap-4">
        <button className="bg-[#008184] btn-active ml-auto" onClick={() => setIsModalOpen(true)}>Add User</button>
          {!error ? (
            <>
              <span className="bg- bg-[#008184] text-white p-4">
                <div className="flex items-center space-x-4">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium">User</p>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium">Position</p>
                  </div>
                  <div className="flex-1 min-w-0">Company</div>
                  <div className="flex-1 min-w-0">Phone</div>
                </div>
              </span>
              <ul className="max-w-full divide-y divide-gray-200">
                {users?.users.map((user) => (
                  <Users
                    key={user.id}
                    user={user}
                    onClick={() => handleSelectedUser(user.id)}
                  />
                ))}
              </ul>
            </>
          ) : (
            <Alert message={errorMessage} type="error" />
          )}
        </div>
      </div>
      <div className="container mx-auto px-10">
        {!error ? (
          <>
            <nav className="my-8">
              <ul className="flex items-center justify-center -space-x-px h-10 text-base">
                <li>
                  <button
                    className="flex items-center justify-center px-4 h-10 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700"
                    onClick={previousPage}
                    disabled={currentPage === 1}
                  >
                    <RiArrowLeftSLine className="w-5 h-5" />
                  </button>
                </li>
                <li>
                  <span className="flex items-center justify-center h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">
                    {renderPageNumbers()}
                  </span>
                </li>
                <li>
                  <button
                    className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 "
                    onClick={nextPage}
                    disabled={currentPage === totalPages}
                  >
                    <RiArrowRightSLine className="w-5 h-5" />
                  </button>
                </li>
              </ul>
            </nav>
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};
export default UserList;
