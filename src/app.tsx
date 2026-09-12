import { useState } from 'react'
import FormSection from './components/FormSection'
import IDCard from './components/IDCard'
import { generatePESEL, generateDocumentNumber, calculateValidity } from './utils/generators'
import './App.css'

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

function App() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    birthDate: '',
    photo: null as string | null,
  })

  const [idData, setIdData] = useState<IDData | null>(null)
  const [showCard, setShowCard] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setFormData(prev => ({ ...prev, photo: reader.result as string }))
      }
      reader.readAsDataURL(file)
    }
  }

  const handleGenerateCard = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.firstName || !formData.lastName || !formData.birthDate) {
      alert('Proszę wypełnić wszystkie pola')
      return
    }

    const pesel = generatePESEL(formData.birthDate)
    const documentNumber = generateDocumentNumber()
    const issueDate = new Date().toISOString().split('T')[0]
    const expiryDate = calculateValidity(issueDate)

    setIdData({
      ...formData,
      pesel,
      documentNumber,
      issueDate,
      expiryDate,
    })
    setShowCard(true)
  }

  return (
    <div className="app-container">
      {!showCard ? (
        <FormSection
          formData={formData}
          onInputChange={handleInputChange}
          onPhotoChange={handlePhotoChange}
          onSubmit={handleGenerateCard}
        />
      ) : idData ? (
        <>
          <IDCard idData={idData} />
          <button
            className="reset-button"
            onClick={() => {
              setShowCard(false)
              setFormData({ firstName: '', lastName: '', birthDate: '', photo: null })
              setIdData(null)
            }}
          >
            Utwórz inny dowód
          </button>
        </>
      ) : null}
    </div>
  )
}

export default App
