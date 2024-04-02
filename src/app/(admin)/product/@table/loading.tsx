export default function Loading() {
  return (
    <table className="w-full text-sm text-left rtl:text-right text-gray-500">
      <thead className="text-xs text-white uppercase bg-gray-700 ">
        <tr>
          <th scope="col" className="p-3">
            No.
          </th>
          <th scope="col" className="p-3">
            Product name
          </th>
          <th scope="col" className="p-3">
            Brand
          </th>
          <th scope="col" className="p-3">
            Type
          </th>
          <th scope="col" className="p-3">
            Category
          </th>
          <th scope="col" className="p-3">
            URL
          </th>
          <th scope="col" className="p-3">
            Price
          </th>
          <th scope="col" className="p-3">
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        <tr className="bg-white border-b hover:bg-gray-100">
            <td className="p-3">Loading...</td>
            <th className="p-3"></th>
            <th className="p-3"></th>
            <th className="p-3"></th>
            <th className="p-3"></th>
            <th className="p-3"></th>
            <th className="p-3"></th>
            <th className="p-3"></th>
        </tr>
      </tbody>
    </table>
  );
}
