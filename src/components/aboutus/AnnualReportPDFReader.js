import React from 'react'

import PDFViewer from 'pdf-viewer-reactjs'

const AnnualReportPDFReader = () => {
    return (
        <PDFViewer
            document={{
                url: 'https://arxiv.org/pdf/quant-ph/0410100.pdf',
            }}
        />
    )
}

export default AnnualReportPDFReader