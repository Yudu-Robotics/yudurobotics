import { useState } from "react";
import "./Form.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import FormModal from "./FormModal";
import { ColorRing } from "react-loader-spinner";
function Form() {
  const [submit, setSubmit] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    "entry.1725892135": "",
    "entry.2098983406": "",
    "entry.1155783579": "",
    "entry.1655141018": "",
    "entry.557944683": "",
  });

  //custom material ui textField
  const CustomTextField = styled(TextField)({
    "& input": {
      height: "37px",
      border: "none",
      // borderColor: '#fa9258 !important',
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#fa9258 !important",
      },
      "&:hover fieldset": {
        borderColor: "#fa9258 ",
      },
    },
    "& input:valid + fieldset": {
      borderColor: "#E0E3E7",
      borderWidth: 2,
      borderRadius: "7px",
    },
    "& input:invalid + fieldset": {
      borderColor: "#fa9258 ",
      borderWidth: 2,
      borderRadius: "7px",
    },
    "& input:invalid:focus + fieldset": {
      borderColor: "#fa9258 !important",
    },
    "& input:valid:focus + fieldset": {
      borderLeftWidth: 4,
      borderRadius: "7px",
      borderColor: "#fa9258 !important",
      padding: "4px !important", // override inline-style  #fa9258
    },
    "& .MuiInputLabel-root": {
      color: "#444343 !important",
    },
  });

  //handel input
  const handleInputData = (input) => (e) => {
    const { value } = e.target;

    setFormData((prevState) => ({
      ...prevState,
      [input]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    if (
      !formData["entry.1725892135"] ||
      !formData["entry.2098983406"] ||
      !formData["entry.1155783579"] ||
      !formData["entry.1655141018"] ||
      !formData["entry.557944683"]
    ) {
      alert("Please filled the all input fill!");
      return;
    }
    var emailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!emailRegex.test(formData["entry.2098983406"])) {
      alert("Enter a valid email Id!");
      return;
    }
    var mobRegex = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
    if (!mobRegex.test(formData["entry.1155783579"])) {
      alert("Enter a valid phone Number Id!");
      return;
    }

    const formDataStr = new URLSearchParams(formData).toString();
    let url = `https://docs.google.com/forms/d/e/1FAIpQLSeehS-RjlfQrM6CaPUBqEWNkqIvAquMViMqa6mDAJcVDW9q1A/formResponse`;
    try {
      await fetch(url, {
        mode: 'no-cors',
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "Access-Control-Allow-Headers": "*",
        },
        body: formDataStr,
      });
      await new Promise((resolve, reject) => setTimeout(() => resolve(), 3000));
      console.log("submitting");
      setIsSubmitting(false);
      setSubmit(true);
    } catch (error) {
      setIsSubmitting(false);
      setFormData({
        "entry.1725892135": "",
        "entry.2098983406": "",
        "entry.1155783579": "",
        "entry.1655141018": "",
        "entry.557944683": "",
      });
    }
  };

  return (
    <>

      <div style={{marginRight: "10vw"}}>
        <form onSubmit={(e) => handleSubmit(e)} className="homP-from">
        <div className="input-group">
          <label htmlFor="entry.1725892135">
            Full Name <span style={{color: "#5423E6"}}>*</span>
          </label>
          <input
            onChange={handleInputData("entry.1725892135")}
            value={formData["entry.1725892135"]}
            id="entry.1725892135"
            type="text"
            name="entry.1725892135"
            placeholder="Enter Name"
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="entry.2098983406">
            Email <span style={{color: "#5423E6"}}>*</span>
          </label>
          <input
            onChange={handleInputData("entry.2098983406")}
            value={formData["entry.2098983406"]}
            id="entry.2098983406"
            type="email"
            name="entry.2098983406"
            placeholder="Enter Email"
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="entry.1155783579">
            Phone <span style={{color: "#5423E6"}}>*</span>
          </label>
          <input
            onChange={handleInputData("entry.1155783579")}
            value={formData["entry.1155783579"]}
            id="entry.1155783579"
            name="entry.1155783579"
            placeholder="Enter Phone No"
            required
          />
        </div>
        <div className="input-group">
        <select
          onChange={handleInputData("entry.1655141018")}
          value={formData["entry.1655141018"] || ""}
          id="entry.1655141018"
          name="entry.1655141018"
        >
          <option value="" disabled hidden>
            WHAT ARE YOU LOOKING FOR
          </option>
          <option value="Partner">Partner</option>
          <option value="Product Enquiry">Product Enquiry</option>
          <option value="Others">Others</option>
        </select>
        </div>
        <div className="input-group">
          <label htmlFor="entry.557944683">Message <span style={{color: "#5423E6"}}>*</span></label>
          <textarea
            onChange={handleInputData("entry.557944683")}
            value={formData["entry.557944683"]}
            id="entry.557944683"
            name="entry.557944683"
            placeholder="Description"
            required
          />
        </div>

          <div onClick={(e) => handleSubmit(e)} className="homP-sub-button">
            <p>Send Message</p>
            <ArrowForwardIcon />
            <ColorRing
              visible={isSubmitting}
              height="35"
              width="35"
              ariaLabel="color-ring-loading"
              wrapperStyle={{}}
              wrapperClass="color-ring-wrapper"
              colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
            />
          </div>
        </form>

        {/* <form onSubmit={(e) => handleSubmit(e)} className="homP-from">
        <CustomTextField 
        onChange={handleInputData("entry.1725892135")}
        value={formData["entry.1725892135"]}
        id="entry.1725892135"
        type="text"
        name="entry.1725892135"
        label="Enter Name"
        required
        />
      </form > */}
      </div>
    </>
  );
}

export default Form;
