import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db } from '../lib/firebase'
import {
  QUERIES_COLLECTION,
  type ContactQueryInput,
} from '../types/query'

export async function submitContactQuery(data: ContactQueryInput): Promise<string> {
  const docRef = await addDoc(collection(db, QUERIES_COLLECTION), {
    name: data.name.trim(),
    phone: data.phone.trim(),
    city: data.city.trim(),
    lookingFor: data.lookingFor,
    status: 'new',
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  })

  return docRef.id
}
