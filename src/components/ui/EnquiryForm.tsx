import { useState, type FormEvent } from 'react'
import { Send, CheckCircle, Lock, AlertCircle } from 'lucide-react'
import { Button } from './Button'
import { submitContactQuery } from '../../services/queryService'
import type { LookingFor } from '../../types/query'

const inputClass =
  'w-full px-4 py-3 bg-surface border border-gold/20 rounded-sm text-text focus:border-gold focus:outline-none transition-colors'

const errorInputClass = 'border-red-400 focus:border-red-500'

const sanitizeLetters = (value: string) => value.replace(/[^A-Za-z\s]/g, '')
const sanitizePhone = (value: string) => value.replace(/\D/g, '').slice(0, 10)

interface FieldErrors {
  name?: string
  phone?: string
  city?: string
  lookingFor?: string
}

interface EnquiryFormProps {
  idPrefix?: string
  onSuccess?: () => void
}

export function EnquiryForm({ idPrefix = '', onSuccess }: EnquiryFormProps) {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({})
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [city, setCity] = useState('')
  const [lookingFor, setLookingFor] = useState<LookingFor | ''>('')

  const fieldId = (name: string) => (idPrefix ? `${idPrefix}-${name}` : name)

  const validateForm = (): FieldErrors => {
    const errors: FieldErrors = {}
    const trimmedName = name.trim()
    const trimmedCity = city.trim()

    if (!trimmedName) {
      errors.name = 'Please enter your full name.'
    } else if (!/^[A-Za-z\s]+$/.test(trimmedName)) {
      errors.name = 'Name can contain letters only.'
    }

    if (!phone) {
      errors.phone = 'Please enter your phone number.'
    } else if (!/^\d{10}$/.test(phone)) {
      errors.phone = 'Phone number must be exactly 10 digits.'
    }

    if (trimmedCity && !/^[A-Za-z\s]+$/.test(trimmedCity)) {
      errors.city = 'City can contain letters only.'
    }

    if (!lookingFor) {
      errors.lookingFor = 'Please select who you are looking for.'
    }

    return errors
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError(null)

    const errors = validateForm()
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors)
      return
    }

    setFieldErrors({})
    setLoading(true)

    try {
      await submitContactQuery({
        name: name.trim(),
        phone,
        city: city.trim(),
        lookingFor: lookingFor as LookingFor,
      })

      setSubmitted(true)
      setName('')
      setPhone('')
      setCity('')
      setLookingFor('')
      onSuccess?.()
    } catch (err) {
      console.error('Failed to submit enquiry:', err)
      setError('Something went wrong. Please try again or contact us directly.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <div className="flex items-start gap-3 p-4 mb-6 rounded-sm border border-gold/25 bg-gold/5">
        <Lock className="w-5 h-5 text-gold shrink-0 mt-0.5" />
        <p className="text-text-muted text-sm leading-relaxed">
          Your information is <strong className="text-text">strictly private</strong> and
          is never shared publicly or with other users. Only our team will
          contact you to begin the matchmaking process.
        </p>
      </div>

      {submitted && (
        <div className="flex items-center gap-3 p-4 mb-6 rounded-sm border border-gold/30 bg-gold/5 text-gold text-sm">
          <CheckCircle className="w-5 h-5 shrink-0" />
          Thank you! Your enquiry has been submitted. Our team will contact you shortly.
        </div>
      )}

      {error && (
        <div className="flex items-center gap-3 p-4 mb-6 rounded-sm border border-red-300 bg-red-50 text-red-700 text-sm">
          <AlertCircle className="w-5 h-5 shrink-0" />
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor={fieldId('name')} className="block text-text-muted text-sm mb-2">
            Full Name *
          </label>
          <input
            id={fieldId('name')}
            name="name"
            type="text"
            value={name}
            onChange={(e) => {
              setName(sanitizeLetters(e.target.value))
              if (fieldErrors.name) setFieldErrors((prev) => ({ ...prev, name: undefined }))
            }}
            disabled={loading}
            className={`${inputClass} ${fieldErrors.name ? errorInputClass : ''}`}
            placeholder="Your name"
            autoComplete="name"
          />
          {fieldErrors.name && (
            <p className="mt-1.5 text-red-600 text-xs">{fieldErrors.name}</p>
          )}
        </div>

        <div>
          <label htmlFor={fieldId('phone')} className="block text-text-muted text-sm mb-2">
            Phone *
          </label>
          <input
            id={fieldId('phone')}
            name="phone"
            type="tel"
            inputMode="numeric"
            value={phone}
            onChange={(e) => {
              setPhone(sanitizePhone(e.target.value))
              if (fieldErrors.phone) setFieldErrors((prev) => ({ ...prev, phone: undefined }))
            }}
            disabled={loading}
            className={`${inputClass} ${fieldErrors.phone ? errorInputClass : ''}`}
            placeholder="10-digit mobile number"
            autoComplete="tel"
            maxLength={10}
          />
          {fieldErrors.phone && (
            <p className="mt-1.5 text-red-600 text-xs">{fieldErrors.phone}</p>
          )}
        </div>

        <div>
          <label htmlFor={fieldId('city')} className="block text-text-muted text-sm mb-2">
            City
          </label>
          <input
            id={fieldId('city')}
            name="city"
            type="text"
            value={city}
            onChange={(e) => {
              setCity(sanitizeLetters(e.target.value))
              if (fieldErrors.city) setFieldErrors((prev) => ({ ...prev, city: undefined }))
            }}
            disabled={loading}
            className={`${inputClass} ${fieldErrors.city ? errorInputClass : ''}`}
            placeholder="Your city"
            autoComplete="address-level2"
          />
          {fieldErrors.city && (
            <p className="mt-1.5 text-red-600 text-xs">{fieldErrors.city}</p>
          )}
        </div>

        <div>
          <label htmlFor={fieldId('lookingFor')} className="block text-text-muted text-sm mb-2">
            Looking For *
          </label>
          <select
            id={fieldId('lookingFor')}
            name="lookingFor"
            value={lookingFor}
            onChange={(e) => {
              setLookingFor(e.target.value as LookingFor | '')
              if (fieldErrors.lookingFor) {
                setFieldErrors((prev) => ({ ...prev, lookingFor: undefined }))
              }
            }}
            disabled={loading}
            className={`${inputClass} ${fieldErrors.lookingFor ? errorInputClass : ''}`}
          >
            <option value="">Select</option>
            <option value="bride">Bride</option>
            <option value="groom">Groom</option>
          </select>
          {fieldErrors.lookingFor && (
            <p className="mt-1.5 text-red-600 text-xs">{fieldErrors.lookingFor}</p>
          )}
        </div>

        <Button type="submit" size="lg" className={loading ? 'opacity-70 pointer-events-none' : ''}>
          <Send className="w-4 h-4" />
          {loading ? 'Submitting...' : 'Submit Private Enquiry'}
        </Button>
      </form>
    </div>
  )
}
