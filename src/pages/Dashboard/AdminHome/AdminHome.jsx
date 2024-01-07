import React from "react";
import useAuth from "../../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaBook, FaCartPlus, FaQuestion, FaUsers } from "react-icons/fa6";
import { MdOutlinePreview } from "react-icons/md";
import { FcBusinessContact } from "react-icons/fc";

const AdminHome = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: stats = "" } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin-stats");
    //   console.log(res.data);
      return res.data;
    },
  });

  return (
    <div className="p-8">
      <h2 className="text-3xl ">
        <span>Hi, Welcome </span>
        {user?.displayName ? user.displayName : "Back"}
      </h2>

      <div className="my-4 ">
        <div className="stats shadow ">
          <div className="stat">
            <div className="stat-title">Orders</div>
            <div className="flex flex-row-reverse justify-between">
              <div className="stat-figure text-secondary">
                <FaBook className="text-2xl ml-4" />
              </div>
              <div className="stat-value">{stats.totalOrder}</div>
            </div>
          </div>

          <div className="stat">
            <div className="stat-title">Total Users</div>
            <div className="flex flex-row-reverse gap-4">
              <div className="stat-figure text-secondary">
                <FaUsers className="text-2xl" />
              </div>
              <div className="stat-value">{stats.totalUsers}</div>
            </div>
          </div>

          <div className="stat">
            <div className="stat-title">Total Products</div>
            <div className="flex flex-row-reverse gap-4">
              <div className="stat-figure text-secondary">
                <FaCartPlus className="text-2xl" />
              </div>
              <div className="stat-value">{stats.totalProducts}</div>
            </div>
          </div>

          <div className="stat">
            <div className="stat-title">Total Question</div>
            <div className="flex flex-row-reverse gap-4">
              <div className="stat-figure text-secondary">
                <FaQuestion className="text-2xl" />
              </div>
              <div className="stat-value">{stats.totalQuestion}</div>
            </div>
          </div>

          <div className="stat">
            <div className="stat-title">Total Review</div>
            <div className="flex flex-row-reverse gap-4">
              <div className="stat-figure text-secondary">
                <MdOutlinePreview className="text-2xl" />
              </div>
              <div className="stat-value">{stats.totalReview}</div>
            </div>
          </div>

          <div className="stat">
            <div className="stat-title">Total Contact</div>
            <div className="flex flex-row-reverse gap-4">
              <div className="stat-figure text-secondary">
                <FcBusinessContact className="text-2xl" />
              </div>
              <div className="stat-value">{stats.totalContact}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
