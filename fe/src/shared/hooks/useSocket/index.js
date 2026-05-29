import { useContext } from 'react'
import { SocketContext } from '@/shared/context/SocketContext'

export default function useSocket() {
  return useContext(SocketContext)
}
