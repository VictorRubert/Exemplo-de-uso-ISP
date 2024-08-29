// Interface grande e genérica
interface MultiFunctionDevice {
    printDocument(doc: string): void;
    scanDocument(doc: string): void;
    faxDocument(doc: string): void;
}

// Classe que só precisa de funcionalidades de impressão
class BasicPrinter implements MultiFunctionDevice {
    printDocument(doc: string): void {
        console.log(`Printing document: ${doc}`);
    }
    
    scanDocument(doc: string): void {
        throw new Error("Scan not supported");
    }
    
    faxDocument(doc: string): void {
        throw new Error("Fax not supported");
    }
}

// Classe que só precisa de funcionalidades de digitalização
class BasicScanner implements MultiFunctionDevice {
    printDocument(doc: string): void {
        throw new Error("Print not supported");
    }
    
    scanDocument(doc: string): void {
        console.log(`Scanning document: ${doc}`);
    }
    
    faxDocument(doc: string): void {
        throw new Error("Fax not supported");
    }
}
