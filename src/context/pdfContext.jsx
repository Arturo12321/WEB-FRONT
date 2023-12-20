/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from 'react';
import { getReportPDF } from '../api/carsRent';

const ReportPDFContext = createContext();

export const useInformePDF = () => {
    const context = useContext(ReportPDFContext);

    if (!context) {
    throw new Error("useInformePDF must be used within an InformePDFContext");
    }
    return context;
};

export function InformePDFProvider({ children }) {
    const [pdfData, setPdfData ] = useState([]);
    const [error, setError] = useState([]);

    const generatePDF = async () => {
        try {
            console.log('Generating PDF...');
            const res = await getReportPDF();
            console.log('Response:', res);
            const pdfReporter = res.data;
            console.log('PDF Data:', pdfReporter);
            setPdfData(pdfReporter);

        } catch (error) {
            console.error('Error al generar el informe PDF:', error);
            setError(error.message || 'Error al generar el informe PDF');
        }
    };

    return (
        <ReportPDFContext.Provider value={{
            pdfData,
            error,
            generatePDF,
        }}>
            {children}
        </ReportPDFContext.Provider>
    );
}
