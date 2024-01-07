import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const OrderList = () => {
  const axiosSecure = useAxiosSecure();

  const { data: order = [], refetch } = useQuery({
    queryKey: ["order"],
    queryFn: async () => {
      const res = await axiosSecure.get("/orderConfirm");
      console.log(res.data);
      return res.data;
    },
  });

  const handleDoneOrder = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, confirm it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.patch(`/orderConfirm/${item._id}`).then((res) => {
          console.log(res.data);
          if (res.data.matchedCount > 0) {
            refetch();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Your work has been saved",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
      }
    });
  };

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
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {order.map((item, index) => (
              <tr key={item._id}>
                <th>{index + 1}</th>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.number}</td>
                <td>{item.quantity}</td>
                <td>{item.address}</td>
                <td>
                  <div>
                    {item.order === "Done" ? (
                      <button className="btn btn-sm btn-success">Done</button>
                    ) : (
                      <button
                        onClick={() => handleDoneOrder(item)}
                        className="btn btn-outline btn-primary btn-sm"
                      >
                        pending
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderList;
