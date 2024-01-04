import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const UsersContactList = () => {
  const axiosSecure = useAxiosSecure();

  const { data: userContact = [] } = useQuery({
    queryKey: ["userContact"],
    queryFn: async () => {
      const res = await axiosSecure.get("/contact");
    //   console.log(res.data);
      return res.data;
    },
  });
  return (
    <div className="p-8">
      <div>
        <h2 className="text-3xl font-bold">
          {" "}
          Total Contact List: {userContact.length}
        </h2>
      </div>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Number</th>
              <th>Comments</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {userContact.map((contact, index) => (
              <tr key={contact._id}>
                <th>{index + 1}</th>
                <td>{contact.name}</td>
                <td>{contact.email}</td>
                <td>{contact.number}</td>
                <td>{contact.comments}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsersContactList;
