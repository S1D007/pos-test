import React from "react";
import { generate } from "@pdfme/generator";
import { template } from "@/utils/pdf";
function index() {
  const [inputs, setInputs] = React.useState([{ a: "", b: "", c: "" }]);

  const generatePDF = async () => {
    generate({ template, inputs }).then((pdf) => {
      const blob = new Blob([pdf.buffer], { type: "application/pdf" });
      window.open(URL.createObjectURL(blob));
    });
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        background: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: 10,
      }}
    >
      <input
        style={{
          width: "200px",
          height: "40px",
          border: "1px solid #ccc",
          borderRadius: "10px",
          padding: "0 10px",
          fontSize: "14px",
          color: "#333",
        }}
        placeholder="Enter your Name"
        onChange={(e) => {
          const newInputs = [...inputs];
          newInputs[0].a = e.target.value;
          setInputs(newInputs);
        }}
      />
      <input
        style={{
          width: "200px",
          height: "40px",
          border: "1px solid #ccc",
          borderRadius: "10px",
          padding: "0 10px",
          fontSize: "14px",
          color: "#333",
        }}
        placeholder="Enter your Company Name"
        onChange={(e) => {
          const newInputs = [...inputs];
          newInputs[0].b = e.target.value;
          setInputs(newInputs);
        }}
      />
      <button
        style={{
          width: "200px",
          height: "40px",
          border: "1px solid #ccc",
          borderRadius: "10px",
          padding: "0 10px",
          fontSize: "16px",
          color: "#333",
          fontWeight: "bold",
        }}
        onClick={generatePDF}
      >
        Generate
      </button>
    </div>
  );
}

export default index;
