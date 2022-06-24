
type OpenImageProps = {
  label: string
  image: {
    data: Blob
    pos: number
    palette: unknown[]
    imgData: Blob
    transparency: unknown
    text: unknown
    width: number
    height: number
    bits: number
    colorType: number
    compressionMethod: number
    interlaceMethod: number
    colors: number
    hasAlphaChannel: boolean
    pixelBitlength: number
    colorSpace: string
  }
  width: number
  height: number
  imgData: Blob
  obj: unknown
}

declare namespace PDFKit {
  type PDFKitBox = [number, number, number, number];
  interface PDFKitFontEncoding {
    advanceWidth: number;
    xAdvance: number;
    yAdvance: number;
    xOffset: number;
    yOffset: number;
  }
  
  interface PDFKitFont extends PDFKit.PDFKitReference {
    bbox?: PDFKitBox | any;
  
    ascender?: number;
    descender?: number;
    xHeight?: number;
    scale?: number;
  
    unicode: number[][];
  
    encode(text: string): [string, PDFKitFontEncoding[]];
  }
  interface PDFDocument {
    _registeredFonts: { [key: string]: PDFKit.PDFKitFont };
    _fillColor: [number, number, number, number?];
    openImage(path: string): OpenImageProps;
  }
}

declare namespace PDFKit {
  
  export interface PDFGradient {
      setTransform(m11: number, m12: number, m21: number, m22: number, dx: number, dy: number): void;
  }
  export interface PDFLinearGradient {
      setTransform(m11: number, m12: number, m21: number, m22: number, dx: number, dy: number): void;
  }
}

