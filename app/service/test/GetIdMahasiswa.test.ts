import '@testing-library/jest-dom'
import { render, renderHook, screen } from '@testing-library/react'
import getIdMahasiswa from '../GetIdMahasiswa';

describe('getIdMahasiswa', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should return id_mahasiswa from localStorage', () => {
    const mockId = '12345';

    jest.spyOn(Storage.prototype, 'getItem').mockReturnValue(mockId);

    const { result } = renderHook(() => getIdMahasiswa());

    expect(result.current).toBe(mockId);
  });

  it('should return null if id_mahasiswa is not in localStorage', () => {
    jest.spyOn(Storage.prototype, 'getItem').mockReturnValue(null);

    const { result } = renderHook(() => getIdMahasiswa());

    expect(result.current).toBe(null);
  });
});
