// Interface grande e genérica
interface ImpressoraGenerica {
    imprimirDocumento(doc: string): void;
    escanearDocumento(doc: string): void;
    xerocarDocumento(doc: string): void;
}

// Classe que só precisa de funcionalidades de impressão
class ImpressoraBasica implements ImpressoraGenerica {
    imprimirDocumento(doc: string): void {
        console.log(`Imprimindo documento: ${doc}`);
    }
    
    escanearDocumento(doc: string): void {
        throw new Error("Escanear não é suportado");
    }
    
    xerocarDocumento(doc: string): void {
        throw new Error("Xerox não é suportado");
    }
}

// Classe que só precisa de funcionalidades de digitalização
class ScannerBasico implements ImpressoraGenerica {
    imprimirDocumento(doc: string): void {
        throw new Error("Imprimir não é suportado");
    }
    
    escanearDocumento(doc: string): void {
        console.log(`Escaneando Documento: ${doc}`);
    }
    
    xerocarDocumento(doc: string): void {
        throw new Error("Xerox não é suportado");
    }
}
