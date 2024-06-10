export const downloadPDF = () => {
    let element = document.getElementById('cards');
    let opt = {
        filename: 'bingoCards.pdf',
        jsPDF: { unit: 'in', format: 'a4', orientation: 'landscape' }
    }
    // New Promise-based usage:
    html2pdf().set(opt).from(element).save();
}