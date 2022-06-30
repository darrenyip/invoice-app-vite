import { useParams } from "react-router-dom";
import { useNavigate, Outlet } from "react-router-dom";
import StatusCard from "../components/StatusCard";
import { useSelector } from "react-redux";
import InvoiceFullDetails from "../components/InvoiceFullDetails";
import InvoiceBottomButtons from "../components/InvoiceBottomButtons";
import GoBack from "../components/GoBack";
function InvoiceDetail(props) {
  let { id } = useParams();
  let navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  const handleGoToEdit = () => {
    navigate("/" + id + "/edit");
  };

  const handleUpdate = (newData) => {
    console.log("====================================");
    console.log("Updated", newData);
    console.log("====================================");
  };

  const invoice = useSelector((state) =>
    state.invoice.find((invoice) => {
      return invoice.id == id;
    })
  );
  return (
    <>
      <Outlet context={[invoice, handleUpdate]} />
      <div className="relative p-6 bg-[#F8F8FB] min-h-[100vh]">
        <GoBack onhandleBack={handleBack} />
        <StatusCard type={invoice.type} />
        <InvoiceFullDetails invoice={invoice} />
        <InvoiceBottomButtons onhandleGoToEdit={handleGoToEdit} />

        {/* <Routes>
        <Route path="/edit" component={<Edit />} />
      </Routes> */}
      </div>
    </>
  );
}

export default InvoiceDetail;
