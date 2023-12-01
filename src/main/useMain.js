import { useEffect, useState } from 'react'

const useMAin = () => {
    const [header, setHeader] = useState({});
    const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if(header !== ""){
        setIsLoading(false);
    }
  },[header]);
  return {
    header: header,
    setHeader: setHeader,
    isLoading: isLoading,
  }
}

export default useMAin;