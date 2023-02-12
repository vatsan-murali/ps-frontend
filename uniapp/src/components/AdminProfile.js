import React from "react";

const AdminProfile = () => {
  return (
    <div className="mt-[5rem]">
      <div className="ml-4">
        <p className="font-bold font-serif text-[3rem]">Profile Page</p>
        <div>
          <p className="font-semibold text-[1rem] my-3">Username: admin</p>
          <p className="font-semibold text-[1rem] mb-3">Email: admin</p>
          <p className="font-semibold text-[1rem] mb-3">Email: admin</p>
        </div>
      </div>
      <div class="overflow-auto sm:rounded-lg  md:w-5/6">
        <table class="text-sm text-left text-gray-500 dark:text-gray-400 md:w-[30rem] mx-auto">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                S.no
              </th>
              <th scope="col" class="px-6 py-3">
                <div class="flex items-center">
                  University
                  <a href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-3 h-3 ml-1"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 320 512"
                    >
                      <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" />
                    </svg>
                  </a>
                </div>
              </th>
              <th scope="col" class="px-6 py-3">
                <div class="flex items-center">
                  Title
                  <a href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-3 h-3 ml-1"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 320 512"
                    >
                      <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" />
                    </svg>
                  </a>
                </div>
              </th>
              <th scope="col" class="px-6 py-3">
                <div class="flex items-center">Tags</div>
              </th>
              <th scope="col" class="px-6 py-3">
                <div class="flex items-center">Link</div>
              </th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminProfile;
