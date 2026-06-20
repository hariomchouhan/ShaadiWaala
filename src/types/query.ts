export const QUERIES_COLLECTION = 'queries'

export type QueryStatus =
  | 'new'
  | 'contacted'
  | 'in_progress'
  | 'resolved'
  | 'closed'

export interface ContactQueryInput {
  name: string
  phone: string
  city: string
  age: string
}

export interface ContactQuery extends ContactQueryInput {
  status: QueryStatus
  createdAt: Date
  updatedAt: Date
}

export const QUERY_STATUS_LABELS: Record<QueryStatus, string> = {
  new: 'New',
  contacted: 'Contacted',
  in_progress: 'In Progress',
  resolved: 'Resolved',
  closed: 'Closed',
}
