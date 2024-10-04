import { render, fireEvent } from "@testing-library/react";
import TextForm from "@/components/mahasiswa/TextForm"; // sesuaikan path import

describe("TextForm", () => {
  const mockOnChange = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should update the input value when typing", () => {
    const { getByPlaceholderText } = render(
      <TextForm questionId="q1" onChange={mockOnChange} />
    );

    // Use type assertion to ensure we're dealing with an HTMLTextAreaElement
    const textArea = getByPlaceholderText("Tulis jawaban Anda di sini...") as HTMLTextAreaElement;

    // Simulate typing in the textarea
    fireEvent.change(textArea, { target: { value: "Ini adalah jawaban." } });

    // Check if the input value is updated correctly
    expect(textArea.value).toBe("Ini adalah jawaban.");
  });

  it("should call onChange with correct parameters when input changes", () => {
    const { getByPlaceholderText } = render(
      <TextForm questionId="q1" onChange={mockOnChange} />
    );

    const textArea = getByPlaceholderText("Tulis jawaban Anda di sini...") as HTMLTextAreaElement;

    // Simulate typing in the textarea
    fireEvent.change(textArea, { target: { value: "Jawaban baru" } });

    // Check if onChange was called with the correct arguments
    expect(mockOnChange).toHaveBeenCalledWith("q1", "Jawaban baru");
  });

  it("should render textarea with initial empty value", () => {
    const { getByPlaceholderText } = render(
      <TextForm questionId="q1" onChange={mockOnChange} />
    );

    const textArea = getByPlaceholderText("Tulis jawaban Anda di sini...") as HTMLTextAreaElement;

    // Check if the textarea is initially empty
    expect(textArea.value).toBe("");
  });
});
