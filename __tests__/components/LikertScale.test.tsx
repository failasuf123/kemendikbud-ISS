import { render, screen, fireEvent } from "@testing-library/react";
import LikertScale from "@/components/mahasiswa/LikertScale"; // Sesuaikan dengan path dari komponen LikertScale
import React from "react";

describe("LikertScale", () => {
  const mockOnChange = jest.fn(); // Mocking fungsi onChange

  const setup = () => {
    return render(
      <LikertScale questionId="q1" onChange={mockOnChange} />
    );
  };

  it("should render the LikertScale component correctly", () => {
    setup();

    // Cek apakah tombol untuk skala 1-5 dirender dengan benar
    [1, 2, 3, 4, 5].forEach((value) => {
      expect(screen.getByText(value.toString())).toBeInTheDocument();
    });

    // Cek apakah teks "Pilih Jawaban" muncul
    expect(screen.getByText(/Pilih Jawaban/i)).toBeInTheDocument();
  });

  it("should highlight selected value and call onChange with correct arguments", () => {
    setup();

    // Simulasi klik pada tombol dengan nilai 3
    const button3 = screen.getByText("3");
    fireEvent.click(button3);

    // Pastikan tombol 3 sekarang memiliki class yang menandakan pilihan terpilih (bg-blue-500)
    expect(button3).toHaveClass("bg-blue-500");

    // Pastikan tombol lain tidak memiliki class pilihan terpilih
    const button1 = screen.getByText("1");
    expect(button1).not.toHaveClass("bg-blue-500");

    // Pastikan mockOnChange dipanggil dengan argumen yang benar
    expect(mockOnChange).toHaveBeenCalledWith("q1", 3);
  });

  it("should update selected value when another button is clicked", () => {
    setup();

    // Simulasi klik pada tombol dengan nilai 2
    const button2 = screen.getByText("2");
    fireEvent.click(button2);

    // Pastikan tombol 2 sekarang memiliki class pilihan terpilih
    expect(button2).toHaveClass("bg-blue-500");

    // Simulasi klik pada tombol dengan nilai 5
    const button5 = screen.getByText("5");
    fireEvent.click(button5);

    // Pastikan tombol 5 sekarang memiliki class pilihan terpilih
    expect(button5).toHaveClass("bg-blue-500");

    // Pastikan tombol 2 tidak lagi dipilih
    expect(button2).not.toHaveClass("bg-blue-500");

    // Pastikan mockOnChange dipanggil dengan argumen yang benar
    expect(mockOnChange).toHaveBeenCalledWith("q1", 5);
  });
});
