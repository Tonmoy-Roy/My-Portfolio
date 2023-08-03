function downloadCV() {
    // Create a link element
    const link = document.createElement("a");
  
    // Set the href attribute to the URL of the CV file
    link.href = "./TR_CV.pdf";
  
    // Specify that the link should be downloaded when clicked
    link.setAttribute("download", "TR_CV.pdf");
  
    // Append the link to the document body
    document.body.appendChild(link);
  
    // Programmatically click the link to trigger the download
    link.click();
  
    // Remove the link element from the document
    document.body.removeChild(link);
  }
  