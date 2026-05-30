import { useParams } from 'react-router-dom'

export default function useExamDetailParams() {
  const { examId } = useParams<{ examId: string }>()
  return { examId }
}
