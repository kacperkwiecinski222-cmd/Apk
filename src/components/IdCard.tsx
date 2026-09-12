import QRCode from 'qrcode.react'
import './IDCard.css'

interface IDData {
  firstName: string
  lastName: string
  birthDate: string
  photo: string | null
  pesel: string
  documentNumber: string
  issueDate: string
  expiryDate: string
}

interface IDCardProps {
  idData: IDData
}

export default function IDCard({ idData }: IDCardProps) {
  const birthDate = new Date(idData.birthDate)
  const formattedBirthDate = birthDate.toLocaleDateString('pl-PL')
  const formattedIssueDate = new Date(idData.issueDate).toLocaleDateString('pl-PL')
  const formattedExpiryDate = new Date(idData.expiryDate).toLocaleDateString('pl-PL')

  const qrValue = JSON.stringify({
    firstName: idData.firstName,
    lastName: idData.lastName,
    pesel: idData.pesel,
    documentNumber: idData.documentNumber,
  })

  return (
    <div className="id-card-container">
      <div className="id-card">
        {/* Top section with photo and name */}
        <div className="card-top">
          <div className="photo-section">
            {idData.photo ? (
              <img src={idData.photo} alt="Photo" className="card-photo" />
            ) : (
              <div className="card-photo-placeholder">📷</div>
            )}
          </div>
          <div className="name-section">
            <div className="name">
              {idData.firstName} {idData.lastName}
            </div>
            <div className="divider"></div>
          </div>
        </div>

        {/* Middle section with personal data */}
        <div className="card-middle">
          <div className="data-row">
            <span className="label">PESEL</span>
            <span className="value">{idData.pesel}</span>
          </div>
          <div className="data-row">
            <span className="label">Data urodzenia</span>
            <span className="value">{formattedBirthDate}</span>
          </div>
          <div className="data-row">
            <span className="label">Numer dokumentu</span>
            <span className="value">{idData.documentNumber}</span>
          </div>
        </div>

        {/* Bottom section with dates */}
        <div className="card-bottom">
          <div className="date-column">
            <span className="date-label">Data wydania</span>
            <span className="date-value">{formattedIssueDate}</span>
          </div>
          <div className="date-column">
            <span className="date-label">Data ważności</span>
            <span className="date-value">{formattedExpiryDate}</span>
          </div>
        </div>
      </div>

      {/* QR Code */}
      <div className="qr-section">
        <p className="qr-label">Kod QR do weryfikacji</p>
        <QRCode value={qrValue} size={120} level="H" includeMargin={true} />
      </div>
    </div>
  )
}
