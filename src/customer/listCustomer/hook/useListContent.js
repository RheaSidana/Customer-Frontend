import { useEffect, useState } from "react";
import useListCustomerApiService from "../service/ListCustomerApiService";

const useListContent = (header) => {
  const [rowContent, setRowContent] = useState([]);
  const { customerList } = useListCustomerApiService();
  const [loading, setLoading] = useState(true);

  const getCustomerList = async () => {
    try {
      var r = await customerList(header);
      setLoading(false);
      var list = [...r]
        .map((row, k) => ({
          id: parseInt(row.id),
          first_name: row.first_name,
          last_name: row.last_name,
          street: row.customerAddress.street,
          address: row.customerAddress.address,
          city: row.customerAddress.city,
          state: row.customerAddress.state,
          email: row.customerContact.email,
          phone: row.customerContact.phone,
        }))
        .sort((a, b) => a.id - b.id);
      setRowContent(list);
    } catch (err) {
      if (
        (err.response && err.response.status === 400) ||
        err.response.status === 500
      ) {
        console.log("err: ", err.response.data);
      } else {
        console.log("err: ", err.response.data);
      }
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getCustomerList();
  },[]);
  return {
    rowContent: rowContent,
    loading: loading,
    fetch: getCustomerList,
  };
};

export default useListContent;
