import { useState, type FormEvent } from 'react'
import { Send, CheckCircle, Lock, AlertCircle } from 'lucide-react'
import { Button } from './Button'
import { submitContactQuery } from '../../services/queryService'
import type { LookingFor } from '../../types/query'

const inputClass =
  'w-full px-4 py-3 bg-surface border border-gold/20 rounded-sm text-text focus:border-gold focus:outline-none transition-colors'

interface EnquiryFormProps {
  idPrefix?: string
  onSuccess?: () => void
}

export function EnquiryForm({ idPrefix = '', onSuccess }: EnquiryFormProps) {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fieldId = (name: string) => (idPrefix ? `${idPrefix}-${name}` : name)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const form = e.currentTarget
    const data = new FormData(form)

    try {
      await submitContactQuery({
        name: data.get('name') as string,
        phone: data.get('phone') as string,
        city: (data.get('city') as string) || '',
        lookingFor: data.get('lookingFor') as LookingFor,
      })

      setSubmitted(true)
      form.reset()
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
            required
            disabled={loading}
            className={inputClass}
            placeholder="Your name"
          />
        </div>

        <div>
          <label htmlFor={fieldId('phone')} className="block text-text-muted text-sm mb-2">
            Phone *
          </label>
          <input
            id={fieldId('phone')}
            name="phone"
            type="tel"
            required
            disabled={loading}
            className={inputClass}
            placeholder="+91 XXXXX XXXXX"
          />
        </div>

        <div>
          <label htmlFor={fieldId('city')} className="block text-text-muted text-sm mb-2">
            City
          </label>
          <input
            id={fieldId('city')}
            name="city"
            type="text"
            disabled={loading}
            className={inputClass}
            placeholder="Your city"
          />
        </div>

        <div>
          <label htmlFor={fieldId('lookingFor')} className="block text-text-muted text-sm mb-2">
            Looking For *
          </label>
          <select
            id={fieldId('lookingFor')}
            name="lookingFor"
            required
            disabled={loading}
            className={inputClass}
          >
            <option value="">Select</option>
            <option value="bride">Bride</option>
            <option value="groom">Groom</option>
          </select>
        </div>

        <Button type="submit" size="lg" className={loading ? 'opacity-70 pointer-events-none' : ''}>
          <Send className="w-4 h-4" />
          {loading ? 'Submitting...' : 'Submit Private Enquiry'}
        </Button>
      </form>
    </div>
  )
}
