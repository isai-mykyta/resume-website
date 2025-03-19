import { useCallback } from "react";

const useDownload = () => {
  const downloadFile = useCallback((fileUrl: string, fileName: string) => {
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, []);

  return { downloadFile };
};

export default useDownload;
