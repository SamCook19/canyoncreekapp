import React from 'react'

import PDFViewer from 'pdf-viewer-reactjs'

const FinancialsPDFReader = () => {
    return (
        <PDFViewer
            document={{
                // FOR BOTTEGA GRADER, THIS LINK IS TEMPORARY
                url: 'https://arxiv.org/pdf/quant-ph/0410100.pdf',
            }}
        />
    )
}

export default FinancialsPDFReader