export const normalizeImgPath = (path: string | null) => {
  if (path) {
    return path.startsWith("/files")
      ? `https://api-factory.simbirsoft1.com/${path}`
      : path;
  }
  return "https://www.vippng.com/png/detail/103-1037052_vector-type-car-export-car-icon.png";
};
