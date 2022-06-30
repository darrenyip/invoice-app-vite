function InvoiceBottomButtons({ onhandleGoToEdit }) {
  return (
    <div className="bg-white py-5 px-6 absolute w-full flex bottom-0 left-0 justify-between items-center">
      <button
        onClick={onhandleGoToEdit}
        className="rounded-[24px] bg-[#F9FAFE] text-[#7E88C3] min-w-[73px] py-4 text-xs font-bold"
      >
        Edit
      </button>
      <button className="rounded-[24px] bg-[#EC5757] text-[#FFFFFF] min-w-[89px] py-4 text-xs font-bold">
        Delete
      </button>
      <button className="rounded-[24px] bg-[#7C5DFA] text-[#FFFFFF] min-w-[149px] py-4 text-xs font-bold">
        Mark as Paid
      </button>
    </div>
  );
}

export default InvoiceBottomButtons;
