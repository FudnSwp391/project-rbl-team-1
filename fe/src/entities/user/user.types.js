/**
 * @typedef {Object} RegisterFormValues
 * @property {string} fullName
 * @property {string} email
 * @property {string} password
 * @property {string} confirmPassword
 * @property {string} studentId
 * @property {string} major
 * @property {boolean} acceptedTerms
 */

/**
 * @typedef {Object} RegisterPayload
 * @property {string} fullName
 * @property {string} email
 * @property {string} password
 * @property {string} [studentId]
 * @property {string} [major]
 */

/**
 * @typedef {Object} OtpFormValues
 * @property {string} otp
 */

/**
 * @typedef {'form' | 'otp' | 'success'} RegisterStep
 */

export {}
