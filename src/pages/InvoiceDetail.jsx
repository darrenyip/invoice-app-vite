import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import LeftArrow from "../assets/svgs/LeftArrow.svg";
import StatusCard from "../components/StatusCard";
import { useSelector } from "react-redux";
import InvoiceFullDetails from "../components/InvoiceFullDetails";
function InvoiceDetail(props) {
  let { id } = useParams();
  let navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  const invoice = useSelector((state) =>
    state.invoice.find((invoice) => {
      return invoice.id == id;
    })
  );
  return (
    <div className="p-6 bg-[#F8F8FB] h-[calc(100vh-72px)]">
      <div className="mb-4 flex justify-left items-center" onClick={handleBack}>
        <img className="mr-2" src={LeftArrow} alt="" />
        <div className="font-bold text-xs">Go back</div>
      </div>
      <StatusCard type={invoice.type} />
      <InvoiceFullDetails invoice={invoice} />
    </div>
  );
}

export default InvoiceDetail;
