import './FormSection.css'

interface FormSectionProps {
  formData: {
    firstName: string
    lastName: string
    birthDate: string
    photo: string | null
  }
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onPhotoChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onSubmit: (e: React.FormEvent) => void
}

export default function FormSection({
  formData,
  onInputChange,
  onPhotoChange,
  onSubmit,
}: FormSectionProps) {
  return (
    <div className="form-container">
      <div className="form-header">
        <h1>Generator mDowodu</h1>
        <p>Utwórz swój mobilny dowód osobisty</p>
      </div>

      <form onSubmit={onSubmit} className="form">
        <div className="form-group">
          <label htmlFor="photo">Zdjęcie</label>
          <div className="photo-upload">
            {formData.photo ? (
              <img src={formData.photo} alt="Preview" className="photo-preview" />
            ) : (
              <div className="photo-placeholder">📷</div>
            )}
            <input
              type="file"
              id="photo"
              accept="image/*"
              onChange={onPhotoChange}
              className="file-input"
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="firstName">Imię</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={onInputChange}
            placeholder="np. Jan"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="lastName">Nazwisko</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={onInputChange}
            placeholder="np. Kowalski"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="birthDate">Data urodzenia</label>
          <input
            type="date"
            id="birthDate"
            name="birthDate"
            value={formData.birthDate}
            onChange={onInputChange}
            required
          />
        </div>

        <button type="submit" className="submit-button">
          Generuj mDowód
        </button>
      </form>
    </div>
  )
}
