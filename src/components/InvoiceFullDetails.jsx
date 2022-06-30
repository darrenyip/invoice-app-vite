import { converCurrency } from "../utils/helpers";

function InvoiceFullDetails({ invoice }) {
  return (
    <div className="flex flex-col bg-[#FFFFFF] p-6 mb-[150px]">
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
      <div className="mb-6 flex flex-col font-normal text-xs text-[#7E88C3]">
        <div>{invoice.address1}</div>
        <div>{invoice.address2}</div>
        <div>{invoice.zipcode}</div>
        <div>{invoice.country}</div>
      </div>
      {/* invoice date & payment due & bill to */}
      <div className="flex w-full mb-8">
        {/* invoice date and payment due */}
        <div className="flex flex-col justify-start mr-8">
          <div className="flex flex-col justify-between mb-8">
            <div className="text-[#7E88C3] font-normal text-xs mb-3">
              Invoice Date
            </div>
            <div className="font-bold test-[#0C0E16]">
              {invoice.invoiceDate}
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <div className="text-[#7E88C3] font-normal text-xs mb-3">
              Payment Due
            </div>
            <div className="font-bold test-[#0C0E16]">{invoice.paymentDue}</div>
          </div>
        </div>
        {/* bill to */}
        <div className="flex flex-col">
          <div className="text-[#7E88C3] font-normal text-xs mb-3">Bill To</div>
          <div className="font-bold test-[#0C0E16] mb-3">{invoice.name}</div>
          {/* address */}
          <div className="mb-2 flex flex-col font-normal text-xs text-[#7E88C3]">
            <div>{invoice.address1}</div>
            <div>{invoice.address2}</div>
            <div>{invoice.zipcode}</div>
            <div>{invoice.country}</div>
          </div>
        </div>
      </div>
      {/* send to */}
      <div className="mb-[40px]">
        <div className="text-[#7E88C3] font-normal text-xs mb-3">Bill To</div>
        <div className="font-bold test-[#0C0E16] mb-3">{invoice.sentTo}</div>
      </div>
      {/* order details */}
      <div className="py-6">
        <div className="flex flex-col gap-3 p-6 rounded-t-[8px] bg-[#F9FAFE]">
          {invoice.orderDetail.map((item, index) => (
            <div
              key={item.name + index}
              className="w-full flex justify-between items-center"
            >
              <div className="flex flex-col">
                <div className="text-xs font-bold text-[#0C0E16]">
                  {item.name}
                </div>
                <div className="text-xs font-bold text-[#7E88C3]">
                  {item.amount} x $ {item.price}
                </div>
              </div>
              <div className="text-xs font-bold text-[#0C0E16]">
                {converCurrency(item.amount * item.price)}
              </div>
            </div>
          ))}
        </div>
        {/* Grand total */}
        <div className="flex p-6 rounded-b-[8px] bg-[#373B53]">
          <div className="w-full flex justify-between items-center">
            <div className="  text-white text-[11px]">Grand Total</div>
            <div className="text-white font-bold text-[20px]">
              {converCurrency(invoice.total)}
            </div>
          </div>
        </div>
      </div>
      {/* {JSON.stringify(invoice)} */}
    </div>
  );
}

export default InvoiceFullDetails;
