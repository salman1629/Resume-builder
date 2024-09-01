import React from "react";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";
import ResumeStructure from "./ResumeStructure";
import Button from "../components/ui/Button";

import html2canvas from "html2canvas";
import jsPDF from "jspdf";

function Layout() {
  const handleDownloadPdf_using_html2Canvas_Jspdf = () => {
    const input = document.getElementById("print_content_ref");

    html2canvas(input,{scale:-1 })
      .then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF({
          unit: "px", // Use pixels to better match the resolution
          format: [canvas.width, canvas.height], // Adjust the PDF format to match the canvas dimensions
        });

        pdf.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height); // Scale the image to fit the PDF
        pdf.save("download.pdf");
      })
      .catch((error) => {
        console.error("Failed to generate PDF:", error);
      });
  };
  const onPrintClicked = () => {
    // const printDiv =document.getElementById('print_content_ref')
    window.print();

  };
  return (
    <div className="">
      <NavBar />
      <div className="w-full flex gap-10">
        <div className="w-1/2 p-10 no-print">
          <div className="p-10 bg-slate-200 rounded-3xl shadow-inner shadow-slate-300">
            <Outlet />
            <div className="m-5">
              <Button
                title="Print"
                type="button"
                onButtonClicked={onPrintClicked}
              />
            </div>
          </div>
        </div>
        <div className="w-1/2 p-10 print-only">
          <div className="p-10 shadow-sm shadow-slate-500 bg-white ">
            <ResumeStructure />
          </div>
          <iframe id='i_frame' width={400}/>
        </div>
      </div>
    </div>
  );
}

export default Layout;
