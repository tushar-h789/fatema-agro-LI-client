import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const OrderList = () => {
  const axiosSecure = useAxiosSecure();

  const { data: order = [] } = useQuery({
    queryKey: ["order"],
    queryFn: async () => {
      const res = await axiosSecure.get("/orderConfirm");
      return res.data;
    },
  });
  return (
    <div className="p-8">
      <div>
        <h2 className="text-3xl font-bold">Total Order: {order.length}</h2>
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
              <th>Quantity</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {
                order.map((item, index )=> <tr key={item._id}>
                    <th>{index + 1}</th>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.number}</td>
                    <td>{item.quantity}</td>
                    <td>{item.address}</td>
                  </tr>)
            }
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderList;
