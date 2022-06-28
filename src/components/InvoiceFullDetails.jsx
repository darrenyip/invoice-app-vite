import { converCurrency } from "../utils/helpers";

function InvoiceFullDetails({ invoice }) {
  return (
    <div className="flex flex-col bg-[#FFFFFF] p-6">
      {/* invoice number */}
      <div className="text-[#0C0E16] font-bold text-xs">
        <span className="text-[#7E88C3]">#</span>
        {invoice?.id}
      </div>
      {/* invoie category */}
      <div className="mb-6 text-[#7E88C3] text-xs font-normal">
        {invoice?.orderDescription}
      </div>
      {/* address */}
      <div className="flex flex-col font-normal text-xs text-[#7E88C3]">
        <div>{invoice.address1}</div>
        <div>{invoice.address2}</div>
        <div>{invoice.zipcode}</div>
        <div>{invoice.country}</div>
      </div>

      {/* invoice date & payment due & bill to */}
      {JSON.stringify(invoice)}
    </div>
  );
}

export default InvoiceFullDetails;
