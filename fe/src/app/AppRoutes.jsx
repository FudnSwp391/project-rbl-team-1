import { lazy, Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'
import ModRoute from './ModRoute'
import AdminRoute from './AdminRoute'
import ModLayout from '@/shared/layouts/ModLayout'
import AdminLayout from '@/shared/layouts/AdminLayout'
import Spinner from '@/shared/components/Spinner'
import LandingPage from '@/features/landing/pages/LandingPage'
import CommunityPage from '@/features/community/pages/CommunityPage'
import SupportPage from '@/features/support/pages/SupportPage'
import ExamLibraryPage from '@/features/exam/pages/ExamLibraryPage'
import SubjectExamListPage from '@/features/exam/pages/SubjectExamListPage'
import ExamPreviewPage from '@/features/exam/pages/ExamDetailPage'
import PracticeLibraryPage from '@/features/exam/pages/PracticeLibraryPage'
import DocumentLibraryPage from '@/features/document/pages/DocumentLibraryPage'
import LoginPage from '@/features/auth/pages/LoginPage'
import RegisterPage from '@/features/auth/pages/RegisterPage'
import ForgotPasswordPage from '@/features/auth/pages/ForgotPasswordPage'
import ForgotPasswordVerifyPage from '@/features/auth/pages/ForgotPasswordVerifyPage'
import ForgotPasswordOtpPage from '@/features/auth/pages/ForgotPasswordOtpPage'
import LoggedInCommunityPage from '@/features/community/pages/LoggedInCommunityPage'
import SearchResultsPage from '@/features/search/pages/SearchResultsPage'
import FindFriendsPage from '@/features/friends/pages/FindFriendsPage'
import MessagesPage from '@/features/messages/pages/MessagesPage'
import CreatePostPage from '@/features/community/pages/CreatePostPage'
import ProfilePage from '@/features/profile/pages/ProfilePage'
import FeedbackPage from '@/features/feedback/pages/FeedbackPage'

const SubscriptionPage = lazy(() => import('@/features/subscription/pages/SubscriptionPage'))
const PaymentCheckoutPage = lazy(() => import('@/features/payment/pages/PaymentCheckoutPage'))
const PaymentSuccessPage = lazy(() => import('@/features/payment/pages/PaymentSuccessPage'))
const TakeExamPage = lazy(() => import('@/features/exam-detail/pages/ExamDetailPage'))
const ExamResultPage = lazy(() => import('@/features/exam-result/pages/ExamResultPage'))
const ExamPracticePage = lazy(() => import('@/features/exam-practice/pages/ExamPracticePage'))

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
      <Route path="/feedback" element={<FeedbackPage />} />
      <Route path="/exams" element={<ExamLibraryPage />} />
      <Route path="/exams/:subjectCode/:examId" element={<ExamPreviewPage />} />
      <Route path="/exams/:subjectCode" element={<SubjectExamListPage />} />
      <Route path="/practice" element={<PracticeLibraryPage />} />
      <Route path="/documents" element={<DocumentLibraryPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      <Route path="/forgot-password/verify" element={<ForgotPasswordVerifyPage />} />
      <Route path="/forgot-password/otp" element={<ForgotPasswordOtpPage />} />
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
            <TakeExamPage />
          </Suspense>
        }
      />
      <Route
        path="/exam/:examId/results"
        element={
          <Suspense fallback={<RouteFallback />}>
            <ExamResultPage />
          </Suspense>
        }
      />
      <Route
        path="/exam/:examId/practice"
        element={
          <Suspense fallback={<RouteFallback />}>
            <ExamPracticePage />
          </Suspense>
        }
      />

      <Route
        path="/feed"
        element={
          <PrivateRoute>
            <LoggedInCommunityPage />
          </PrivateRoute>
        }
      />

      <Route
        path="/search"
        element={
          <PrivateRoute>
            <SearchResultsPage />
          </PrivateRoute>
        }
      />

      <Route
        path="/friends"
        element={
          <PrivateRoute>
            <FindFriendsPage />
          </PrivateRoute>
        }
      />

      <Route
        path="/messages"
        element={
          <PrivateRoute>
            <MessagesPage />
          </PrivateRoute>
        }
      />

      <Route
        path="/posts/create"
        element={
          <PrivateRoute>
            <CreatePostPage />
          </PrivateRoute>
        }
      />

      <Route
        path="/profile"
        element={
          <PrivateRoute>
            <ProfilePage />
          </PrivateRoute>
        }
      />

      <Route
        path="/profile/:username"
        element={
          <PrivateRoute>
            <ProfilePage />
          </PrivateRoute>
        }
      />

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
