function StatusCard({ type }) {
  return (
    <div className="w-full bg-[#FFFFFF] rounded-[8px] p-[24px] flex justify-between items-center mb-4">
      <div className="font-normal text-xs text-[#858BB2]">Status</div>
      {type == "Paid" && (
        <div className="bg-[#F3FDFA] flex justify-center rounded-[8px] items-center w-[104px] h-[40px]">
          <div className="dot rounded-full bg-[#33D69F] w-[8px] h-[8px] mr-2"></div>
          <div className="font-bold text-xs text-[#33D69F]">{type}</div>
        </div>
      )}
      {type == "Pending" && (
        <div className="bg-[#FFF9F0] flex justify-center rounded-[8px] items-center w-[104px] h-[40px]">
          <div className="dot rounded-full bg-[#FF8F00] w-[8px] h-[8px] mr-2"></div>
          <div className="font-bold text-xs text-[#FF8F00]">{type}</div>
        </div>
      )}
      {type == "Draft" && (
        <div className="bg-[#FEFEFE] flex justify-center rounded-[8px] items-center w-[104px] h-[40px]">
          <div className="dot rounded-full bg-[#373B53] w-[8px] h-[8px] mr-2"></div>
          <div className="font-bold text-xs text-[#373B53]">{type}</div>
        </div>
      )}
    </div>
  );
}

export default StatusCard;
