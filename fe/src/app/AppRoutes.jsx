import { lazy, Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'
import ModRoute from './ModRoute'
import AdminRoute from './AdminRoute'
import StudentLayout from '@/shared/layouts/StudentLayout'
import ModLayout from '@/shared/layouts/ModLayout'
import AdminLayout from '@/shared/layouts/AdminLayout'
import Spinner from '@/shared/components/Spinner'
import LandingPage from '@/features/landing/pages/LandingPage'
import CommunityPage from '@/features/community/pages/CommunityPage'
import SupportPage from '@/features/support/pages/SupportPage'

const SubscriptionPage = lazy(() => import('@/features/subscription/pages/SubscriptionPage'))
const PaymentCheckoutPage = lazy(() => import('@/features/payment/pages/PaymentCheckoutPage'))
const PaymentSuccessPage = lazy(() => import('@/features/payment/pages/PaymentSuccessPage'))
const ExamDetailPage = lazy(() => import('@/features/exam-detail/pages/ExamDetailPage'))

function RouteFallback() {
  return (
    <div className="route-fallback">
      <Spinner size="lg" />
    </div>
  )
}

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/community" element={<CommunityPage />} />
      <Route path="/support" element={<SupportPage />} />
      <Route path="/login" element={<div className="page"><h1>Đăng nhập</h1></div>} />
      <Route path="/register" element={<div className="page"><h1>Đăng ký</h1></div>} />
      <Route
        path="/pricing"
        element={
          <Suspense fallback={<RouteFallback />}>
            <SubscriptionPage />
          </Suspense>
        }
      />
      <Route
        path="/payment/checkout"
        element={
          <Suspense fallback={<RouteFallback />}>
            <PaymentCheckoutPage />
          </Suspense>
        }
      />
      <Route
        path="/payment/success"
        element={
          <Suspense fallback={<RouteFallback />}>
            <PaymentSuccessPage />
          </Suspense>
        }
      />
      <Route
        path="/exam/:examId"
        element={
          <Suspense fallback={<RouteFallback />}>
            <ExamDetailPage />
          </Suspense>
        }
      />

      <Route
        element={
          <PrivateRoute>
            <StudentLayout />
          </PrivateRoute>
        }
      >
        <Route path="/feed" element={<CommunityPage />} />
        <Route path="/exams" element={<div className="page"><h1>Đề thi</h1></div>} />
      </Route>

      <Route
        path="/mod"
        element={
          <ModRoute>
            <ModLayout />
          </ModRoute>
        }
      >
        <Route index element={<Navigate to="/mod/reports" replace />} />
        <Route path="reports" element={<div className="page"><h1>Báo cáo</h1></div>} />
      </Route>

      <Route
        path="/admin"
        element={
          <AdminRoute>
            <AdminLayout />
          </AdminRoute>
        }
      >
        <Route index element={<div className="page"><h1>Dashboard</h1></div>} />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
