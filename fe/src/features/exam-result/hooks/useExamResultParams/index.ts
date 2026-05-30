import { useParams } from 'react-router-dom'

export default function useExamResultParams() {
  const { examId } = useParams<{ examId: string }>()
  return { examId }
}
