import { useSelector, useDispatch } from "react-redux";
import { updateInput } from "@/app/features/form/inputSlices";
import { ChangeEvent } from "react";

const Form = () => {
  const inputData = useSelector((state: any) => state.inputData);
  const dispatch = useDispatch();

  console.log(inputData)

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
          <label>First Name</label>
          <input
            placeholder={inputData.firstName}
            onChange={(e) => handleInputChange("firstName", e.target.value)}
            className="border rounded"
          />
        </div>
        <div>
          <label>Last Name</label>
          <input
            placeholder={inputData.lastName}
            onChange={(e) => handleInputChange("lastName", e.target.value)}
            className="border rounded"
          />
        </div>
        <div>
          <label>Job Title</label>
          <input
            placeholder={inputData.jobTitle}
            onChange={(e) => handleInputChange("jobTitle", e.target.value)}
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

        <div>
          <label>Facebook Profile</label>
          <input
            placeholder={inputData.facebook}
            onChange={(e) => handleInputChange("facebook", e.target.value)}
            className="border rounded"
          />
        </div>

        <div>
          <label>Linkedin Profile</label>
          <input
            placeholder={inputData.linkedin}
            onChange={(e) => handleInputChange("linkedin", e.target.value)}
            className="border rounded"
          />
        </div>
        <div>
          <label>Twiiter Profile</label>
          <input
            placeholder={inputData.twitter}
            onChange={(e) => handleInputChange("twitter", e.target.value)}
            className="border rounded"
          />
        </div>
        <div>
          <label>Instagram Profile</label>
          <input
            placeholder={inputData.instagram}
            onChange={(e) => handleInputChange("instagram", e.target.value)}
            className="border rounded"
          />
        </div>

        <div>
          <label>Text Color</label>
          <input
            type="color"
            value={inputData.textColor}
            placeholder={inputData.textColor}
            onChange={(e) => handleInputChange("textColor", e.target.value)}
            className="border rounded"
          />
        </div>

        <div>
          <label>Theme Color</label>
          <input
            type="color"
            value={inputData.themeColor}
            placeholder={inputData.themeColor}
            onChange={(e) => handleInputChange("themeColor", e.target.value)}
            className="border rounded"
          />
        </div>

        <div>
          <label>Link Color</label>
          <input
            type="color"
            value={inputData.linkColor}
            placeholder={inputData.linkColor}
            onChange={(e) => handleInputChange("linkColor", e.target.value)}
            className="border rounded"
          />
        </div>
      </div>
    </div>
  );
};

export default Form;
