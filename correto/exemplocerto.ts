// Interfaces segregadas
interface Impressora {
    imprimirDocumento(doc: string): void;
}

interface Scanner {
    scanDocumento(doc: string): void;
}

// Classe que usa apenas a interface Impressora
class ImpressoraSimples implements Impressora {
    imprimirDocumento(doc: string): void {
        console.log(`Imprimindo documento: ${doc}`);
    }
}

// Classe que usa apenas a interface Scanner
class ScannerSimples implements Scanner {
    scanDocumento(doc: string): void {
        console.log(`Escaneando documento: ${doc}`);
    }
}

// Classe que usa ambas as interfaces
class DispositivoMultifuncional implements Impressora, Scanner {
    imprimirDocumento(doc: string): void {
        console.log(`Imprimindo documento: ${doc}`);
    }
    
    scanDocumento(doc: string): void {
        console.log(`Escaneando documento: ${doc}`);
    }
}