import React from "react";

interface GridProps {}

export const Grid: React.FC<GridProps> = ({}) => {
  return (
    <div className="lg:w-[50%] md:w-[90%] sm:w-[80%] mx-auto my-12 relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-white">
        <thead className="text-xs uppercase text-white bg-gray-50 dark:bg-gray-700">
          <tr className="border-b">
            <th scope="col" className="px-6 py-3 relative border">
              Product name
            </th>
            <th scope="col" className="px-6 py-3 relative border">
              Color
            </th>
            <th scope="col" className="px-6 py-3 relative border">
              Category
            </th>
            <th scope="col" className="px-6 py-3 relative border">
              Price
            </th>
            <th scope="col" className="px-6 py-3 relative border">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b dark:bg-gray-900">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white relative border"
            >
              Apple MacBook Pro 17"
            </th>
            <td className="px-6 py-4 relative border">Silver</td>
            <td className="px-6 py-4 relative border">Laptop</td>
            <td className="px-6 py-4 relative border">$2999</td>
            <td className="px-6 py-4 relative border">
              <a
                href="#"
                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                Edit
              </a>
            </td>
          </tr>
          <tr className="bg-white border-b bg-gray-50 dark:bg-gray-800 ">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Microsoft Surface Pro
            </th>
            <td className="px-6 py-4 relative border">White</td>
            <td className="px-6 py-4 relative border">Laptop PC</td>
            <td className="px-6 py-4 relative border">$1999</td>
            <td className="px-6 py-4 relative border">
              <a
                href="#"
                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                Edit
              </a>
            </td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-900">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Magic Mouse 2
            </th>
            <td className="px-6 py-4 relative border">Black</td>
            <td className="px-6 py-4 relative border">Accessories</td>
            <td className="px-6 py-4 relative border">$99</td>
            <td className="px-6 py-4 relative border">
              <a
                href="#"
                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                Edit
              </a>
            </td>
          </tr>
          <tr className="bg-white border-b bg-gray-50 dark:bg-gray-800">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Google Pixel Phone
            </th>
            <td className="px-6 py-4 relative border">Gray</td>
            <td className="px-6 py-4 relative border">Phone</td>
            <td className="px-6 py-4 relative border">$799</td>
            <td className="px-6 py-4 relative border">
              <a
                href="#"
                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                Edit
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
