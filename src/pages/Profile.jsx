import Card from "../components/Card";

const Profile = () => {
  // Table JSX
  const tableContent = (
    <><h2>Datatable</h2><table className="min-w-full table-auto border-collapse border border-gray-300">
      <thead>
        <tr className="bg-gray-100">
          <th className="border border-gray-300 px-4 py-2 text-left">Name</th>
          <th className="border border-gray-300 px-4 py-2 text-left">Email</th>
          <th className="border border-gray-300 px-4 py-2 text-left">Role</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-gray-300 px-4 py-2">John Doe</td>
          <td className="border border-gray-300 px-4 py-2">john@example.com</td>
          <td className="border border-gray-300 px-4 py-2">Admin</td>
        </tr>
        <tr className="bg-gray-50">
          <td className="border border-gray-300 px-4 py-2">Jane Smith</td>
          <td className="border border-gray-300 px-4 py-2">jane@example.com</td>
          <td className="border border-gray-300 px-4 py-2">
            <button className="px-4 py-2 bg-blue-500 text-white rounded">Click me</button>
          </td>
        </tr>
      </tbody>
    </table></>
  );

  return (
    <div className="p-6">
      <Card title="Profile Information" content={tableContent} />
    </div>
  );
};

export default Profile;
