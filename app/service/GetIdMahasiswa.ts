import { useEffect, useState } from 'react';

const getIdMahasiswa = () => {
  const [idMahasiswa, setIdMahasiswa] = useState<string | null>(null);

  useEffect(() => {
    const storedId = localStorage.getItem('id_mahasiswa');
    setIdMahasiswa(storedId);
  }, []);

  if(idMahasiswa == null){
      return null
  }

  return idMahasiswa;
};

export default getIdMahasiswa;