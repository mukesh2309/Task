export const trunCateStringWith3Dots = (source:string, length:number) => {
    let skippedString = source?.trimEnd();
    if (skippedString?.length > length) {
      return skippedString?.substring(0, length) + '...';
    } else {
      return source;
    }
  };
  