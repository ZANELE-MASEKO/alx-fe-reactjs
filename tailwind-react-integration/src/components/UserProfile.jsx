function UserProfile() {
  return (
    <div
        class='bg-gray-100 p-8 max-w-sm mx-auto, my-20 rounded-lg shadow-lg '>

      <img src="https://via.placeholder.com/150" alt="User" class="bg-gray-100 
                 p-4 sm:p-4 md:p-8 
                 max-w-xs sm:max-w-xs md:max-w-sm
                 mx-auto my-20 
                 rounded-lg shadow-lg" />

      <h1
      class='text-xl text-blue-800 my-4 wm:text-lg md:text-xl text-center'>John Doe</h1>

      <p
      class='text-gray-600 text-base sm:text-sm md:text-base text-center'>Developer at Example Co. Loves to write code and explore new technologies.</p>
    </div>
  );
}

export default UserProfile;