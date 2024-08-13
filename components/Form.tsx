import { useSelector, useDispatch } from "react-redux";
import { updateInput } from "@/app/features/form/inputSlices";
import { ChangeEvent } from "react";

const Form = () => {
  const inputData = useSelector((state: any) => state.inputData);
  const dispatch = useDispatch();

  const handleInputChange = (field, value) => {
    dispatch(updateInput({ field, value }));
  };

  return (
    <div
      className="bs-full p-5"
      style={{
        width: "100%",
        maxWidth: "600px",
        fontFamily: "Arial, sans-serif",
        border: "1px solid #e5e7eb",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        backgroundColor: "#ffffff",
      }}
    >
      <div className="flex flex-col gap-4">
        <div>
          <label>Name</label>
          <input
            placeholder={inputData.name}
            onChange={(e) => handleInputChange("name", e.target.value)}
            className="border rounded"
          />
        </div>
        <div>
          <label>Job Title</label>
          <input
            placeholder={inputData.title}
            onChange={(e) => handleInputChange("title", e.target.value)}
            className="border rounded"
          />
        </div>
        <div>
          <label>Email</label>
          <input
            placeholder={inputData.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            className="border rounded"
          />
        </div>
        <div>
          <label>Phone Number</label>
          <input
            placeholder={inputData.phone}
            onChange={(e) => handleInputChange("phone", e.target.value)}
            className="border rounded"
          />
        </div>
        <div>
          <label>Company</label>
          <input
            placeholder={inputData.company}
            onChange={(e) => handleInputChange("company", e.target.value)}
            className="border rounded"
          />
        </div>
        <div>
          <label>Website</label>
          <input
            placeholder={inputData.website}
            onChange={(e) => handleInputChange("website", e.target.value)}
            className="border rounded"
          />
        </div>
        <div>
          <label>Address</label>
          <input
            placeholder={inputData.Address}
            onChange={(e) => handleInputChange("address", e.target.value)}
            className="border rounded"
          />
        </div>
        <div>
          <label>Image</label>
          <input
            placeholder={inputData.img}
            onChange={(e) => handleInputChange("img", e.target.value)}
            className="border rounded"
          />
        </div>
      </div>
    </div>
  );
};

export default Form;
