function lookupPDF() {
  const patientId = document.getElementById('patientId').value.trim();
  const pdfViewer = document.getElementById('pdfViewer');
  if (!patientId) {
    pdfViewer.innerHTML = '<span style="color:#e53935;">Please enter a Patient ID.</span>';
    pdfViewer.style.display = 'block';
    return;
  }
  // List of PDF filenames in the pdfs folder
  const pdfFiles = [
    '11223344.pdf', '9876543210.pdf', 'BCB123456789.pdf', 'BCB18424584.pdf', 'CIG9876543.pdf',
    'EMP665544332.pdf', 'HC99887766.pdf', 'HLTH89012345.pdf', 'HUM567890.pdf', 'IND334455667.pdf',
    'MCD112233445.pdf', 'MCD556677.pdf', 'PLA66778899.pdf', 'R254169852.pdf', 'STU98765432.pdf',
    'TRI543210987.pdf', 'U987654321.pdf', 'UHC987654321.pdf', 'W128415629.pdf', 'XZY841458425.pdf'
  ];
  // Find matching PDF (case-insensitive, partial or full match)
  const match = pdfFiles.find(f => f.toLowerCase().includes(patientId.toLowerCase()));
  if (match) {
    const pdfPath = `pdfs/${match}`;
    window.open(pdfPath, '_blank');
    pdfViewer.innerHTML = `<span style='color:#3a8dde;'>PDF opened in a new tab.</span><br><a href='${pdfPath}' download class='download-btn'>Download PDF</a>`;
    pdfViewer.style.display = 'block';
  } else {
    pdfViewer.innerHTML = `<span style=\"color:#e53935;\">No PDF found for Patient ID: <b>${patientId}</b></span>`;
    pdfViewer.style.display = 'block';
  }
}
