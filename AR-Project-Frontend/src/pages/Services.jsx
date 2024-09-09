import { useAuthstore } from "../store/authStore";
import { formatDate } from "../utils/date";

const Services = () => {
  const { user, logout } = useAuthstore();

	const handleLogout = () => {
		logout();
	};
  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center h-screen bg-black bg-opacity-30 backdrop-filter backdrop-blur-sm">
        <div className="flex flex-col items-center gap-5 px-20 py-10 mx-4 bg-white rounded-xl">

          <h5 className="text-xl font-bold mb-6 text-center text-gray-900 dark:text-white">
            Welcome Back
          </h5>

          <div className='space-y-6'>
            <div
              className='p-4 bg-gray-200 bg-opacity-50 rounded-lg border border-gray-700'
            >
              <h3 className='text-xl font-semibold text-black mb-3'>Profile Information</h3>
              <p className='text-black'>Name: {user.name}</p>
              <p className='text-black'>Email: {user.email}</p>
            </div>
            <div
              className='p-4 bg-gray-200 bg-opacity-50 rounded-lg border border-gray-700'
            >
              <h3 className='text-xl font-semibold text-black mb-3'>Account Activity</h3>
              <p className='text-black'>
                <span className='font-bold'>Joined: </span>
                {new Date(user.createdAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
              <p className='text-black'>
                <span className='font-bold'>Last Login: </span>
                {formatDate(user.lastLogin)}
              </p>
            </div>
          </div>

          <div

            className='mt-4'
          >
             <button
              onClick={handleLogout}
              className="w-full text-white bg-black hover:bg-black focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition-transform duration-300 transform hover:scale-105 focus:scale-105"
            >
              Logout
            </button>
          </div>

        </div>
      </div>
    </>
  )
}

export default Services