import { ExclamationCircleIcon } from '@heroicons/react/20/solid'

export default function Input() {
  const isErrored = false
  const error =
    'border-red-300 pr-10 text-red-900 placeholder-red-300 focus:border-red-500 focus:outline-none focus:ring-red-500'
  return (
    <div>
      <label
        htmlFor="firstName"
        className="block text-sm font-medium text-gray-100"
      >
        First Name
      </label>
      <div className="relative mt-1 rounded-md shadow-sm">
        <input
          type="text"
          name="firstName"
          id="firstName"
          className="block w-full rounded-md  sm:text-sm"
          aria-invalid={isErrored}
          aria-describedby={isErrored ? 'error' : undefined}
        />
        {isErrored ? (
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
            <ExclamationCircleIcon
              className="h-5 w-5 text-red-500"
              aria-hidden="true"
            />
          </div>
        ) : null}
      </div>
      {isErrored ? (
        <p className="mt-2 text-sm text-red-600" id="error">
          Your password must be less than 4 characters.
        </p>
      ) : null}
    </div>
  )
}
