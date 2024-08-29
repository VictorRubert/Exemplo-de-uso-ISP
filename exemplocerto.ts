// Interfaces segregadas
interface Printer {
    printDocument(doc: string): void;
}

interface Scanner {
    scanDocument(doc: string): void;
}

// Classe que usa apenas a interface Printer
class SimplePrinter implements Printer {
    printDocument(doc: string): void {
        console.log(`Printing document: ${doc}`);
    }
}

// Classe que usa apenas a interface Scanner
class SimpleScanner implements Scanner {
    scanDocument(doc: string): void {
        console.log(`Scanning document: ${doc}`);
    }
}

// Classe que usa ambas as interfaces
class MultiFunctionDevice implements Printer, Scanner {
    printDocument(doc: string): void {
        console.log(`Printing document: ${doc}`);
    }
    
    scanDocument(doc: string): void {
        console.log(`Scanning document: ${doc}`);
    }
}