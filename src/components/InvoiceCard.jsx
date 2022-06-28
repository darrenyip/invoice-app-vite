import { useNavigate } from "react-router-dom";

function InvoiceCard(props) {
  const { name, date, id, total, type } = props.invoice;
  let navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/${id}`);
  };
  return (
    <div
      className="bg-[#FFFFFF] flex flex-col justify-between items-center rounded-[8px] mb-4 p-6"
      onClick={handleNavigate}
    >
      <div className="w-full flex justify-between items-center mb-7">
        <div className="text-[#0C0E16] text-xs font-bold no-underline">
          <span className="text-[#7E88C3] ">#</span> RT3080
        </div>
        <div className="text-[#858BB2] font-medium text-xs">{name}</div>
      </div>
      <div className="w-full flex justify-between items-center">
        <div className="flex flex-col">
          <div className="text-[#858BB2] font-medium text-xs mb-2">
            Due 19 Aug 2021
          </div>
          <div className="text-[#0C0E16] font-bold text-base">$ 1800.90</div>
        </div>
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
    </div>
  );
}

export default InvoiceCard;
