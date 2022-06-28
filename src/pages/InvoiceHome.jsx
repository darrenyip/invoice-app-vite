import InvoiceCard from "../components/InvoiceCard";
import { useAppDispatch, useAppSelector } from "../hooks";
import { removeInvoice } from "../features/invoices/invoiceSlice";
function InvoiceHome(props) {
  const invoices = useAppSelector((state) => state.invoice);
  const dispatch = useAppDispatch();
  console.log(invoices);
  const handleDeleteInvoice = (id) => {
    console.log(id + "clicked");
    dispatch(removeInvoice(id));
  };
  return (
    <div className="bg-[#F8F8FB] h-[calc(100vh-72px)] flex flex-col w-full">
      <div className=" mx-6 my-8 ">
        {invoices?.map((invoice) => (
          <div key={invoice.id}>
            <InvoiceCard invoice={invoice} />
            {/* <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => handleDeleteInvoice(invoice.id)}
              >
                delete
              </button> */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default InvoiceHome;
